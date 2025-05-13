import BaseIcon from "../components/base/BaseIcon.vue";
import BaseButton from "../components/base/BaseButton.vue";
import BaseProgress from "../components/base/BaseProgress.vue";

export default {
  title: "Design System/Base Components/Progress",
  component: BaseProgress,
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

export const Progress = {
  render: (args) => ({
    components: {
      BaseIcon,
      BaseButton,
      BaseProgress,
    },
    setup() {
      return { args };
    },
    template: `  
      <base-progress
         :border-radius="args.borderRadius"
         :circle-gap="args.circleGap"
         :color="args.color"
         :fill-border-radius="args.fillBorderRadius"
         :gap-degree="args.gapDegree"
         :gap-offset-degree="args.gapOffsetDegree"
         :height="args.height"
         :indicator-placement="args.indicatorPlacement"
         :indicator-text-color="args.indicatorTextColor"
         :offset-degree="args.offsetDegress"
         :percentage="args.percentage"
         :processing="args.processing"
         :rail-color="args.railColor"
         :rail-style="args.railStyle"
         :show-indicator="args.showIndicator"
         :status="args.status"
         :stroke-width="args.strokeWidth"
         :type="args.type"
         :unit="args.unit"
         :width="args.width"
         :theme-overrides="args.themeOverrides"
      >
            <template #default>{{args.default}}</template>
         </base-progress>
   `,
  }),
  decorators: [
    () => ({
      template: `<div style="width:700px;display:flex;justify-content:center;"><story/></div>`,
    }),
  ],

  args: {
    gapDegree: 0,
    type: "line",
    percentage: [10],
    railColor: [],
    railStyle: [],
  },

  argTypes: {
    borderRadius: {
      control: "text",
      description:
        "`line` typed progress's border-radius. Keep half of default height if not passed.",
    },
    circleGap: {
      control: "number",
      description:
        "The gap between circles when type is `multiple-circle`, suppose viewbox size is 100",
    },
    color: {
      control: "text",
      description:
        "The color of the progress bar can be specified as a single color value or an array of colors.",
      table: {
        defaultValue: {
          summary: "[]",
        },
      },
    },
    fillBorderRadius: {
      control: "text",
      description:
        "`line` typed progress's fill's border-radius. Keep border-radius if not passed.",
      table: {
        defaultValue: {
          summary: "ex. fill-border-radius='12px 0 12px 0'",
        },
      },
    },
    gapDegree: {
      control: "number",
      description: "The gap degree of half circle, `0 ~ 360`.",
    },
    gapOffsetDegree: {
      control: "number",
      description:
        "The gap offset degree. This option is only available when the type is set to `circle`.",
    },
    height: {
      description:
        "`line` typed progress's height. Keep default height if not passed.",
    },
    indicatorPlacement: {
      control: "inline-radio",
      options: ["inside", "outside"],
      description: "The position of the indicator",
    },
    indicatorTextColor: {
      control: "text",
      description: "The color of the indicator text",
    },
    offsetDegress: {
      control: "number",
      description:
        "Offset degree of circular progress, only works with `circle` typed progress.",
    },
    percentage: {
      control: "object",
      description: "The percentage of the progress bar",
    },
    processing: {
      control: "boolean",
      description: "The processing state of the progress bar",
    },
    railColor: {
      control: "object",
      description: "The color of the rail",
      table: {
        defaultValue: {
          summary: "[#color, #color1]",
        },
      },
    },
    railStyle: {
      control: "object",
      description: "The style of the rail",
      table: {
        defaultValue: {
          summary: "{ stroke: '#color', opacity: 0.1 }",
        },
      },
    },
    showIndicator: {
      description:
        "Indicate whether to display the content inside the progress bar, serving as the indicator.",
    },
    status: {
      control: "inline-radio",
      options: ["default", "success", "error", "warning", "info"],
      description: "The status of the progress bar",
    },
    strokeWidth: {
      description: "The stroke width of the progress bar",
    },
    type: {
      control: "inline-radio",
      options: ["line", "circle", "multiple-circle", "dashboard"],
      description: "The type of the progress bar",
    },
    unit: {
      control: "text",
      description: "The unit of the progress bar",
    },
    width: {
      control: "text",
      description:
        "The width of the circle, applicable primarily for progress types `circle` and `multiple-circle`.",
    },
    default: {
      control: "text",
      description: "Any content to be displayed inside the progress bar",
    },
    themeOverrides: {
      description:
        'Progress component style overrides. Check the <a href="https://www.naiveui.com/en-US/theme" target="_blank">Theme</a> for more options.',
    },
  },
};
