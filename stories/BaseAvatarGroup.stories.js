import BaseIcon from "../components/base/BaseIcon.vue";
import BaseSpace from "../components/base/BaseSpace.vue";
import BaseAvatar from "../components/base/BaseAvatar.vue";
import BaseAvatarGroup from "../components/base/BaseAvatarGroup.vue";
import BaseDropdown from "../components/base/BaseDropdown.vue";
import BaseDropdownItem from "../components/base/BaseDropdownItem.vue";

export default {
  title: "Design System/Base Components/AvatarGroup",
  component: BaseAvatarGroup,
  tags: ["autodocs"],

  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
    },
    controls: { expanded: true },
  },
};

export const AvatarGroup = {
  render: (args) => ({
    components: {
      BaseIcon,
      BaseSpace,
      BaseAvatar,
      BaseAvatarGroup,
      BaseDropdown,
      BaseDropdownItem,
    },
    setup() {
      const options = computed(() => {
        return [
          {
            name: "Leonardo DiCaprio",
            src: "https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg",
          },
          {
            name: "Jennifer Lawrence",
            src: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
          },
          {
            name: "Audrey Hepburn",
            src: "https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg",
          },
          {
            name: "Anne Hathaway",
            src: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
          },
          {
            name: "Taylor Swift",
            src: "https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg",
          },
        ];
      });

      const createDropdownOptions = (options) => {
        let opts = options.map((option) => ({
          key: option.name,
          label: option.name,
        }));

        return opts;
      };

      return { args, options, createDropdownOptions };
    },
    template: `
         <base-avatar-group
            :options="options"
            :expand-on-hover="args.expandOnHover"
            :max="args.max"
            :max-style="args.maxStyle"
            :vertical="args.vertical"
            :theme-overrides="args.themeOverrides"
         >
            <template #avatar="info">
               <base-avatar :src="info?.bind?.option?.src" />
            </template>

            <template #rest="info">
               <base-dropdown placement="right">
                  <base-avatar color="purple">+{{ info.bind.rest }}</base-avatar>
                  <template #dropdown>
                     <BaseDropdownItem
                        v-for="option in createDropdownOptions(info.bind.options)"
                        :label="option.label"
                        :key="option.key"
                     ></BaseDropdownItem>
                  </template>
               </base-dropdown>
            </template>
         </base-avatar-group>
      `,
  }),

  args: {},

  argTypes: {
    expandOnHover: {
      control: "boolean",
      description: "Expand the avatar group when hovered.",
    },
    max: {
      control: "number",
      description: "Max avatar count in the group.",
    },
    options: {
      description: "Options for the avatar group are provided as an array.",
    },
    vertical: {
      control: "boolean",
      description: "Whether display a vertical avatar group.",
    },
    themeOverrides: {
      description:
        'Progress component style overrides. Check the <a href="https://www.naiveui.com/en-US/theme" target="_blank">Theme</a> for more options.',
      table: {
        category: "props",
      },
    },
    //  slots
    avatar: {
      description: "Avatar of the avatar group.",
      control: null,
    },
    default: {
      description: "The content of the avatar group.",
      control: null,
    },
    rest: {
      description: "Overflow indicator of the avatar group.",
      control: null,
    },
    size: {
      table: {
        disable: true,
      },
    },
    maxStyle: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    docs: {
      source: {
        code: `<base-avatar-group
            :options="options"
            :expand-on-hover="args.expandOnHover"
            :max="args.max"
            :max-style="args.maxStyle"
            :vertical="args.vertical"
            :theme-overrides="args.themeOverrides"
         >
            <template #avatar="info">
               <base-avatar :src="info?.bind?.option?.src" />
            </template>

            <template #rest="info">
               <base-dropdown placement="right">
                  <base-avatar color="purple">+{{ info.bind.rest }}</base-avatar>
                  <template #dropdown>
                     <BaseDropdownItem
                        v-for="option in createDropdownOptions(info.bind.options)"
                        :label="option.label"
                        :key="option.key"
                     ></BaseDropdownItem>
                  </template>
               </base-dropdown>
            </template>
         </base-avatar-group>`,
      },
    },
  },
};
