import { action } from "@storybook/addon-actions";
import BaseTag from "../components/base/BaseTag.vue";
import BaseIcon from "../components/base/BaseIcon.vue";
import BaseAvatar from "../components/base/BaseAvatar.vue";

export default {
  title: "Design System/Base Components/Tag",
  component: BaseTag,
  tags: ["autodocs"],

  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
    },
    controls: { expanded: true },
  },
};

export const Tag = {
  render: (args) => ({
    components: { BaseTag, BaseIcon, BaseAvatar },
    setup() {
      const tagValue = ref(false);
      const handleClassType = computed(() => `n-tag-type--${args.type}`);
      return { args, handleClassType, tagValue };
    },

    methods: {
      onClose: action("close"),
    },

    template: `
         <base-tag
            v-model="tagValue"            
            :class="handleClassType"
            :bordered="args.bordered"
            :checkable="args.checkable"
            :closable="args.closable"
            :color="args.color"
            :disabled="args.disabled"
            :round="args.round"
            :size="args.size"
            :strong="args.strong"
            :trigger-click-on-close="args.triggerClickOnClose"
            :type="args.type"
            :theme-overrides="args.themeOverrides"
            @close="onClose"
         >
            <template v-if="args.icon" #icon>
               <base-icon size="20">{{args.icon}}</base-icon>
            </template>
            <template #default>
               {{args.default}}
            </template>
            <template v-if="args.avatar" #avatar>
               <base-avatar size="medium" :fallback-icon="args.avatar" :round="false" />
            </template>
         </base-tag>
      `,
  }),

  decorators: [
    () => ({
      template: `<div style="width:250px;background:#fff;padding:10px;text-align:center;"><story/></div>`,
    }),
  ],

  args: {
    size: "medium",
    type: "default",
    icon: "star",
    default: "Tag",
  },

  argTypes: {
    bordered: {
      description: "Whether the tag has border.",
    },
    checkable: {
      description:
        "Whether the tag is checkable. Note: this nullifies the type property.",
    },
    checked: {
      table: {
        disable: true,
      },
    },

    closable: {
      description: "Whether the tag shows a close button.",
    },
    color: {
      control: "object",
      description:
        "Color of the tag. Note: this will override the type property's color.",
      table: {
        defaultValue: {
          summary:
            "{ color?: string, borderColor?: string, textColor?: string }",
        },
      },
    },
    disabled: {
      description: "Whether the tag is disabled.",
    },
    modelValue: {
      table: {
        disable: true,
      },
    },
    round: {
      description: "Whether the tag has rounded corners.",
    },
    size: {
      control: "inline-radio",
      options: ["small", "medium", "large"],
      description: "Size of the tag.",
    },
    strong: {
      description: "Whether to use strong text",
    },
    type: {
      control: "inline-radio",
      options: ["default", "primary", "info", "success", "warning", "error"],
      description: "Type of the tag.",
    },
    triggerClickOnClose: {
      description: "Whether the tag triggers click on close.",
    },
    themeOverrides: {
      description:
        'Progress component style overrides. Check the <a href="https://www.naiveui.com/en-US/theme" target="_blank">Theme</a> for more options.',
    },
    slotData: {
      table: {
        disable: true,
      },
    },
    //  slots
    avatar: {
      control: "select",
      options: icons(),
      description: "Avatar slot, replaces the icon slot if not provided.",
      table: {
        category: "slots",
      },
    },
    default: {
      control: "text",
      description: "Default slot for tag's content.",
      table: {
        category: "slots",
      },
    },
    icon: {
      control: "select",
      options: icons(),
      description: "Prepend slot for icons",
      table: {
        category: "slots",
      },
    },
    //  events
    close: {
      description: "Close clicked callback.",
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
