import { action } from "@storybook/addon-actions";
import BaseIcon from "../components/base/BaseIcon.vue";
import BaseUpload from "../components/base/BaseUpload.vue";
import BaseButton from "../components/base/BaseButton.vue";

export default {
  title: "Design System/Base Components/Upload",
  component: BaseUpload,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
    },
    controls: { expanded: true },
  },
};

export const Upload = {
  render: (args) => ({
    components: {
      BaseIcon,
      BaseUpload,
      BaseButton,
    },
    setup() {
      const fileList = ref([
        {
          id: "b",
          name: "file.doc",
          status: "finished",
          type: "text/plain",
        },
      ]);
      return { args, fileList };
    },

    methods: {
      onChange: action("change"),
      onError: action("error"),
      onFinish: action("finish"),
      onBeforeUpload: action("before-upload"),
      onDownload: action("download"),
      onPreview: action("preview"),
      onRemove: action("remove"),
      onClear: action("clear"),
      onOpenOpenFileDialog: action("openOpenFileDialog"),
      onSubmit: action("submit"),
    },

    template: `  
      <base-upload
         v-model:file-list="fileList"
         :abstract="args.abstract"
         :accept="args.accept"
         :action="args.action"
         :create-thumbnail-url="args.createThumbnailUrl"
         :data="args.data"
         :default-file-list="args.defaultFileList"
         :default-upload="args.defaultUpload"
         :directory="args.directory"
         :directory-dnd="args.directoryDnd"
         :disabled="args.disabled"
         :drag="args.drag"
         :file-list="args.fileList"
         :file-list-class="args.fileListClass"
         :file-list-style="args.fileListStyle"
         :headers="args.headers"
         :input-props="args.inputProps"
         :image-group-props="args.imageGroupProps"
         :is-error-state="args.isErrorState"
         :list-type="args.listType"
         :max="args.max"
         :method="args.method"
         :multiple="args.multiple"
         :name="args.name"
         :render-icon="args.renderIcon"
         :response-type="args.responseType"
         :should-use-thumbnail-url="args.shouldUseThumbnailUrl"
         :show-cancel-button="args.showCancelButton"
         :show-download-button="args.showDownloadButton"
         :show-file-list="args.showFileList"
         :show-remove-button="args.showRemoveButton"
         :show-retry-button="args.showRetryButton"
         :show-trigger="args.showTrigger"
         :size="args.size"
         :trigger-class="args.triggerClass"
         :trigger-style="args.triggerStyle"
         :with-credentials="args.withCredentials"
         :theme-overrides="args.themeOverrides"

         @change="onChange"
         @error="onError"
         @finish="onFinish"
         @before-upload="onBeforeUpload"
         @download="onDownload"
         @preview="onPreview"
         @remove="onRemove"
         @clear="onClear"
         @openOpenFileDialog="onOpenOpenFileDialog"
         @submit="onSubmit"
      >
      <template v-if="args.default" #default>
         {{args.default}}
      </template>
      </base-upload>
   `,
  }),

  //   decorators: [
  //     () => ({
  //       template: `<div style="width:500px"><story/></div>`,
  //     }),
  //   ],

  args: {
    size: "medium",
    listType: "text",
  },

  argTypes: {
    abstract: {
      description:
        "Whether or not DOM wrapping does not exist. Not supported for image-card type.",
    },
    accept: {
      control: "text",
      description:
        "The accept type of upload. See <a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept' targer='_blank'>accept</a>.",
    },
    action: {
      control: "text",
      description: "The URL to submit data to.",
    },
    createThumbnailUrl: {
      control: "text",
      description:
        "Customize file thumbnails. If `undefined` is returned, the file would use default thumbnail display logic.",
    },
    customRequest: {
      table: {
        disable: true,
      },
    },

    data: {
      description: "The additional fileds data of HTTP request's form data.",
    },
    defaultFileList: {
      description: "The default file list in uncontrolled manner.",
    },
    defaultUpload: {
      description: "If file uploaded immediately after file is selected.",
    },
    directory: {
      description:
        "Whether to allow directory upload. (In open file dialog only directory can be selected)",
    },
    directoryDnd: {
      description:
        "Whether to allow directory drag and drop. (If it's not set, it will follow `directory` prop by default.)",
    },
    disabled: {
      description: "Whether to disable the upload.",
    },
    fileListClass: {
      control: "text",
      description: "The class of file list area",
    },
    fileListStyle: {
      description: "The style of file list area",
    },
    fileList: {
      description:
        "The file list of component. If set, the component will work in controlled manner.",
    },
    headers: {
      description: "The additional HTTP Headers of request.",
    },

    imageGroupProps: {
      description:
        "Props of n-image inside upload. See <a href='https://www.naiveui.com/en-US/light/components/image#ImageGroup-Props' target='_blank'>ImageGroup Props.</a>",
    },

    isErrorState: {
      description: "Check if response is error state.",
    },
    listType: {
      control: "inline-radio",
      options: ["text", "image"],
      description:
        "Built-in styles for file lists, `text`, `image` and `image-card`.",
    },
    max: {
      description: "Uploaded files limit.",
    },
    method: {
      control: "text",
      description: "The HTTP request method.",
    },
    multiple: {
      description: "Allow multiple files to be selected.	",
    },
    name: {
      control: "text",
      description:
        "The field name for the file(s) in the HTTP request's form data.",
    },
    renderIcon: {
      table: {
        disable: true,
      },
    },
    responseType: {
      control: "inline-radio",
      options: ["", "arraybuffer", "blob", "document", "json", "text"],
      description: "Response type of XMLHttpRequest used by n-upload",
    },
    shouldUseThumbnailUrl: {
      table: {
        disable: true,
      },
      description:
        "A function that determines whether to show thumbnail for the file. It only works when `list-type='image'` or `list-type='image-card'`.",
    },
    showCancelButton: {
      description:
        "Show a cancel button (while uploading). Use the `on-remove` callback for this event.",
    },
    showDownloadButton: {
      description: "Show a download button (after upload is finished).",
    },
    showFileList: {
      description: "Show file list.",
    },
    showPreviewButton: {
      table: {
        disable: true,
      },
      description:
        "Show a preview button (when `list-type` is `image-card`). Use the `on-preview` callback for this event.",
    },
    showRemoveButton: {
      description:
        "Show a remove button (after upload completed). Use the `on-remove` callback for this event",
    },
    showRetryButton: {
      description: "Show a retry button (for a failed upload).",
    },
    showTrigger: {
      description: "Show upload trigger.",
    },
    triggerClass: {
      control: "text",
      description: "Class of trigger area.",
    },
    triggerStyle: {
      description: "Style of trigger area.",
    },
    withCredentials: {
      description: "Any credentials to be sent with the request (e.g. cookie).",
    },

    size: {
      control: "inline-radio",
      options: ["small", "medium", "large"],
      description: "Upload container size",
    },
    themeOverrides: {
      description:
        'Progress component style overrides. Check the <a href="https://www.naiveui.com/en-US/theme" target="_blank">Theme</a> for more options.',
    },

    //  slots
    default: {
      control: "text",
      description: "Default content for the upload component.",
    },

    //  events
    change: {
      description: "Uploaded file(s) status change callback.",
      table: {
        category: "Events",
      },
    },
    error: {
      description: "Upload failed callback.",
      table: {
        category: "Events",
      },
    },
    finish: {
      description:
        "Upload finished callback. You can intercept and even modify the uploaded UploadFileInfo. Note: file will be null in next event-loop",
      table: {
        category: "Events",
      },
    },
    "before:upload": {
      description:
        "Upload ready to start callback. Returning false, a promise resolved with false, or a rejected promise will cancel the upload.",
      table: {
        category: "Events",
      },
    },
    download: {
      description:
        "Callback for clicking download buttons. Returning false, Promise resolve false, Promise rejected will cancel the download.",
      table: {
        category: "Events",
      },
    },
    preview: {
      description: "Callback for clicking file links or preview buttons.",
      table: {
        category: "Events",
      },
    },
    remove: {
      description:
        "File removed callback. Returning false, a promise resolved with false, or a rejected promise will cancel this removal.",
      table: {
        category: "Events",
      },
    },
    clear: {
      description: "Triggered when the file list is cleared.",
      table: {
        category: "Events",
      },
    },
    openOpenFileDialog: {
      description: "Open the file dialog window.",
      table: {
        category: "Events",
      },
    },
    "update:file-list": {
      description: "Callback function triggered on file-list changes.",
      table: {
        disable: true,
        category: "Events",
      },
    },
    submit: {
      description: "Submit all files with pending status.",
      table: {
        category: "Events",
      },
    },
  },
};
