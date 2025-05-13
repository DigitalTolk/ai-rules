import BasePageHeader from "../components/base/BasePageHeader.vue";
import BaseIcon from "../components/base/BaseIcon.vue";
import { action } from "@storybook/addon-actions";

export default {
  title: "Design System/Base Components/PageHeader",
  component: BasePageHeader,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
    },
    controls: { expanded: true },
  },
};

export const PageHeader = {
  render: (args) => ({
    components: { BasePageHeader, BaseIcon },
    setup() {
      return {
        args,
      };
    },
    methods: {
      handleBack: action("back"),
    },
    template: `
      <base-page-header
         :title="args.title"
         :subtitle="args['subtitle-slot']? null : args.subtitle"
         :extra="args['extra-slot']? null : args.extra"
         :tooltip="args.tooltip"
         :is-back-icon="args.isBackIcon"
         @handle:back="handleBack"
      >
         <template v-if="args['extra-slot']" #extra>
            {{args['extra-slot']}}
         </template>

         <template #avatar>
            {{args.avatar}}
         </template>

         <template #header>
            {{args.header}}
         </template>

         <template #default>
            {{args.default}}
         </template>

         <template #footer>
            {{args.footer}}
         </template>

         <template v-if="args['subtitle-slot']" #subtitle>
            {{args['subtitle-slot']}}
         </template>

         <template v-if="args['title-slot']" #title>
            {{args['title-slot']}}
         </template>

         <template v-if="args.back" #back>
            <base-icon>{{args.back}}</base-icon>
         </template>
      </base-page-header>
  `,
  }),

  decorators: [
    () => ({
      template: `<div style="width:900px;background:#fff;padding:10px;"><story/></div>`,
    }),
  ],

  args: {
    title: "Page Header",
    subtitle: "Subtitle area here..",
    extra: "Extra information here...",
  },

  argTypes: {
    extra: {
      description:
        "Extra text information. Is overwritten by the extra slot so only use one.",
    },
    subtitle: {
      description: "Subtitle text.",
    },
    title: {
      description: "Title text.",
    },
    isBackIcon: {
      description: "Switch to control back icon visibility.",
    },

    //   events
    "handle:back": {
      control: false,
      description: "Callback for when the back button is pressed.",
    },
    slotName: {
      table: {
        disable: true,
      },
    },
    //  slots
    avatar: {
      control: "false",
      description: "Image information.",
      table: {
        category: "slots",
      },
    },
    header: {
      control: "text",
      description: "Header information.",
      table: {
        category: "slots",
      },
    },
    default: {
      control: "text",
      description: "Default information.",
      table: {
        category: "slots",
      },
    },
    "extra-slot": {
      control: "text",
      description: "Extra information. Use  `#extra` slot instead.",
      table: {
        category: "slots",
      },
    },
    footer: {
      control: "text",
      description: "Footer information.",
      table: {
        category: "slots",
      },
    },
    "subtitle-slot": {
      control: "text",
      description: "Subtitle information. Use `#subtitle` slot instead.",
      table: {
        category: "slots",
      },
    },
    "title-slot": {
      control: "text",
      description: "Title information. Use `#title` slot instead.",
      table: {
        category: "slots",
      },
    },
    back: {
      control: "select",
      options: icons(),
      description: "Back icon.",
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
