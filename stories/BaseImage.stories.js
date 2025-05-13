import BaseImage from "../components/base/BaseImage.vue";
import BaseIcon from "../components/base/BaseIcon.vue";
import { action } from "@storybook/addon-actions";

export default {
  title: "Design System/Base Components/Image",
  component: BaseImage,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
    },
    controls: { expanded: true },
  },
};

export const Image = {
  render: (args) => ({
    components: { BaseImage, BaseIcon },
    setup() {
      return { args };
    },
    methods: {
      onError: action("error"),
      onLoad: action("load"),
    },
    template: `
      <base-image
         :alt="args.alt"
         :fallback-src="args.fallbackSrc"
         :height="args.height"
         :img-props="args.imgProps"
         :lazy="args.lazy"
         :intersection-observer-options="args.intersectionObserverOptions"
         :object-fit="args.objectFit"
         :preview-src="args.previewSrc"
         :preview-disabled="args.previewDisabled"
         :previewed-img-props="args.previewedImgProps"
         :show-toolbar="args.showToolbar"
         :show-toolbar-tooltip="args.showToolbarTooltip"
         :src="args.src"
         :width="args.width"
         :theme-overrides="args.themeOverrides"
         @error="onError"
         @load="onLoad"
      >
         <template #placeholder>
            {{args.placeholder}}
         </template>
      </base-image>
  `,
  }),

  decorators: [
    () => ({
      template: `<div style="width:100%;text-align:center;"><story/></div>`,
    }),
  ],

  args: {
    src: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
    objectFit: "fit",
    previewSrc:
      "https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg",
  },

  argTypes: {
    alt: {
      control: "text",
      description: "Image alt information.",
    },
    fallbackSrc: {
      control: "text",
      description: "URL to show when the image fails to load.",
    },
    height: {
      control: "number",
      description: "The height of the image",
    },
    imgProps: {
      control: "object",
      description: "The props of the img element inside the component.",
      table: {
        defaultValue: {
          summary: "{data-id:'image-id'}",
        },
      },
    },
    lazy: {
      control: "boolean",
      description:
        "Load image after it enters viewport. When used alone, it will be assigned the property value of HTMLImageElement.loading. Alternatively, it can be used in conjunction with the intersection-observer-options configuration to achieve lazy loading.",
    },
    intersectionObserverOptions: {
      control: "object",
      description:
        "Intersection observer's config to be applied when `lazy=true`.",
      table: {
        disable: true,
      },
    },
    objectFit: {
      control: "inline-radio",
      options: ["fill", "contain", "cover", "none", "scale-down"],
      description: "Object-fit type of the image in the container.",
    },
    previewSrc: {
      control: "text",
      description: "Source of preview image.",
    },
    previewDisabled: {
      control: "boolean",
      description: "Whether clicking image preview is disabled.",
    },
    previewedImgProps: {
      control: "object",
      description: "The previewed image arguments",
      table: {
        disable: true,
      },
    },
    showToolbar: {
      control: "boolean",
      description: "Whether to show the bottom toolbar when the image enlarge.",
    },
    showToolbarTooltip: {
      control: "boolean",
      description: "Whether to show toolbar buttons' tooltip.",
    },
    src: {
      control: "text",
      description: "Image source.",
    },
    width: {
      control: "number",
      description: "Image width.",
    },
    themeOverrides: {
      control: "object",
      description:
        'Progress component style overrides. Check the <a href="https://www.naiveui.com/en-US/theme" target="_blank">Theme</a> for more options.',
    },

    //  Events
    error: {
      control: false,
      description: "Callback executed when the image fails to load.",
      table: {
        category: "events",
      },
    },
    load: {
      control: false,
      description: "Callback executed after the image is loaded.",
      table: {
        category: "events",
      },
    },

    //  slots
    placeholder: {
      control: "text",
      description: "Placeholder shown when image is not loaded.",
    },
  },
};
