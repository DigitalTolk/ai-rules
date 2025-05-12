import BaseImage from "../components/base/BaseImage.vue";
import BaseImageGroup from "../components/base/BaseImageGroup.vue";
import BaseSpace from "../components/base/BaseSpace.vue";
import { action } from "@storybook/addon-actions";

export default {
  title: "Design System/Base Components/ImageGroup",
  component: BaseImageGroup,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
    },
    controls: { expanded: true },
  },
};

export const ImageGroup = {
  render: (args) => ({
    components: { BaseImage, BaseImageGroup, BaseSpace },
    setup() {
      return { args };
    },
    methods: {
      onPreviewPrev: action("preview-prev"),
      onPreviewNext: action("preview-next"),
    },
    template: `
      <base-image-group
         :show-toolbar="args.showToolbar"
         :show-toolbar-tooltip="args.showToolbarTooltip"
         :theme-overrides="args.themeOverrides"
         @preview-prev="onPreviewPrev"
         @preview-next="onPreviewNext"
      >
         <template #default>
            <base-space>
               <base-image
                  width="70"
                  src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
               />
               <base-image
                  width="70"
                  src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
               />
            </base-space>
        </template>
      </base-image-group>
  `,
  }),

  decorators: [
    () => ({
      template: `<div style="width:300px;background:#fff;padding:10px;display:flex;justify-content:center;"><story/></div>`,
    }),
  ],

  args: {},

  argTypes: {
    showToolbar: {
      description: "Whether to show the bottom toolbar when the image enlarge.",
    },
    showToolbarTooltip: {
      description: "Whether to show toolbar buttons' tooltip.",
    },

    //  events
    "preview-prev": {
      control: false,
      description: "Click the callback from the previous slide.",
    },

    "preview-next": {
      control: false,
      description: "Click the callback on the next slide.",
    },
    //  slots
    default: {
      description: "The default content of the image group.",
      control: false,
    },
  },
};
