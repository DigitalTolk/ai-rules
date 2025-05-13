import BaseButton from "../components/base/BaseButton.vue";
import BaseList from "../components/base/BaseList.vue";
import BaseListItem from "../components/base/BaseListItem.vue";

export default {
  title: "Design System/Base Components/List",
  component: BaseList,
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

export const List = {
  render: (args) => ({
    components: {
      BaseButton,
      BaseList,
      BaseListItem,
    },
    setup() {
      return { args };
    },

    template: `  
      <base-list
         :bordered="args.bordered"
         :clickable="args.clickable"
         :hoverable="args.hoverable"
         :show-divider="args.showDivider"
         :theme-overrides="args.themeOverrides"
      >
         <template v-if="args.header" #header>
            #header
         </template>

         <template v-if="args.footer" #footer>
            #footer
         </template>

        <base-list-item>
            <template v-if="args.prefix" #prefix>
               {{args.prefix}}
            </template>
            <template v-if="args.suffix" #suffix>
               {{args.suffix}}
            </template>
          
            <template v-if="args.default" #default>
               {{args.default}}
            </template>
        </base-list-item>

        <base-list-item>
          <h4>Another list content</h4>
          <template #suffix>
            <base-button>#suffix</base-button>
          </template>
        </base-list-item>
      </base-list>
   `,
  }),

  decorators: [
    () => ({
      template: `<div style="width:850px"><story/></div>`,
    }),
  ],

  args: {
    header: "#header",
    footer: "#footer",
    suffix: "#suffix",
    prefix: "#prefix",
    default: "List item default content here..",
  },

  argTypes: {
    bordered: {
      description: "Whether to show the border.",
      table: {
        category: "List Props",
      },
    },
    clickable: {
      description: "Whether item has clickable style.",
      table: {
        category: "List Props",
      },
    },
    hoverable: {
      description: "Whether item has hoverable style.",
      table: {
        category: "List Props",
      },
    },
    showDivider: {
      description: "Whether to show item divider.",
      table: {
        category: "List Props",
      },
    },
    themeOverrides: {
      description:
        'Progress component style overrides. Check the <a href="https://www.naiveui.com/en-US/theme" target="_blank">Theme</a> for more options.',
      table: {
        category: "List Props",
      },
    },
    // List slots
    header: {
      description: "The contents of the head of the list.",
      table: {
        category: "List Slots",
      },
    },
    footer: {
      description: "Content at the bottom of the list.",
      table: {
        category: "List Slots",
      },
    },
    //  List item slots
    default: {
      description: "The contents of the list item.",
      table: {
        category: "List item Slots",
      },
    },
    prefix: {
      description: "The first content of the list item.",
      table: {
        category: "List item Slots",
      },
    },
    suffix: {
      description: "The end of the list item.",
      table: {
        category: "List item Slots",
      },
    },
  },
};
