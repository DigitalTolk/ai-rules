import { action } from "@storybook/addon-actions";
import BaseSwitch from "../components/base/BaseSwitch.vue";
import BaseIcon from "../components/base/BaseIcon.vue";

export default {
  title: "Design System/Base Components/Switch",
  component: BaseSwitch,
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

export const Switch = {
  render: (args) => ({
    components: { BaseSwitch, BaseIcon },
    setup() {
      const switchValue = ref(false);

      return { args, switchValue };
    },
    methods: {
      onUpdateValue: action("update:value"),
    },
    template: `
            <base-switch
               v-model="switchValue"
               :disabled="args.disabled"
               :label="args.label"
               :loading="args.loading"
               :round="args.round"
               :rubber-band="args.rubberBand"
               :size="args.size"
               :theme-overrides="args.themeOverrides"
               @update:value="onUpdateValue"
            >
               <template #label>
                  <span>{{args.label}}</span>
               </template>
               <template #checked>
                  <span>{{args.checked}}</span>
               </template>
               <template #checked-icon>
                  <base-icon size="18">{{args['checked-icon']}}</base-icon>
               </template>
               <template #icon>
                  <base-icon size="18">{{args['icon']}}</base-icon>
               </template>
               <template #unchecked>
                  <span>{{args['unchecked']}}</span>
               </template>
               <template #unchecked-icon>
                  <base-icon size="18">{{args['unchecked-icon']}}</base-icon>
               </template>
            </base-switch>
         `,
  }),
  decorators: [
    () => ({
      template: `<div style="width:300px;background:#fff;padding:10px;"><story/></div>`,
    }),
  ],

  args: {
    size: "medium",
    label: "Switch",
  },

  argTypes: {
    disabled: {
      description: "Whether the switch is disabled.",
    },
    default: {
      table: {
        disable: true,
      },
    },
    defaultValue: {
      table: {
        disable: true,
      },
    },
    loading: {
      description: "Whether to show loading state.",
    },

    modelValue: {
      table: {
        disable: true,
      },
    },
    checkedValue: {
      table: {
        disable: true,
      },
    },
    round: {
      description: "Whether the switch has rounded corners.",
    },
    rubberBand: {
      description: "Whether the switch button has rubber band effect.",
    },
    railStyle: {
      table: {
        disable: true,
      },
    },
    size: {
      control: "inline-radio",
      options: ["small", "medium", "large"],
      description: "The size of the switch.",
    },
    uncheckedValue: {
      table: {
        disable: true,
      },
    },
    themeOverrides: {
      description:
        'Progress component style overrides. Check the <a href="https://www.naiveui.com/en-US/theme" target="_blank">Theme</a> for more options.',
    },
    slotName: {
      table: {
        disable: true,
      },
    },
    "update:value": {
      description: "Callback when the component's value changes.",
      table: {
        category: "events",
      },
    },
    "update:modelValue": {
      table: {
        disable: true,
      },
    },
    //   slots
    checked: {
      control: "text",
      description: "Content when the switch is checked.",
      table: {
        category: "slots",
      },
    },
    "checked-icon": {
      control: "select",
      options: icons(),
      description: "Icon of switch button when checked.",
      table: {
        category: "slots",
      },
    },
    icon: {
      control: "select",
      options: icons(),
      description: "Icon of switch button.",
      table: {
        category: "slots",
      },
    },
    label: {
      description: "Label of the switch.",
      table: {
        category: "slots",
      },
    },
    unchecked: {
      control: "text",
      description: "Content when the switch is unchecked.",
      table: {
        category: "slots",
      },
    },
    "unchecked-icon": {
      control: "select",
      options: icons(),
      description: "Icon of switch button when unchecked.",
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
