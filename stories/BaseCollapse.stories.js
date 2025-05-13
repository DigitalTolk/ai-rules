import { action } from "@storybook/addon-actions";
import BaseIcon from "../components/base/BaseIcon.vue";
import BaseButton from "../components/base/BaseButton.vue";
import BaseCollapse from "../components/base/BaseCollapse.vue";
import BaseCollapseItem from "../components/base/BaseCollapseItem.vue";
import BaseCard from "../components/base/BaseCard.vue";

export default {
  title: "Design System/Base Components/Collapsible",
  component: BaseCollapse,
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

export const Collapsible = {
  render: (args) => ({
    components: {
      BaseIcon,
      BaseButton,
      BaseCollapse,
      BaseCollapseItem,
      BaseCard,
    },
    setup() {
      return { args };
    },
    methods: {
      onItemHeaderClick: action("item-header-click"),
      onUpdateExpandedNames: action("update:expanded-names"),
    },
    template: `  
      <base-card>  
         <base-collapse
            :accordion="args.accordion"
            :arrow-placement="args.arrowPlacement"
            :default-expanded-names="args.defaultExpandedNames"
            :theme-overrides="args.themeOverrides"
            @item-header-click="onItemHeaderClick"
            @update:expanded-names="onUpdateExpandedNames"
            >
            <template #default>
               <base-collapse-item
                  :disabled="args.disabled"
                  :name="args.name"
                  
                  :theme-overrides="args.themeOverrides"
               >
                  <template #arrow>
                     <base-icon>{{args.arrow}}</base-icon>
                  </template>

                  <template #header>
                     {{args.header}}
                  </template>

                  <template #header-extra>
                     {{args['header-extra']}}
                  </template>
                  
                  <template #default>
                     <div>
                        {{args.default}}
                     </div>
                  </template>
               </base-collapse-item>

               <base-collapse-item>
                  <template #arrow>
                     <base-icon>more_horiz</base-icon>
                  </template>

                  <template #header>
                     Here goes the title of second collapsable item
                  </template>
                  
                  <template #default>
                     <div>
                        Well done to the troopers who sacrife their lives for the country.
                     </div>
                  </template>
               </base-collapse-item>
            </template>
         </base-collapse>
      </base-card>
   `,
  }),
  decorators: [
    () => ({
      template: `<div style="width:700px"><story/></div>`,
    }),
  ],

  args: {
    arrowPlacement: "right",
    accordion: true,
    arrow: "more_horiz",
    defaultExpandedNames: "first",
    name: "first",
    default:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa repudiandae ut fugit expedita voluptatum asperiores libero! Non architecto inventore eius illum, aspernatur modi aliquid rem nobis iste, debitis excepturi et.",
    header: "Here goes the title of collapsable item",
    "header-extra": "",
  },

  argTypes: {
    accordion: {
      description: "Only allow one panel open at a time.",
      table: {
        category: "Collapse Props",
      },
    },
    defaultExpandedNames: {
      control: "text",
      description: "Default expanded names.",
      table: {
        category: "Collapse Props",
      },
    },

    arrowPlacement: {
      control: "inline-radio",
      options: ["left", "right"],
      description: "Arrow placement either left or right.",
      table: {
        category: "Collapse Props",
      },
    },
    themeOverrides: {
      description:
        'Progress component style overrides. Check the <a href="https://www.naiveui.com/en-US/theme" target="_blank">Theme</a> for more options.',
      table: {
        category: "Collapse Props",
      },
    },

    //  triggerAreas: {
    //    control: "inline-radio",
    //    options: ["main", "arrow", "extra"],
    //    description:
    //      "Expansion trigger areas. If you don't want to trigger expansion on some areas, you can use the prop.",
    //    table: {
    //      category: "Collapse Props",
    //      defaultValue: {
    //        summary:
    //          "Select any of these options or all of them: ['main', 'arrow', 'extra'].",
    //      },
    //    },
    //  },

    //collapsibleItem
    disabled: {
      control: "boolean",
      description: "Disable the collapsible item.",
      table: {
        category: "Collapse Item Props",
      },
    },
    name: {
      control: "text",
      description: "Unique name of the collapsible item.",
      table: {
        category: "Collapse Item Props",
      },
    },

    displayDirective: {
      table: {
        disable: true,
      },
    },
    expandedNames: {
      table: {
        disable: true,
      },
    },

    //collapse item slots
    default: {
      control: "text",
      description: "Any default content here (default slot).",
      table: {
        category: "Collapse Item Slots",
      },
    },
    arrow: {
      control: "select",
      description: "Icon to show on the right side of the header (icon slot).",
      options: icons(),
      table: {
        category: "Collapse Item Slots",
      },
    },
    header: {
      control: "text",
      description: "Header title for each collapsible item (header slot).",
      table: {
        category: "Collapse Item Slots",
      },
    },
    "header-extra": {
      control: "text",
      description: "Extra title for each collapsible item (header-extra slot).",
      table: {
        category: "Collapse Item Slots",
      },
    },

    //events
    "update:expanded-names": {
      description:
        "Callback function triggered when the expanded-names array is changed.",
    },
    "item-header-click": {
      description: "Callback function triggered when the title is clicked.",
    },
  },
};

function icons() {
  return [
    null,
    "more_horiz",
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
