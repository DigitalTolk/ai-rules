/* eslint-disable no-unexpected-multiline */
/* eslint-disable no-prototype-builtins */
import { useFetch } from "@vueuse/core";

export default function useQuery(endpoint, config = {}) {
  const { composeURL, cleanObject } = useUtils();

  config.method = config.method?.toUpperCase() || "GET";

  const url = composeURL(config.baseURL, endpoint, config.params);

  // Validate that method is one of the allowed methods
  const allowedMethods = ["get", "post", "put", "delete", "patch", "head"];

  if (!allowedMethods.includes(config.method.toLowerCase())) {
    throw new Error("Invalid method");
  }

  // Determine headers and body based on method
  const fetchOptions = {
    ...config,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded", //"application/json",
      ...config.headers,
    },
  };

  // Remove body from fetch options if method is 'GET' or 'HEAD'
  if (
    ["post", "put", "delete", "patch"].includes(config.method.toLowerCase())
  ) {
    if (fetchOptions.headers["Content-Type"] === "application/json") {
      fetchOptions.body = JSON.stringify(cleanObject(config.body));
    } else {
      fetchOptions.body = new URLSearchParams(
        cleanObject(config.body),
      ).toString();
    }
  } else {
    delete fetchOptions.body;
  }

  /*************************************************************************/
  /* 	API CALL
  /*************************************************************************/

  const {
    data,
    onFetchResponse,
    execute,
    error,
    onFetchError,
    onFetchFinally,
    ...rest
  } = useFetch(url, fetchOptions)[config.method.toLowerCase()]().json();

  /*************************************************************************/
  /* 	CALLBACKS
  /*************************************************************************/

  // Success Callback
  onFetchResponse((response) => {
    if (
      config?.onSuccess &&
      response?.status >= 200 &&
      response?.status < 300
    ) {
      config.onSuccess(data);
    } else {
      if (config.method === "GET") return;

      const itemAction =
        config.method === "PUT"
          ? "Updated"
          : config.method === "DELETED"
            ? "Removed"
            : "Created";

      config?.notification.success({
        content: `${config.resourceName || "Item"} ${itemAction}`,
        duration: 2500,
        keepAliveOnHover: true,
      });
    }
  });

  onFetchError((err) => {
    if (config.hasOwnProperty("onError")) {
      // Handle different error types
      if (err instanceof Error) {
        config.onError({
          message: err.message,
          stack: err.stack,
          statusCode: err.response?.status || null, // Try to get the status code if available
        });
      } else if (err?.response) {
        // If the error object has a response, extract the relevant details
        config.onError({
          message: err.response.data?.message || "An error occurred",
          stack: err.response.data?.stack || "No stack trace available",
          statusCode: err.response.status || null, // Extract the status code from the response
        });
      } else if (err?.value) {
        config.onError(err.value);
      } else {
        config.onError("An unknown error occurred");
      }
    } else {
      console.error("Error on API call...", err);

      let errorMessage = "An error occurred";

      if (err instanceof Error) {
        errorMessage = err.message;
      } else if (err?.value) {
        errorMessage = err?.value || "An error occurred";
      }

      config?.notification.error({
        content: errorMessage,
        duration: 2500,
        keepAliveOnHover: true,
      });
    }
  });

  // Finally Callback
  onFetchFinally(() => {
    if (config.hasOwnProperty("onSettled")) {
      config.onSettled();
    }
  });

  /*************************************************************************/
  /* Computed Data
  /*************************************************************************/

  const allItemsData = computed(() =>
    config.property ? data?.value?.data[config.property] : data?.value?.data,
  );
  const allItemsMeta = computed(() => data?.value?.meta?.pagination);
  const allItemsPagination = computed(() => {
    return {
      page: allItemsMeta.value?.current_page,
      pageSize: allItemsMeta.value?.per_page,
      pageCount: allItemsMeta.value?.total_pages,
      total: allItemsMeta.value?.total,
    };
  });

  // Return reactive state
  return {
    data: allItemsData,
    pagination: allItemsPagination,
    onFetchResponse,
    onFetchError,
    onFetchFinally,
    error,
    execute,
    ...rest,
  };
}
