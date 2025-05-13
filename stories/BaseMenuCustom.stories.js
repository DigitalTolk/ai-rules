import { action } from "@storybook/addon-actions";
import BaseMenuCustom from "../components/base/BaseMenuCustom.vue";
import BaseMenuItem from "../components/base/BaseMenuItem.vue";
import BaseIcon from "../components/base/BaseIcon.vue";
import BaseDropdown from "../components/base/BaseDropdown.vue";
import BaseDropdownItem from "../components/base/BaseDropdownItem.vue";

export default {
  title: "Design System/Base Components/MenuCustom",
  component: BaseMenuCustom,
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

export const MenuCustom = {
  render: (args) => ({
    components: {
      BaseMenuCustom,
      BaseMenuItem,
      BaseIcon,
      BaseDropdown,
      BaseDropdownItem,
    },
    setup() {
      return { args };
    },
    methods: {
      updateExpandedKeys: action("update:expanded-keys"),
      updateValue: action("update:value"),
    },
    template: `
      <BaseMenuCustom
         :mode="args.mode"
         :gap="args.gap"
         :dropdown-placement="args.dropdownPlacement"
         :theme-overrides="args.themeOverrides"
      >
         <base-menu-item
            :label="args.label"
            :disabled="args.disabled"
            :key="args.key"
            :show="args.show"
         >
            <template #icon>
               <base-icon size="18">translate</base-icon>
            </template>
            <template #children>
               <base-menu-item label="Arabiska" key="arabiska">
                  Arabiska
               </base-menu-item>
               <base-menu-item key="klingon">Klingon</base-menu-item>
            </template>
         </base-menu-item>

        <base-menu-item :type="args.type" :props=args.type :show="args.show" :key="args.key" />

        <base-menu-item label="Pinball 1973" key="pinball - 1973">
          <template #children>
            <base-menu-item label="Sandwich" key="sandwich" type="group">
              <template #children>
                <base-menu-item label="Horizon rises" key="horizon"/>
                <base-menu-item type="divider" />
                <base-menu-item label="Vertison" key="Vertison">
                  <template #children>
                    <base-menu-item label="First" key="first"/>
                    <base-menu-item
                      label="Verizon"
                      key="Verizon"
                    />
                  </template>
                </base-menu-item>
              </template>
            </base-menu-item>
            <base-menu-item
              label="The past increases. The future recedes."
              key="past"
            ></base-menu-item>
          </template>
        </base-menu-item>
        <base-menu-item
          label="A Wild Sheep Chase"
          key="a - wild - sheep - chase"
          @click="() => console.log('A Wild Sheep Chase')"
        >
        </base-menu-item>
        <base-menu-item key="drop-down">
          <BaseDropdown trigger="click" placement="bottom">
            <div>Dropdown</div>
            <template #dropdown>
              <base-dropdown-item key="change-edit-booking">
                <template #icon>
                  <base-icon :filled="false" :size="18">edit</base-icon>
                </template>
                Edit booking
              </base-dropdown-item>
              <base-dropdown-item key="divider" type="divider">
              </base-dropdown-item>
              <base-dropdown-item key="cancel-booking">
                <template #icon>
                  <base-icon :filled="false" :size="18">cancel</base-icon>
                </template>
                Cancel booking
              </base-dropdown-item>
            </template>
          </BaseDropdown>
        </base-menu-item>
      </BaseMenuCustom>
   `,
  }),

  decorators: [
    () => ({
      template: `<div style="width:800px;background:#fff;padding:10px; "><story/></div>`,
    }),
  ],

  args: {
    mode: "horizontal",

    label: "Language",
    type: "divider",
  },

  argTypes: {
    options: {
      control: false,
      description: "Array of items data of menu",
      table: {
        disable: true,
      },
    },
    expandedKeys: {
      control: false,
      table: {
        disable: true,
      },
      description:
        "The expanded submenu keys. If set, menu will work in controlled manner and `default-expanded-names` won't work.",
    },
    expandIcon: {
      control: false,
      description: "Render function that renders all expand icon.",
      table: {
        disable: true,
      },
    },
    dropdownProps: {
      table: {
        disable: true,
      },
    },
    iconSize: {
      description: "The icon size when menu is not collapsed.",
      table: {
        disable: true,
      },
    },
    indent: {
      description: "The indent of menu.",
      table: {
        disable: true,
      },
    },
    inverted: {
      description: "Use inverted style.",
      table: {
        disable: true,
      },
    },
    gap: {
      control: "text",
      description: "Gap between menu items when `mode` is horizontal.",
    },

    keyField: {
      control: "text",
      description: "Field name of key",
      table: {
        disable: true,
      },
    },
    labelField: {
      control: "text",
      description: "Field name of label.",
      table: {
        disable: true,
      },
    },

    nodeProps: {
      control: false,
      description: "Node's DOM attrs generator.",
      table: {
        disable: true,
      },
    },
    mode: {
      control: "inline-radio",
      options: ["vertical", "horizontal"],
      description: "Menu layout.",
    },
    dropdownPlacement: {
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

    renderExtra: {
      control: false,
      description: "Render function that renders all extras.",
      table: {
        disable: true,
      },
    },
    renderIcon: {
      control: false,
      description: "Render function that renders all icons.",
      table: {
        disable: true,
      },
    },
    renderLabel: {
      control: false,
      description: "Render function that renders all labels.",
      table: {
        disable: true,
      },
    },
    responsive: {
      description:
        "Whether to collapsed menu items that overflows menu. Only work for menu with `mode='horizontal`",
      table: {
        disable: true,
      },
    },
    rootIndent: {
      description:
        "The indent of menu's first level children. If not set, menu will use `indent` in place of it.",
      table: {
        disable: true,
      },
    },
    value: {
      control: "text",
      description: "The selected item key of the menu.",
      table: {
        disable: true,
      },
    },
    watchProps: {
      table: {
        disable: true,
      },
    },
    themeOverrides: {
      description:
        'Progress component style overrides. Check the <a href="https://www.naiveui.com/en-US/theme" target="_blank">Theme</a> for more options.',
    },

    //  menu items props
    disabled: {
      control: "boolean",
      description: "Whether to disable the menu item.",
      table: {
        category: "Menu Item Props",
      },
    },
    key: {
      control: "text",
      description: "The identifier of the menu item.",
      table: {
        category: "Menu Item Props",
      },
    },
    label: {
      control: "text",
      description: "Menu item label.",
      table: {
        category: "Menu Item Props",
      },
    },

    show: {
      control: "boolean",
      description: "Whether to show the menu item.",
      table: {
        category: "Menu Item Props",
      },
    },

    type: {
      control: "select",
      options: ["default", "divider"],
      description: "The type of the menu item.",
      table: {
        category: "Menu Item Props",
      },
    },
    props: {
      control: false,
      description: "Attributes of the divider.",
      table: {
        category: "Menu Item Props",
      },
    },

    //  menu items slots
    children: {
      control: false,
      description: "Slots for the child items of the menu.",
      table: {
        category: "Menu Item Slots",
      },
    },
    icon: {
      control: false,
      description: "Slots for the child item icon",
      table: {
        category: "Menu Item Slots",
      },
    },
    //  expose
    accordion: {
      table: {
        disable: true,
      },
    },
    defaultExpandAll: {
      table: {
        disable: true,
      },
    },
    defaultExpandedKeys: {
      table: {
        disable: true,
      },
    },
    defaultValue: {
      table: {
        disable: true,
      },
    },
    disabledField: {
      table: {
        disable: true,
      },
    },
    collapsedIconSize: {
      table: {
        disable: true,
      },
    },
    collapsedWidth: {
      table: {
        disable: true,
      },
    },
    collapsed: {
      table: {
        disable: true,
      },
    },
    childrenField: {
      table: {
        disable: true,
      },
    },
    slotData: {
      table: {
        disable: true,
      },
    },
    menu: {
      table: {
        disable: true,
      },
    },
  },

  parameters: {
    docs: {
      source: {
        code: `
          <BaseMenuCustom
         :mode="args.mode"
         :gap="args.gap"
         :dropdown-placement="args.dropdownPlacement"
         :theme-overrides="args.themeOverrides"
      >
         <base-menu-item
            :label="args.label"
            :disabled="args.disabled"
            :key="args.key"
            :show="args.show"
         >
            <template #icon>
               <base-icon size="18">translate</base-icon>
            </template>
            <template #children>
               <base-menu-item label="Arabiska" key="arabiska">
                  Arabiska
               </base-menu-item>
               <base-menu-item key="klingon">Klingon</base-menu-item>
            </template>
         </base-menu-item>

        <base-menu-item :type="args.type" :props=args.type :show="args.show" :key="args.key" />

        <base-menu-item label="Pinball 1973" key="pinball - 1973">
          <template #children>
            <base-menu-item label="Sandwich" key="sandwich" type="group">
              <template #children>
                <base-menu-item label="Horizon rises" key="horizon"/>
                <base-menu-item type="divider" />
                <base-menu-item label="Vertison" key="Vertison">
                  <template #children>
                    <base-menu-item label="First" key="first"/>
                    <base-menu-item
                      label="Verizon"
                      key="Verizon"
                    />
                  </template>
                </base-menu-item>
              </template>
            </base-menu-item>
            <base-menu-item
              label="The past increases. The future recedes."
              key="past"
            ></base-menu-item>
          </template>
        </base-menu-item>
        <base-menu-item
          label="A Wild Sheep Chase"
          key="a - wild - sheep - chase"
          @click="() => console.log('A Wild Sheep Chase')"
        >
        </base-menu-item>
        <base-menu-item key="drop-down">
          <BaseDropdown trigger="click" placement="bottom">
            <div>Dropdown</div>
            <template #dropdown>
              <base-dropdown-item key="change-edit-booking">
                <template #icon>
                  <base-icon :filled="false" :size="18">edit</base-icon>
                </template>
                Edit booking
              </base-dropdown-item>
              <base-dropdown-item key="divider" type="divider">
              </base-dropdown-item>
              <base-dropdown-item key="cancel-booking">
                <template #icon>
                  <base-icon :filled="false" :size="18">cancel</base-icon>
                </template>
                Cancel booking
              </base-dropdown-item>
            </template>
          </BaseDropdown>
        </base-menu-item>
      </BaseMenuCustom>
          `,
      },
    },
  },
};
