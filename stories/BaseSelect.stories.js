import { action } from "@storybook/addon-actions";
import BaseSelect from "../components/base/BaseSelect.vue";
import BaseSelectOption from "../components/base/BaseSelectOption.vue";
import BaseIcon from "../components/base/BaseIcon.vue";
import BaseSpace from "../components/base/BaseSpace.vue";

export default {
  title: "Design System/Base Components/Select",
  component: BaseSelect,
  tags: ["autodocs"],

  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
    },
    controls: { expanded: true },
  },
};

export const Select = {
  render: (args) => ({
    components: { BaseSelect, BaseSelectOption, BaseIcon, BaseSpace },
    setup() {
      const selectValue = ref(["run"]);
      return { args, selectValue };
    },

    methods: {
      onSearch: action("search"),
      onScroll: action("scroll"),
      onClear: action("clear"),
      onCreate: action("create"),
      onUpdateShow: action("update:show"),
      onFocus: action("focus"),
      onBlur: action("blur"),
      onUpdateValue: action("update:value"),
    },

    template: `
         <p>Value: {{selectValue}}</p>
            <base-select
               v-model="selectValue"
               :consistent-menu-width="args.consistentMenuWidth"
               :clearable="args.clearable"
               :disabled="args.disabled"
               :filterable="args.filterable"
               :icon="args.icon"
               :loading="args.loading"
               :max-tag-count="args.maxTagCount"
               :multiple="args.multiple"
               :placeholder="args.placeholder"
               :placement="args.placement"
               :show="args.show"
               :show-arrow="args.showArrow"
               :show-checkmark="args.showCheckmark"
               :show-checkbox="args.showCheckbox"
               :size="args.size"
               :status="args.status"

               @search="onSearch"
               @scroll="onScroll"
               @clear="onClear"
               @create="onCreate"
               @update:show="onUpdateShow"
               @focus="onFocus"
               @blur="onBlur"
               @update:value="onUpdateValue"
            >
               <template v-if="args.prefix" #prefix>
                  <base-icon size="20" icon-color="#a0a0a0">{{args.prefix}}</base-icon>
               </template>

               <template v-if="args.arrow" #arrow>
                  <base-icon >{{args.arrow}}</base-icon>
               </template>

               <template v-if="args.header" #header>
                  <div>{{args.header}}</div>
               </template>

               <template v-if="args.action" #action>
                  <div>{{args.action}}</div>
               </template>

               <template v-if="args.empty" #empty>
                  <div>{{args.empty}}</div>
               </template>

               <template #options>
                  <base-select-option v-if="args.default"
                     :disabled="args.disabled"
                     :label="args.label"
                     :value="args.value"
                  >
                     <div>
                        {{args.default}}
                     </div>
                  </base-select-option>
                  <base-select-option
                     v-else
                     :label="args.label"
                     value="option_1"
                     :disabled="args.disabled"
                  >
                     <template #default>
                        <base-space :size="5">
                           <base-icon>star</base-icon>
                           <span>Option 1</span>
                        </base-space>
                     </template>
                  </base-select-option>
                  <base-select-option
                     
                     label="Option 2"
                     value="option_2"
                  >
                  </base-select-option>
                  <base-select-option
                     
                     label="Option 3"
                     value="option_3"
                  >
                  </base-select-option>
               </template>
            </base-select>
         `,
  }),
  decorators: [
    () => ({
      template: `<div style="width:500px;background:#fff;padding:20px 10px;"><story/></div>`,
    }),
  ],

  args: {
    prefix: "more",
    size: "medium",
  },

  argTypes: {
    //  option slots
    clearable: {
      description: "Whether the select is clearable.",
    },
    clearFilterAfterSelect: {
      table: {
        disable: true,
      },
    },
    consistentMenuWidth: {
      table: {
        disable: true,
      },
    },
    childrenField: {
      table: {
        disable: true,
      },
    },
    defaultValue: {
      table: {
        disable: true,
      },
    },
    default: {
      control: "text",
      description: "Default slot content for the option",
    },
    disabled: {
      control: "boolean",
      description: "Whether the select is disabled.",
    },
    ellipsisTagPopoverProps: {
      table: {
        disable: true,
      },
    },
    fallbackOption: {
      table: {
        disable: true,
      },
    },
    filter: {
      table: {
        disable: true,
      },
    },
    filterable: {
      control: "boolean",
      description:
        "Enable filtering of options; you can type to search for a specific option.",
    },
    icon: {
      control: "select",
      options: icons(),
      description: "Icon to display in the input field",
    },
    ignoreComposition: {
      table: {
        disable: true,
      },
    },
    inputProps: {
      table: {
        disable: true,
      },
    },
    keyboard: {
      table: {
        disable: true,
      },
    },
    labelField: {
      table: {
        disable: true,
      },
    },

    loading: {
      control: "boolean",
      description: "Display a loading spinner in the input field.",
    },
    maxTagCount: {
      control: "number",
      description:
        "Number of tags to display before truncating. Need to enable multiple prop",
    },
    multiple: {
      control: "boolean",
      description: "Allow multiple options to be selected.",
    },
    menuProps: {
      table: {
        disable: true,
      },
    },
    nodeProps: {
      table: {
        disable: true,
      },
    },
    options: {
      table: {
        disable: true,
      },
    },
    placement: {
      control: "select",
      description: "Placement of the dropdown relative to the input field.",
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
    placeholder: {
      description: "Placeholder text to display when no option is selected.",
    },
    remote: {
      table: {
        disable: true,
      },
    },
    renderLabel: {
      table: {
        disable: true,
      },
    },
    renderOption: {
      table: {
        disable: true,
      },
    },
    renderTag: {
      table: {
        disable: true,
      },
    },
    resetMenuOnOptionsChange: {
      table: {
        disable: true,
      },
    },
    showArrow: {
      control: "boolean",
      description:
        "Show or hide the dropdown arrow icon next to the input field.",
    },
    showCheckmark: {
      control: "boolean",
      description:
        "Display a checkmark icon next to the selected option when it is chosen.",
    },
    showCheckbox: {
      control: "boolean",
      description:
        "Display a checkbox next to each option in the dropdown list.",
    },
    size: {
      control: "inline-radio",
      options: ["tiny", "small", "medium", "large"],
      description: "Size of the select input.",
    },
    status: {
      control: "inline-radio",
      options: ["warning", "error"],
      description: "Status validation of the select input.",
    },

    showOnFocus: {
      table: {
        disable: true,
      },
    },
    modelValue: {
      table: {
        disable: true,
      },
    },
    tag: {
      table: {
        disable: true,
      },
    },
    to: {
      table: {
        disable: true,
      },
    },
    valueField: {
      table: {
        disable: true,
      },
    },
    virtualScroll: {
      table: {
        disable: true,
      },
    },
    useCustomDropdown: {
      table: {
        disable: true,
      },
    },
    themeOverrides: {
      table: {
        disable: true,
      },
    },

    //  events
    clear: {
      description: "Emitted when the clear button is clicked",
    },
    create: {
      description: "Emitted when a new option is created",
    },
    scroll: {
      description: "Emitted when the dropdown is scrolled",
    },
    "update:show": {
      description: "Emitted when the show prop is updated",
    },
    focus: {
      description: "Emitted when the input field is focused",
    },
    blur: {
      description: "Emitted when the input field is blurred",
    },
    "update:value": {
      table: {
        disable: true,
      },
    },
    "update:ModelValue": {
      table: {
        disable: true,
      },
    },
    //   slots
    prefix: {
      control: "select",
      options: icons(),
      description: "Icon to display before the input field",
    },
    arrow: {
      control: "select",
      options: icons(),
      description: "Icon to display after the input field",
    },
    header: {
      control: "text",
      description: "Header text to display above the options",
    },
    action: {
      control: "text",
      description: "Action text to display below the options",
    },
    empty: {
      control: "text",
      description: "Text to display when no options are available",
    },
    //  expose
    select: {
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
