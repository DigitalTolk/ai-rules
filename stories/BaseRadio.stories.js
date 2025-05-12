import { action } from "@storybook/addon-actions";
import BaseRadio from "../components/base/BaseRadio.vue";

export default {
  title: "Design System/Base Components/Radio",
  component: BaseRadio,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    controls: { expanded: true },
    backgrounds: {
      default: "light",
    },
  },
};

export const Radio = {
  render: (args) => ({
    components: { BaseRadio },
    setup() {
      const singleRadioValue = ref(false);

      return { args, singleRadioValue };
    },
    methods: {
      onChecked: action("update:checked"),
    },
    template: `
         
            <base-radio
					v-model="singleRadioValue"
               :disabled="args.disabled"
               :label="args.label"
               :name="args.name"
               :size="args.size"
					:value="true"
               :theme-overrides="args.themeOverrides"
               @update:checked="onChecked"
				>
					<template v-if="args.default" v:slot="default">
						<div>{{args.default}}</div>
					</template>
				</base-radio>

            <base-radio
					v-model="singleRadioValue"
               :disabled="args.disabled"
               label="${args.leftLabel}"
               :name="args.name"
               :size="args.size"
					:value="false"
               :theme-overrides="args.themeOverrides"
					@update:modelValue="onChange"
               @update:checked="onChecked"
				>
				</base-radio>
         
      `,
  }),
  decorators: [
    () => ({
      template: `<div style="width:300px;background:#fff;padding:20px 10px;display:flex;justify-content:center;"><story/></div>`,
    }),
  ],

  args: {
    leftLabel: "Left",
    label: "Right",
    size: "medium",
  },

  argTypes: {
    asRadio: {
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
    disabled: {
      description: "Disabled state.",
    },
    label: {
      description:
        "adio label. If not set, render default slot content, if both, use default slot content first.",
    },
    name: {
      description:
        "he name attribute of the radio element. If not set, name of `radio-group` will be used.",
    },
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large"],
      description: "The size of the radio.",
    },
    value: {
      control: true,
      description: "The value of the radio.",
    },
    modelValue: {
      table: {
        disable: true,
      },
    },
    leftLabel: {
      table: {
        disable: true,
      },
    },
    default: {
      table: {
        disable: true,
      },
    },
    "update:modelValue": {
      table: {
        disable: true,
      },
    },

    themeOverrides: {
      description:
        'Progress component style overrides. Check the <a href="https://www.naiveui.com/en-US/theme" target="_blank">Theme</a> for more options.',
    },

    //  events
    "update:checked": {
      description: "Callback method triggered when a selection change occurs.",
    },
  },
};
