import { action } from "@storybook/addon-actions";
import BaseIcon from "../components/base/BaseIcon.vue";
import BaseRate from "../components/base/BaseRate.vue";

export default {
  title: "Design System/Base Components/Rate",
  component: BaseRate,
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

export const Rate = {
  render: (args) => ({
    components: {
      BaseIcon,
      BaseRate,
    },
    setup() {
      const rateValue = ref(3);
      return { args, rateValue };
    },
    methods: {
      onClear: action("clear"),
      onUpdateValue: action("update"),
    },

    template: `  
      <p>Model Value: {{ rateValue }}</p>
      <base-rate
         v-model="rateValue"
         :allow-half="args.allowHalf"
         :clearable="args.clearable"
         :color="args.color"
         :count="args.count"
         :default-value="args.defaultValue"
         :readonly="args.readonly"
         :size="args.size"
         :theme-overrides="args.themeOverrides"
         @clear="onClear"
         @update="onUpdateValue"       
        >
         <template v-if="args.icon" #default>
            <base-icon>{{args.icon}}</base-icon>
         </template>
        </base-rate>
   `,
  }),

  args: {
    count: 5,
    size: "medium",
  },

  argTypes: {
    allowHalf: {
      description: "Allow activating half of the icon.",
    },
    clearable: {
      description:
        "Whether the rate is clearable. Value will be set to null if you click on current value's corresponding icon.",
    },
    color: {
      description:
        "Activated icon color. This supports the formats: #FFF, #FFFFFF, yellow, rgb(0, 0, 0).",
    },
    count: {
      description: "Number of icons (max rating).",
    },
    defaultValue: {
      control: "number",
      description:
        "Default value of activated icons. Before 2.33.0 default value is null.",
      table: {
        disable: true,
      },
    },
    modelValue: {
      table: {
        disable: true,
      },
    },
    readonly: {
      description: "Readonly state.",
    },
    size: {
      control: "inline-radio",
      options: ["small", "medium", "large"],
      description: "Icon size.",
    },
    icon: {
      control: "select",
      options: icons(),
      description: "The icon of the rating.",
      table: {
        category: "props",
      },
    },
    themeOverrides: {
      description:
        'Progress component style overrides. Check the <a href="https://www.naiveui.com/en-US/theme" target="_blank">Theme</a> for more options.',
    },
    value: {
      table: {
        disable: true,
      },
    },
    //  events
    "update:modelValue": {
      table: {
        disable: true,
      },
    },
    clear: {
      control: false,
      description: "Callback on value is cleared.",
    },
    update: {
      control: false,
      description: "Callback on the value (rating) is changed.",
    },
    slotData: {
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
