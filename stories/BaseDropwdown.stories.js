import { action } from "@storybook/addon-actions";
import BaseIcon from "../components/base/BaseIcon.vue";
import BaseButton from "../components/base/BaseButton.vue";
import BaseDropdown from "../components/base/BaseDropdown.vue";
import BaseDropdownItem from "../components/base/BaseDropdownItem.vue";
import BaseRow from "../components/base/BaseRow.vue";
import BaseColumn from "../components/base/BaseColumn.vue";
import BaseAvatar from "../components/base/BaseAvatar.vue";

export default {
  title: "Design System/Base Components/Dropdown",
  component: BaseDropdown,
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

export const Dropdown = {
  render: (args) => ({
    components: {
      BaseIcon,
      BaseButton,
      BaseDropdown,
      BaseDropdownItem,
      BaseRow,
      BaseColumn,
      BaseAvatar,
    },
    setup() {
      const isRenderInType = computed(() => args.type === "render");
      return { args, isRenderInType };
    },
    methods: {
      onClickOutside: action("click:outside"),
      onSelect: action("onSelect"),
    },
    template: `
      <BaseDropdown
         :animated="args.animated"
         :inverted="args.inverted"
         :placement="args.placement"
         :size="args.size"
         :show-arrow="args.showArrow"
         :trigger="args.trigger"
         :width="args.width"
         @click:outside="onClickOutside"
         @select="onSelect"
         :theme-overrides="args.themeOverrides"
      >
        <div>
          <BaseButton>Open Me!</BaseButton>
        </div>

        <template #dropdown>

         <BaseDropdownItem
            v-if="isRenderInType"
            :disabled="args.disabled"
            :label="args.label"
            :columnKey="args.columnKey"
            :key="args.key"
            :show="args.show"
            :type="args.type"
          >
            <template #content>
               <div v-if='args.content' style='padding:15px;'>
                  {{args.content}}  
               </div>
              <base-row v-else x-gap="5" :cols="5">
                <base-column :span="1">
                  <div class="avatar" style="display:block;text-align:center;padding-top:10px;">
                    <base-avatar round> Russ </base-avatar>
                  </div>
                </base-column>
                <base-column :span="4">
                  <strong>John Doe</strong>
                  <div>From russia with love</div>
                </base-column>
              </base-row>
            </template>
          </BaseDropdownItem>

          <BaseDropdownItem
          v-else-if='args.type === "divider"'
            key="divider"
            columnKey="divider"
            type="divider"
            :show="args.show"
          ></BaseDropdownItem>

          <BaseDropdownItem
            v-else
            :columnKey="args.columnKey"
            :key="args.key"
            :label="args.label"
            :show="args.show"
            :disabled="args.disabled"
            :type="args.type"
            >
               <template v-if="args.default" #default>
                  {{args.default}}
               </template>
               <template #icon>
                  <base-icon size="20">{{args.icon}}</base-icon>
               </template>
         </BaseDropdownItem>

         <BaseDropdownItem
            label="Dropdown designed for nested dropdown options."
            columnKey="on the verge of collapse"
            key="on the verge of collapse"
            :disabled="false"
         >
            <template #icon>
               <base-icon size="20">settings</base-icon>
            </template>
            <template #children>
               <BaseDropdownItem
                  label="Child Item"
                  columnKey="child"
                  key="child">
               </BaseDropdownItem>
               <BaseDropdownItem
                  label="Second Item"
                  columnKey="second child"
                  key="second child">
                  <template #children>
                     <BaseDropdownItem
                        label="Child Item one"
                        columnKey="child one"
                        key="child one"
                        >
                     </BaseDropdownItem>

                     <BaseDropdownItem
                        label="Second Item two"
                        columnKey="second child two"
                        key="second child two"
                        >
                        <template #icon>
                           <base-icon size="20">person</base-icon>
                        </template>
                     </BaseDropdownItem>
                  </template>
               </BaseDropdownItem>
            </template>
         </BaseDropdownItem>
      </template>
   </BaseDropdown>  
   `,
  }),

  args: {
    animated: false,
    inverted: false,
    showArrow: true,
    trigger: "hover",
    width: "400",
    placement: "bottom-start",
    size: "medium",

    default: "The one that got away",
    icon: "home",
    type: "render",
  },

  argTypes: {
    animated: {
      control: "boolean",
      description: "Use an animation when showing options.",
    },
    inverted: {
      control: "boolean",
      description: "Whether the dropdown menu is inverted.",
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
      description: "The placement of the dropdown menu.",
    },
    size: {
      control: { type: "inline-radio" },
      options: ["small", "medium", "large", "huge"],
      description: "The size of the dropdown menu.",
    },
    showArrow: {
      control: { type: "boolean" },
      description:
        "Whether to show the dropdown arrow against the trigger element",
    },
    trigger: {
      control: { type: "inline-radio" },
      options: ["hover", "click"],
      description: "The event that triggers the dropdown menu.",
    },
    width: {
      control: { type: "text" },
      description:
        "The width of the dropdown menu, by defining value to 'trigger' means width will follow its trigger's width.",
    },
    themeOverrides: {
      description:
        'Progress component style overrides. Check the <a href="https://www.naiveui.com/en-US/theme" target="_blank">Theme</a> for more options.',
    },
    keyField: {
      table: {
        disable: true,
      },
    },
    labelField: {
      table: {
        disable: true,
      },
    },

    disabled: {
      control: "boolean",
      description: "Whether the item is disabled",
      table: {
        category: "Dropdown Item Props",
      },
    },
    icon: {
      control: "select",
      options: icons(),
      description: "Acts as an icon displayed before the dropdown item label.",
      table: {
        category: "Dropdown Item Props",
      },
    },
    show: {
      control: "boolean",
      description: "Whether the dropdown option is visible",
      table: {
        category: "Dropdown Item Props",
      },
    },
    type: {
      control: "inline-radio",
      options: ["render", "divider", null],
      description:
        "A type is an option where you can choose 'render' to customize the dropdown item layout. 'divider' a simple divider line border between option and an 'null/empty' serve a normal dropdown option.A 'type' is an option that allows you to choose 'render' for customizing the dropdown item layout. Selecting 'divider' adds a simple line border between options, while 'null/empty' designates a standard dropdown option.",
      table: {
        category: "Dropdown Item Props",
      },
    },
    label: {
      control: "text",
      description: "Displayed label value.",
      table: {
        category: "Dropdown Item Props",
      },
    },

    // dropdown item slots
    default: {
      control: "text",
      description:
        "Default slot content will be applied when the `type` is null or empty.",
      table: {
        category: "Dropdown Item Props",
      },
    },

    content: {
      control: false,
      description:
        "The `content` slot will be utilized when the `type` is set to `render'`. You have the option to customize its layout.",
      table: {
        category: "Dropdown Item Props (render)",
      },
    },

    children: {
      control: true,
      description: "The `children` slot is used for nested dropdown items.",
      table: {
        category: "Dropdown Item Props",
      },
    },
    childrenField: {
      table: {
        disable: true,
      },
    },
    keyboard: {
      table: {
        disable: true,
      },
    },
    nodeProps: {
      table: {
        disable: true,
      },
    },
    menuProps: {
      table: {
        disable: true,
      },
    },
    options: {
      table: {
        disable: true,
      },
    },
    overlap: {
      table: {
        disable: true,
      },
    },
    renderIcon: {
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
    to: {
      table: {
        disable: true,
      },
    },
    x: {
      table: {
        disable: true,
      },
    },
    y: {
      table: {
        disable: true,
      },
    },
    zIndex: {
      table: {
        disable: true,
      },
    },

    slotData: {
      table: {
        disable: true,
      },
    },
    dropdown: {
      table: {
        disable: true,
      },
    },
    //  events
    select: {
      description: "Callback function for after an option is selected.",
      table: {
        category: "Events",
      },
    },
    "click:outside": {
      description:
        "Callback function triggered when there is a click outside of the component.",
      table: {
        category: "Events",
      },
    },
  },

  parameters: {
    docs: {
      source: {
        // Manually specify the code that should be shown in the "ShowCode" panel
        code: `
               <BaseDropdown
                  :animated="args.animated"
                  :inverted="args.inverted"
                  :placement="args.placement"
                  :size="args.size"
                  :show-arrow="args.showArrow"
                  :trigger="args.trigger"
                  :width="args.width"
                  @click:outside="onClickOutside"
                  @select="onSelect"
                  theme-overrides="args.themeOverrides"
               >
               <div>
                  <BaseButton>Open Me!</BaseButton>
               </div>

               <template #dropdown>

                  <BaseDropdownItem
                     v-if="type === 'render'"
                     :disabled="args.disabled"
                     :label="args.label"
                     :columnKey="args.columnKey"
                     :key="args.key"
                     :show="args.show"
                     :type="args.type"
                  >
                     <template #content>
                        <div v-if='args.content' style='padding:15px;'>
                           {{args.content}}  
                        </div>
                     <base-row v-else x-gap="5" :cols="5">
                        <base-column :span="1">
                           <div class="avatar" style="display:block;text-align:center;padding-top:10px;">
                           <base-avatar round> Russ </base-avatar>
                           </div>
                        </base-column>
                        <base-column :span="4">
                           <strong>John Doe</strong>
                           <div>From russia with love</div>
                        </base-column>
                     </base-row>
                     </template>
                  </BaseDropdownItem>

                  <BaseDropdownItem
                  v-else-if='args.type === "divider"'
                     key="divider"
                     columnKey="divider"
                     type="divider"
                     :show="args.show"
                  ></BaseDropdownItem>

                  <BaseDropdownItem
                     v-else
                     :columnKey="args.columnKey"
                     :key="args.key"
                     :label="args.label"
                     :show="args.show"
                     :disabled="args.disabled"
                     :type="args.type"
                     >
                        <template v-if="args.default" #default>
                           {{args.default}}
                        </template>
                        <template #icon>
                           <base-icon size="20">{{args.icon}}</base-icon>
                        </template>
                  </BaseDropdownItem>

                  <BaseDropdownItem
                     label="Dropdown designed for nested dropdown options."
                     columnKey="on the verge of collapse"
                     key="on the verge of collapse"
                     :disabled="false"
                  >
                     <template #icon>
                        <base-icon size="20">settings</base-icon>
                     </template>
                     <template #children>
                        <BaseDropdownItem
                           label="Child Item"
                           columnKey="child"
                           key="child">
                        </BaseDropdownItem>
                        <BaseDropdownItem
                           label="Second Item"
                           columnKey="second child"
                           key="second child">
                           <template #children>
                              <BaseDropdownItem
                                 label="Child Item one"
                                 columnKey="child one"
                                 key="child one"
                                 >
                              </BaseDropdownItem>

                              <BaseDropdownItem
                                 label="Second Item two"
                                 columnKey="second child two"
                                 key="second child two"
                                 >
                                 <template #icon>
                                    <base-icon size="20">person</base-icon>
                                 </template>
                              </BaseDropdownItem>
                           </template>
                        </BaseDropdownItem>
                     </template>
                  </BaseDropdownItem>
               </template>
            </BaseDropdown>  
         `,
      },
    },
  },
};

function icons() {
  return [
    null,
    "more_horiz",
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
