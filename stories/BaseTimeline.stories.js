import BaseIcon from "../components/base/BaseIcon.vue";
import BaseTimeline from "../components/base/BaseTimeline.vue";
import BaseTimelineItem from "../components/base/BaseTimelineItem.vue";

export default {
  title: "Design System/Base Components/Timeline",
  component: BaseTimeline,
  tags: ["autodocs"],

  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
    },
    controls: { expanded: true },
  },
};

export const Timeline = {
  render: (args) => ({
    components: {
      BaseIcon,
      BaseTimeline,
      BaseTimelineItem,
    },
    setup() {
      return { args };
    },

    template: `
         <base-timeline
            :horizontal="args.horizontal"
            :icon-size="args.iconSize"
            :item-placement="args.itemPlacement"
            :size="args.size"
            :theme-overrides="args.themeOverrides"
         >
            <base-timeline-item
               :align="args.align"
               :color="args.color"
               :content="args.content"
               :line-type="args.lineType"
               :time="args.time"
               :title="args.title"
               :type="args.type"
               :theme-overrides="args.themeOverrides"
            >
               <template v-if="args.icon" #icon>
                  <base-icon size="40">{{args.icon}}</base-icon>
               </template>
               <template v-if="args.header" #header>
                  {{args.header}}
               </template>

               <template v-if="args.default" #default>
                  {{args.default}}
               </template>

               <template v-if="args.footer" #footer>
                  {{args.footer}}
               </template>
            </base-timeline-item>

            <base-timeline-item
               type="success"
               title="Client makes a booking"
               content="success content"
               time="2018-04-03 20:46"
            >
               <template #header>
                  <h2>Client makes a booking</h2>
               </template>
               <p>
                  You tell us the language, day and time required and whether the
                  service is face-to-face or digital. You can make the optional choice
                  of the interpreter's level of competence and gender. Your booking is
                  then confirmed.
               </p>
               <img
                  class="image"
                  width="475"
                  src="https://app.digitaltolk.se/assets/booking-step-1-20769eb3.png"
                  alt="workflow_stage_1_title"
               />
               <template #icon>
                  <base-icon size="60"> stars </base-icon>
               </template>
            </base-timeline-item>
            
            <base-timeline-item
               type="info"
               title="Info"
            >
            </base-timeline-item>
         </base-timeline>
      `,
  }),

  args: {
    itemPlacement: "center",
    header: "Custom timeline header here",
    default: "Custom default content here",
    footer: "Custom timeline footer here",
    icon: "star",
    //  color: "#ce2a5b",
    size: "medium",
    lineType: "dashed",
    align: "right",
    type: "default",
  },

  argTypes: {
    // timeline props
    horizontal: {
      description: "Timeline orientation defaults to vertical.",
      table: {
        category: "Timeline Props",
      },
    },
    iconSize: {
      description: "Size of icon part.",
      table: {
        category: "Timeline Props",
      },
    },
    itemPlacement: {
      control: "select",
      options: ["left", "center", "right"],
      description:
        "Timeline positioning options include left, center, or right.",
      table: {
        category: "Timeline Props",
      },
    },

    size: {
      control: "inline-radio",
      options: ["medium", "large"],
      description: 'Timeline size defaults to "medium".',
      table: {
        category: "Timeline Props",
      },
    },

    //  timeline item props
    align: {
      control: "inline-radio",
      options: ["left", "right"],
      description:
        "Timeline alignment position: either the left or right section.",
      table: {
        category: "Timeline item Props",
      },
    },
    color: {
      control: "color",
      description: "Custom timeline item icon color",
      table: {
        category: "Timeline item Props",
      },
    },
    content: {
      control: "text",
      description:
        "Timeline content will be visible if the default slot is not provided.",
      table: {
        category: "Timeline item Props",
      },
    },
    lineType: {
      control: "select",
      options: ["default", "dashed"],
      description: "Timeline item line type",
      table: {
        category: "Timeline item Props",
      },
    },
    time: {
      control: "text",
      description:
        "Timeline item time will be visible if the footer slot is not provided.",
      table: {
        category: "Timeline item Props",
      },
    },
    title: {
      control: "text",
      description:
        "Timeline title will be visible if the header slot is not provided.",
      table: {
        category: "Timeline item Props",
      },
    },
    type: {
      control: "select",
      options: ["default", "success", "info", "warning", "error"],
      description:
        "Timeline item type. It will be overwritten if `color` is set.",
      table: {
        category: "Timeline item Props",
      },
    },
    themeOverrides: {
      description:
        'Progress component style overrides. Check the <a href="https://www.naiveui.com/en-US/theme" target="_blank">Theme</a> for more options.',
    },
    //  timeline item slots
    default: {
      control: "text",
      description: "Slot for default content in a Timeline item.",
      table: {
        category: "common slot",
      },
    },
    icon: {
      control: "select",
      options: icons(),
      description:
        "Slot content for icon section, icon is used here for sample purposes but you can also provide custom text here and design accordingly",
      table: {
        category: "timeline item slots",
      },
    },
    header: {
      control: "text",
      description: "Slot content for header section",
      table: {
        category: "timeline item slots",
      },
    },
    footer: {
      control: "text",
      description: "Slot content for footer section",
      table: {
        category: "timeline item slots",
      },
    },

    slotData: {
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
