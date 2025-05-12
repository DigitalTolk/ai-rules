import { action } from "@storybook/addon-actions";
import BaseCheckbox from "../components/base/BaseCheckbox.vue";

import BaseIcon from "../components/base/BaseIcon.vue";
import { computed } from "vue";

export default {
  title: "Design System/Base Components/Checkbox",
  component: BaseCheckbox,
  tags: ["autodocs"],
  argTypes: {
    modelValue: {
      table: {
        disable: true,
      },
    },
    checked: {
      table: {
        disable: true,
      },
    },
    defaultChecked: {
      table: {
        disable: true,
      },
    },

    value: {
      table: {
        disable: true,
      },
    },
    isVertical: {
      table: {
        disable: true,
      },
    },
  },

  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
    },
    controls: { expanded: true },
  },
};

export const Checkbox = {
  render: (args) => ({
    components: { BaseCheckbox, BaseIcon },
    setup() {
      const checkValue = ref(false);
      const iconColor = computed(() =>
        checkValue.value ? "rgb(8 201 99)" : "rgb(227 227 227)",
      );
      return { args, checkValue, iconColor };
    },
    methods: {
      onBlur: action("blur"),
      onFocus: action("focus"),
      onUpdate: action("update:checked"),
    },
    template: `
            <base-checkbox
               v-model="checkValue"
               :disabled="args.disabled"
               :label="args.label"
               :size="args.size"
               :focusable="args.focusable"
               :indeterminate="args.indeterminate"
               :theme-overrides="args.themeOverrides"
               @blur="onBlur"
               @focus="onFocus"
               @update:checked="onUpdate"
            >
               <template #default>
                  <span v-if="args.default">
                     {{args.default}}
                  </span>
                  <base-space v-else>
                     <base-icon :icon-color="iconColor" size="45">{{checkValue? 'toggle_on' : 'toggle_off'}}</base-icon>
                  </base-space>
               </template>
            </base-checkbox>
         `,
  }),

  decorators: [
    () => ({
      template: `<div style="width:250px;background:#fff;padding:10px;text-align:center;"><story/></div>`,
    }),
  ],

  args: {
    size: "medium",
  },

  argTypes: {
    disabled: {
      description: "Whether the checkbox is disabled.",
      table: {
        category: "checkbox props",
      },
    },
    focusable: {
      description: "Whether the checkbox gains focus after being checked.",
      table: {
        category: "checkbox props",
      },
    },
    indeterminate: {
      description: "Whether the checkbox can have a third indeterminate state.",
      table: {
        category: "checkbox props",
      },
    },
    label: {
      description: "Checkbox label.",
      table: {
        category: "checkbox props",
      },
    },
    size: {
      control: "inline-radio",
      options: ["small", "medium", "large"],
      descriptiion: "The size of the checkbox.",
      table: {
        category: "checkbox props",
      },
    },
    themeOverrides: {
      description:
        'Progress component style overrides. Check the <a href="https://www.naiveui.com/en-US/theme" target="_blank">Theme</a> for more options.',
      table: {
        category: "checkbox props",
      },
    },
    //  slots
    default: {
      control: "text",
      description: "Default content slots of the checkbox.",
      table: {
        category: "checkbox slots",
      },
    },
    //  checkbox events
    blur: {
      description: "Callback function triggered on `blur`.",
      table: {
        category: "checkbox events",
      },
    },
    focus: {
      description: "Callback function triggered on `focus`.",
      table: {
        category: "checkbox events",
      },
    },
    "update:checked": {
      description: "Callback function triggered on a checked status change.",
      table: {
        category: "checkbox events",
      },
    },

    "update:modelValue": {
      table: {
        disable: true,
      },
    },
  },
};
