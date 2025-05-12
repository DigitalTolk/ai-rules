import BaseTextEditor from "../components/base/BaseTextEditor.vue";
import BaseIcon from "../components/base/BaseIcon.vue";

export default {
  title: "Design System/Base Components/TextEditor",
  component: BaseTextEditor,
  tags: ["autodocs"],

  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
    },
    controls: { expanded: true },
  },
};

export const TextEditor = {
  render: (args) => ({
    components: { BaseTextEditor, BaseIcon },
    setup() {
      return { args };
    },

    methods: {
      // onClose: action("close"),
    },

    template: `
          <base-text-editor
            v-model="args.content"
            :height="args.height"
            :width="args.width"
            :disabled="args.disabled"
            :extensions="args.extensions"
            />
      `,
  }),

  decorators: [
    () => ({
      template: `<div style="width:900px;background:#fff;padding:40px;text-align:center;"><story/></div>`,
    }),
  ],

  args: {
    content: "Text editor content...",
    width: 850,
    height: 250,
    extensions: {
      bold: true,
      italic: true,
      underline: true,
      textAlign: {
        enabled: true,
        options: {
          types: ["heading", "paragraph"],
          alignments: ["left", "center", "right", "justify"],
          defaultAlignment: "left",
        },
      },
      bulletList: true,
      orderedList: true,

      image: {
        enabled: false,
        options: {
          allowBase64: true,
          // inline: false,
        },
      },
    },
  },

  argTypes: {
    disabled: {
      description: "Disabled text editor.",
    },
    //  modelValue: {
    //    table: {
    //      disable: true,
    //    },
    //  },
    content: {
      description: "Text editor content",
    },

    height: {
      description: "text editor height",
    },
    width: {
      description: "Text ediotr width",
    },

    focus: {
      description:
        "Sets focus on the editor. This method can be accessed through `template refs`, allowing you to programmatically manage editor focus.",
      table: {
        category: "Exposed Methods",
      },
    },
    blur: {
      description:
        "Triggered when the editor loses focus. This event can be accessed using `template refs` for the editor, allowing you to handle focus loss scenarios effectively.",
      table: {
        category: "Exposed Methods",
      },
    },

    insertEditorContent: {
      description:
        "Adds content to the document using plain text, HTML, or JSON. This event can be accessed using `template refs` for the editor",
      table: {
        category: "Exposed Methods",
      },
    },
    clearEditorContent: {
      description:
        "Deletes the editor current document. This event can be accessed using `template refs` for the editor",
      table: {
        category: "Exposed Methods",
      },
    },
    setEditorContent: {
      description:
        "Replaces the entire document with a new one using JSON or HTML. This event can be accessed using `template refs` for the editor",
      table: {
        category: "Exposed Methods",
      },
    },

    getHTML: {
      description:
        "Returns the current editor document as HTML. This event can be accessed using `template refs` for the editor",
      table: {
        category: "Exposed Methods",
      },
    },
    getEditor: {
      description:
        "Returns the current editor object. This event can be accessed using `template refs` for the editor",
      table: {
        category: "Exposed Methods",
      },
    },
    getJSON: {
      description:
        "Returns the current editor JSON content. This event can be accessed using `template refs` for the editor",
      table: {
        category: "Exposed Methods",
      },
    },
  },
};
