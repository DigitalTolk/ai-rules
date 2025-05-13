import BaseMetric from "../components/base/BaseMetric.vue";
import BaseIcon from "../components/base/BaseIcon.vue";
import BaseSpace from "../components/base/BaseSpace.vue";
import BaseButton from "../components/base/BaseButton.vue";

export default {
  title: "Design System/Base Components/Metric",
  component: BaseMetric,
  tags: ["autodocs"],

  parameters: {
    layout: "centered",
    controls: { expanded: true },
    backgrounds: {
      default: "light",
    },
  },
};

export const Metric = {
  render: (args) => ({
    components: { BaseMetric, BaseIcon, BaseSpace, BaseButton },
    setup() {
      return { args };
    },
    template: `
    
            <base-metric
               :title="args.title"
               :title-size="args.titleSize"
               :value="args.value"
               :value-text-size="args.valueTextSize"
               :icon="args.icon"
               :comparison-value="args.comparisonValue"
               :comparison-text="args.comparisonText"
               :menu="args.menu"
               :data="args.data"

               :chartBorderColor="args.chartBorderColor"

               :chartPointHoverBackgroundColor="args.chartPointHoverBackgroundColor"
               :chartPointHoverBorderColor="args.chartPointHoverBorderColor"
               :chartPointHoverBorderWidth="args.chartPointHoverBorderWidth"
               :chartPointRadius="args.chartPointRadius"
               :chartPointHoverRadius="args.chartPointHoverRadius"
               :chartPointStyle="args.chartPointStyle"
               :chartBorderWidth="args.chartBorderWidth"
            >
               <template #icon>
                  <base-icon>{{args.icon}}</base-icon>
               </template>

               <template #footer>
                  <base-space justify="space-between" align="center">
                     <base-icon>settings</base-icon>
                     <base-button ghost type="primary">View Report</base-button>
                  </base-space>
               </template>
            </base-metric>
         `,
  }),
  decorators: [
    () => ({
      template: `<div style="width:450px; margin"><story/></div>`,
    }),
  ],

  args: {
    data: [50, 95, 26, 61, 39, 75, 53, 35, 54, 61, 12, 39, 72, 68, 51, 59],
    title: "Total Revenue",
    value: 45,
    icon: "star",
    comparisonText: "Last Month",
    chartBorderWidth: 2,
    chartPointHoverBackgroundColor: "#d4d4d4",
    chartPointHoverBorderWidth: 2,
    chartPointHoverBorderColor: "#f50f68",
    chartPointHoverRadius: 8,
  },

  argTypes: {
    data: {
      description: "Array of point values for the chart data.",
      //   'Enter data points as a comma-separated string (e.g., "500, 1000, 1500")',
    },
    comparisonValue: {
      description: "The value to compare the main value to.",
    },
    comparisonText: {
      description: "The text to display next to the comparison value.",
    },

    menu: {
      description: "The dropdown menu items.",
    },
    title: {
      control: "text",
      description: "The title of the metric.",
    },
    titleSize: {
      control: "text",
      description: "The title font size of the metric.",
    },
    value: {
      control: "number",
      description: "The main value of the metric.",
    },
    valueTextSize: {
      control: "text",
      description: "The value font size of the metric.",
    },

    //  chart
    chartBorderColor: {
      control: "color",
      description: "The line color of the chart.",
    },

    chartPointHoverBackgroundColor: {
      control: "color",
      description: "Point background color when hovered.",
    },
    chartPointHoverBorderColor: {
      control: "color",
      description: "Point border color when hovered.",
    },
    chartPointHoverBorderWidth: {
      control: "number",
      description: "Border width of point when hovered.",
    },
    chartPointRadius: {
      control: "number",
      description:
        "The radius of the point shape. If set to 0, the point is not rendered.",
    },
    chartPointHoverRadius: {
      control: "number",
      description: "The radius of the point when hovered.",
    },

    chartBorderWidth: {
      control: "number",
      description: "The line width (in pixels).",
    },

    chartPointStyle: {
      control: "select",
      options: [
        "circle",
        "cross",
        "crossRot",
        "dash",
        "line",
        "rect",
        "rectRounded",
        "rectRot",
        "star",
        "triangle",
      ],
      description:
        "Defines the style of the point. Setting it to `false` will hide the point.",
    },

    //  slots
    icon: {
      control: "select",
      options: icons(),
      description: "The icon to display.",
      table: {
        category: "slots",
      },
    },
    footer: {
      control: false,
      description: "Footer slot for additional content.",
      table: {
        category: "slots",
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
