import { action } from "@storybook/addon-actions";
import BaseIcon from "../components/base/BaseIcon.vue";
import BaseInputNumber from "../components/base/BaseInputNumber.vue";

export default {
  title: "Design System/Base Components/InputNumber",
  component: BaseInputNumber,
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

export const InputNumber = {
  render: (args) => ({
    components: {
      BaseIcon,
      BaseInputNumber,
    },
    setup() {
      const stepperValue = ref(4);
      return { args, stepperValue };
    },
    methods: {
      onClear: action("clear"),
      onBlur: action("blur"),
      onFocus: action("focus"),
    },

    template: `  
      <p>Model Value: {{ stepperValue }}</p>
      <base-input-number
         v-model="stepperValue"
         :autofocus="args.autofocus"
         :bordered="args.bordered"
         :buttonPlacement="args.buttonPlacement"
         :clearable="args.clearable"
         :defaultValue="args.defaultValue"
         :disabled="args.disabled"
         :format="args.format"
         :input-args="args.inputargs"
         :keyboard="args.keyboard"
         :loading="args.loading"
         :max="args.max"
         :min="args.min"
         :parse="args.parse"
         :placeholder="args.placeholder"
         :precision="args.precision"
         :readonly="args.readonly"
         :show-button="args.showButton"
         :size="args.size"
         :status="args.status"
         :step="args.step"
         :update-value-on-input="args.updateValueOnInput"
         :validator="args.validator"
         :theme-overrides="args.themeOverrides"
         @blur="onBlur"
         @clear="onClear"
         @focus="onFocus"
      >
         <template v-if="args['add-icon']" #add-icon>
            <base-icon>{{args['add-icon']}}</base-icon>
         </template>

         <template v-if="args['minus-icon']" #minus-icon>
            <base-icon>{{args['minus-icon']}}</base-icon>
         </template>

         <template v-if="args.prefix" #prefix>
            <base-icon>{{args.prefix}}</base-icon>
         </template>

         <template v-if="args.suffix" #suffix>
            <base-icon>{{args.suffix}}</base-icon>
         </template>
      </base-input-number>
   `,
  }),

  args: {
    size: "medium",
  },

  argTypes: {
    autofocus: {
      description: "Whether to autofocus.",
    },
    bordered: {
      description: "Whether to show a border.",
    },
    buttonPlacement: {
      control: "inline-radio",
      options: ["right", "both"],
      description: "Placement of add & minus button.",
    },
    clearable: {
      description: "Whether the input is clearable.",
    },
    defaultValue: {
      control: "number",
      description: "Default value when not manually set.	",
      table: {
        disable: true,
      },
    },
    disabled: {
      description: "Whether to disable the input.",
    },
    format: {
      description:
        "Method to format value. If it's set, `update-value-on-input` will be disabled.",
      table: {
        disable: true,
      },
    },
    formatter: {
      table: {
        disable: true,
      },
    },
    inputProps: {
      description:
        "The dom props of the input element inside the component. For avaiable attributes, see here. Warning：It won't override internal props with the same name (except type).",
      table: {
        disable: true,
      },
    },
    keyboard: {
      description:
        "Control the keyboard behavior. If you set corresponding to false, the keyboard behavior will be disabled.",
    },
    loading: {
      description:
        "Set loading state. If set (true/false), the element will always take up enough space for the loading indicator.",
    },
    max: {
      description: "The max value.",
    },
    min: {
      description: "The min value.",
    },
    modelValue: {
      table: {
        disable: true,
      },
    },
    parse: {
      description:
        "Method to parse input string. If it's set, `update-value-on-input` will be disabled.",
      table: {
        disable: true,
      },
    },
    placeholder: {
      description: "Placeholder",
    },
    precision: {
      description:
        "Precision of input value. If it's set, `update-value-on-input` will be disabled.",
    },
    readonly: {
      description: "Whether it's readonly.",
    },
    showButton: {
      description: "Whether to show increase/decrease buttons.	",
    },
    size: {
      control: "inline-radio",
      options: ["tiny", "small", "medium", "large"],
      description: "The size of input box.",
    },
    status: {
      control: "inline-radio",
      options: ["warning", "error"],
      description: "Validation status.",
    },
    step: {
      description:
        "The number which the current value is increased or decreased on key or button press. It can be an integer or a decimal.",
    },
    updateValueOnInput: {
      description:
        "Whether to change the value on input if the input value is valid.",
    },
    validator: {
      control: "boolean",
      description: "Setup custom validation.",
      table: {
        disable: true,
      },
    },
    themeOverrides: {
      description:
        'Progress component style overrides. Check the <a href="https://www.naiveui.com/en-US/theme" target="_blank">Theme</a> for more options.',
    },
    "add-icon": {
      control: "select",
      options: icons(),
      description: "icon of the add button.",
    },
    "minus-icon": {
      control: "select",
      options: icons(),
      description: "icon of the minus button.",
    },
    prefix: {
      control: "select",
      options: icons(),
      description: "Prefix content slot.",
    },
    suffix: {
      control: "select",
      options: icons(),
      description: "Suffix content slot.",
    },
    //  events
    "update:modelValue": {
      table: {
        disable: true,
      },
    },
    blur: {
      control: false,
      description: "Callback triggered when the input is blurred.",
    },
    clear: {
      control: false,
      description: "Callback triggered when the input is cleared.",
    },
    focus: {
      control: false,
      description: "Callback triggered when the input is focussed on.",
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
