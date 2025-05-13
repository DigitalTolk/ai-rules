import BaseIcon from "../components/base/BaseIcon.vue";
import BaseSpin from "../components/base/BaseSpin.vue";

export default {
  title: "Design System/Base Components/Spin",
  component: BaseSpin,
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

export const Spin = {
  render: (args) => ({
    components: {
      BaseIcon,
      BaseSpin,
    },
    setup() {
      return { args };
    },

    template: `  
      <base-spin
         :content-class="args.contentClass"
         :content-style="args.contentStyle"
         :description="args.description"
         :rotate="args.rotate"
         :size="args.size"
         :show="args.show"
         :stroke-width="args.strokeWidth"
         :stroke="args.stroke"
         :delay="args.delay"
      >
         <template #icon>
            <base-icon :icon-color="args.stroke" :size="args.size">{{args.icon}}</base-icon>
         </template>
         <template #description>
            <span>{{args.description}}</span>
         </template>
      </base-spin>
   `,
  }),

  decorators: [
    () => ({
      template: `<div style="height:180px;display:flex;"><story/></div>`,
    }),
  ],

  args: {
    icon: "progress_activity",
    size: 40,
  },

  argTypes: {
    contentClass: {
      control: "text",
      description: "Content Class of the spin.",
    },
    contentStyle: {
      control: "object",
      description: "Content style of the spin.",
      table: {
        category: "props",
      },
    },
    description: {
      control: "text",
      description: "Description of the spin.",
    },
    rotate: {
      control: "boolean",
      description:
        "Specify whether icon rotates, only working for custom icon.",
    },
    size: {
      control: "number",
      description: "Size of the spin.",
    },
    show: {
      control: "boolean",
      description:
        "Specify whether spin is active when spin has content inside. It won't work if you just use spin itself.",
    },
    stroke: {
      control: "text",
      description: "Color of the spin.",
    },
    delay: {
      control: "number",
      description:
        "Specifies a delay in milliseconds for loading state (prevent flush).",
    },

    //  slots
    default: {
      control: false,
      description: "If set, spin will wrap the content.",
      table: {
        category: "slots",
      },
    },
    icon: {
      control: "select",
      options: icons(),
      description: "Customize the spin icon.",
      table: {
        category: "slots",
      },
    },
    "description-slots": {
      control: "text",
      description: "Description of the spin.",
      table: {
        category: "slots",
      },
    },
  },
};

function icons() {
  return [
    null,
    "arrow_forward",
    "arrow_back",
    "arrow_right_alt",
    "arrow_left_alt",
    "star",
    "person",
    "settings",
    "home",
    "search",
    "add",
    "delete",
    "edit",
    "close",
    "menu",
    "more",
    "refresh",
    "save",
    "send",
    "undo",
    "redo",
    "favorite",
    "lock",
    "lock_open",
    "lock",
  ];
}
