import { action } from "@storybook/addon-actions";
import BaseRadio from "../components/base/BaseRadio.vue";
import BaseRadioGroup from "../components/base/BaseRadioGroup.vue";

export default {
  title: "Design System/Base Components/RadioGroup",
  component: BaseRadioGroup,
  tags: ["autodocs"],

  parameters: {
    layout: "centered",
    controls: { expanded: true },
    backgrounds: {
      default: "light",
    },
  },
};

export const RadioGroup = {
  render: (args) => ({
    components: { BaseRadio, BaseRadioGroup },
    setup() {
      const groupRadioValue = ref("small");
      return {
        args,
        groupRadioValue,
      };
    },
    methods: {
      onUpdate: action("update"),
    },
    template: `
    
         <base-radio-group
				v-model="groupRadioValue"
            :as-radio="args.asRadio"
            :disabled="args.disabled"
            :group-width="args.groupWidth"
            :name="args.name"
            :row-gap="args.rowGap"
            :size="args.size"
            :vertical="args.vertical"
            :theme-overrides="args.themeOverrides"
            @update="onUpdate"    
			>
				<base-radio value="small" label="Rock'n'Roll Star" />
				<base-radio value="shakermaker" label="Shakermaker" />
				<base-radio value="live-forever" label="Live Forever" />
				<base-radio value="up-in-the-sky" label="Up in the Sky" />
			</base-radio-group>
      `,
  }),
  decorators: [
    () => ({
      template: `<div style="width:600px;background:#fff;padding:20px 10px;display:flex;justify-content:center;"><story/></div>`,
    }),
  ],

  args: {
    vertical: false,
    rowGap: "10px",
    size: "medium",
    asRadio: false,
  },

  argTypes: {
    asRadio: {
      control: "boolean",
      description: "Use the radio component as a radio element.",
    },
    defaultValue: {
      table: {
        disable: true,
      },
    },
    disabled: {
      description: "Disables the radio group.",
    },
    groupWidth: {
      description: "The width of the radio group.",
      table: {
        defaultValue: { summary: "e.g. 50px or 10%" },
      },
    },
    name: {
      description: "The name attribute of the radio elements inside the group.",
    },
    size: {
      control: "inline-radio",
      options: ["small", "medium", "large"],
      description: "The size of the radio group.",
    },
    modelValue: {
      table: {
        disable: true,
      },
    },
    rowGap: {
      description:
        "The vertical space between radio elements when the `vertical` property is set to `true`.",
    },

    value: {
      table: {
        disable: true,
      },
    },
    themeOverrides: {
      description:
        'Progress component style overrides. Check the <a href="https://www.naiveui.com/en-US/theme" target="_blank">Theme</a> for more options.',
    },
    vertical: {
      description: "The direction of the radio group.",
    },

    update: {
      description: "Callback method triggered when a selection change occurs.",
    },
    "update:value": {
      table: {
        disable: true,
      },
    },
    "update:modelValue": {
      table: {
        disable: true,
      },
    },
    default: {
      table: {
        disable: true,
      },
    },
  },
};
