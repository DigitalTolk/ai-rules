import BaseIcon from "../components/base/BaseIcon.vue";

export default {
  title: "Design System/Base Components/Icon",
  component: BaseIcon,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    default: "stars",
    size: 24,
    filled: false,
    materialType: "outlined",
    weight: 400,
  },
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
    },
    controls: { expanded: true },
  },
};

export const Icon = {
  render: (args) => ({
    components: { BaseIcon },
    setup() {
      return { args };
    },

    template: `
            <base-icon
               :size="args.size"
               :icon-color="args.iconColor"
               :filled="args.filled"
               :weight="args.weight"
               :grade="args.grade"
               :optical="args.optical"
               :materialType="args.materialType"
               :theme-overrides="args.themeOverrides"
            >
               <template v-if="args.default" #default>
                  {{args.default}}
               </template>
            </base-icon>
         `,
  }),

  decorators: [
    () => ({
      template: `<div style="width:100px;background:#fff;padding:10px;display:flex;justify-content:center;"><story/></div>`,
    }),
  ],

  args: {},

  argTypes: {
    materialType: {
      control: "select",
      options: ["outlined", "rounded", "sharp"],
      description: "Icon material type.",
    },
    default: {
      control: "select",
      options: icons(),
      description: "The content of the icon.",
    },

    color: {
      table: {
        disable: true,
      },
    },

    depth: {
      table: {
        disable: true,
      },
    },
    component: {
      table: {
        disable: true,
      },
    },
    isIconWrapper: {
      table: {
        disable: true,
      },
    },
    borderRadius: {
      table: {
        disable: true,
      },
    },
    isNative: {
      table: {
        disable: true,
      },
    },
    iconColor: {
      description: "Icon color.",
    },
    filled: {
      description: "Whether the icon is filled.",
    },
    grade: {
      description: "Icon grade.",
    },

    optical: {
      description: "Icon optical.",
    },
    size: {
      description:
        "Icon size (when the unit is not specified the default unit is `px`).",
    },
    weight: {
      description: "Icon weight.",
    },
    themeOverrides: {
      description:
        'Progress component style overrides. Check the <a href="https://www.naiveui.com/en-US/theme" target="_blank">Theme</a> for more options.',
    },

    iconName: {
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
