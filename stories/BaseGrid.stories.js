import BaseRow from "../components/base/BaseRow.vue";
import BaseColumn from "../components/base/BaseColumn.vue";
import BaseIcon from "../components/base/BaseIcon.vue";
import "./assets/row-column.css";

export default {
  title: "Design System/Base Components/Grid",
  component: BaseRow,
  tags: ["autodocs"],

  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
    },
    controls: { expanded: true },
  },
};

export const Grid = {
  render: (args) => ({
    components: { BaseRow, BaseColumn, BaseIcon },
    setup() {
      const handleItemResponsive = computed(
        () =>
          //   args.responsive?.length < 1 ? true : args.itemResponsive,
          true,
      );
      const handleResponsive = computed(() =>
        args.responsive?.length < 1 ? "screen" : args.responsive,
      );

      const defaultLabel = computed(() => args.default);

      return { args, handleResponsive, handleItemResponsive, defaultLabel };
    },

    template: `
            <base-row
            :cols="args.cols"
            :collapsed="args.collapsed"
            :collapsed-rows="args.collapsedRows"
            :layout-shift-disabled="args.layoutShiftDisabled"
            :responsive="args.responsive"
            :item-responsive="args.itemResponsive"
            :x-gap="args.xGap"
            :y-gap="args.yGap"
            >  
               <base-column
                  :xs="args.xs"
                  :sm="args.sm"
                  :md="args.md"
                  :lg="args.lg"
                  :xl="args.xl"
                  :xxl="args.xxl"

                  :offset-xxl="args['offset-xxl']"
                  :offset-xl="args['offset-xl']"
                  :offset-lg="args['offset-lg']"
                  :offset-md="args['offset-md']"
                  :offset-sm="args['offset-sm']"
                  :offset-xs="args['offset-xs']"
                  
                  :span="args.span"
                  :offset="args.offset"
                  :suffix="args.suffix"
                  >
                  <template #default >
                     <div class="green">
                        <span>
                           {{defaultLabel}}
                        </span>
                     </div>
                  </template>
               </base-column>
               <base-column :md="1" :sm="1" :xs="1">
                  <div class="light-green">2</div>
               </base-column>
               <base-column :md="1" :sm="1" :xs="1">
                  <div class="green">Third</div>
               </base-column>
               <base-column>
                  <div class="light-green">4</div>
               </base-column>
            </base-row>
         `,
  }),

  decorators: [
    () => ({
      template: `<div style="border: 1px solid #ededed;"><story/></div>`,
    }),
  ],

  args: {
    default: "Responsiveness here..",
    yGap: 0,
    xGap: 20,
    cols: 8,
    responsive: "screen",
    itemResponsive: true,
    xxl: "8",
    xl: "2",
    lg: "10",
    md: "4",
    sm: "0",
    xs: "8",
    "offset-lg": 1,
    "offset-sm": 2,
  },

  argTypes: {
    default: {
      description:
        "Default prop is used to set the default value for the grid column.",
      table: {
        category: "common slot",
      },
    },
    xs: {
      control: "text",
      description:
        "The `xs` property defines the number of columns an element spans in a grid layout on `extra-small` devices. Acceptable values include a specific `number of columns`, `0` to hide the element at this breakpoint. To activate this feature, set `item-responsive` to `true`.",
      table: {
        category: "column props",
      },
    },
    sm: {
      control: "text",
      description:
        "The `sm` property defines the number of columns an element spans in a grid layout on `small` devices. Acceptable values include a specific `number of columns`, `0` to hide the element at this breakpoint. To activate this feature, set `item-responsive` to `true`.",
      table: {
        category: "column props",
      },
    },
    md: {
      control: "text",
      description:
        "The `md` property defines the number of columns an element spans in a grid layout on `medium` devices. Acceptable values include a specific `number of columns`, `0` to hide the element at this breakpoint. To activate this feature, set `item-responsive` to `true`.",
      table: {
        category: "column props",
      },
    },
    lg: {
      control: "text",
      description:
        "The `lg` property defines the number of columns an element spans in a grid layout on `large` devices. Acceptable values include a specific `number of columns`, `0` to hide the element at this breakpoint. To activate this feature, set `item-responsive` to `true`.",
      table: {
        category: "column props",
      },
    },
    xl: {
      control: "text",
      description:
        "The `xl` property defines the number of columns an element spans in a grid layout on `extra-large` devices. Acceptable values include a specific `number of columns`, `0` to hide the element at this breakpoint. To activate this feature, set `item-responsive` to `true`.",
      table: {
        category: "column props",
      },
    },
    xxl: {
      control: "text",
      description:
        "The `xxl` property defines the number of columns an element spans in a grid layout on `extra-extra-large` devices. Acceptable values include a specific `number of columns`, `0` to hide the element at this breakpoint. To activate this feature, set `item-responsive` to `true`.",
      table: {
        category: "column props",
      },
    },

    "offset-xs": {
      control: "number",
      description:
        "Defines the number of columns to `offset` at `xs` breakpoints. Enable this feature by setting `item-responsive` to `true`.",
      table: {
        category: "column props",
      },
    },
    "offset-sm": {
      control: "number",
      description:
        "Defines the number of columns to `offset` at `sm` breakpoints. Enable this feature by setting `item-responsive` to `true`.",
      table: {
        category: "column props",
      },
    },
    "offset-md": {
      control: "number",
      description:
        "Defines the number of columns to `offset` at `md` breakpoints. Enable this feature by setting `item-responsive` to `true`.",
      table: {
        category: "column props",
      },
    },
    "offset-lg": {
      control: "number",
      description:
        "Defines the number of columns to `offset` at `lg` breakpoints. Enable this feature by setting `item-responsive` to `true`.",
      table: {
        category: "column props",
      },
    },
    "offset-xl": {
      control: "number",
      description:
        "Defines the number of columns to `offset` at `xl` breakpoints. Enable this feature by setting `item-responsive` to `true`.",
      table: {
        category: "column props",
      },
    },
    "offset-xxl": {
      control: "number",
      description:
        "Defines the number of columns to `offset` at `xxl` breakpoints. Enable this feature by setting `item-responsive` to `true`.",
      table: {
        category: "column props",
      },
    },

    span: {
      control: "number",
      description:
        "The 'span' property in a grid layout determines how many columns an element should span across, adjusting its width accordingly across different screen sizes. Set `item-responsive` to `false` to enable this feature.",
      table: {
        category: "column props",
      },
    },
    offset: {
      control: "number",
      description:
        "Offset prop is used to set the offset for the grid column. Set `item-responsive` to `false` to enable this feature.",
      table: {
        category: "column props",
      },
    },
    suffix: {
      control: "boolean",
      description: "Suffix prop is used to set the suffix for the grid column.",
      table: {
        category: "column props",
      },
    },

    // row props
    cols: {
      description:
        "Cols prop is used to set the number of columns in the grid.",
      table: {
        category: "row props",
      },
    },
    collapsed: {
      description: "Collapsed prop is used to collapse the grid columns.",
      table: {
        category: "row props",
      },
    },
    collapsedRows: {
      description:
        "The 'collapsed-rows' property specifies the default number of rows that are displayed. The default value is set to 1. This property is used to control how many rows are visible initially before any user interaction or expansion.",
      table: {
        category: "row props",
      },
    },
    layoutShiftDisabled: {
      description:
        "By default, `n-grid` will compute grid content based on window size and container size. This would cause 2 side effects: Content may shift in SSR mode; Render items has layout shift and it would influence performance slightly. If you don't need any responsive functionality, you can use `layout-shift-disabled` to get rid of side effects of it. Please note that set `layout-shift-disabled` will disabled all responsive functionality of `n-grid` and `suffix`, `offset` of `n-grid-item`.",
      table: {
        category: "row props",
      },
    },
    responsive: {
      control: "radio",
      options: ["screen", "self"],
      description:
        'Responsive prop is used to set the breakpoint for the grid. If the value is set to "screen" then the grid will be responsive to the screen size. If the value is set to "self" then the grid will be responsive to the parent container size.',
      table: {
        category: "row props",
      },
    },
    xGap: {
      control: "number",
      description:
        "X Gap prop is used to set the gap between the grid columns.",
      table: {
        category: "row props",
      },
    },
    yGap: {
      control: "number",
      description: "Y Gap prop is used to set the gap between the grid rows.",
      table: {
        category: "row props",
      },
    },

    itemResponsive: {
      description:
        'Item responsive prop is used to set the breakpoint for the grid item. If the value is set to "screen" then the grid item will be responsive to the screen size. If the value is set to "self" then the grid item will be responsive to the parent container size. If the value is set to "none" then the grid item will not be responsive.',
      table: {
        category: "row props",
      },
    },
  },
  parameters: {
    docs: {
      source: {
        code: `
        <base-row
            :cols="args.cols"
            :collapsed="args.collapsed"
            :collapsed-rows="args.collapsedRows"
            :layout-shift-disabled="args.layoutShiftDisabled"
            :responsive="args.responsive"
            :item-responsive="args.itemResponsive"
            :x-gap="args.xGap"
            :y-gap="args.yGap"
            >  
               <base-column
                  :xs="args.xs"
                  :sm="args.sm"
                  :md="args.md"
                  :lg="args.lg"
                  :xl="args.xl"
                  :xxl="args.xxl"

                  :offset-xxl="args['offset-xxl']"
                  :offset-xl="args['offset-xl']"
                  :offset-lg="args['offset-lg']"
                  :offset-md="args['offset-md']"
                  :offset-sm="args['offset-sm']"
                  :offset-xs="args['offset-xs']"
                  
                  :span="args.span"
                  :offset="args.offset"
                  :suffix="args.suffix"
                  >
                  <template #default >
                     <div class="green">
                        <span>
                           {{defaultLabel}}
                        </span>
                     </div>
                  </template>
               </base-column>
               <base-column :md="1" :sm="1" :xs="1">
                  <div class="light-green">2</div>
               </base-column>
               <base-column>
                  <div class="green">Third</div>
               </base-column>
               <base-column>
                  <div class="light-green">4</div>
               </base-column>
            </base-row>
          `,
      },
    },
  },
};
