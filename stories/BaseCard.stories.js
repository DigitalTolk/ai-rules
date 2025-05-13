import { action } from "@storybook/addon-actions";
import BaseCard from "../components/base/BaseCard.vue";
import BaseIcon from "../components/base/BaseIcon.vue";
import BaseButton from "../components/base/BaseButton.vue";
import BaseCollapse from "../components/base/BaseCollapse.vue";
import BaseCollapseItem from "../components/base/BaseCollapseItem.vue";

export default {
  title: "Design System/Base Components/Card",
  component: BaseCard,
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

export const Card = {
  render: (args) => ({
    components: {
      BaseCard,
      BaseIcon,
      BaseButton,
      BaseCollapse,
      BaseCollapseItem,
    },
    setup() {
      return { args };
    },
    methods: {
      onClose: action("close"),
    },
    template: `
    
            <base-card
            :bordered="args.bordered"
            :closable='args.closable'
            :content-class="args.contentClass"
            :content-style="args.contentStyle"
            
            :footer-class="args.footerClass"
            :footer-style="args.footerStyle"
            :header-class="args.headerClass"
            :header-style="args.headerStyle"
            :header-extra-class="args.headerExtraClass"
            :header-extra-style="args.headerExtraStyle"
            
            :size="args.size"
            
            :title="args.title"
            :theme-overrides="args.themeOverrides"
            @close="onClose"
            >
               <template #header>
                  <div>{{args.header}}</div>
               </template>
               <template #header-extra>
               <div>{{args['header-extra']}}</div>
               </template>
               <template #cover>
                  <div>{{args.cover}}</div>
               </template>
               <template #default>
                  <h3>{{args.default}}</h3>
               </template>
               <template #footer>
                  <div>{{args.footer}}</div>
               </template>
                <template #action>
                  <div>{{args.action}}</div>
               </template>
            </base-card>
           
         `,
  }),
  decorators: [
    () => ({
      template: `<div style="width:550px"><story/></div>`,
    }),
  ],

  args: {
    cover: "#cover content here",
    title: "Card Title",
    closable: true,
    header: "#header area",
    "header-extra": "#header extra area",
    default: "#default content here",
    footer: "#footer container area",
    action: "#action container area",
    size: "medium",
  },

  argTypes: {
    //  props
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large", "huge"],
      description: "Card size.",
    },
    closable: {
      description: "Is it allowed to close.",
    },
    contentClass: {
      description: "The class of the card content area.",
    },
    footerClass: {
      description: "The class of the bottom area of the card.",
    },
    headerClass: {
      description: "The class of the card head area.",
    },
    headerExtraClass: {
      description: "The class of the card head extra area.",
    },
    hoverable: {
      table: {
        disable: true,
      },
    },
    title: {
      description: "Card title.",
    },

    bordered: {
      table: {
        disable: true,
      },
    },
    embedded: {
      table: {
        disable: true,
      },
    },

    segmented: {
      table: {
        disable: true,
      },
    },
    tag: {
      table: {
        disable: true,
      },
    },
    themeOverrides: {
      description:
        'Progress component style overrides. Check the <a href="https://www.naiveui.com/en-US/theme" target="_blank">Theme</a> for more options.',
    },

    //   slots
    cover: {
      control: "text",
      description: "Cover content.",
    },
    header: {
      control: "text",
      description: "Header content.",
    },
    "header-extra": {
      control: "text",
      description: "Header extra content.",
    },
    default: {
      control: "text",
      description: "Card content.",
    },
    footer: {
      control: "text",
      description: "Footer content.",
    },
    action: {
      control: "text",
      description: "Operating area content.",
    },

    //  events
    close: {
      description: "Callback function triggered upon closing the card.",
    },
  },

  parameters: {
    docs: {
      source: {
        code: `
            <base-card
            :bordered="args.bordered"
            :closable='args.closable'
            :content-class="args.contentClass"
            :content-style="args.contentStyle"
            
            :footer-class="args.footerClass"
            :footer-style="args.footerStyle"
            :header-class="args.headerClass"
            :header-style="args.headerStyle"
            :header-extra-class="args.headerExtraClass"
            :header-extra-style="args.headerExtraStyle"
            
            :size="args.size"
            
            :title="args.title"
            :theme-overrides="args.themeOverrides"
            @close="onClose"
            >
               <template #header>
                  <div>{{args.header}}</div>
               </template>
               <template #header-extra>
               <div>{{args['header-extra']}}</div>
               </template>
               <template #cover>
                  <div>{{args.cover}}</div>
               </template>
               <template #default>
                  <h3>{{args.default}}</h3>
               </template>
               <template #footer>
                  <div>{{args.footer}}</div>
               </template>
                <template #action>
                  <div>{{args.action}}</div>
               </template>
            </base-card>
            `,
      },
    },
  },
};
