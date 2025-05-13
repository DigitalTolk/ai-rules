import useToaster from "../composables/useToaster.js";
import BaseButton from "../components/base/BaseButton.vue";
import BaseSpace from "../components/base/BaseSpace.vue";
import BaseText from "../components/base/BaseText.vue";

import { computed } from "vue";

export default {
  title: "Design System/Base Components/Toaster",
  //   component: ToasterProvider,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
    },
    controls: { expanded: true },
  },
};

export const Toaster = {
  render: (args) => ({
    components: {
      BaseButton,
      BaseSpace,
      BaseText,
    },
    setup() {
      const { toaster } = useToaster({
        position: args.position,
        theme: args.theme,
        richColors: args.richColors,
        expand: args.expand,
        visibleToasts: args.visibleToasts,
        closeButton: args.closeButton,
      });

      const toasterType = computed(() => args.type);
      const opts = computed(() => {
        return {
          content: args.content,
          description: args.description,
          duration: args.duration,
          position: args.position,
          closeButton: args.closeButton,
          expand: args.expand,
          visibleToasts: args.visibleToasts,
          richColors: args.richColors,
          theme: args.theme,
        };
      });

      function showToast() {
        if (args.type === "default") {
          toaster(opts.value);
        } else {
          toaster[args.type](opts.value);
        }
      }

      function showSuccessPromise() {
        const promise = new Promise((resolve) => {
          setTimeout(() => resolve("Data loaded successfully"), 500);
        });

        toaster.promise(promise, {
          loading: "Loading data...",
          success: (data) => `Success: ${data}`,
          error: "An error occurred",
          ...opts.value,
        });
      }

      function showErrorPromise() {
        const promise = new Promise((_, reject) => {
          setTimeout(() => reject(new Error("Failed to load data")), 500);
        });

        toaster.promise(promise, {
          loading: "Loading data...",
          success: "Data loaded",
          error: (err) => `Error:${err}`,
          ...opts.value,
        });
      }

      return {
        args,
        opts,
        toasterType,
        showToast,

        showSuccessPromise,
        showErrorPromise,
      };
    },

    template: `
      <div class="toaster-demo">
         <base-space vertical justify="start" horizontal-align="start">
            
            <base-text type="title" size="xs" :weight="500">
               The Toaster system provides a way to display toast notifications in your application. It is implemented as a composable that can be used in any component.
            </base-text>

            <base-button @click="showToast" style="text-transform:capitalize">Toast {{args.type}}</base-button>
            <pre>
            // Import the useToaster composable
            const { toaster } = useToaster();

            // Show a simple success toast
            toaster[{{toasterType}}]({
               content: {{opts.content}},
               description: {{opts.description}},
               duration: {{opts.duration}},
               position: {{opts.position}},
               theme: {{opts.theme}},
               richColors: {{opts.richColors}},
               expand: {{opts.expand}},
               visibleToasts: {{opts.visibleToasts}},
               closeButton: {{opts.closeButton}},
            });

            </pre>
         
            <base-button @click="showSuccessPromise">Promise success</base-button>
            <pre>
               // Import the useToaster composable
               const { toaster } = useToaster();

               // Show a promise success toast
               const promise = new Promise((resolve) => {
                                    setTimeout(() => resolve("Data loaded successfully"), 500);
                                 });
               toaster.promise(promise, {
                  loading: "Loading...",
                  success: (data) => \`Success: \${data}\`,
                  error: (err) => \`Error: \${err.message}\`,
                  duration: {{opts.duration}},
                  position: {{opts.position}},
                  theme: {{opts.theme}},
                  richColors: {{opts.richColors}},
                  expand: {{opts.expand}},
                  visibleToasts: {{opts.visibleToasts}},
                  closeButton: {{opts.closeButton}},
               });               
            </pre>

            <base-button @click="showErrorPromise">Promise error</base-button>
            <pre>
               // Import the useToaster composable
               const { toaster } = useToaster();

               // Show a promise error toast
               const promise = new Promise((_, reject) => {
                                    setTimeout(() => reject(new Error("Failed to load data")), 500);
                                 });
               toaster.promise(promise, {
                  loading: "Loading...",
                  success: "Data loaded",
                  error: (err) => \`Error: \${err}\`,
                  duration: {{opts.duration}},
                  position: {{opts.position}},
                  theme: {{opts.theme}},
                  richColors: {{opts.richColors}},
                  expand: {{opts.expand}},
                  visibleToasts: {{opts.visibleToasts}},
                  closeButton: {{opts.closeButton}},
               });
            </pre>
        </base-space>
        
      </div>
    `,
  }),

  args: {
    type: "success",
    content: "Operation was successful!",
    description: "Your changes have been saved successfully.",
    duration: 3000,
    position: "top-right",
    theme: "light",
    richColors: true,
    expand: true,
    visibleToasts: 3,
    closeButton: true,
    //  promiseResult: "success",
    //  preset: "successfulSave",
  },

  argTypes: {
    type: {
      control: "select",
      options: ["default", "success", "error", "warning", "info", "loading"],
      description: "Type of toast notification.",
    },
    content: {
      control: "text",
      description: "Primary content message of the toast.",
    },
    description: {
      control: "text",
      description: "Secondary descriptive message of the toast.",
    },
    duration: {
      control: { type: "number", min: 1000, max: 10000, step: 500 },
      description:
        "Duration in milliseconds before the toast automatically dismisses.",
    },
    position: {
      control: "select",
      options: [
        "top-left",
        "top-center",
        "top-right",
        "bottom-left",
        "bottom-center",
        "bottom-right",
      ],
      description: "Position of the toast on the screen.",
    },
    theme: {
      control: "select",
      options: ["light", "dark", "system"],
      description: "Visual theme of the toast.",
    },
    richColors: {
      control: "boolean",
      description: "Whether to use rich colors for toast types.",
    },
    expand: {
      control: "boolean",
      description: "Whether toasts expand to fit content.",
    },
    visibleToasts: {
      control: { type: "number", min: 1, max: 10, step: 1 },
      description: "Maximum number of visible toasts at once.",
    },
    closeButton: {
      control: "boolean",
      description: "Whether to show a close button on toasts.",
    },
  },

  decorators: [
    () => ({
      template: `<div style="width: 880px; padding: 1rem;"><story/></div>`,
    }),
  ],

  parameters: {
    docs: {
      description: {
        component: "",
      },
    },
  },
};
