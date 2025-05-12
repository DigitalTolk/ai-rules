import BaseIcon from "../components/base/BaseIcon.vue";
import BaseCode from "../components/base/BaseCode.vue";

export default {
  title: "Design System/Base Components/BaseCode",
  component: BaseCode,
  tags: ["autodocs"],

  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
    },
    controls: { expanded: true },
  },
};

export const Code = {
  render: (args) => ({
    components: {
      BaseIcon,
      BaseCode,
    },
    setup() {
      return { args };
    },

    template: `  
      <base-code
         :code="args.code"
         :language="args.language"
         :show-line-numbers="args.showLineNumbers"
         :word-wrap="args.wordWrap"
         :theme-overrides="args.themeOverrides"
      >
      
      </base-code>
   `,
  }),

  decorators: [
    () => ({
      template: `<div style="width:inherit;background:#fff; padding:20px;"><story/></div>`,
    }),
  ],

  args: {
    language: "javascript",
  },

  argTypes: {
    code: {
      control: "text",
      description: "Incoming code string.",
    },

    language: {
      control: "inline-radio",
      options: ["javascript", "php", "css", "java"],
      description:
        "Type of programming language for syntax highlighting in highlight.js.",
    },
    showLineNumbers: {
      description:
        "Whether to show line numbers. Won't work if `inline` or `word-wrap` is `true`.",
    },

    wordWrap: {
      description: "Whether to display word-wrapped code.",
    },
    themeOverrides: {
      description:
        'Progress component style overrides. Check the <a href="https://www.naiveui.com/en-US/theme" target="_blank">Theme</a> for more options.',
      table: {
        category: "props",
      },
    },
  },
};
