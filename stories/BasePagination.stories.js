import { action } from "@storybook/addon-actions";
import BaseIcon from "../components/base/BaseIcon.vue";
import BaseSpace from "../components/base/BaseSpace.vue";
import BasePagination from "../components/base/BasePagination.vue";

export default {
  title: "Design System/Base Components/Pagination",
  component: BasePagination,
  tags: ["autodocs"],

  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
    },
    controls: { expanded: true },
  },
};

export const Pagination = {
  render: (args) => ({
    components: {
      BaseIcon,
      BaseSpace,
      BasePagination,
    },
    setup() {
      const pageSizes = computed(() =>
        args.pageSizes?.split(",").map((c) => parseInt(c.trim())),
      );
      return { args, pageSizes };
    },
    methods: {
      onUpdatePage: action("update:page"),
      onUpdatePageSize: action("update:page-size"),
    },

    template: `
         <BasePagination
            :default-page="args.defaultPage"
            :default-page-size="args.defaultPageSize"
            :disabled="args.disabled"
            :display-order="args.displayOrder"
            :goto="args.goto"
            :item-count="args.itemCount"
            :label="args.label"
            :page-size="args.pageSize"
            :page-sizes="pageSizes"
            :page-slot="args.pageSlot"
            :page="args.page"
            :page-count="args.pageCount"
            :round="args.round"
            :select-props="args.selectProps"
            :show-quick-jumper="args.showQuickJumper"
            :size="args.size"
            :simple="args.simple"
            :show-size-picker="args.showSizePicker"
            :to="args.to"
            :theme-overrides="args.themeOverrides"
            @update:page="onUpdatePage"
            @update:page-size="onUpdatePageSize"
         >
            <template #prefix="{ itemCount, startIndex }">
               <span v-if="args.prefix">
                  {{args.prefix}}
               </span>
               <span v-else>
                  From {{ startIndex }}, is {{ itemCount }}
               </span>
            </template>
            <template #suffix="{ endIndex }">
               To Item No.{{ endIndex }}
            </template>
            <template #prev>
               {{args.prev}}
            </template>
            <template #next>
               {{args.next}}
            </template>
         </BasePagination>
      `,
  }),

  args: {
    size: "medium",
    pageCount: 50,
    prev: "Go Prev",
    next: "Go Next",
  },

  argTypes: {
    disabled: {
      description: "Whether to disable the pagination.",
    },
    displayOrder: {
      table: {
        disable: true,
      },
    },
    defaultPage: {
      table: {
        disable: true,
      },
    },
    defaultPageSize: {
      table: {
        disable: true,
      },
    },

    itemCount: {
      description: "The total number of items in the data set",
    },
    goto: {
      table: {
        disable: true,
      },
    },
    label: {
      table: {
        disable: true,
      },
    },
    page: {
      description: "Current page in controlled mode.",
    },
    pageCount: {
      description: "The total number of pages",
    },
    pageSizes: {
      control: "text",
      description:
        "Number of items per page, can be customize. Example: [10, 20, 30]",
    },
    pageSize: {
      description: "Page size in controlled mode.",
    },
    pageSlot: {
      description: "The number of pages displayed.",
    },
    round: {
      description: "Whether to use simple mode.",
    },
    size: {
      control: "radio",
      options: ["small", "medium", "large"],
      description: "Size of page item.",
    },
    showSizePicker: {
      description: "Whether to show quick jump input.",
    },
    showQuickJumper: {
      description: "Whether to show quick jump input.",
    },
    simple: {
      description: "Whether to use simple mode.",
    },

    selectProps: {
      table: {
        disable: true,
      },
    },

    to: {
      table: {
        disable: true,
      },
    },
    themeOverrides: {
      description:
        'Progress component style overrides. Check the <a href="https://www.naiveui.com/en-US/theme" target="_blank">Theme</a> for more options.',
    },

    //  events
    "update:page": {
      description: "Callback function when the current page changes.",
    },
    "update:page-size": {
      description: "Callback function when the current page size changes.",
    },
    //  slots
    prefix: {
      control: "text",
      description: "Page suffix.",
      table: {
        category: "slots",
      },
    },
    suffix: {
      control: "text",
      description: "Page suffix.",
      table: {
        category: "slots",
      },
    },
    next: {
      control: "text",
      description: "Next page.",
      table: {
        category: "slots",
      },
    },
    prev: {
      control: "text",
      description: "Previous page.",
      table: {
        category: "slots",
      },
    },
    slotData: {
      table: {
        disable: true,
      },
    },
  },
};
