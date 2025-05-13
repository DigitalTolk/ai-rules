import BaseAutoComplete from "../components/base/BaseAutoComplete.vue";
import BaseIcon from "../components/base/BaseIcon.vue";
import { action } from "@storybook/addon-actions";

export default {
  title: "Design System/Base Components/AutoComplete",
  component: BaseAutoComplete,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
    },
    controls: { expanded: true },
  },
};

export const AutoComplete = {
  render: (args) => ({
    components: { BaseAutoComplete, BaseIcon },
    setup() {
      const valueRef = ref("");
      const options = computed(() => args.options);
      return {
        args,
        valueRef,
        options,
      };
    },
    methods: {
      onBlur: action("blur"),
      onFocus: action("focus"),
      onSelect: action("select"),
    },
    template: `
      <p>ModelValue: {{valueRef}}</p>
      <base-auto-complete
         v-model="valueRef"
         :blur-after-select="args.blurAfterSelect"
         :clear-after-select="args.clearAfterSelect"
         :clearable="args.clearable"
         :default-value="args.defaultValue"
         :disabled="args.disabled"
         :get-show="args.getShow"
         :input-args="args.inputargs"
         :loading="args.loading"
         :menu-props="args.menuProps"
         :options="args.options"
         :placement="args.placement"
         :status="args.status"
         :size="args.size"
         :show-empty="args.showEmpty"
         :placeholder="args.placeholder"
         @blur="onBlur"
         @focus="onFocus"
         @select="onSelect"
      >
         <template v-if="args.default" #default="slotargs">
            {{args.default}}
         </template>

         <template #empty>
            {{args.empty}}
         </template>

         <template #prefix>
            <base-icon>
               {{args.prefix}}
            </base-icon>
         </template>

         <template #suffix>
            <base-icon>
               {{args.suffix}}
            </base-icon>
         </template>
      </base-auto-complete>
  `,
  }),

  decorators: [
    () => ({
      template: `<div style="width:400px;background:#fff;padding:10px;"><story/></div>`,
    }),
  ],

  args: {
    options: [
      { value: "Option 1", label: "Option 1" },
      { value: "Option 2", label: "Option 2" },
      { value: "Option 3", label: "Option 3" },
      { value: "Option 4", label: "Option 4" },
      { value: "Option 5", label: "Option 5" },
    ],
  },

  argTypes: {
    blurAfterSelect: {
      description: "Whether to blur after selection.",
    },
    clearAfterSelect: {
      description: "Whether to clear after selection.",
    },
    clearable: {
      description: "Whether autocomplete is clearable.",
    },
    defaultValue: {
      table: {
        disable: true,
      },
    },
    disabled: {
      description: "Whether the autocomplete is disabled.",
    },
    getShow: {
      control: false,
      description:
        "Use the input to determine whether to display options on focus. This is a computed property that returns a boolean, indicating whether the dropdown should be shown based on specific conditions.",
      table: {
        defaultValue: {
          summary: "e.g. ()=> v==='a'",
        },
      },
    },
    inputProps: {
      description: "The attributes of input element in autocomplete.",
    },
    loading: {
      description: "Whether to show a loading status.",
    },
    menuProps: {
      description: "The menu's dom props.",
    },
    modelValue: {
      table: {
        disable: true,
      },
    },
    options: {
      description: "The options to show in the autocomplete.",
    },
    placeholder: {
      description: "Autocomplete's placeholder.",
    },
    placement: {
      description: "The placement of the autocomplete.",
      control: "inline-radio",
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
    },
    showEmpty: {
      description: "Whether to show menu if there's no option.",
    },
    size: {
      control: "inline-radio",
      options: ["small", "medium", "large"],
      description: "The size of the autocomplete.",
    },
    status: {
      control: "inline-radio",
      options: ["warning", "success", "error"],
      description: "The status validation of the autocomplete.",
    },
    to: {
      control: "text",
      description:
        "Container node of the menu. `false` will keep it not detached.",
      table: {
        category: "props",
      },
    },
    themeOverrides: {
      table: {
        disable: true,
      },
    },

    //  events
    blur: {
      control: false,
      description: "On blur callback function.",
    },
    focus: {
      control: false,
      description: "On focus callback function.",
    },
    select: {
      control: false,
      description: "On select callback function.",
    },
    "update:modelValue": {
      table: {
        disable: true,
      },
    },
    //  slots
    default: {
      control: "text",
      description: "Custom input elements, supplied by the user.",
      table: {
        category: "slots",
      },
    },
    empty: {
      control: "text",
      description: "Menu's content to show when there's no option.",
      table: {
        category: "slots",
      },
    },
    prefix: {
      control: "select",
      options: icons(),
      description: "Input's prefix content.",
      table: {
        category: "slots",
      },
    },
    suffix: {
      control: "select",
      options: icons(),
      description: "Input's suffix content.",
      table: {
        category: "slots",
      },
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
