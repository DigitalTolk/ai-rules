import BaseDatePicker from "../components/base/BaseDatePicker.vue";
import BaseIcon from "../components/base/BaseIcon.vue";
import { action } from "@storybook/addon-actions";
import { ref } from "vue";

export default {
  title: "Design System/Base Components/DatePicker",
  component: BaseDatePicker,
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

export const DatePicker = {
  render: (args) => ({
    components: { BaseDatePicker, BaseIcon },
    setup() {
      // DATA
      const dateValue = ref(null);

      const actionTitles = ref(dataParser(args.actions));
      const endPlaceholder = ref(args?.endPlaceholder || null);
      const startPlaceholder = ref(args?.startPlaceholder || null);

      // COMPUTED
      const typeActionTitles = computed(() => {
        const actionTypes = {
          date: `"Clear" or 'Now"`,
          datetime: `"Clear", "Now" or "Confirm"`,
          daterange: `"Clear" or "Confirm"`,
          datetimerange: `"Clear" or "Confirm"`,
          month: `"Clear", "Now" or "Confirm"`,
          monthrange: `"Clear" or "Confirm"`,
          quarter: `"Clear" or "Confirm"`,
          yearrange: `"Clear" or "Confirm"`,
          year: `"Clear" or "Now"`,
        };
        return actionTypes[args.type];
      });

      const handlePlaceholders = (placeholder) => {
        return [
          "daterange",
          "datetimerange",
          "monthrange",
          "quarterrange",
          "yearrange",
        ].includes(args.type)
          ? args[placeholder]
          : "";
      };

      // METHODS
      function dataParser(data) {
        if (!data) return null;
        return data.split(",").map((v) => v.trim());
      }

      // WATCHER
      watch(
        () => args.actions,
        (v) => {
          actionTitles.value = dataParser(v);
        },
        { immediate: true, deep: true },
      );

      watchEffect(() => {
        if (args.type) {
          endPlaceholder.value = handlePlaceholders("endPlaceholder");
          startPlaceholder.value = handlePlaceholders("startPlaceholder");
        }
      });

      return {
        args,
        dateValue,
        actionTitles,
        typeActionTitles,
        endPlaceholder,
        startPlaceholder,
      };
    },

    methods: {
      onUpdateFormattedValue: action("on-update:formatted-value"),
      onUpdateShow: action("update:show"),
      onConfirm: action("confirm"),
      onClear: action("clear"),
      onNextMonth: action("next:month"),
      onNextYear: action("next:year"),
      onPrevMonth: action("prev:month"),
      onPrevYear: action("prev:year"),
    },
    template: `
         <p v-if="args?.type">Available actions for '{{ args?.type }}': {{ typeActionTitles }}</p>
         
         <base-date-picker
				v-bind="datePickerBinding"
            :actions="actionTitles"
				:clearable="args.clearable"
            :close-on-select="args.closeOnSelect"
            :disabled="args.disabled"
            :end-placeholder="endPlaceholder"
            :first-day-of-week="args.firstDayOfWeek"
            :format="args.format"
            :input-readonly="args.inputReadonly"
            :month-format="args.monthFormat"
            :panel="args.panel"
            :placeholder="args.placeholder"
            :placement="args.placement"
            :show="args.show"
            :size="args.size"
            :status="args.status"
            :start-placeholder="startPlaceholder"
            :type="args.type"
            :separator="args.separator"
            :update-value-on-close="args.updateValueOnClose"
            :theme-overrides="args.themeOverrides"
            @update:show="onUpdateShow"
            @update:formatted-value='onUpdateFormattedValue'
            @confirm="onConfirm"
            @clear="onClear"
            @next:month="onNextMonth"
            @next:year="onNextYear"
            @prev:month="onPrevMonth"
            @prev:year="onPrevYear" 
			>
            <template v-if="args.prefix" #prefix>
					<base-icon>{{args.prefix}}</base-icon>
				</template>

            <template v-if="args.footer" #footer>
					{{args.footer}}
				</template>
            
            <template v-if="args['next-month']" #next-month>
					<base-icon>{{args['next-month']}}</base-icon>
				</template>

            <template v-if="args['next-year']" #next-year>
					<base-icon>
                  {{args['next-year']}}
               </base-icon>
				</template>

            <template v-if="args['prev-month']" #prev-month>
               <base-icon>
					   {{args['prev-month']}}
               </base-icon>   
				</template>

            <template v-if="args['prev-year']" #prev-year>
               <base-icon>
					   {{args['prev-year']}}
               </base-icon>
				</template>

            <template v-if="args.separator" #separator>
					{{args.separator}}
				</template>

			</base-date-picker>
         `,
  }),

  decorators: [
    () => ({
      template: `<div style="height:450px; margin"><story/></div>`,
    }),
  ],

  args: {
    actions: null,
    type: "date",
    updateValueOnClose: true,
  },

  argTypes: {
    actions: {
      control: "text",
      description:
        "Enter the action titles separated by commas. The available options depend on the selected `type`. Please refer above.",
    },
    bindCalendarMonths: {
      table: {
        disable: true,
      },
    },
    clearable: {
      description: "Whether the date picker is clearable.",
    },
    closeOnSelect: {
      description:
        "Whether to close the panel after the user has selected a time range.	Applicable for `DateRange, MonthRange, QuarterRange, YearRange`.",
    },
    defaultCalendarStartTime: {
      table: {
        disable: true,
      },
    },
    defaultCalendarEndTime: {
      table: {
        disable: true,
      },
    },
    disabled: {
      description: "Whether the date picker is disabled.",
    },
    endPlaceholder: {
      description:
        "Placeholder at end part of the input. Applicable for `DateRange, DateTimeRange, MonthRange, QuarterRange, YearRange`.",
    },
    startPlaceholder: {
      description:
        "The prompt information at the beginning of the input.  Applicable for `DateRange, DateTimeRange, MonthRange, QuarterRange, YearRange`.",
    },
    firstDayOfWeek: {
      description: "The first day of a week on calendar, 0 means Monday.",
    },
    inputReadonly: {
      description:
        "Set the readonly attribute of the input (avoids virtual keyboard on touch devices).",
    },
    panel: {
      description: "Whether to use date-picker as panel.",
    },

    format: {
      control: "text",
      description: "Format of the input. Default is `yyyy-MM-dd`.",
    },
    placeholder: {
      description: "Picker placeholder.",
    },
    placement: {
      control: "select",
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
      description: "Panel's placement.",
    },
    show: {
      description: "Whether to show panel.",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "Size of the date picker.",
    },
    type: {
      control: "select",
      options: [
        "date",
        "datetime",
        "daterange",
        "datetimerange",
        "month",
        "monthrange",
        "year",
        "yearrange",
        "quarter",
        "quarterrange",
        "week",
      ],
      description: "Type of the date picker.",
    },
    updateValueOnClose: {
      description: "Whether to update value on close.",
    },
    themeOverrides: {
      description:
        'Progress component style overrides. Check the <a href="https://www.naiveui.com/en-US/theme" target="_blank">Theme</a> for more options.',
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
    shortcuts: {
      table: {
        disable: true,
      },
    },
    status: {
      table: {
        disable: true,
      },
    },
    to: {
      table: {
        disable: true,
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
    isDateDisabled: {
      table: {
        disable: true,
      },
    },
    timePickerProps: {
      table: {
        disable: true,
      },
    },
    defaultTime: {
      table: { disable: true },
    },
    isTimeDisabled: {
      table: { disable: true },
    },

    // SLOTS
    //  "date-icon": {
    //    control: "select",
    //    options: icons(),
    //    description: "Date icon of the input box.",
    //    table: {
    //      category: "slots",
    //    },
    //  },
    footer: {
      control: "text",
      description: "Extra Footer.",
    },
    "next-month": {
      control: "select",
      options: icons(),
      description: "Next icon of the date panel.",
    },
    "next-year": {
      control: "select",
      options: icons(),
      description: "Fast next icon of the date panel.",
    },

    "prev-month": {
      control: "select",
      options: icons(),
      description: "Prev icon of the date panel.",
    },
    "prev-year": {
      control: "select",
      options: icons(),
      description: "Fast prev icon of the date panel.",
    },
    separator: {
      control: "text",
      description: "Separator of range picker.",
    },
    prefix: {
      control: "select",
      options: icons(),
      description: "Date icon of the input box.",
    },
    slotName: {
      table: {
        disable: true,
      },
    },

    nativeMethods: {
      table: {
        disable: true,
      },
    },

    //  Events
    blur: {
      description: "On blur callback.",
      table: {
        category: "events",
      },
    },
    focus: {
      description: "On focus callback.",
      table: {
        category: "events",
      },
    },
    clear: {
      description: "On clear callback.",
      table: {
        category: "events",
      },
    },
    confirm: {
      description: "On confirm callback.",
    },
    "update:show": {
      description: "Callback when panel shows & hides.",
    },
    "update:formatted-value": {
      description: "Date selected callback.",
    },
    "next:month": {
      description: "Callback when click next month button.",
      table: {
        category: "events",
      },
    },
    "next:year": {
      description: "Callback when click next year button.",
      table: {
        category: "events",
      },
    },
    "prev:month": {
      description: "Callback when click previous month button.",
      table: {
        category: "events",
      },
    },
    "prev:year": {
      description: "Callback when click previous year button.",
      table: {
        category: "events",
      },
    },
    "update:value": {
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
