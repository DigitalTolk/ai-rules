import BaseSpace from "../components/base/BaseSpace.vue";
import BaseSkeleton from "../components/base/BaseSkeleton.vue";
import BaseRow from "../components/base/BaseRow.vue";
import BaseColumn from "../components/base/BaseColumn.vue";

export default {
  title: "Design System/Base Components/Skeleton",
  component: BaseSkeleton,
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

export const Skeleton = {
  render: (args) => ({
    components: {
      BaseSpace,
      BaseSkeleton,
      BaseRow,
      BaseColumn,
    },
    setup() {
      return { args };
    },

    template: `  
      <base-row cols='1'>
         <base-column>
            <base-space vertical>
               <base-skeleton
                  :text="args.text"
                  :round="args.round"
                  :circle="args.circle"
                  :height="args.height"
                  :width="args.width"
                  :size="args.size"
                  :repeat="args.repeat"
                  :animated="args.animated"
                  :sharp="args.sharp"
                  :theme-overrides="args.themeOverrides"
               />
               <base-skeleton :height="20" :width="385" :sharp="false" />
               <base-skeleton :height="20" :width="400" round />
            </base-space>
         </base-column>
      </base-row>
   `,
  }),

  decorators: [
    () => ({
      template: `<div style="background:#fff;width:450px;padding:30px;display:flex;"><story/></div>`,
    }),
  ],

  args: {
    height: 20,
    width: 140,
  },

  argTypes: {
    text: {
      control: "boolean",
      description: "Text skeleton.",
    },
    round: {
      control: "boolean",
      description: "Round skeleton.",
    },
    circle: {
      control: "boolean",
      description: "Circle skeleton.",
    },
    height: {
      control: "number",
      description: "Skeleton height.",
    },
    width: {
      control: "number",
      description: "Skeleton width.",
    },
    size: {
      control: "inline-radio",
      options: ["small", "medium", "large"],
      description: "Skeleton size.",
    },
    repeat: {
      control: "number",
      description: "Repeat frequency.",
    },
    animated: {
      control: "boolean",
      description: "Whether to enable animation.",
    },

    sharp: {
      control: "boolean",
      description: "Whether to display as a right angled skeleton.",
    },
  },
};
