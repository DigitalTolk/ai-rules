import BaseIcon from "../components/base/BaseIcon.vue";
import BaseButton from "../components/base/BaseButton.vue";
import BaseSpace from "../components/base/BaseSpace.vue";

export default {
  title: "Design System/Base Components/Space",
  component: BaseSpace,
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

export const Space = {
  render: (args) => ({
    components: {
      BaseIcon,
      BaseButton,
      BaseSpace,
    },
    setup() {
      return { args };
    },

    template: `  
      <div>
         <base-space
            :align-items="args.alignItems"
            :inline="args.inline"
            :wrap-item="args.wrapItem"
            :item-class="args.itemClass"
            :item-style="args.itemStyle"
            :horizontal-align="args.horizontalAlign"
            :justify="args.justify"
            :size="args.size"
            :vertical="args.vertical"
            :wrap="args.wrap"
            :theme-overrides="args.themeOverrides"
         >
            <template #default>
               <base-button>Oops!</base-button>
               <base-button>Oops!</base-button>
               <base-button>Oops!</base-button>
            </template>
         </base-space>
      </div>
   `,
  }),

  decorators: [
    () => ({
      template: `<div style="width:800px;background:#fff;padding:10px;"><story/></div>`,
    }),
  ],

  args: {
    size: "medium",
  },

  argTypes: {
    align: {
      control: "inline-radio",
      options: ["start", "center", "end", "baseline", "stretch"],
      description: "Vertical arrangement.",
      table: {
        disable: true,
      },
    },
    alignItems: {
      control: "inline-radio",
      options: ["start", "center", "end"],
      description: "Vertical arrangement.",
    },
    inline: {
      description: "Is it an inline element.",
    },
    wrapItem: {
      description:
        "Whether a container exists to wrap the child elements. false value will only work in browsers that supports flex gap.",
    },
    itemClass: {
      description: "Node class, valid when wrap-item is true",
    },
    itemStyle: {
      description: "Node style, valid when wrap-item is true",
    },
    horizontalAlign: {
      description: "Horizontal alignment.",
      control: "inline-radio",
      options: ["flex-start", "flex-end", "center", "stretch", "baseline"],
    },
    justify: {
      control: "inline-radio",
      options: [
        "start",
        "center",
        "end",
        "space-between",
        "space-around",
        "space-evenly",
      ],
      description: "Horizontal arrangement.",
    },
    reverse: {
      control: "boolean",
      description: "Whether to reverse inner items.",
      table: {
        category: "props",
      },
    },
    size: {
      control: "inline-radio",
      options: ["small", "medium", "large"],
      description:
        "When it's a number, it will be used as vertical and horizontal gap, or it is `[horizontalGap, verticalGap]`.",
      table: {
        defaultValue: `'small' | 'medium' | 'large' | number | [number, number]`,
      },
    },
    vertical: {
      description: "Whether to lay out vertically.",
    },

    wrap: {
      description: "Whether to exceed the line break.",
    },

    themeOverrides: {
      description:
        'Progress component style overrides. Check the <a href="https://www.naiveui.com/en-US/theme" target="_blank">Theme</a> for more options.',
    },
    //  slots
    default: {
      control: false,
      description: "Default slot spacing content.",
      table: {
        category: "slots",
      },
    },
  },
};
