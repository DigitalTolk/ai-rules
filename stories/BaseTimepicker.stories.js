import { action } from "@storybook/addon-actions";
import BaseIcon from "../components/base/BaseIcon.vue";
import BaseButton from "../components/base/BaseButton.vue";
import BaseSpace from "../components/base/BaseSpace.vue";
import BaseTimePicker from "../components/base/BaseTimePicker.vue";

export default {
  title: "Design System/Base Components/Timepicker",
  component: BaseTimePicker,
  tags: ["autodocs"],

  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
    },
    controls: { expanded: true },
  },
};

export const Timepicker = {
  render: (args) => ({
    components: {
      BaseIcon,
      BaseButton,
      BaseSpace,
      BaseTimePicker,
    },
    setup() {
      const timePickerValue = ref("08:00");

      const setPanelActions = computed(
        () =>
          args.actions.length && args.actions.split(",").map((n) => n.trim()),
      );
      return {
        args,
        timePickerValue,
        setPanelActions,
      };
    },
    methods: {
      onBlur: action("blur"),
      onClear: action("clear"),
      onConfirm: action("confirm"),
      onFocus: action("focus"),
      onUpdateShow: action("update:show"),
      onUpdateValue: action("update:value"),
    },

    template: `
    <p>model-value: {{timePickerValue}}</p>
       <base-time-picker        
        v-model="timePickerValue"
        :combined-time-selection="args.combinedTimeSelection"        
        :placeholder="args.placeholder"
        :clearable="args.clearable"
        :size="args.size"
        :disabled="args.disabled"
        :show-checkmark="args.showCheckmark"
        :show="args.show"        
        :minutes-increment="args.minutesIncrement"

        :actions="setPanelActions"
        :format="args.format"
        :hours="args.hours"
        :minutes="args.minutes"
        :seconds="args.seconds"
        :status="args.status"
        :input-readonly="args.inputReadonly"
        :is-hour-disabled="args.isHourDisabled"
        :is-minute-disabled="args.isMinuteDisabled"
        :is-second-disabled="args.isSecondDisabled"         
        :placement="args.placement"
        :use-12-hours="args.use12Hours"
        :value-format="args.valueFormat"
        @blur="onBlur"
        @clear="onClear"
        @confirm="onConfirm"
        @focus="onFocus"
        @update:show="onUpdateShow"
        @update:value="onUpdateValue"
      >
        <template v-if="args.combinedTimeSelection" #prefix>
          <base-icon>{{args.prefix}}</base-icon>
        </template>
        <template v-if="args.combinedTimeSelection" #arrow>
          <base-icon>{{args.arrow}}</base-icon>
        </template>

        <template v-if="!args.combinedTimeSelection" #icon>
         <base-icon>{{args.icon}}</base-icon>
        </template>
      </base-time-picker>
      `,
  }),

  decorators: [
    () => ({
      template: `<div style="width:400px;background:#fff;padding:10px;"><story/></div>`,
    }),
  ],

  args: {
    actions: "",
    arrow: "flash_on",
    format: "HH:mm",
    hours: 1,
    size: "medium",
    showCheckmark: true,
    minutesIncrement: 15,
    prefix: "schedule",

    combinedTimeSelection: true,
  },

  argTypes: {
    actions: {
      control: "text",
      description:
        "Buttons available for the time picker panel include 'clear,' 'now,' and 'confirm.' List these options as comma-separated values. These are only available when 'combined-time-selection' is set to false.",
      table: {
        category: "Naive picker Props",
      },
    },
    clearable: {
      description: "Whether the value is clearable.",
      table: {
        category: "Shared Props",
      },
    },
    combinedTimeSelection: {
      control: "boolean",
      description:
        "Choose between a custom time interval and the regular time picker. Setting this to true displays a combined time selection panel, while setting it to false enables a custom time selection panel.",
      table: {
        category: "Shared Props",
      },
    },
    defaultValue: {
      table: {
        disable: true,
      },
    },
    defaultFormattedValue: {
      table: {
        disable: true,
      },
    },
    disabled: {
      table: {
        category: "Shared Props",
      },
    },
    icon: {
      control: "select",
      options: icons(),
      description:
        "The icon slot is available only when 'combined-time-selection' is set to false.",
      table: {
        category: "Naive picker slot",
      },
    },
    isHourDisabled: {
      table: {
        disable: true,
      },
    },
    isMinuteDisabled: {
      table: {
        disable: true,
      },
    },
    isSecondDisabled: {
      table: {
        disable: true,
      },
    },
    format: {
      control: "text",
      description:
        "Time format and its only applicable when 'combined-time-selection' is set to false. For possible formats see <a target='_blank' href='https://date-fns.org/v2.23.0/docs/format'>date-fns.org</a>",
      table: {
        category: "Naive picker Props",
      },
    },
    formattedValue: {
      table: {
        disable: true,
      },
    },
    hours: {
      control: "number",
      description:
        "Increment time by an hour, applicable only when 'combined-time-selection' is set to false.",
      table: {
        category: "Naive picker Props",
      },
    },
    inputReadonly: {
      description:
        "The Timepicker input box restricts user input, applicable only when 'combined-time-selection' is set to false.",
      table: {
        category: "Naive picker Props",
      },
    },
    minutes: {
      control: "number",
      description:
        "Increment time by minutes, applicable only when 'combined-time-selection' is set to false.",
      table: {
        category: "Naive picker Props",
      },
    },
    minutesIncrement: {
      description:
        "Increment the minutes interval by a specified number; this setting is applicable only when 'combined-time-selection' is set to true.",
      table: {
        category: "Custom picker Props",
      },
    },
    modelValue: {
      table: {
        disable: true,
      },
    },
    placeholder: {
      table: {
        category: "Shared Props",
      },
    },
    placement: {
      control: "inline-radio",
      description:
        "The placement of the time picker panel. Only applicable when 'combined-time-selection' is set to false.The placement of the time picker panel is configurable only when 'combined-time-selection' is set to false.",
      options: [
        "top-start",
        "top",
        "top-end",
        "right-start",
        "right",
        "right-end",
        "bottom-start",
        "bottom",
        "bottom-end",
        "left-start",
        "left",
        "left-end",
      ],
      table: {
        category: "Naive picker Props",
      },
    },
    seconds: {
      control: "number",
      description:
        "Increment time by seconds, applicable only when 'combined-time-selection' is set to false.",
      table: {
        category: "Naive picker Props",
      },
    },
    size: {
      control: "inline-radio",
      options: ["small", "medium", "large"],
      table: {
        category: "Shared Props",
      },
    },
    showCheckmark: {
      control: "boolean",
      description:
        'Display a checkmark icon when a time is selected, available only when "combined-time-selection" is set to true.',
      table: {
        category: "Custom picker Props",
      },
    },
    show: {
      description: "Whether to show/open the panel",
      table: {
        category: "Shared Props",
      },
    },
    showOnFocus: {
      table: {
        disable: true,
      },
    },
    status: {
      control: "inline-radio",
      options: ["warning", "error"],
      description:
        "Validation status is only available when 'combined-time-selection' is set to false.",
      table: {
        category: "Shared Props",
      },
    },
    timeZone: {
      table: {
        disable: true,
      },
    },
    to: {
      table: {
        disable: true,
      },
    },
    use12Hours: {
      description:
        "Display time in 12-hour format, applicable only when 'combined-time-selection' is set to false.",
      table: {
        category: "Naive picker Props",
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
    valueFormat: {
      table: {
        disable: true,
      },
    },
    themeOverrides: {
      table: {
        disable: true,
      },
    },
    //  dropdown timepicker slots
    prefix: {
      control: "select",
      options: icons(),
      description:
        "The prefix icon slot is available only when 'combined-time-selection' is set to true.",
      table: {
        category: "Custom picker slot",
      },
    },
    arrow: {
      control: "select",
      options: icons(),
      description:
        "The arrow icon slot is available only when 'combined-time-selection' is set to true.",
      table: {
        category: "Custom picker slot",
      },
    },
    nativeMethods: {
      table: {
        disable: true,
      },
    },
    select: {
      table: {
        disable: true,
      },
    },
    slotName: {
      table: {
        disable: true,
      },
    },
    "update:value": {
      table: {
        disable: true,
      },
    },
    "update:formatted-value": {
      table: {
        disable: true,
      },
    },
    "update:modelValue": {
      table: {
        disable: true,
      },
    },
    //  EVENTS
    blur: {
      control: false,
      description:
        "Emitted event when the input field loses focus, applicable only when 'combined-time-selection' is set to false.",
      table: {
        category: "Naive picker Events",
      },
    },
    clear: {
      control: false,
      description:
        "Emitted event when the input value is cleared, applicable only when 'combined-time-selection' is set to false.",
      table: {
        category: "Naive picker Events",
      },
    },
    confirm: {
      control: false,
      description:
        "Event emitted when the confirm button is clicked, applicable only when 'combined-time-selection' is set to false.",
      table: {
        category: "Naive picker Events",
      },
    },
    focus: {
      control: false,
      description:
        'Emitted event when the input field is focused, applicable only when "combined-time-selection" is set to false.',
      table: {
        category: "Naive picker Events",
      },
    },
    "update:show": {
      control: false,
      description:
        'Emitted event when the panel is shown or hidden, applicable only when "combined-time-selection" is set to false.',
      table: {
        category: "Naive picker Events",
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
    "flash_on",
    "schedule",
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
