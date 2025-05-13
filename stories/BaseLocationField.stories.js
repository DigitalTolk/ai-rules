import { action } from "@storybook/addon-actions";
import BaseIcon from "../components/base/BaseIcon.vue";
import BaseLocationField from "../components/base/BaseLocationField.vue";

export default {
  title: "Design System/Base Components/LocationField",
  component: BaseLocationField,
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

export const Location = {
  render: (args) => ({
    components: {
      BaseIcon,
      BaseLocationField,
    },
    setup() {
      const location = ref("");
      return { args, location };
    },
    methods: {
      onUpdateAddress: action("update:address"),
      onUpdateCity: action("update:city"),
      onUpdateCountry: action("update:country"),
      onUpdatePostalCode: action("update:postalCode"),
      onUpdateState: action("update:state"),
      onUpdateCoordinates: action("update:coordinates"),
      onInput: action("input"),
      onClear: action("clear"),
    },
    template: `  
      <base-location-field
          v-model="location"
         :clearable="args.clearable"
         :disabled="args.disabled"
         :label="args.label"
         :placeholder="args.placeholder"
         :round="args.round"
         :size="args.size"
         :status="args.status"
         :theme-overrides="args.themeOverrides"
          @update:city="onUpdateCity"
          @update:address="onUpdateAddress"
          @update:country="onUpdateCountry"
          @update:postalCode="onUpdatePostalCode"
          @update:state="onUpdateState"
          @update:coordinates="onUpdateCoordinates"
          @input="onInput"
          @clear="onClear"
        >
          <template #label v-if="args.label">
            {{args.label}}
          </template>

          <template #prefix v-if="args.prefix">
            <base-icon>{{args.prefix}}</base-icon>
          </template>
          <template #suffix  v-if="args.suffix">
            <base-icon>{{args.suffix}}</base-icon>
          </template>
        </base-location-field>
   `,
  }),
  decorators: [
    () => ({
      template: `<div style="width:400px;"><story/></div>`,
    }),
  ],

  args: {
    placeholder: "Find your location",
    prefix: "location_on",
    size: "medium",
    label: "Location",
  },

  argTypes: {
    clearable: {
      description: "Whether the input is clearable.",
    },
    disabled: {
      description: "Whether to disable the input.",
    },
    placeholder: {
      description: "Placeholder of input.",
    },
    round: {
      description: "Use a rounded input style.",
    },
    size: {
      control: "inline-radio",
      options: ["tiny", "small", "medium", "large"],
      description: "Size of input.",
    },

    status: {
      table: {
        disable: true,
      },
    },
    themeOverrides: {
      description:
        'Input component style overrides. Check the <a href="https://www.naiveui.com/en-US/theme" target="_blank">Theme</a> for more options.',
      table: {
        defaultValue: {
          summary: "Ex. {borderRadius: '10px'}",
        },
      },
    },
    //  slots
    label: {
      control: "text",
      description: "Label text for the input field.",
      table: {
        category: "slots",
      },
    },
    prefix: {
      control: "select",
      options: icons(),
      description:
        "Sample content for the prefix slot; you can use SVG icons or text.",
      table: {
        category: "slots",
      },
    },
    suffix: {
      control: "select",
      options: icons(),
      description:
        "Sample content for the suffix slot; you can use SVG icons or text.",
      table: {
        category: "slots",
      },
    },
    slotData: {
      table: {
        disable: true,
      },
    },
    modelValue: {
      table: {
        disable: true,
      },
    },
    address: {
      table: {
        disable: true,
      },
    },
    city: {
      table: {
        disable: true,
      },
    },
    checkCoordinates: {
      table: {
        disable: true,
      },
    },
    country: {
      table: {
        disable: true,
      },
    },
    coordinates: {
      table: {
        disable: true,
      },
    },
    postalCode: {
      table: {
        disable: true,
      },
    },
    restrictedCountries: {
      table: {
        disable: true,
      },
    },
    state: {
      table: {
        disable: true,
      },
    },
    //  events
    "update:address": {
      control: false,
      description: "Triggers when the address is updated.",
    },
    "update:city": {
      control: false,
      description: "Triggers when the city is updated.",
    },
    "update:country": {
      control: false,
      description: "Triggers when the country is updated.",
    },
    "update:postalCode": {
      control: false,
      description: "Triggers when the postalCode is updated.",
    },
    "update:state": {
      control: false,
      description: "Triggers when the state is updated.",
    },
    "update:coordinates": {
      control: false,
      description: "Triggers when the coordinates is updated.",
    },
    input: {
      control: false,
      description: "Triggers when the input is changed.",
    },
    clear: {
      control: false,
      description: "Triggers when the clear icon is clicked.",
    },
    "update:modelValue": {
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
