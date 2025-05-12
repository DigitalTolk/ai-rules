import { action } from "@storybook/addon-actions";
import "./assets/input.css";
import BaseTextField from "../components/base/BaseTextField.vue";
import BaseIcon from "../components/base/BaseIcon.vue";
import BaseTooltip from "../components/base/BaseTooltip.vue";

export default {
  title: "Design System/Base Components/Input",
  component: BaseTextField,
  tags: ["autodocs"],

  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
    },
    controls: { expanded: true },
  },

  // global argTypes
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["tiny", "small", "medium", "large"],
      description: "The size of the input field.",
    },
    status: {
      control: { type: "select" },
      options: ["null", "error"],
    },
    themeOverrides: {
      description:
        'Progress component style overrides. Check the <a href="https://www.naiveui.com/en-US/theme" target="_blank">Theme</a> for more options.',
    },
  },
  args: {
    "clear-icon": "cancel",
    size: "medium",
  },
  decorators: [
    () => ({
      template: `<div style="width:350px"><story/></div>`,
    }),
  ],
};

const templateActions = {
  onBlur: action("blur"),
  onChange: action("change"),
  onFocus: action("focus"),
  onInput: action("input"),
  onClear: action("clear"),
  onSelect: action("select"),
  onScrollTo: action("scrollTo"),
};

// INPUT FIELD
export const InputField = {
  render: (args) => ({
    components: { BaseTextField, BaseIcon, BaseTooltip },
    setup() {
      const inputField = ref("");
      return { args, inputField };
    },
    methods: templateActions,
    template: inputTemplate("inputField"),
  }),

  args: {
    label: "Field name",
    "title-info": "info",
    prefix: "person",
    "help-text": "This is a help text",
    placeholder: "Type something..",
  },

  argTypes: {
    ...inputArgsType(),
    autosize: {
      table: {
        disable: true,
      },
    },
    rows: {
      table: {
        disable: true,
      },
    },

    type: {
      control: "radio",
      options: ["text", "password"],
    },
    customValidationMessage: {
      table: {
        disable: true,
      },
    },
  },
};

// TEXTAREA
export const Textarea = {
  render: (args) => ({
    components: { BaseTextField, BaseIcon, BaseTooltip },
    setup() {
      const textareaField = ref("");
      return { args, textareaField };
    },
    methods: templateActions,
    template: `
         <BaseTextField
            v-model="textareaField"
            type="textarea"
            :autosize="args.autosize"
            :clearable="args.clearable"
            :disabled="args.disabled"
            :ghost="args.ghost"
            :loading="args.loading"
            :maxlength="args.maxlength"
            :minlength="args.minlength"
            :placeholder="args.placeholder"
            :readonly="args.readonly"
            :size="args.size"
            :rows="args.rows"
            :theme-overrides="args.themeOverrides"
            @blur="onBlur" 
            @change="onChange" 
            @focus="onFocus" 
            @input="onInput"
            @clear="onClear"
            @select="onSelect"
            @scroll-to="onScrollTo"
         >
               <template #clear-icon>
                  <BaseIcon size="14">{{args['clear-icon']}}</BaseIcon>
               </template>

               <template #label>
                  <span>
                     {{args.label}}
                  </span>
               </template>

               <template #title-info>
                  <BaseIcon>
                     {{args['title-info']}}
                  </BaseIcon>
               </template>

               <template v-if="args.prefix" #prefix>
                  <BaseIcon>
                     {{args.prefix}}
                  </BaseIcon>
               </template>

               <template v-if="args.suffix" #suffix>
                  <BaseIcon size="18">
                     {{args.suffix}}
                  </BaseIcon>
               </template>

               <template v-if="args['help-text']" #help-text>
                  <span>
                     {{args['help-text']}}
                  </span>
               </template>

         </BaseTextField>
      `,
  }),

  decorators: [
    () => ({
      template: `<div style="width:520px"><story/></div>`,
    }),
  ],

  args: {
    autosize: false,
    label: "Field name",
    placeholder: "Type something..",
    "title-info": "info",
    "help-text": "This is a help text",
  },

  argTypes: {
    autosize: {
      control: "boolean",
      decription:
        "Sizing property for when the input is of type `textarea`. e.g. `{ minRows: 1, maxRows: 3 }`.",
      table: {
        category: "props",
      },
    },
    ...inputArgsType(),

    ...excludeProperties(),
    rows: {
      control: "number",
      description: "Rows property for when the input is of type `textarea`.",
    },
    themeOverrides: {
      description:
        'Progress component style overrides. Check the <a href="https://www.naiveui.com/en-US/theme" target="_blank">Theme</a> for more options.',
    },
    count: {
      table: {
        disable: true,
      },
    },
    customValidationMessage: {
      table: {
        disable: true,
      },
    },

    round: {
      table: {
        disable: true,
      },
    },

    showPasswordOn: {
      table: {
        disable: true,
      },
    },

    type: {
      table: {
        disable: true,
      },
    },
  },
};

