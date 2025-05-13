import { action } from "@storybook/addon-actions";
import BaseIcon from "../components/base/BaseIcon.vue";
import BasePopover from "../components/base/BasePopover.vue";
import BaseButton from "../components/base/BaseButton.vue";

export default {
  title: "Design System/Base Components/Popover",
  component: BasePopover,
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

export const Popover = {
  render: (args) => ({
    components: {
      BaseIcon,
      BasePopover,
      BaseButton,
    },
    setup() {
      return { args };
    },

    methods: {
      onClickOutside: action("clickoutside"),
      onUpdateShow: action("update:show"),
      onSetShow: action("setShow"),
      onSyncPosition: action("syncPosition"),
    },

    template: `  
      <base-popover
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
         :display-directive="args.displayDirective"
         :duration="args.duration"
         :flip="args.flip"
         :footer-class="args.footerClass"
         :footer-style="args.footerStyle"
         :header-class="args.headerClass"
         :header-style="args.headerStyle"
         :keep-alive-on-hover="args.keepAliveOnHover"
         :overlap="args.overlap"
         :placement="args.placement"
         :raw="args.raw"
         :scrollable="args.scrollable"
         :show-arrow="args.showArrow"
         :show="args.show"
         
         :to="args.to"
         :trigger="args.trigger"
         
         :width="args.width"
         :x="args.x"
         :y="args.y"
         :z-index="args.index"
         :theme-overrides="args.themeOverrides"

         @clickoutside="onClickOutside"
         @update:show="onUpdateShow"
         @setShow="onSetShow"
         @syncPosition="onSyncPosition"
      >
         <template #trigger>
            <span v-if="args['trigger-slot']">{{args['trigger-slot']}}</span>
            <base-button v-else>I'm a Popover </base-button>
         </template>

         <template v-if="args.default" #default>
            {{args.default}}
         </template>

         <template v-if="args.header" #header>
            {{args.header}}
         </template>

         <template v-if="args.footer" #footer>
            {{args.footer}}
         </template>

      </base-popover>
   `,
  }),

  args: {
    default:
      "There are 30 cows in the field and there are 28 chickens. How many didnt?",
  },

  argTypes: {
    animated: {
      description: "Use animation when popping up.",
    },
    arrowPointToCenter: {
      description: "Whether the arrow points to center of the trigger element.",
    },
    arrowClass: {
      control: "text",
      description: "Arrow class of the popover.",
    },
    arrowStyle: {
      description: "Arrow style of the popover.",
    },
    arrowWrapperClass: {
      control: "text",
      description: "Arrow class of the popover wrapper.",
    },
    arrowWrapperStyle: {
      description: "Arrow style of the popover wrapper.",
    },
    contentClass: {
      control: "text",
      description: "Content class of the popover.",
    },
    contentStyle: {
      description: "Content style of the popover.",
    },
    delay: {
      description: "Popover showing delay when trigger is `hover`.",
    },
    disabled: {
      description: "Whether the popover can't be activated.",
    },
    displayDirective: {
      control: "select",
      options: ["if", "show"],
      description:
        "The conditionally render directive to show popover content. if means using `v-if` to render content, show means using `v-show` to render content.",
    },
    duration: {
      description: "Popover vanish delay when trigger is `hover`.",
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
      description: "Footer style of the popover.",
    },
    headerClass: {
      control: "text",
      description: "Header class of the popover.",
    },
    headerStyle: {
      description: "Header style of the popover.",
    },
    keepAliveOnHover: {
      description:
        "Whether to keep popover shown when hover on popover itself with `trigger='hover'`",
    },
    overlap: {
      description: "Overlap trigger element.",
    },
    placement: {
      control: "select",
      description: "Popover placement.",
      options: [
        "top",
        "top-start",
        "top-end",
        "right",
        "right-start",
        "right-end",
        "bottom",
        "bottom-start",
        "bottom-end",
        "left",
        "left-start",
        "left-end",
      ],
    },
    raw: {
      description: "Whether to use no default styles.",
    },
    scrollable: {
      description: "Whether the popover is scrollable.",
    },
    showArrow: {
      description: "Whether to show arrow if set.",
    },
    show: {
      description: "Whether to show popover.",
    },
    title: {
      control: "text",
      description: "Popover title.",
      table: {
        disable: true,
      },
    },
    trigger: {
      control: "select",
      description: "The popover trigger type.",
      options: ["hover", "click", "manual"],
    },
    width: {
      control: "text",
      description:
        "`trigger` means popover's width will follow its trigger's width.",
    },
    x: {
      description:
        "The CSS left pixel value when popover manually positioned (x, y need to be set together).",
    },
    y: {
      description:
        "The CSS top pixel value when popover manually positioned (x, y need to be set together).",
    },
    zIndex: {
      description: "The z-index of the popover.",
    },
    //  slots
    default: {
      control: "text",
      description: "Default slot. The content inside popover.",
    },
    header: {
      control: "text",
      description: "Header slot. The header content of the popover.",
    },
    footer: {
      control: "text",
      description: "Footer slot. The footer content of the popover.",
    },
    "trigger-slot": {
      control: "text",
      description:
        "Trigger slot. The element or component that triggers popover.",
      table: {
        category: "slots",
        defaultValue: {
          summary: "#trigger",
        },
      },
    },

    //  Events
    clickoutside: {
      description: "Callback function triggered when clickoutside.",
    },
    "update:show": {
      description: "Callback on show status changes.	",
    },

    setShow: {
      description: "Set show status in uncontrolled mode.",
    },

    syncPosition: {
      description: "Sync popover position.",
    },
  },
};
