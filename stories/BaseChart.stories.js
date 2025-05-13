import { action } from "@storybook/addon-actions";
import BaseChart from "../components/base/BaseChart.vue";
import BaseLink from "../components/base/BaseLink.vue";
import BaseText from "../components/base/BaseText.vue";
import BaseSpace from "../components/base/BaseSpace.vue";
import BaseRow from "../components/base/BaseRow.vue";
import BaseColumn from "../components/base/BaseColumn.vue";
import BaseTooltip from "../components/base/BaseTooltip.vue";

export default {
  title: "Design System/Base Components/Chart",
  component: BaseChart,
  tags: ["autodocs"],

  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
    },
    controls: { expanded: true },
  },
};

export const Chart = {
  render: (args) => ({
    components: {
      BaseChart,
      BaseLink,
      BaseText,
      BaseSpace,
      BaseRow,
      BaseColumn,
      BaseTooltip,
    },
    setup() {
      const dataDoughnutPie = computed(() => ({
        labels: ["Red", "Blue", "Yellow"],
        datasets: [
          {
            label: "My First Dataset",
            data: [300, 50, 100, 900],
            backgroundColor: ["#1abc9c", "#2980b9", "#8e44ad", "#f39c12"],
            hoverOffset: 4,
          },
        ],
      }));

      const doughnutPieOption = computed(() => ({
        cutout: 15,
      }));

      const customDoughnutPieOption = computed(() => ({
        ratation: 30,
        circumference: 160,
      }));

      const dataBar = computed(() => ({
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 43, 35, 22, 73],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      }));

      const barOptions = computed(() => ({
        indexAxis: "y",
      }));

      const lineCharts = computed(() => ({
        labels: [
          "Avengers Infinity War",
          "Avengers Endgame",
          "Avengers Age of Ultron",
          "Avengers",
          "Iron Man",
          "Captain America: Civil War",
          "pider-Man: Homecoming",
        ],
        datasets: [
          {
            label: "My First Dataset",
            data: [17, 5, 27, 11, 26, 15, 10],
            fill: true,
            backgroundColor: "rgba(75, 192, 192, 0.12)",
            borderColor: "red",
            tension: 0.1,
            pointStyle: "star",
            borderWidth: 1,
          },
        ],
      }));

      const lineOptions = computed(() => ({
        scales: {
          y: {
            beginAtZero: true,
          },
        },

        plugins: {
          legend: {},
          tooltip: {
            backgroundColor: "red",
            xAlign: "center",
            yAlign: "bottom",
          },
        },
      }));
      return {
        args,
        lineCharts,
        lineOptions,
        dataDoughnutPie,
        doughnutPieOption,
        customDoughnutPieOption,
        dataBar,
        barOptions,
      };
    },

    methods: {
      onClick: action("click"),
      onHover: action("hover"),
    },

    template: `
         <base-space :wrap-item="false" vertical :size=50>
            <base-row cols="4" :x-gap="10" :y-gap="50">
            <base-column>
                  <base-space vertical align-items="center" :wrap-item="false">
                     <base-text type="title">
                        Half-Doughnut
                     </base-text>
                     <base-chart
                        type="doughnut"
                        :data="dataDoughnutPie"
                        is-half
                     />
                     <base-tooltip  arrow-point-to-center scrollable>
                        <template #trigger>
                        <base-text>Data</base-text>
                        </template>
                           <pre>data = {{dataDoughnutPie}}</pre>
                     </base-tooltip>
                  </base-space>
               </base-column>
               <base-column>
                  <base-space vertical align-items="center" :wrap-item="false">
                     <base-link to="https://www.chartjs.org/docs/master/charts/doughnut.html">
                        <base-text type="title">
                           Doughnut chart docs
                        </base-text>
                     </base-link>
                     <base-chart
                        type="doughnut"
                        :data="dataDoughnutPie"
                        :options="doughnutPieOption"
                        @click="handleClick"
                     />
                     <base-space>
                        <base-tooltip  arrow-point-to-center scrollable>
                           <template #trigger>
                           <base-text>Data</base-text>
                           </template>
                              <pre>data = {{dataDoughnutPie}}</pre>
                        </base-tooltip>
                        <base-tooltip  arrow-point-to-center scrollable>
                           <template #trigger>
                           <base-text>Options</base-text>
                           </template>
                              <pre>data = {{doughnutPieOption}}</pre>
                        </base-tooltip>
                     </base-space>
                  </base-space>
               </base-column>
               <base-column>
                  <base-space vertical align-items="center" :wrap-item="false">
                     <base-link to="https://www.chartjs.org/docs/master/charts/doughnut.html">
                        <base-text type="title">
                           Pie chart docs
                        </base-text>
                     </base-link>
                     <base-chart type="pie" :data="dataDoughnutPie" @click="handleClick" />
                     <base-tooltip  arrow-point-to-center scrollable>
                        <template #trigger>
                        <base-text>Data</base-text>
                        </template>
                           <pre>data = {{dataDoughnutPie}}</pre>
                     </base-tooltip>
                  </base-space>
               </base-column>
               <base-column>
                  <base-space vertical align-items="center" :wrap-item="false">
                     <base-text type="title">
                        Custom-Pie
                     </base-text>
                     <base-chart
                        type="pie"
                        :data="dataDoughnutPie"
                        :options="customDoughnutPieOption"
                        @click="handleClick"
                     />
                     <base-space>
                        <base-tooltip  arrow-point-to-center scrollable>
                           <template #trigger>
                           <base-text>Data</base-text>
                           </template>
                              <pre>data = {{dataDoughnutPie}}</pre>
                        </base-tooltip>
                        <base-tooltip  arrow-point-to-center scrollable>
                           <template #trigger>
                           <base-text>Options</base-text>
                           </template>
                              <pre>options = {{customDoughnutPieOption}}</pre>
                        </base-tooltip>
                     </base-space>
                  </base-space>
               </base-column>
               <base-column>
                  <base-space vertical align-items="center" :wrap-item="false">
                     <base-link to="https://www.chartjs.org/docs/master/charts/bar.html">
                        <base-text type="title">
                           Bar chart doc
                        </base-text>
                     </base-link>
                     <base-chart type="bar" :data="dataBar" />
                     <base-tooltip  arrow-point-to-center scrollable>
                        <template #trigger>
                        <base-text>Data</base-text>
                        </template>
                           <pre>data = {{dataBar}}</pre>
                     </base-tooltip>
                  </base-space>
               </base-column>
               <base-column>
                  <base-space vertical align-items="center" :wrap-item="false">
                     <base-text type="title">
                           Horizontal Bar
                        </base-text>
                     <base-chart
                        type="bar"
                        :data="dataBar"
                        :options="barOptions"
                        @click="handleClick"
                     />
                     <base-space>
                        <base-tooltip  arrow-point-to-center scrollable>
                           <template #trigger>
                           <base-text>Data</base-text>
                           </template>
                              <pre>data = {{dataBar}}</pre>
                        </base-tooltip>
                        <base-tooltip  arrow-point-to-center scrollable>
                           <template #trigger>
                           <base-text>Options</base-text>
                           </template>
                              <pre>options = {{barOptions}}</pre>
                        </base-tooltip>
                     </base-space>
                  </base-space>

               </base-column>
               <base-column :span="2">
                  <base-space vertical align-items="center" :wrap-item="false">
                     <base-link to="https://www.chartjs.org/docs/master/charts/line.html">
                        <base-text type="title">
                           Line chart doc
                        </base-text>
                     </base-link>
                     <base-chart
                        type="line"
                        :data="lineCharts"
                        :options="lineOptions"
                     ></base-chart>
                     <base-space>
                        <base-tooltip  arrow-point-to-center scrollable>
                           <template #trigger>
                           <base-text>Data</base-text>
                           </template>
                              <pre>data = {{lineCharts}}</pre>
                        </base-tooltip>
                        <base-tooltip  arrow-point-to-center scrollable>
                           <template #trigger>
                           <base-text>Options</base-text>
                           </template>
                              <pre>options = {{lineOptions}}</pre>
                        </base-tooltip>
                     </base-space>
                  </base-space>
               </base-column>
            </base-row>

            <base-space vertical align-items="center" :wrap-item="false" style="width:100%">
               <base-text type="headline"> Test Model</base-text>
               <base-chart
                  :type="args.type"
                  :data="args.data"
                  :options="args.options"
                  :isHalf="args.isHalf"
                  :width="args.width"
                  :height="args.height"
                  :horizontalAlign="args.horizontalAlign"
                  @click="onClick"
                  @hover="onHover"
               >
               </base-chart>
            </base-space>
         </base-space>
      `,
  }),

  decorators: [
    () => ({
      template: `<div style="width:900px;background:#fff;padding:20px;"><story/></div>`,
    }),
  ],

  args: {
    type: "bar",
    data: {
      labels: ["One", "Two", "Three", "Four"],
      datasets: [
        {
          label: "My First Dataset",
          data: [20, 10, 50, 75],
          borderWidth: 1,
          borderColor: "red",
        },
      ],
    },

    options: {
      // indexAxis: "y",
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },

      plugins: {
        legend: {},
        tooltip: {
          backgroundColor: "red",
          xAlign: "center",
          yAlign: "bottom",
        },
      },
    },
    width: "650px",
    height: "500px",
    horizontalAlign: "center",
  },

  argTypes: {
    type: {
      control: "inline-radio",
      options: ["doughnut", "pie", "line", "bar"],
      description: "Chart type.",
    },
    isHalf: {
      description: "Applicable only for `doughnut` and `pie` charts.",
    },
    data: {
      control: "object",
      description:
        "The `data` property of a dataset can be passed in various formats. By default, that`data` is parsed using the associated chart type. <a href='https://www.chartjs.org/docs/master/general/data-structures.html'>Check more details here.</a>",

      table: {
        defaultValue: {
          summary: `
            data: {
               datasets: [{
                  data: [20, 10],
               }],
               labels: ['a', 'b']
            }
               `,
        },
      },
    },
    options: {
      control: "object",
      description:
        "The option context is used to give contextual information when resolving `options`.  <a href='https://www.chartjs.org/docs/master/general/options.html'>Check more details here.</a>",
    },

    horizontalAlign: {
      description: "Chart horizontal alignment.",
    },
    height: {
      description: "Chart height e.g `150px`",
    },
    width: {
      description: "Chart width e.g `150px or 75%`",
    },

    click: {
      control: false,
      description: "Chart clicked callback.",
      table: {
        category: "events",
      },
    },
    hover: {
      control: false,
      description: "Chart hovered callback.",
      table: {
        category: "events",
      },
    },
  },
};