// EMAIL FIELD
export const EmailField = {
  render: (args) => ({
    components: { BaseTextField, BaseIcon, BaseTooltip },
    setup() {
      const emailField = ref("");
      return { args, emailField };
    },
    methods: templateActions,
    template: inputTemplate("emailField"),
  }),

  args: {
    type: "email",
    label: "Email",
    placeholder: "Type your email..",
    prefix: "mail",
  },
  argTypes: {
    ...inputArgsType(),

    ...excludeProperties(),
    autosize: {
      table: {
        disable: true,
      },
    },

    rows: {
      table: {
        disable: true,
      },
    },
    type: {
      table: {
        disable: true,
      },
    },
  },
};

// URL FIELD
export const UrlField = {
  render: (args) => ({
    components: { BaseTextField, BaseIcon, BaseTooltip },
    setup() {
      const urlField = ref("");
      return { args, urlField };
    },
    methods: templateActions,
    template: inputTemplate("urlField"),
  }),

  args: {
    type: "url",
    label: "URL",
    placeholder: "Provide url...",
    prefix: "location_on",
  },
  argTypes: {
    ...inputArgsType(),
    ...excludeProperties(),
    autosize: {
      table: {
        disable: true,
      },
    },
    rows: {
      table: {
        disable: true,
      },
    },
    type: {
      table: {
        disable: true,
      },
    },
  },
};

// PHONE FIELD
export const PhoneField = {
  render: (args) => ({
    components: { BaseTextField, BaseIcon, BaseTooltip },
    setup() {
      const phoneField = ref("");
      return { args, phoneField };
    },
    methods: templateActions,
    template: inputTemplate("phoneField"),
  }),

  args: {
    type: "phone",
    label: "Phone",
    placeholder: "Phone number...",
    prefix: "smartphone",
  },
  argTypes: {
    ...inputArgsType(),
    ...excludeProperties(),
    autosize: {
      table: {
        disable: true,
      },
    },
    rows: {
      table: {
        disable: true,
      },
    },
    type: {
      table: {
        disable: true,
      },
    },
  },
};

// METHODS;
const inputTemplate = function (inputType) {
  return `
      <BaseTextField
         v-model="${inputType}"
         :autofocus="args.autofocus"
         :clearable="args.clearable"
         :disabled="args.disabled"
         :ghost="args.ghost"
         :loading="args.loading"
         :maxlength="args.maxlength"
         :minlength="args.minlength"
         :placeholder="args.placeholder"
         :readonly="args.readonly"
         :round="args.round"
         :size="args.size"
         :show-password-on="args.type==='password'? args.showPasswordOn : undefined"
         :show-count="args.showCount"
         :type="args.type"
         :custom-validation-message="(args?.type==='email' || args?.type==='url' || args?.type==='phone')? args.customValidationMessage : undefined"
         :theme-overrides="args.themeOverrides"
         @blur="onBlur" 
         @change="onChange" 
         @focus="onFocus" 
         @input="onInput"
         @clear="onClear"
         @select="onSelect"
         @scroll-to="onScrollTo"
      >
            <template v-if="args['clear-icon']" #clear-icon>
               <BaseIcon size="14">
                  {{args['clear-icon']}}
               </BaseIcon>
            </template>

            <template v-if="args.label" #label>
               <span>
                  {{args.label}}
               </span>
            </template>

            <template v-if="args['title-info']" #title-info>
               <BaseIcon>
                  {{args['title-info']}}
               </BaseIcon>
            </template>

            <template v-if="args.prefix" #prefix>
               <BaseIcon>
                  {{args.prefix}}
               </BaseIcon>
            </template>

            <template v-if="args.separator" #separator>
               <BaseIcon>
                  {{args.separator}}
               </BaseIcon>
            </template>

            <template v-if="args.suffix" #suffix>
               <BaseIcon size="18">
                  {{args.suffix}}
               </BaseIcon>
            </template>

            <template v-if="args['help-text']" #help-text>
               <span>
                  {{args['help-text']}}
               </span>
            </template>

            <template v-if="args['count']" #count>
               <span>
                  {{args['count']}}
               </span>
            </template>

            <template v-if='args.type==="password"' #password-visible-icon>
               <base-icon>
                  {{args['password-visible-icon']}}
               </base-icon>
            </template>
            <template v-if='args.type==="password"' #password-invisible-icon>
               <base-icon>
                  {{args['password-invisible-icon']}}
               </base-icon>
            </template>

         </BaseTextField>
      `;
};

