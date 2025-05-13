import BaseIcon from "../components/base/BaseIcon.vue";
import BaseDivider from "../components/base/BaseDivider.vue";
import BaseRow from "../components/base/BaseRow.vue";
import BaseColumn from "../components/base/BaseColumn.vue";

export default {
  title: "Design System/Base Components/Divider",
  component: BaseDivider,
  tags: ["autodocs"],

  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
    },
    controls: { expanded: true },
  },
};

export const Divider = {
  render: (args) => ({
    components: {
      BaseIcon,
      BaseDivider,
      BaseRow,
      BaseColumn,
    },
    setup() {
      return { args };
    },

    template: `  
      <base-row y-gap="15" x-gap="15" :cols="1">
         <base-column>
            <base-divider
               :dashed="args.dashed"
               :title-placement="args.titlePlacement"
               :vertical="args.vertical"
               :height="args.height"
               :x-margin="args.xMargin"
               :theme-overrides="args.themeOverrides"
            >
               <template v-if="args.default" #default>
                  {{args.default}}
               </template>
            </base-divider>

               One
            
            <base-divider
               :dashed="args.dashed"
               :title-placement="args.titlePlacement"
               :vertical="args.vertical"
               :height="args.height"
               :x-margin="args.xMargin"
               :theme-overrides="args.themeOverrides"
            >
               <template v-if="args.default" #default>
                  {{args.default}}
               </template>
            </base-divider>

               Two
            
            <base-divider
               :dashed="args.dashed"
               :title-placement="args.titlePlacement"
               :vertical="args.vertical"
               :height="args.height"
               :x-margin="args.xMargin"
               :theme-overrides="args.themeOverrides"
            >
               <template v-if="args.default" #default>
                  {{args.default}}
               </template>
            </base-divider>

         </base-column>
      </base-row>
   `,
  }),

  decorators: [
    () => ({
      template: `<div style="width:500px;background:#fff;padding:20px;"><story/></div>`,
    }),
  ],

  args: {
    dashed: false,
    default: "Divider",
    height: "1em",
    titlePlacement: "center",
    xMargin: "24px",
    vertical: false,
    themeOverrides: {
      color: "#efeff5",
    },
  },

  argTypes: {
    dashed: {
      control: "boolean",
      description: "Whether to show dashed line.",
      table: {
        category: "props",
      },
    },
    height: {
      control: "text",
      description:
        "Divider height. Applicable when `vertical` is enable. Accepted values: `px`, `em`",
      table: {
        category: "props",
      },
    },
    titlePlacement: {
      control: "inline-radio",
      options: ["left", "center", "right"],
      description: "Title placement.",
      table: {
        category: "props",
      },
    },
    xMargin: {
      control: "text",
      description: "Horizontal margin. Accepted values: `px`, `em`",
      table: {
        category: "props",
      },
    },
    vertical: {
      control: "boolean",
      description: "To vertical direction.",
      table: {
        category: "props",
      },
    },
    themeOverrides: {
      description:
        'Progress component style overrides. Check the <a href="https://www.naiveui.com/en-US/theme" target="_blank">Theme</a> for more options.',
      table: {
        category: "props",
      },
    },
    default: {
      control: "text",
      description: "Divider title.",
      table: {
        category: "slots",
      },
    },
  },
};
