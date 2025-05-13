import BaseIcon from "../components/base/BaseIcon.vue";
import BaseLink from "../components/base/BaseLink.vue";

export default {
  title: "Design System/Base Components/Link",
  component: BaseLink,
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

export const Link = {
  render: (args) => ({
    components: {
      BaseIcon,
      BaseLink,
    },
    setup() {
      return { args };
    },

    template: `  
     <base-link
      class="login-link"
      :to="args.to"
      type="heading"
      :size="args.size"
      :icon="args.icon"
      :icon-placement="args.iconPlacement"
      :icon-size="args.iconSize"
      :icon-color="args.iconColor"
      :externalAttrs="args.externalAttrs"
   >
      <template #default>
         {{args.default}}
      </template>
   </base-link>
   `,
  }),

  args: {
    to: "/auth/login",
    icon: "link",
    default: "Visit site",
  },

  argTypes: {
    to: {
      control: "text",
      description: "The URL to link to",
    },
    icon: {
      control: "select",
      options: icons(),
    },
    iconSize: {
      control: "text",
      description: "The size of the icon",
    },
    iconPlacement: {
      control: "select",
      options: ["left", "right"],
      description: "The placement of the icon",
    },
    iconColor: {
      control: "color",
      description: "The color of the icon",
    },
    externalAttrs: {
      description: "Additional attributes to pass to the link",
      table: {
        defaultValue: {
          summary: "{target: '_blank',rel: 'noopener noreferrer'}",
        },
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
    "link",
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
