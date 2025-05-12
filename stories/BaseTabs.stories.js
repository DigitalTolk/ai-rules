import { action } from "@storybook/addon-actions";
import BaseTabs from "../components/base/BaseTabs.vue";
import BaseTab from "../components/base/BaseTab.vue";
import BaseTabPane from "../components/base/BaseTabPane.vue";
import BaseIcon from "../components/base/BaseIcon.vue";
import BaseSpace from "../components/base/BaseSpace.vue";

export default {
  title: "Design System/Base Components/Tabs",
  component: BaseTabs,
  tags: ["autodocs"],

  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
    },
    controls: { expanded: true },
  },
};

export const Tab = {
  render: (args) => ({
    components: { BaseTabs, BaseTab, BaseTabPane, BaseIcon, BaseSpace },
    setup() {
      const tabValue = ref("joy");
      return { args, tabValue };
    },

    methods: {
      onAdd: action("add"),
      onClose: action("close"),
      onBeforeLeave: action("before:leave"),
    },

    template: `
         <p>Value: {{tabValue}}</p>   
         <base-tabs
            v-model="tabValue"
            :addable="args.addable"
            :animated="args.animated"
            :closable="args.closable"
            :justify-content="args.justifyContent"
            :size="args.size"
            :pane-class="args.paneClass"
            :pane-style="args.paneStyle"
            :pane-wrapper-class="args.paneWrapperClass"
            :placement="args.placement"
            :tab-style="args.tabStyle"
            :tab-pane="args.tabPane"
            :trigger="args.trigger"
            :type="args.type"
            :value="args.value"
            :theme-overrides="args.themeOverrides"
            @add="onAdd"
            @close="onClose"
            @before:leave="onBeforeLeave"
            >
               <template v-if='args.prefix' #prefix>
                  <base-icon>{{args.prefix}}</base-icon>
               </template>
               <template v-if='args.suffix' #suffix>
                  <base-icon>{{args.suffix}}</base-icon>
               </template>

               <base-tab-pane
                  v-if="args.tabPane"
                  :disabled="args.disabled"
                  :name="args.name"
                  :tab="args.tab"
                  :tab-props="args.tabProps"
               >
                  <template #tab>
                     <base-space>
                        <base-icon>
                           database
                        </base-icon>
                        <div>{{args.tab}}</div>
                     </base-space>
                  </template>
                  <template #default>
                     {{args.default}}
                  </template>
               </base-tab-pane>
               <base-tab-pane
                  v-if="args.tabPane"
                  name="grace"
                  tab="grace"
               >
                  <template #tab>
                     <base-space>
                        <base-icon>
                           library_music
                        </base-icon>
                        <div>Grace</div>
                     </base-space>
                  </template>
                  Grace Space
               </base-tab-pane>
            
               <base-tab
                  v-if="!args.tabPane"
                  name="joy"
                  :disable="args.disabled"
                  :closable="args.closable"
               >
                  <template #default>
                     {{args.default}}
                  </template>
               </base-tab>
               <base-tab
                  v-if="!args.tabPane"
                  name="grace"
                  :disable="args.disabled"
               >
                  <template #default>
                     Grace
                  </template>
               </base-tab>
         </base-tabs>
      `,
  }),
  decorators: [
    () => ({
      template: `<div style="width:500px;background:#fff;padding:10px;"><story/></div>`,
    }),
  ],

  args: {
    default: "Joy Space",
    type: "line",
    name: "joy",
    tab: "joy",
    trigger: "click",
    tabPane: true,
  },

  argTypes: {
    addable: {
      control: "boolean",
      description: 'Add a new tab only if the type is set to "card".',
    },
    animated: {
      control: "boolean",
      description: "Enable animation when switching between tabs.",
    },
    barWidth: {
      table: {
        disable: true,
      },
    },

    defaultValue: {
      table: {
        disable: true,
      },
    },
    justifyContent: {
      control: "select",
      options: [
        "start",
        "center",
        "end",
        "space-around",
        "space-between",
        "space-evenly",
      ],
      description: "Adjust the alignment of the tabs to be justified.",
    },
    modelValue: {
      table: {
        disable: true,
      },
    },
    paneClass: {
      description: "Class of the pane.",
    },
    paneStyle: {
      control: "text",
      description: "Style of the tab pane.",
    },
    paneWrapperClass: {
      description: "Class of the pane warpper.",
    },
    paneWrapperStyle: {
      control: "text",
      description: "Style of the tab pane wrapper.",
    },
    placement: {
      control: "select",
      options: ["top", "right", "bottom", "left"],
      description: "Placement of tabs.",
    },
    paneSlot: {
      control: false,

      description:
        "Slot dedicated for the tab pane. If you want to customize the tab pane, you can use this slot.",
      table: {
        category: "slots",
      },
    },
    prefix: {
      control: "select",
      options: icons(),
      description:
        "Icon or text displayed before the tab label. The current icon is just a sample; you can replace it with text if preferred.",
    },
    suffix: {
      control: "select",
      options: icons(),
      description:
        "Icon or text displayed after the tab label. The current icon is just a sample; you can replace it with text if preferred.",
    },
    size: {
      control: "inline-radio",
      options: ["small", "medium", "large"],
      description: "Size of tabs.",
    },
    tabPane: {
      description: "Whether to use `tab pane` or `tab`.",
    },
    tabStyle: {
      table: {
        disable: true,
      },
    },
    tabsPadding: {
      table: {
        disable: true,
      },
    },
    trigger: {
      control: "radio",
      options: ["hover", "click"],
      description: "Trigger of activating a tab",
    },
    type: {
      control: "inline-radio",
      options: ["bar", "line", "card", "segment"],
      description: "Type of tabs.",
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

    //  tabpane props
    tab: {
      control: "text",
      description: "Tab label.",
      table: {
        category: "tabpane props",
      },
    },
    tabProps: {
      control: "object",
      description: "Tab props.",
      table: {
        category: "tabpane props",
      },
    },

    //  common tabpane and tab props
    name: {
      control: "text",
      description: "Required, the name of the tab.",
      table: {
        category: "tabpane/tab props",
      },
    },
    disabled: {
      control: "text",
      description: "Whether to disable the tabs.",
      table: {
        category: "tabpane/tab props",
      },
    },
    closable: {
      control: "boolean",
      description:
        "Whether to allow the tag to be closed. Only works when the tag's `type` is card",
      table: {
        category: "tabpane/tab props",
      },
    },

    //  common slots
    default: {
      control: "text",
      description:
        "Default content of the tab pane. You can organize your content here.",
      table: {
        category: "slots",
      },
    },
    //  events
    "update:modelValue": {
      table: {
        disable: true,
      },
    },
    add: {
      description: "Callback function triggered when add tag.",
    },
    close: {
      description: "Callback function triggered when close tag.",
    },
    "before:leave": {
      description:
        "Hook function before switching tab. Returning `false` or promise resolving `false` or promise rejection will prevent tab switching.	",
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