function inputArgsType() {
  return {
    //  props
    autoFocus: {
      control: "boolean",
      description: "Whether the input is clearable.",
      table: {
        category: "props",
      },
    },
    clearable: {
      description: "Whether the input is clearable.",
    },
    disabled: {
      description: "Whether to disable the input.",
    },
    loading: {
      description:
        "Set loading state. If set `(true/false)`, the element will always take up enough space for the loading indicator.",
    },
    maxlength: {
      description: "Manimum input length.",
    },
    minlength: {
      description: "Maximum input length.",
    },
    placeholder: {
      description: "Placeholder of input. When pair is true, this is an array.",
    },
    readonly: {
      description: "Set the readonly state.",
    },
    round: {
      description: "Use a rounded input style.",
    },
    showCount: {
      description: "Whether to show the word count.",
    },
    showPasswordOn: {
      control: "inline-radio",
      options: ["click", "mousedown"],
      description: "The event to show the password.",
    },
    status: {
      description: "Validation status.",
    },

    // slots
    label: {
      control: "text",
      description: "Label slot for the input field.",
    },
    "help-text": {
      control: "text",
      description:
        "Help text slot for the input field, located at the bottom of the input field.",
    },
    suffix: {
      control: "select",
      options: icons(),
      description: "Suffix content slot.",
    },
    prefix: {
      control: "select",
      options: icons(),
      description: "Prefix content slot.",
    },
    "clear-icon": {
      control: "select",
      options: icons(),
      description: "Slots for a custom clear icon.",
    },
    "title-info": {
      control: "select",
      options: icons(),
      description:
        "Slots for custom content using the info icon, such as providing a `tooltip` component. `Note` that the icon content is just an example. ",
    },
    count: {
      control: "text",
      description: "Slots for displaying word count.",
      table: {
        category: "slots",
      },
    },
    "password-invisible-icon": {
      control: "select",
      options: icons(),
      description:
        "Password toggle icon for displaying the password when it is hidden. You must enable the `show-password-on` setting for this to function.",
    },
    "password-visible-icon": {
      control: "select",
      options: icons(),
      description:
        "Password toggle icon for displaying the password when its not hidden. You must enable the `show-password-on` setting for this to function.",
    },

    //  Events
    blur: {
      description: "Blur the input element.	",
    },
    change: {
      description: "Callback triggered when native change event is fired.",
    },
    clear: {
      description: "Callback triggered when the input is cleared.",
    },
    input: {
      description: "Callback triggered when the input gets user input.",
    },
    focus: {
      description: "Callback triggered when the input is focussed on.",
    },
    select: {
      description: "Select the input element.",
    },
    scrollTo: {
      description: "Scroll to the input element.",
    },

    //  props disabled

    allowInput: {
      table: {
        disable: true,
      },
    },

    autofocus: {
      table: {
        disable: true,
      },
    },

    countGraphemes: {
      table: {
        disable: true,
      },
    },

    defaultValue: {
      table: {
        disable: true,
      },
    },
    inputProps: {
      table: {
        disable: true,
      },
    },
    passivelyActivated: {
      table: {
        disable: true,
      },
    },
    renderCount: {
      table: {
        disable: true,
      },
    },
    pair: {
      table: {
        disable: true,
      },
    },
    separator: {
      table: {
        disable: true,
      },
    },

    modelValue: {
      table: {
        disable: true,
      },
    },
    "update:modelValue": {
      table: {
        disable: true,
      },
    },
  };
}

function excludeProperties() {
  return {
    showPasswordOn: {
      table: {
        disable: true,
      },
    },
    "password-visible-icon": {
      table: {
        disable: true,
      },
    },
    "password-invisible-icon": {
      table: {
        disable: true,
      },
    },
  };
}

function icons() {
  return [
    null,
    "info",
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
    "cancel",
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
