import BasePopconfirm from "../components/base/BasePopconfirm.vue";
import BaseIcon from "../components/base/BaseIcon.vue";
import BaseButton from "../components/base/BaseButton.vue";
import { action } from "@storybook/addon-actions";

export default {
  title: "Design System/Base Components/Popconfirm",
  component: BasePopconfirm,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
    },
    controls: { expanded: true },
  },
};

export const Popconfirm = {
  render: (args) => ({
    components: { BasePopconfirm, BaseIcon, BaseButton },
    setup() {
      return { args };
    },
    methods: {
      onPositiveClick: action("positive-click"),
      onNegativeClick: action("negative-click"),
    },
    template: `
    <base-popconfirm
      :negative-button-props="args.negativeButtonProps"
      :negative-text="args.negativeText"
      :positive-button-props="args.positiveButtonProps"
      :positive-text="args.positiveText"
      :show-icon="args.showIcon"
      :animated="args.animated"
      :arrow-point-to-center="args.arrowPointToCenter"
      :arrow-class="args.arrowClass"
      :arrow-style="args.arrowStyle"
      :arrow-wrapper-class="args.arrowWrapperClass"
      :arrow-wrapper-style="args.arrowWrapperStyle"
      :content-class="args.contentClass"
      :content-style="args.contentStyle"
      :delay="args.delay"
      :disabled="args.disabled"
      :duration="args.duration"
      :flip="args.flip"
      :footer-class="args.footerClass"
      :footer-style="args.footerStyle"
      :header-class="args.headerClass"
      :header-style="args.headerStyle"
      :overlap="args.overlap"
      :placement="args.placement"
      :raw="args.raw"
      :scrollable="args.scrollable"
      :show-arrow="args.showArrow"
      :to="args.to"
      :trigger="args.trigger"
      :width="args.width"
      :z-index="args.index"
      :theme-overrides="args.themeOverrides"
      @negative-click="onNegativeClick"
      @positive-click="onPositiveClick"
    >
         <template v-if="args.icon" #icon>
            <base-icon>stars</base-icon>
         </template>

         <template #trigger>
            <base-button>
               I'm Popconfirm
            </base-button>
         </template>

         <template #default>
            {{args.default}}
         </template>

         <template v-if="args.action" #action>
            {{args.action}}
         </template>

      </base-popconfirm>
  `,
  }),

  args: {
    default: "The dog jumped over the moon and the cow laughed.",
    trigger: "hover",
    negativeText: null,
    positiveText: null,
    placement: "top",
  },

  argTypes: {
    negativeText: {
      control: "text",
      description: "Cancel button text.",
    },
    positiveText: {
      control: "text",
      description: "Confirm button text.",
    },
    showIcon: {
      description: "Whether to show icon.",
    },
    animated: {
      description: "Use animation when popping up.",
    },
    arrowPointToCenter: {
      description: "Whether the arrow points to center of the trigger element.",
    },
    arrowClass: {
      description: "Arrow class of the popover.",
    },
    arrowStyle: {
      description: "Arrow style of the popover.",
    },
    arrowWrapperClass: {
      description: "Arrow class of the popover wrapper.",
    },
    arrowWrapperStyle: {
      description: "Arrow style of the popover wrapper.",
    },

    contentClass: {
      description: "Content class of the popover.",
    },
    contentStyle: {
      description: "Content style of the popover.",
    },
    delay: {
      control: "number",
      description: "Popover showing delay when trigger is `hover`.",
    },
    disabled: {
      description: "Whether the popover can't be activated.",
    },
    displayDirective: {
      control: "inline-radio",
      options: ["if", "show"],
      description:
        "The conditionally render directive to show popover content. `if` means using `v-if` to render content, show means using `v-show` to render content.",
      table: {
        disable: true,
      },
    },
    duration: {
      control: "number",
      description: "Popover vanish delay when trigger is `hover`",
    },
    flip: {
      description:
        "Whether to flip the popover when there is no space for current placement.",
    },
    footerClass: {
      control: "text",
      description: "Footer class of the popover.",
    },

    footerStyle: {
      control: "text",
      description: "Footer style of the popover.",
    },
    headerClass: {
      control: "text",
      description: "Header class of the popover.",
    },
    headerStyle: {
      control: "text",
      description: "Header style of the popover.",
    },
    keepAliveOnHover: {
      description:
        "Whether to keep popover shown when hover on popover itself with `trigger='hover'`.",
      table: {
        disable: true,
      },
    },
    modelValue: {
      table: {
        disable: true,
      },
    },
    overlap: {
      description: "Overlap trigger element.",
    },
    placement: {
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
      description: "Popover placement.",
    },
    raw: {
      description: "Whether to use no default styles.",
    },
    scrollable: {
      description: "Whether the popover's content is scrollable.",
    },
    showArrow: {
      description: "Whether to show arrow if set.",
    },

    title: {
      control: "text",
      description: "Popover title.",
      table: {
        disable: true,
      },
    },
    to: {
      control: "text",
      description:
        "Container node of the popover content. `false` will keep it at trigger container.",
      table: {
        defaultValue: {
          summary: "false",
        },
      },
    },
    trigger: {
      control: "inline-radio",
      options: ["click", "hover", "focus", "manual"],
      description: "The popover trigger type.",
      table: {
        category: "props",
      },
    },
    width: {
      control: "select",
      options: [
        "trigger",
        5,
        10,
        15,
        20,
        25,
        30,
        35,
        40,
        45,
        50,
        55,
        60,
        65,
        70,
        75,
        80,
        85,
        90,
        95,
        100,
      ],
      description:
        "`trigger` means popover's width will follow its trigger's width.",
    },
    x: {
      control: "number",
      description:
        "The CSS `left` pixel value when popover manually positioned (x, y need to be set together).",
      table: {
        disable: true,
      },
    },
    y: {
      control: "number",
      description:
        "The CSS `top` pixel value when popover manually positioned (x, y need to be set together).",
      table: {
        disable: true,
      },
    },
    zIndex: {
      control: "number",
      description: "The z-index of the popover.",
    },
    themeOverrides: {
      description:
        'Progress component style overrides. Check the <a href="https://www.naiveui.com/en-US/theme" target="_blank">Theme</a> for more options.',
    },

    //  events
    "negative-click": {
      control: false,
      description: "Callback of cancel.",
    },
    "positive-click": {
      control: false,
      description: "Callback of confirmation.",
    },
    "update:modelValue": {
      table: {
        disable: true,
      },
    },

    //  slots
    icon: {
      control: "select",
      options: icons(),
      description: "Popconfirm icon. slot.",
    },
    "trigger-slot": {
      control: "text",
      description: "The element or component that triggers popover.",
      table: {
        category: "slots",
        disable: true,
      },
    },
    default: {
      control: "text",
      description: "The content inside popover.",
    },

    action: {
      control: "text",
      description: "Custom action slot.",
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
