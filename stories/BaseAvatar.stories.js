import { action } from "@storybook/addon-actions";
import BaseIcon from "../components/base/BaseIcon.vue";
import BaseSpace from "../components/base/BaseSpace.vue";
import BaseAvatar from "../components/base/BaseAvatar.vue";

export default {
  title: "Design System/Base Components/Avatar",
  component: BaseAvatar,
  tags: ["autodocs"],

  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
    },
    controls: { expanded: true },
  },
};

export const Avatar = {
  render: (args) => ({
    components: {
      BaseIcon,
      BaseSpace,
      BaseAvatar,
    },
    setup() {
      return { args };
    },
    methods: {
      onError: action("error"),
    },

    template: `
         <base-avatar
            :bordered="args.bordered"
            :color="args.color"
            :fallback-src="args.fallbackSrc"
            :img-props="args.imgProps"
            :intersection-observer-object="args.IntersectionObserverObject"
            :lazy="args.lazy"
            :object-fit="args.objectFit"
            :render-fallback="args.renderFallback"
            :render-placeholder="args.renderPlaceholder"
            :round="args.round"
            :size="args.size"
            :src="args.src"
            :theme-overrides="args.themeOverrides"
            @error="onError"
         >
            <template #default>
               <template v-if="args.default">
                  {{args.default}}
               </template>
               <template v-else>
                  <base-icon v-if="!args.src && args.fallbackIcon">{{ args.fallbackIcon }}</base-icon>
               </template>
            </template>
            <template #placeholder>
               <div>{{args.placeholder}}</div>
            </template>

            <template v-if="args.fallback" #fallback>
               {{args.fallback}}
            </template>
         </base-avatar>
      `,
  }),

  args: {
    default: "DT",
  },

  argTypes: {
    bordered: {
      description: "Whether to display a avatar with border.",
    },
    color: {
      description: "The background color of the avatar.",
    },

    fallbackIcon: {
      control: "select",
      options: icons(),
      description:
        "Use a fallback icon when the image fails to load or the source is undefined.",
    },

    fallbackSrc: {
      control: "text",
      description: "Image URL to show when avatar fails to load.",
    },
    lazy: {
      description:
        'Load image after it enters viewport. When used alone, it will be assigned the property value of <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/loading" target="_blank" >HTMLImageElement.loading</a>. Alternatively, it can be used in conjunction with the intersection-observer-options configuration to achieve lazy loading.',
    },
    objectFit: {
      control: "inline-radio",
      options: ["fill", "contain", "cover", "none", "scale-down"],
      description: "Object-fit type of the image in the container.",
    },
    src: {
      control: "text",
      description:
        "Image source used to display when default content is not provided. For example: 'https://github.com/radix-vue.png'",
    },
    size: {
      control: {
        type: "select",
      },
      options: ["small", "medium", "large", 20, 30, 50],
      description:
        "The 'size' parameter can accept either a numeric value or a string value such as 'small', 'medium', or 'large'.",
    },
    imgProps: {
      control: "object",
      description: "The props of the img element inside the component.",
      // table: {
      //   disable: true,
      // },
    },
    IntersectionObserverObject: {
      table: {
        disable: true,
      },
    },
    round: {
      description: "Whether to display a rounded avatar.",
    },
    renderPlaceholder: {
      table: {
        disable: true,
      },
    },
    renderFallback: {
      table: {
        disable: true,
      },
    },
    fallback: {
      table: {
        disable: true,
      },
    },
    themeOverrides: {
      description:
        'Progress component style overrides. Check the <a href="https://www.naiveui.com/en-US/theme" target="_blank">Theme</a> for more options.',
      table: {
        category: "props",
      },
    },
    //  slots
    default: {
      control: "text",
      description: "The content of the avatar. ",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text when the image is not loaded",
    },
    //  events
    error: {
      control: false,
      description: "Callback executed when the avatar image fails to load.",
    },
  },
  parameters: {
    docs: {
      source: {
        code: `<base-avatar
                  :bordered="args.bordered"
                  :color="args.color"
                  :fallback-src="args.fallbackSrc"
                  :img-props="args.imgProps"
                  :intersection-observer-object="args.IntersectionObserverObject"
                  :lazy="args.lazy"
                  :object-fit="args.objectFit"
                  :render-fallback="args.renderFallback"
                  :render-placeholder="args.renderPlaceholder"
                  :round="args.round"
                  :size="args.size"
                  :src="args.src"
                  :theme-overrides="args.themeOverrides"
                  @error="onError"
               >
                  <template #default>
                     <template v-if="args.default">
                        {{args.default}}
                     </template>
                     <template v-else>
                        <base-icon v-if="!args.src && args.fallbackIcon">{{ args.fallbackIcon }}</base-icon>
                     </template>
                  </template>
                  <template #placeholder>
                     <div>{{args.placeholder}}</div>
                  </template>

                  <template v-if="args.fallback" #fallback>
                     {{args.fallback}}
                  </template>
               </base-avatar>`,
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
