import { action } from "@storybook/addon-actions";
import BaseIcon from "../components/base/BaseIcon.vue";
import BaseAlert from "../components/base/BaseAlert.vue";
import BaseButton from "../components/base/BaseButton.vue";

export default {
  title: "Design System/Base Components/Alert",
  component: BaseAlert,
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

export const Alert = {
  render: (args) => ({
    components: {
      BaseIcon,
      BaseAlert,
      BaseButton,
    },
    setup() {
      return { args };
    },

    methods: {
      onAfterLeave: action("after-leave"),
      onClose: action("close"),
    },

    template: `  
      <base-alert
         :bordered="args.bordered"
         :closable="args.closable"
         :show-icon="args.showIcon"
         :title="args.title"
         :type="args.type"
         :theme-overrides="args.themeOverrides"
         @after-leave="onAfterLeave"
         @close="onClose"
      >
         <template #default>
            {{args.default}}
         </template>
         <template v-if="args.header" #header>
            {{args.header}}
         </template>

         <template #action>
            <base-button>Action 1</base-button>
            <base-button ghost>Action 2</base-button>
         </template>

         <template #icon>
            <base-icon>{{args.icon}}</base-icon>
         </template>
      </base-alert>
   `,
  }),

  decorators: [
    () => ({
      template: `<div style="width:500px"><story/></div>`,
    }),
  ],

  args: {
    icon: "check_circle",
    default:
      "Leave it till tomorrow to unpack my case. Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    type: "default",
  },

  argTypes: {
    bordered: {
      description: "Whether the alert can show border.",
    },
    closable: {
      description: "Whether the alert can be closed.",
    },
    showIcon: {
      description: "Whether to show the icon of alert.",
    },
    title: {
      description: "Title of the alert.",
    },
    ghost: {
      description:
        "Whether to remove the background color and border of the alert.",
    },
    type: {
      control: "inline-radio",
      options: ["default", "success", "info", "warning", "error"],
      description: "Type of the alert.",
    },
    themeOverrides: {
      description:
        'Progress component style overrides. Check the <a href="https://www.naiveui.com/en-US/theme" target="_blank">Theme</a> for more options.',
    },
    // slots
    icon: {
      control: "select",
      options: icons(),
      description: "Icon displayed in the alert.",
    },
    default: {
      control: "text",
      default: "Default slot content for the alert.",
      description: "The content of the alert.",
    },
    header: {
      control: "text",
      default: "Header slot content for the alert.",
      description: "The content placed in the alert header.",
    },
    action: {
      control: "text",
      default: "Action slot content for the alert.",
      description: "Slot for custom content where action buttons are located.",
    },
    //  events
    close: {
      description:
        "The callback function executed when the close icon is clicked.",
    },
    "after-leave": {
      description: "Callback function executed when the alert disappears.",
    },
  },

  parameters: {
    docs: {
      source: {
        code: `
            <base-alert
            :bordered="args.bordered"
            :closable="args.closable"
            :show-icon="args.showIcon"
            :title="args.title"
            :type="args.type"
            :theme-overrides="args.themeOverrides"
            @after-leave="onAfterLeave"
            @close="onClose"
         >
            <template #default>
               {{args.default}}
            </template>
            <template v-if="args.header" #header>
               {{args.header}}
            </template>

            <template #action>
               <base-button>Action 1</base-button>
               <base-button ghost>Action 2</base-button>
            </template>

            <template #icon>
               <base-icon>{{args.icon}}</base-icon>
            </template>
         </base-alert>
         `,
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
    "link",
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
