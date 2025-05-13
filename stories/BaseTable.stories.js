import { action } from "@storybook/addon-actions";
import BaseIcon from "../components/base/BaseIcon.vue";
import BaseButton from "../components/base/BaseButton.vue";
import BaseTable from "../components/base/BaseTable.vue";
import BaseTableColumn from "../components/base/BaseTableColumn.vue";
import BaseSpace from "../components/base/BaseSpace.vue";
import BaseTextField from "../components/base/BaseTextField.vue";
import BaseTag from "../components/base/BaseTag.vue";
import BasePopover from "../components/base/BasePopover.vue";
import "./assets/table.css";

export default {
  title: "Design System/Base Components/Table",
  component: BaseTable,
  tags: ["autodocs"],

  parameters: {},
};

export const Table = {
  render: (args) => ({
    components: {
      BaseIcon,
      BaseButton,
      BaseTable,
      BaseTableColumn,
      BaseSpace,
      BaseTextField,
      BaseTag,
      BasePopover,
    },
    setup() {
      const tableData = ref([
        {
          id: 1000,
          name: "John Brown",
          age: 38,
          address: "New York No. 1 Lake Park",
          tags: ["Cool", "Owner"],
        },
        {
          id: 1,
          name: "Jim Green",
          age: 42,
          address: "London No. 1 Lake Park",
          tags: ["wow"],
        },
      ]);
      const handleSelectionDisabled = (row) => {
        return row.name === "Faisal";
      };
      const getColSpan = () => {
        return args.colSpan;
      };

      //  METHODS
      const handleEdit = (v) => {
        console.log(v, "handle Edit");
      };
      const handleDelete = (v) => {
        console.log(v, "handle Delete");
      };

      const handleUpdateCell = (v) => {
        args.data[v?.rowIndex][v?.key] = v?.value;
      };

      const handleColumnIsDisabled = () => {
        return args.disabled;
      };

      const getIndex = (data) => {
        return data?.rowData?.id;
      };

      return {
        args,
        tableData,
        handleSelectionDisabled,
        getColSpan,
        handleEdit,
        handleDelete,
        handleUpdateCell,
        handleColumnIsDisabled,
        getIndex,
      };
    },

    methods: {
      onLoad: action("load"),
      onScroll: action("scroll"),
      onUpdateCheckedRowKeys: action("update:checked-row-keys"),
      onUpdateExpandedRowKeys: action("update:expanded-row-keys"),
      onUpdateFilters: action("update:filters"),
      onUpdatePage: action("update:page"),
      onUpdatePageSize: action("update:page-size"),
      onUpdateSorter: action("update:sorter"),
    },

    template: `
          <BaseTable
            ref="mainTable"
            :bordered="args.bordered"
            :bottom-bordered="args.bottomBordered"
            :checked-row-keys="args.checkedRowKeys"
            :data="tableData"
            :pagination-behavior-on-filter="args.paginationBehaviorOnFilter"
            :flex-height="args.flexHeight"
            :loading="args.loading"
            :max-height="args.maxHeight"
            :min-height="args.minHeight"
            :paginate-single-page="args.paginateSinglePage"
            :pagination="args.pagination"
            :remote="args.remote"
            :row-class-name="args.rowClassName"
            :scroll-x="args.scrollX"
            :single-column="args.singleColumn"
            :single-line="args.singleLine"
            :size="args.size"
            :sticky-expanded-rows="args.stickyExpandedRows"
            :striped="args.striped"
            :summary-placement="args.summaryPlacement"
            :table-layout="args.tableLayout"
            :virtual-scroll="args.virtualScroll"
            :theme-overrides="args.themeOverrides"
            
            @load="onLoad"
            @scroll="onScroll"
            @update:checked-row-keys="onUpdateCheckedRowKeys"
            @update:expanded-row-keys="onUpdateExpandedRowKeys"
            @update:filters="onUpdateFilters"
            @update:page="onUpdatePage"
            @update:page-size="onUpdatePageSize"
            @update:sorter="onUpdateSorter"
         >
               <template #selection>
                  <BaseTableColumn
                     type="selection"
                     :disabled="handleColumnIsDisabled"
                     :multiple="args.multiple"
                  >
                  </BaseTableColumn>
               </template>

               <template #name="data">
                  <BaseTableColumn
                     :align="args.align"
                     :className="args.className"
                     :column-key="args.columnKey"                     
                     :column="args.column"
                     :colSpan="getColSpan"
                     :defaultSortOrder="args.defaultSortOrder"
                     :disabled="handleColumnIsDisabled"
                     :ellipsis="args.ellipsis"                     
                     :fixed="args.fixed"
                     :key="args.key"
                     :minWidth="args.minWidth"
                     :maxWidth="args.maxWidth"
                     :multiple="args.multiple"
                     :resizable="args.resizable"
                     :rowData="data"
                     :rowSpan="()=>args.rowSpan"
                     :sorter="args.sorter"
                     :title="args.title"
                     :titleAlign="args.titleAlign"
                     :visible="args.visible"
                     :width="args.width"
                     @updateCell="handleUpdateCell"
                  >
                     <div style="display:inline-flex;">
                        <base-icon size="20" style="margin-right:5px;">
                           person
                        </base-icon>
                        <span>
                           {{ data.rowData.name }}
                        </span>
                     </div>
                  </BaseTableColumn>
               </template>

               <template #title="data">
                  <BaseTableColumn
                     columnKey="title"
                     title="Title"
                     :disabled="true"
                     :resizable="true"
                     :minWidth="50"
                     :maxWidth="100"
                     :sortOrder="false"
                     :width="160"
                     :ellipsis="args.ellipsis"
                     
                  >
                     <span>
                        {{data.rowData.address}}
                     </span>
                  </BaseTableColumn>
               </template>

               <template #age="data">
                  <BaseTableColumn
                     columnKey="age"
                     title="Age"
                     :disabled="true"
                     :resizable="true"
                     :minWidth="50"
                     :maxWidth="100"
                     :sortOrder="ageSortOrder"
                     :sorter="
                     (rowA, rowB) => {
                        return rowA.age - rowB.age;
                     }
                     "
                  >
                     <span>
                        {{data.rowData.age}}
                     </span>
                  </BaseTableColumn>
               </template>

               <template #tags="data">
                  <BaseTableColumn columnKey="tags" title="tags">
                     <base-space>
                     <base-tag
                        v-for="tag in data.rowData.tags"
                        type="primary"
                        :key="tag"
                        >{{ tag }}</base-tag
                     >
                     </base-space>
                  </BaseTableColumn>
               </template>

               <template #actions="data">
                  <BaseTableColumn columnKey="actions" title="Actions">
                     <base-space>
                     <base-button size="small" type="default" @click="handleEdit(data)"
                        >Edit</base-button
                     >
                     <base-button size="small" @click="handleDelete(data)"
                        >Delete</base-button
                     >
                     </base-space>
                  </BaseTableColumn>
               </template>

               <template #actionz="data">
                  <BaseTableColumn
                     :index="getIndex(data)"
                     key="popover"
                     columnKey="popover"
                     title="#popover"                     
                     :row-popover-placement="args.rowPopoverPlacement"
                     :row-popover-class="args.rowPopoverClass"
                     >
                     <template #popover>
                        <base-space justify="start">
                           <base-button ghost size="tiny">
                              Details
                           </base-button>
                           <base-button ghost size="tiny">
                              Feedback
                           </base-button>
                        </base-space>
                     </template>
                  </BaseTableColumn>
               </template>
            </BaseTable>
      `,
  }),

  decorators: [
    () => ({
      template: `<div style="width:930px"><story/></div>`,
    }),
  ],

  args: {
    data: [
      {
        key: 1,
        name: "Jim Green",
        age: 42,
        address: "London No. 1 Lake Park",
        tags: ["wow"],
      },
      {
        key: 2,
        name: "Joe Black",
        age: 36,
        address: "Sidney No. 1 Lake Park",
        tags: ["Mentor", "Awesome"],
      },
      {
        key: 3,
        name: "Jim Red",
        age: 32,
        address: "London No. 2 Lake Park",
        tags: ["CEO", "Rider"],
      },
      {
        key: 4,
        name: "Lebron James",
        age: 38,
        address: "Los Angeles, California",
        tags: ["Small Forward", "Owner"],
      },
      {
        key: 5,
        name: "Blake Lively",
        age: 36,
        address: "North Polk, California",
        tags: ["Actress", "Mother"],
      },
    ],
    pagination: {
      pageSize: 5,
    },

    size: "medium",
    summaryPlacement: "bottom",
    tableLayout: "auto",
    //  table columns default content
    columnKey: "name",
    defaultSortOrder: "ascend",

    visible: true,
    rowPopoverPlacement: "right-end",
  },

  argTypes: {
    bordered: {
      description: "Whether to show border.",
      table: {
        category: "Table Props",
      },
    },
    bottomBordered: {
      description: "Whether to show bottom border.",
      table: {
        category: "Table Props",
      },
    },
    checkedRowKeys: {
      description:
        "The keys of checked rows, applicable only if '#selection' slot is used.",
      table: {
        category: "Table Props",
        defaultValue: {
          summary: "[]",
        },
      },
    },
    data: {
      description:
        "Data to be displayed in the table. Each item in the array should be an object with keys corresponding to the columns in the table.",
      table: {
        category: "Table Props",
      },
    },
    flexHeight: {
      description:
        "Whether to make table body's height auto fit table area height. Make it enabled will make table-layout always set to 'fixed'.",
      table: {
        category: "Table Props",
      },
    },
    loading: {
      description: "Whether to display loading status.",
      table: {
        category: "Table Props",
      },
    },
    maxHeight: {
      control: "text",
      description: "The max-height of the table content. Can be a CSS value.",
      table: {
        category: "Table Props",
      },
    },
    minHeight: {
      control: "text",
      description: "The min-height of the table content. Can be a CSS value.",
      table: {
        category: "Table Props",
      },
    },

    pagination: {
      description: "",

      table: {
        category: "Table Props",
      },
    },
    paginationBehaviorOnFilter: {
      control: "inline-radio",
      options: ["first", "current"],
      description:
        "The behavior of pagination after filter state is changed. 'first' means returning to first page on filter, 'current' means keep at current page on filter.",
      table: {
        category: "Table Props",
      },
    },
    paginateSinglePage: {
      description: "Whether show pagination data is less than one page.",
      table: {
        category: "Table Props",
      },
    },
    remote: {
      description:
        "If data-table do automatic paging. You may set it to true in async usage.",
      table: {
        category: "Table Props",
      },
    },
    rowClassName: {
      control: "text",
      description: "Class name of each row.",
      table: {
        category: "Table Props",
      },
    },
    scrollX: {
      control: "text",
      description: "If columns are horizontal fixed, scroll-x need to be set.",
      table: {
        category: "Table Props",
      },
    },
    singleColumn: {
      description:
        "Whether rows are not divided. If the prop is true, table cell has no border-bottom.",
      table: {
        category: "Table Props",
      },
    },
    singleLine: {
      description:
        "Whether columns are not divided. If the prop is true, table cell has no border-right.",
      table: {
        category: "Table Props",
      },
    },
    size: {
      control: "inline-radio",
      options: ["small", "medium", "large"],
      description: "The size of the table.",
      table: {
        category: "Table Props",
      },
    },
    stickyExpandedRows: {
      description: "Expanded row content remains sticky.",
      table: {
        category: "Table Props",
      },
    },
    striped: {
      description: "Whether to show zebra stripes on rows.",
      table: {
        category: "Table Props",
      },
    },
    summaryPlacement: {
      control: "inline-radio",
      options: ["top", "bottom"],
      description: "Summary rows placement.",
      table: {
        category: "Table Props",
      },
    },
    tableLayout: {
      control: "inline-radio",
      options: ["auto", "fixed"],
      description:
        "Style table-layout of the table. When ellipsis or max-height or flex-height are set, it will always be 'fixed' regardless of what you set.",
      table: {
        category: "Table Props",
      },
    },
    virtualScroll: {
      description:
        "Whether to use virtual scroll to deal with large data. Make sure max-height is set before using it. When virtual-scroll is true, rowSpan will not take effect.",
      table: {
        category: "Table Props",
      },
    },
    themeOverrides: {
      description: "",

      table: {
        category: "Table Props",
        defaultValue: {
          summary: "Ex. { loadingSize: 50px }",
        },
      },
    },

    //  Table Disable Props
    allowCheckingNotLoaded: {
      table: {
        disable: true,
      },
    },
    cascade: {
      table: {
        disable: true,
      },
    },
    childrenKey: {
      table: {
        disable: true,
      },
    },
    columns: {
      table: {
        disable: true,
      },
    },
    defaultCheckedRowKeys: {
      table: {
        disable: true,
      },
    },
    defaultExpandedRowKeys: {
      table: {
        disable: true,
      },
    },
    defaultExpandAll: {
      table: {
        disable: true,
      },
    },
    expandedRowKeys: {
      table: {
        disable: true,
      },
    },
    indent: {
      table: {
        disable: true,
      },
    },
    renderCell: {
      table: {
        disable: true,
      },
    },
    renderExpandIcon: {
      table: {
        disable: true,
      },
    },
    rowKey: {
      table: {
        disable: true,
      },
    },
    rowProps: {
      table: {
        disable: true,
      },
    },
    spinProps: {
      table: {
        disable: true,
      },
    },
    scrollbarProps: {
      table: {
        disable: true,
      },
    },
    summary: {
      table: {
        disable: true,
      },
    },

    //  Table Columns Props
    align: {
      control: "inline-radio",
      options: ["left", "center", "right"],
      description: "Text alignment in table column.",
      table: {
        category: "Table Column Props",
      },
    },
    titleAlign: {
      control: "inline-radio",
      options: ["left", "center", "right"],
      description:
        "Alignment of the table header. If omitted, the value of the above align attribute will be applied",
      table: {
        category: "Table Column Props",
      },
    },
    cellProps: {
      table: {
        disable: true,
      },
    },
    className: {
      control: "text",
      description: "Class name of the column.",
      table: {
        category: "Table Column Props",
      },
    },
    columnKey: {
      control: "text",
      description: "Column key name. Each column key must be unique.",
      table: {
        category: "Table Column Props",
      },
    },
    column: {
      control: "object",
      description:
        "An object consisting of `key` and `isEditable` properties is required to enable editability of column content. Additionally, `rowData` properties are necessary and should contain the value for the column's scoped slot. <br/><br/> To update the table records, trigger an event called `updateCell` that includes the column data as arguments. This ensures that changes are properly communicated and reflected in the table.",
      table: {
        category: "Table Column Props",
        defaultValue: {
          summary: "Ex. { key: 'name', isEditable: true }",
        },
      },
    },
    colSpan: {
      control: "number",
      description:
        "The number of columns that the cell should span is determined by a function that returns a number.",
      table: {
        category: "Table Column Props",
        defaultValue: {
          summary: "(rowData, rowIndex) => number",
        },
      },
    },
    defaultSortOrder: {
      control: "inline-radio",
      options: ["ascend", "descend", false],
      description:
        "The default sort order of the table in uncontrolled manner.",
      table: {
        category: "Table Column Props",
      },
    },
    disabled: {
      control: "boolean",
      description:
        "Whether a row is checkable can be controlled. Additionally, you can specify which rows should be disabled. To target specific rows, you can pass a function that takes `rowData` and `rowIndex` as parameters.",
      table: {
        category: "Table Column Props",
        defaultValue: {
          summary: "Ex. (rowData, rowIndex) => boolean",
        },
      },
    },
    ellipsis: {
      control: "boolean",
      description: "Ellipsis options when content overflows.",
      table: {
        category: "Table Column Props",
      },
    },
    ellipsisComponent: {
      table: {
        disable: true,
      },
    },
    expandable: {
      table: {
        disable: true,
      },
    },

    filter: {
      table: {
        disable: true,
      },
    },
    filterMode: {
      table: {
        disable: true,
      },
    },
    filterMultiple: {
      table: {
        disable: true,
      },
    },
    filterOptionValue: {
      table: {
        disable: true,
      },
    },
    filterOptionValues: {
      table: {
        disable: true,
      },
    },
    filterOptions: {
      table: {
        disable: true,
      },
    },
    resizable: {
      control: "boolean",
      description: "Whether the column width is resizable by dragging.",
      table: {
        category: "Table Column Props",
      },
    },
    fixed: {
      control: "inline-radio",
      options: ["left", "right", false],
      description: "Whether the column needs to be fixed.",
      table: {
        category: "Table Column Props",
      },
    },
    key: {
      control: "text",
      description: "Unique key of this column, this is not repeatable.",
      table: {
        category: "Table Column Props",
      },
    },
    minWidth: {
      control: "text",
      description:
        "The minimum width of the column. Only works when resizable is true",
      table: {
        category: "Table Column Props",
      },
    },
    maxWidth: {
      control: "text",
      description: "Max width of the column. Only works when resizable is true",
      table: {
        category: "Table Column Props",
      },
    },
    multiple: {
      control: "boolean",
      description:
        "Whether to enable multiple selection mode. Only works when column type is `selection`.",
      table: {
        category: "Table Column Props",
        defaultValue: {
          summary: "true",
        },
      },
    },
    options: {
      table: {
        disable: true,
      },
    },
    render: {
      table: {
        disable: true,
      },
    },
    renderExpand: {
      table: {
        disable: true,
      },
    },
    renderFilter: {
      table: {
        disable: true,
      },
    },
    renderFilterIcon: {
      table: {
        disable: true,
      },
    },
    renderFilterMenu: {
      table: {
        disable: true,
      },
    },
    renderSorter: {
      table: {
        disable: true,
      },
    },
    renderSorterIcon: {
      table: {
        disable: true,
      },
    },
    rowSpan: {
      control: "number",
      description: "The number of rows that the cell should span.",
      table: {
        category: "Table Column Props",
        defaultValue: {
          summary: "(rowData, rowIndex) => number",
        },
      },
    },
    rowPopoverPlacement: {
      control: "select",
      description: "Row popover placement.",
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
      table: {
        category: "Table Column Props",
      },
    },
    rowPopoverClass: {
      control: "text",
      description: "Popover slot class name.",
      table: {
        category: "Table Column Props",
      },
    },
    sortOrder: {
      table: {
        disable: true,
      },
    },
    sorter: {
      control: "inline-radio",
      options: ["default", true, false],
      description:
        "The sorter of the column. If set 'default', it will use a basic builtin compare function. If set to true, it will only display sort icon on the column, which can be used in async status. Otherwise it works like Array.sort's compare function. Sometimes you need to set `defaultSortOrder` to make it work.",
      table: {
        category: "Table Column Props",
      },
    },
    tree: {
      table: {
        disable: true,
      },
    },
    title: {
      control: "text",
      description: "Title of the column.",
      table: {
        category: "Table Column Props",
      },
    },
    titleRowSpan: {
      table: {
        disable: true,
      },
    },
    visible: {
      control: "boolean",
      description: "Show/Hide the table column.",
      table: {
        category: "Table Column Props",
        defaultValue: {
          summary: true,
        },
      },
    },
    width: {
      control: "text",
      description: "Width of the column.",
      table: {
        category: "Table Column Props",
      },
    },

    //  table column slots
    popover: {
      control: "false",
      description:
        "A popover appears when table rows are hovered over, allowing you to customize its content.Make sure to include :index attribute that contain unique to work this slotA popover appears when table rows are hovered over, allowing you to customize its content. Ensure that the `:index` attribute, containing a unique value, is included for this slot to function correctly.",
      table: {
        category: "table column slots",
        defaultValue: {
          summary: "#popover",
        },
      },
    },
  },

  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
    },
    controls: { expanded: true },
    docs: {
      source: {
        code: `
        const tableData = ref([
            {
            id: 1000,
            name: "John Brown",
            age: 38,
            address: "New York No. 1 Lake Park",
            tags: ["Cool", "Owner"],
            },
            {
            id: 1,
            name: "Jim Green",
            age: 42,
            address: "London No. 1 Lake Park",
            tags: ["wow"],
            },
         ]);

          <BaseTable
            ref="mainTable"
            :bordered="args.bordered"
            :bottom-bordered="args.bottomBordered"
            :checked-row-keys="args.checkedRowKeys"
            :data="tableData"
            :pagination-behavior-on-filter="args.paginationBehaviorOnFilter"
            :flex-height="args.flexHeight"
            :loading="args.loading"
            :max-height="args.maxHeight"
            :min-height="args.minHeight"
            :paginate-single-page="args.paginateSinglePage"
            :pagination="args.pagination"
            :remote="args.remote"
            :row-class-name="args.rowClassName"
            :scroll-x="args.scrollX"
            :single-column="args.singleColumn"
            :single-line="args.singleLine"
            :size="args.size"
            :sticky-expanded-rows="args.stickyExpandedRows"
            :striped="args.striped"
            :summary-placement="args.summaryPlacement"
            :table-layout="args.tableLayout"
            :virtual-scroll="args.virtualScroll"
            :theme-overrides="args.themeOverrides"
            
            @load="onLoad"
            @scroll="onScroll"
            @update:checked-row-keys="onUpdateCheckedRowKeys"
            @update:expanded-row-keys="onUpdateExpandedRowKeys"
            @update:filters="onUpdateFilters"
            @update:page="onUpdatePage"
            @update:page-size="onUpdatePageSize"
            @update:sorter="onUpdateSorter"
         >
               <template #selection>
                  <BaseTableColumn
                     type="selection"
                     :disabled="handleColumnIsDisabled"
                     :multiple="args.multiple"
                  >
                  </BaseTableColumn>
               </template>

               <template #name="data">
                  <BaseTableColumn
                     :align="args.align"
                     :className="args.className"
                     :column-key="args.columnKey"                     
                     :column="args.column"
                     :colSpan="getColSpan"
                     :defaultSortOrder="args.defaultSortOrder"
                     :disabled="handleColumnIsDisabled"
                     :ellipsis="args.ellipsis"                     
                     :fixed="args.fixed"
                     :key="args.key"
                     :minWidth="args.minWidth"
                     :maxWidth="args.maxWidth"
                     :multiple="args.multiple"
                     :resizable="args.resizable"
                     :rowData="data"
                     :rowSpan="()=>args.rowSpan"
                     :sorter="args.sorter"
                     :title="args.title"
                     :titleAlign="args.titleAlign"
                     :visible="args.visible"
                     :width="args.width"
                     @updateCell="handleUpdateCell"
                  >
                     <div style="display:inline-flex;">
                        <base-icon size="20" style="margin-right:5px;">
                           person
                        </base-icon>
                        <span>
                           {{ data.rowData.name }}
                        </span>
                     </div>
                  </BaseTableColumn>
               </template>

               <template #title="data">
                  <BaseTableColumn
                     columnKey="title"
                     title="Title"
                     :disabled="true"
                     :resizable="true"
                     :minWidth="50"
                     :maxWidth="100"
                     :sortOrder="false"
                     :width="160"
                     :ellipsis="args.ellipsis"
                     
                  >
                     <span>
                        {{data.rowData.address}}
                     </span>
                  </BaseTableColumn>
               </template>

               <template #age="data">
                  <BaseTableColumn
                     columnKey="age"
                     title="Age"
                     :disabled="true"
                     :resizable="true"
                     :minWidth="50"
                     :maxWidth="100"
                     :sortOrder="ageSortOrder"
                     :sorter="
                     (rowA, rowB) => {
                        return rowA.age - rowB.age;
                     }
                     "
                  >
                     <span>
                        {{data.rowData.age}}
                     </span>
                  </BaseTableColumn>
               </template>
               <template #actions="data">
                  <BaseTableColumn columnKey="actions" title="Actions">
                     <base-space>
                        <base-button size="small" type="default" @click="handleEdit(data)">Edit</base-button>
                        <base-button size="small" @click="handleDelete(data)">Delete</base-button>
                     </base-space>
                  </BaseTableColumn>
               </template>

            <!--
            Note:
               Table slot for #popover with customizable content.
               The popover slot uses #row-popover id, where you can apply targeted styling to the popover content.
               
               eg:#row-popover {
                  top: 25px;
               }
            -->
               <template #popover="data">
                  <BaseTableColumn
                     :index="data?.rowData?.id"
                     key="actions"
                     columnKey="popover"
                     title=""
                     className="actions"
                     :row-popover-placement="args.rowPopoverPlacement"
                     :row-popover-class="args.rowPopoverClass"
                     >
                     <template #popover>
                        <base-space justify="start">
                           <base-button ghost size="tiny">
                              Details
                           </base-button>
                           <base-button ghost size="tiny">
                              Feedback
                           </base-button>
                        </base-space>
                     </template>
                  </BaseTableColumn>
               </template>
            </BaseTable>
        `,
      },
    },
  },
};
