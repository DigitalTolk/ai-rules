import BaseButton from "../components/base/BaseButton.vue";
import BaseIcon from "../components/base/BaseIcon.vue";

export default {
  title: "Design System/Base Components/Button",
  component: BaseButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
    },
    controls: { expanded: true },
  },
};

export const Button = {
  render: (args) => ({
    components: { BaseButton, BaseIcon },
    setup() {
      return { args };
    },
    template: `
      <BaseButton
         :label="args.label"
         :icon="args.icon"
         :size="args.size"
         :type="args.type"
         :disabled="args.disabled"
         :block="args.block"
         :ghost='args.ghost'
         :circle="args.circle"
         :bordered="args.bordered"
         :dashed="args.dashed"
         :loading="args.loading"
         :round="args.round"
         :text="args.text"
         :themeOverrides="args.themeOverrides"
      >
         <template  #suffix>
            <BaseIcon>{{args.suffix}}</BaseIcon>
         </template>

         <template v-if="args.default  && !args.circle" #default>
           {{args.default}}
         </template>

         <template v-if="args.prefix" #prefix>
            <BaseIcon>{{args.prefix}}</BaseIcon>
         </template>

      </BaseButton>
  `,
  }),
  decorators: [
    () => ({
      template: `<div style="width:800px;background:#fff;padding:10px; text-align:center;"><story/></div>`,
    }),
  ],
  args: {
    label: "Standard",
    size: undefined,
    default: undefined,
    type: "primary",
  },

  argTypes: {
    bordered: {
      description: "Whether the button shows the border.",
    },
    block: {
      description: "Whether the button is displayed as block.",
    },
    circle: {
      description: "Whether the button is round.",
    },
    dashed: {
      description: "Whether the button's border is a dashed line.",
    },
    disabled: {
      description: "Whether the button is disabled.",
    },
    focusable: {
      description: "Whether the button is focusable.",
    },
    ghost: {
      description: "Whether the button is ghost.",
    },
    label: {
      description: "The label of the button.",
    },
    loading: {
      description: "Whether the button shows the loading status.",
    },
    icon: {
      description: "Icon preceding the button label.",
      control: "select",
      options: icons(),
    },
    round: {
      description: "Whether the button shows rounded corners.",
    },
    size: {
      control: "inline-radio",
      options: ["tiny", "small", "medium", "large"],
      description: "The size of the button.",
    },
    text: {
      description: "Display as a text button; ensure `ghost` is set to false.",
    },
    textColor: {
      table: {
        disable: true,
      },
    },
    type: {
      control: "inline-radio",
      options: ["primary", "secondary", "default"],
      description: "The type of the button.",
    },
    themeOverrides: {
      description:
        'Progress component style overrides. Check the <a href="https://www.naiveui.com/en-US/theme" target="_blank">Theme</a> for more options.',
    },
    //   slots
    suffix: {
      control: "select",
      options: icons(),
      description: "Content for button suffix slots.",
      table: {
        category: "slots",
      },
    },
    prefix: {
      control: "select",
      options: icons(),
      description: "Content for button prefix slots.",
      table: {
        category: "slots",
      },
    },
    default: {
      control: "text",
      description: "The default content of the button.",
      table: {
        category: "slots",
      },
    },
    attrType: {
      table: {
        disable: true,
      },
    },

    keyboard: {
      table: {
        disable: true,
      },
    },
    group: {
      table: {
        disable: true,
      },
    },
    tag: {
      table: {
        disable: true,
      },
    },
    vertical: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    docs: {
      source: {
        code: `<BaseButton
         :label="args.label"
         :icon="args.icon"
         :size="args.size"
         :type="args.type"
         :disabled="args.disabled"
         :block="args.block"
         :ghost='args.ghost'
         :circle="args.circle"
         :bordered="args.bordered"
         :dashed="args.dashed"
         :loading="args.loading"
         :round="args.round"
         :text="args.text"
         :themeOverrides="args.themeOverrides"
      >
         <template  #suffix>
            <BaseIcon>{{args.suffix}}</BaseIcon>
         </template>

         <template v-if="args.default  && !args.circle" #default>
           {{args.default}}
         </template>

         <template v-if="args.prefix" #prefix>
            <BaseIcon>{{args.prefix}}</BaseIcon>
         </template>

      </BaseButton>`,
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
