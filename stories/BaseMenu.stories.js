import { action } from "@storybook/addon-actions";
import BaseMenu from "../components/base/BaseMenu.vue";

export default {
  title: "Design System/Base Components/Menu",
  component: BaseMenu,
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

export const Menu = {
  render: (args) => ({
    components: {
      BaseMenu,
    },
    setup() {
      const mainMenuOptions = [
        {
          label: "Bookings",
          key: "bookings",
          icon: "settings",
          //  to: "/bookings",
        },
        {
          label: "Menu with Children",
          key: "users",
          icon: "person",
          children: [
            {
              label: "Internal Route",
              key: "internal",
              icon: "verified_user",
              //   to: "/users",
            },
            {
              type: "divider",
            },
            {
              type: "group",
              label: "Group Heading",
              children: [
                {
                  label: "Group Item # 1",
                },
                {
                  label: "Group Item # 2",
                },
              ],
            },
            {
              type: "divider",
            },
            {
              label: "last child",
              key: "external",
              //   href: "http://google.com",
            },
          ],
        },
        {
          label: "SMS",
          key: "sms",
          disabled: false,
          icon: "book",
          onClick: () => console.log("SMS clicked"),
        },
      ];

      return { args, mainMenuOptions };
    },
    methods: {
      updateExpandedKeys: action("update:expanded-keys"),
      updateValue: action("update:value"),
    },
    template: `
      <BaseMenu
         :options="mainMenuOptions"
         :dropdown-placement="args.dropdownPlacement"
         :expanded-keys="args.expandedKeys"
         :expand-icon="args.expandIcon"
         :icon-size="args.iconSize"
         :indent="args.indent"
         :inverted="args.inverted"
         :gap="args.gap"
         :key-field="args.keyField"
         :label-field="args.labelField"
         
         :node-props="args.nodeProps"
         :mode="args.mode"
         :render-extra="args.renderExtra"
         :render-icon="args.renderIcon"
         :render-label="args.renderLabel"
         :responsive="args.responsive"
         :root-indent="args.rootIndent"
         :value="args.value"
         :theme-overrides="args.themeOverrides"
         @update:expanded-keys="updateExpandedKeys"
         @update:value="updateValue"
          />
   `,
  }),

  args: {
    mode: "horizontal",
  },

  argTypes: {
    options: {
      control: false,
      description: "Array of items data of menu",
    },
    expandedKeys: {
      control: false,
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
    iconSize: {
      description: "The icon size when menu is not collapsed.",
    },
    indent: {
      description: "The indent of menu.",
    },
    inverted: {
      description: "Use inverted style.",
    },
    gap: {
      control: "text",
      description: "Gap between menu items when `mode` is horizontal.",
    },

    keyField: {
      control: "text",
      description: "Field name of key",
    },
    labelField: {
      control: "text",
      description: "Field name of label.",
    },

    nodeProps: {
      control: false,
      description: "Node's DOM attrs generator.",
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
    },
    renderIcon: {
      control: false,
      description: "Render function that renders all icons.",
    },
    renderLabel: {
      control: false,
      description: "Render function that renders all labels.",
    },
    responsive: {
      description:
        "Whether to collapsed menu items that overflows menu. Only work for menu with `mode='horizontal`",
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
    },
    // watchProps: {

    // },
    themeOverrides: {
      description:
        'Progress component style overrides. Check the <a href="https://www.naiveui.com/en-US/theme" target="_blank">Theme</a> for more options.',
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
        const mainMenuOptions = [
        {
          label: "Bookings",
          key: "bookings",
          icon: "settings",
          //  to: "/bookings",
        },
        {
          label: "Menu with Children",
          key: "users",
          icon: "person",
          children: [
            {
              label: "Internal Route",
              key: "internal",
              icon: "verified_user",
              //   to: "/users",
            },
            {
              type: "divider",
            },
            {
              type: "group",
              label: "Group Heading",
              children: [
                {
                  label: "Group Item # 1",
                },
                {
                  label: "Group Item # 2",
                },
              ],
            },
            {
              type: "divider",
            },
            {
              label: "last child",
              key: "external",
              //   href: "http://google.com",
            },
          ],
        },
        {
          label: "SMS",
          key: "sms",
          disabled: false,
          icon: "book",
          onClick: () => console.log("SMS clicked"),
        },
      ];

        <BaseMenu
         :options="mainMenuOptions"
         :dropdown-placement="args.dropdownPlacement"
         :expanded-keys="args.expandedKeys"
         :expand-icon="args.expandIcon"
         :icon-size="args.iconSize"
         :indent="args.indent"
         :inverted="args.inverted"
         :gap="args.gap"
         :key-field="args.keyField"
         :label-field="args.labelField"
         :node-props="args.nodeProps"
         :mode="args.mode"
         :render-extra="args.renderExtra"
         :render-icon="args.renderIcon"
         :render-label="args.renderLabel"
         :responsive="args.responsive"
         :value="args.value"
         :theme-overrides="handleThemeOverridesStyle"
         @update:expanded-keys="updateExpandedKeys"
         @update:value="updateValue"
          ></BaseMenu>`,
      },
    },
  },
};
