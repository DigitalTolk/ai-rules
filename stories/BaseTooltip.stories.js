import { action } from "@storybook/addon-actions";
import BaseTooltip from "../components/base/BaseTooltip.vue";
import BaseIcon from "../components/base/BaseIcon.vue";

export default {
  title: "Design System/Base Components/Tooltip",
  component: BaseTooltip,
  tags: ["autodocs"],

  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
    },
    controls: { expanded: true },
  },
};

export const Tooltip = {
  render: (args) => ({
    components: { BaseTooltip, BaseIcon },
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
         <base-tooltip
            :animated="args.animated"
            :arrow-point-to-center="args.arrowPointToCenter"
            :delay="args.delay"
            :disabled="args.disabled"
            :duration="args.duration"
            :flip="args.flip"
            :footer-style="args.footerStyle"
            :header-style="args.headerStyle"
            :keep-alive-on-hover="args.keepAliveOnHover"
            :overlap="args.overlap"
            :placement="args.placement"
            :raw="args.raw"
            :scrollable="args.scrollable"
            :show-arrow="args.showArrow"
            :show="args.show"
            :title="args.title"
            :trigger="args.trigger"
            :width="args.width"
            
            @clickoutside="onClickOutside"
            @update:show="onUpdateShow"
            @setShow="onSetShow"
            @syncPosition="onSyncPosition"
            >
               <template #trigger>
                  <base-icon>info</base-icon>               
               </template>
         
               <template v-if="args.footer" #footer>
                  {{args.footer}}
               </template>
               <template v-if="args.header" #header>
                  {{args.header}}
               </template>
               <template #default>
                  <div v-if="args.default">
                     {{args.default}}
                  </div>
                  <div v-else>
                     It walks like a popover, quacks like a popover but looks a bit different from popover.
                  </div>
               </template>
            </base-tooltip>
         `,
  }),
  decorators: [
    () => ({
      template: `<div style="width:200px;background:#fff;padding:10px; text-align:center;"><story/></div>`,
    }),
  ],

  args: {
    animated: true,
    duration: 100,
    trigger: "hover",
    overlap: false,
  },

  argTypes: {
    delay: {
      description: "Delay in ms before showing the tooltip",
    },
    duration: {
      description: "Duration in ms before hiding the tooltip",
    },
    flip: {
      description: "Flip the tooltip if it overflows the viewport",
    },
    footerStyle: {
      control: "text",
      description: "Footer style of the popover.",
    },
    headerStyle: {
      control: "text",
      description: "Header style of the popover.",
    },
    overlap: {
      description: "Overlap the tooltip with the trigger element",
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
    },
    show: {
      description: "Show/hide the tooltip",
    },
    showArrow: {
      description: "Show arrow on the tooltip",
    },
    trigger: {
      control: "select",
      options: ["hover", "click"],
    },

    width: {
      control: "number",
    },

    arrowStyle: {
      table: {
        disable: true,
      },
    },
    displayDirective: {
      table: {
        disable: true,
      },
    },
    contentStyle: {
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
    themeOverrides: {
      table: {
        disable: true,
      },
    },
    slotName: {
      table: {
        disable: true,
      },
    },
    //  slots
    default: {
      control: "text",
      description: "Content of the tooltip",
      table: {
        category: "slots",
      },
    },
    footer: {
      control: "text",
      description: "Footer of the tooltip",
      table: {
        category: "slots",
      },
    },
    header: {
      control: "text",
      description: "Header of the tooltip",
      table: {
        category: "slots",
      },
    },
    //  events
    clickoutside: {
      description: "Callback function triggered when clickoutside.",
    },
    setShow: {
      description: "Set show status in uncontrolled mode.",
    },
    syncPosition: {
      description: "Sync popover position.",
    },
    "update:show": {
      description: "Callback on show status changes.",
    },
  },
};
