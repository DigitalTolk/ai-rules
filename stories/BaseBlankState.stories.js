import BaseIcon from "../components/base/BaseIcon.vue";
import BaseBlankState from "../components/base/BaseBlankState.vue";

export default {
  title: "Design System/Base Components/BlankState",
  component: BaseBlankState,
  tags: ["autodocs"],

  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
    },
    controls: { expanded: true },
  },
};

export const BlankState = {
  render: (args) => ({
    components: {
      BaseIcon,
      BaseBlankState,
    },
    setup() {
      return { args };
    },

    template: `  
      <base-blank-state
         :boxed="args.boxed"
         :description="args.description"
         :show-description="args.showDescription"
         :show-icon="args.showIcon"
         :size="args.size"
         :theme-overrides="args.themeOverrides"
      >
          <template v-if="args.icon" #icon>
            <base-icon>{{args.icon}}</base-icon>
         </template>
      </base-blank-state>
   `,
  }),

  decorators: [
    () => ({
      template: `<div style="width:500px"><story/></div>`,
    }),
  ],

  args: {
    boxed: true,
  },

  argTypes: {
    boxed: {
      description: "Whether to show border.",
    },
    description: {
      control: "text",
      description: "Description of the empty.",
      table: {
        category: "props",
        //   disable: true,
      },
    },
    showDescription: {
      control: "boolean",
      description: "Whether to show description of empty.",
      table: {
        category: "props",
      },
    },
    showIcon: {
      control: "boolean",
      description: "Whether to show icon of empty.",
      table: {
        category: "props",
      },
    },
    size: {
      control: "inline-radio",
      options: ["small", "medium", "large", "huge"],
      description: "Size of the empty.",
      table: {
        category: "props",
      },
    },
    themeOverrides: {
      description:
        'Progress component style overrides. Check the <a href="https://www.naiveui.com/en-US/theme" target="_blank">Theme</a> for more options.',
      table: {
        category: "props",
      },
    },

    // slots
    default: {
      control: "text",
      description: "Default slot content.",
      table: {
        category: "slots",
        disable: true,
      },
    },
    extra: {
      control: "text",
      description: "Extra slot content.",
      table: {
        category: "slots",
      },
    },
    icon: {
      control: "select",
      options: icons(),
      description: "Icon slot content.",
      table: {
        category: "slots",
      },
    },
    slotName: {
      table: {
        disable: true,
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
    "link",
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
