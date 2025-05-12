import { action } from "@storybook/addon-actions";
import BaseCheckbox from "../components/base/BaseCheckbox.vue";
import BaseCheckboxGroup from "../components/base/BaseCheckboxGroup.vue";
import BaseIcon from "../components/base/BaseIcon.vue";

export default {
  title: "Design System/Base Components/CheckboxGroup",
  component: BaseCheckboxGroup,
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

// CHECKBOX GROUP
export const CheckboxGroup = {
  render: (args) => ({
    components: { BaseCheckboxGroup, BaseCheckbox, BaseIcon },
    setup() {
      const checkGroupValue = ref(["San Francisco"]);

      return { args, checkGroupValue };
    },
    methods: {
      onBlur: action("blur"),
      onFocus: action("focus"),
      onUpdateValue: action("update:value"),
    },
    template: `
            <base-checkbox-group
               v-model="checkGroupValue"
               :column-gap="args.columnGap"
               :disabled="args.disabled"
               :vertical="args.vertical"
               :row-gap="args.rowGap"
               @update:value="onUpdateValue"
               @blur="onBlur"
               @focus="onFocus"
            >
               <template #default="slotProps">
                  <base-checkbox value="Saint Helena" label="Saint Helena" />
                  <base-checkbox value="San Francisco" label="San Francisco" />
                  <base-checkbox value="Cordova" label="Cordova"/>
                  <base-checkbox value="Luxenburg" label="Luxenburg"/>
               </template>
            </base-checkbox-group>
         `,
  }),

  decorators: [
    () => ({
      template: `<div style="width:660px;background:#fff;padding:10px;"><story/></div>`,
    }),
  ],

  args: {},

  argTypes: {
    //   checkbox group slots
    default: {
      control: false,
      description: "Default slots for the checkboxes in the checkbox group.",
      table: {
        category: "checkbox slots",
      },
    },
    //   checkbox group events
    blur: {
      table: {
        disable: true,
      },
    },
    focus: {
      table: {
        disable: true,
      },
    },
    "update:value": {
      description: "Callback when the checkbox group's value changes.",
      table: {
        category: "checkbox group events",
      },
    },

    //   checkbox group props
    columnGap: {
      control: "text",
      description: "Vertical gap between checkboxes.",
      table: {
        category: "checkbox group props",
        defaultValue: { summary: "i.e `10px`" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Whether the checkbox group is disabled.",
      table: {
        category: "checkbox group props",
      },
    },
    max: {
      control: "number",
      description: "The maximum number of checkboxes that can be checked.",
      table: {
        category: "checkbox group props",
        disable: true,
      },
    },
    min: {
      control: "number",
      description: "The minimum number of checkboxes that can be checked.",
      table: {
        category: "checkbox group props",
        disable: true,
      },
    },
    rowGap: {
      control: "text",
      description: "Horizontal gap between checkboxes.",
      table: {
        category: "checkbox group props",
        defaultValue: { summary: "i.e `10px`" },
      },
    },
    vertical: {
      control: "boolean",
      description: "Whether the checkboxes are displayed vertically.",
      table: {
        category: "checkbox group props",
      },
    },

    // disable
    focusable: {
      table: {
        disable: true,
      },
    },
    indeterminate: {
      table: {
        disable: true,
      },
    },
    size: {
      table: {
        disable: true,
      },
    },
    label: {
      table: {
        disable: true,
      },
    },
    "update:modelValue": {
      table: {
        disable: true,
      },
    },
    "update:checked": {
      table: {
        disable: true,
      },
    },
  },
};
