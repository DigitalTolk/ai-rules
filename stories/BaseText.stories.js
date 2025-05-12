import BaseText from "../components/base/BaseText.vue";

export default {
  title: "Design System/Base Components/Text",
  component: BaseText,
  tags: ["autodocs"],

  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
    },
    controls: {
      expanded: true,
    },
  },
};

export const Text = {
  render: (args) => ({
    components: {
      BaseText,
    },
    setup() {
      return {
        args,
      };
    },

    template: `
      <base-text
         :color="args.color"
         :align="args.align"
         :size="args.size"         
         :tag="args.tag"
         :type="args.type"
         :weight="args.weight"
      >
         <template #default>
            {{args.default}}
         </template>
        </base-text>
      `,
  }),

  args: {
    default: "Base Text - Typography Component",
    tag: "div",
    size: "md",
    align: "left",
    weight: "400",
    type: "body",
  },

  argTypes: {
    align: {
      control: "inline-radio",
      options: ["left", "center", "right"],
      description: "The alignment of the text.",
    },
    color: {
      control: "color",
      description: "The color of the text.",
    },

    size: {
      control: "inline-radio",
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "The size of the text.",
    },
    type: {
      control: "inline-radio",
      options: ["body", "display", "headline", "label", "title"],
      description: "The type of the text.",
    },
    tag: {
      description: "The HTML tag to use for the component.",
    },
    weight: {
      description: "The weight of the text.",
    },
    //  slots
    default: {
      control: "text",
      description: "Acts as the primary text for the component.",
      table: {
        category: "slots",
      },
    },
  },
};
