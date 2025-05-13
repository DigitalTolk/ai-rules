import { action } from "@storybook/addon-actions";
import BaseIcon from "../components/base/BaseIcon.vue";
import BaseButton from "../components/base/BaseButton.vue";
import BaseDrawer from "../components/base/BaseDrawer.vue";
import BaseDrawerContent from "../components/base/BaseDrawerContent.vue";

export default {
  title: "Design System/Base Components/Drawer",
  component: BaseDrawer,
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

export const Drawer = {
  render: (args) => ({
    components: {
      BaseIcon,
      BaseButton,
      BaseDrawer,
      BaseDrawerContent,
    },
    setup() {
      const active = ref(false);
      const defaultWidth = computed(() => args.defaultWidth);
      return { args, active, defaultWidth };
    },
    methods: {
      onAfterEnter: action("after-enter"),
      onAfterLeave: action("after-leave"),
      onEsc: action("esc"),
      onMaskClick: action("mask-click"),
      onUpdateHeight: action("update-height"),
      onUpdateWidth: action("update-width"),
    },
    template: `  
      <base-button @click="() => (active = !active)">
         {{ active? 'Close Drawer' : 'Open Drawer'}}
      </base-button>

      <base-drawer
         v-model="active"
         :auto-focus="args.autoFocus"
         :block-scroll="args.blockScroll"
         :close-on-esc="args.closeOnEsc"
         :content-class="args.contentClass"
         :content-style="args.contentStyle"
         :default-width="defaultWidth"
         :default-height="args.defaultHeight"         
         :height="args.height"
         :native-scrollbar="args.nativeScrollbar"
         :max-width="args.maxWidth"
         :max-height="args.maxHeight"
         :min-width="args.minWidth"
         :min-height="args.minHeight"
         :placement="args.placement"
         :resizable="args.resizable"
         :to="args.to"
         :width="args.width"

         @after-enter="onAfterEnter"
         @after-leave="onAfterLeave"
         @esc="onEsc"
         @mask-click="onMaskClick"
         @update:height="onUpdateHeight"
         @update:width="onUpdateWidth"
      >
         <base-drawer-content
            :body-class="args.bodyClass"
            :body-style="args.bodyStyle"
            :body-content-class="args.bodyContentClass"
            :body-content-style="args.bodyContentStyle"
            :closable="args.closable"
            :footer-class="args.footerClass"
            :footer-style="args.footerStyle"
            :header-class="args.headerClass"
            :header-style="args.headerStyle"
            :native-scrollbar="args['native-scrollbar']"
            :title="args.title"
         >
            <template v-if="args.default" #default>
               {{args.default}}
            </template>
            
            <template v-if="args.header" #header>
               {{args.header}}
            </template>

            <template #footer>
               <span v-if="args.footer">
                  {{args.footer}}
               </span>
               <base-button v-else>
                  Footer
               </base-button>
            </template>
         </base-drawer-content>
      </base-drawer>
   `,
  }),

  args: {
    default: "Stoner is a 1965 novel by the American writer John Williams.",
    placement: "right",
  },

  argTypes: {
    //   slots
    default: {
      description: "Drawer content default slot.",
      table: {
        category: "Drawer Content Slots",
      },
    },
    header: {
      control: "text",
      description: "Drawer content header slot.",
      table: {
        category: "Drawer Content Slots",
      },
    },
    footer: {
      control: "text",
      description: "Drawer content footer slot.",
      table: {
        category: "Drawer Content Slots",
      },
    },
    //  drawer props
    autoFocus: {
      description:
        "Whether to focus the first focusable element inside drawer.",
      table: {
        category: "Drawer Props",
      },
    },
    blockScroll: {
      description: "Whether to disabled body scrolling when it's active.",
      table: {
        category: "Drawer Props",
      },
    },
    closeOnEsc: {
      description: "Whether to close drawer on Esc is pressed.",
      table: {
        category: "Drawer Props",
      },
    },
    contentClass: {
      control: "text",
      description: "Class of drawer's scrollable content node.",
      table: {
        category: "Drawer Props",
      },
    },
    contentStyle: {
      control: "text",
      description: "Style of drawer's scrollable content node.",
      table: {
        category: "Drawer Props",
      },
    },
    defaultWidth: {
      control: "text",
      description:
        "Default width of the drawer, effective when the placement is either left or right. You can specify units such as `px`, `em`, or `%`.",
      table: {
        category: "Drawer Props",
        disable: true,
      },
    },
    defaultHeight: {
      control: "text",
      description:
        "Default height of the drawer, works when placement is top and bottom. You can specify units such as `px`, `em`, or `%`.",
      table: {
        category: "Drawer Props",
        disable: true,
      },
    },
    displayDirective: {
      table: {
        disable: true,
      },
    },
    height: {
      control: "text",
      description: "Works when placement is top and bottom.",
      table: {
        category: "Drawer Props",
      },
    },
    nativeScrollbar: {
      description: "Whether to use native scrollbar on drawer.",
      table: {
        category: "Drawer Props",
      },
    },
    maskClosable: {
      table: {
        disable: true,
      },
    },
    maxWidth: {
      control: "number",
      description: "Max width of draggable drawer.",
      table: {
        category: "Drawer Props",
      },
    },
    maxHeight: {
      control: "number",
      description: "Max height of draggable drawer.",
      table: {
        category: "Drawer Props",
      },
    },
    minWidth: {
      control: "number",
      description: "Min width of draggable drawer.",
      table: {
        category: "Drawer Props",
      },
    },
    minHeight: {
      control: "number",
      description: "Max height of draggable drawer.",
      table: {
        category: "Drawer Props",
      },
    },
    modelValue: {
      table: {
        disable: true,
      },
    },
    placement: {
      control: "inline-radio",
      options: ["top", "right", "bottom", "left"],
      description: "Drawer placement.",
      table: {
        category: "Drawer Props",
      },
    },
    resizable: {
      description: "Whether to resize the width / height of drawer.",
      table: {
        category: "Drawer Props",
      },
    },
    show: {
      description: "Whether to show drawer.",
      table: {
        category: "Drawer Props",
      },
    },
    scrollbarProps: {
      table: {
        disable: true,
      },
    },
    showMask: {
      table: {
        disable: true,
      },
    },
    to: {
      control: "text",
      description: "Container node of the drawer.",
      table: {
        category: "Drawer Props",
      },
    },
    trapFocus: {
      description: "Whether to trap focus inside drawer.",
      table: {
        category: "Drawer Props",
      },
    },
    width: {
      control: "text",
      description: "Works when placement is `left` and `right`.",
      table: {
        category: "Drawer Props",
      },
    },
    zIndex: {
      table: {
        disable: true,
      },
    },

    //  drawer content props
    bodyClass: {
      control: "text",
      description: "Drawer content's body class.",
      table: {
        category: "Drawer Content Props",
      },
    },
    bodyStyle: {
      control: "text",
      description: "Drawer content's body style.",
      table: {
        category: "Drawer Content Props",
      },
    },
    bodyContentClass: {
      control: "text",
      description: "Class of body's scrollable content node.",
      table: {
        category: "Drawer Content Props",
      },
    },
    bodyContentStyle: {
      control: "text",
      description: "Style of body's scrollable content node.",
      table: {
        category: "Drawer Content Props",
      },
    },
    closable: {
      control: "boolean",
      description: "Whether the drawer content is closable.",
      table: {
        category: "Drawer Content Props",
      },
    },
    footerClass: {
      control: "text",
      description: "Drawer content's footer class.",
      table: {
        category: "Drawer Content Props",
      },
    },
    footerStyle: {
      control: "text",
      description: "Drawer content's footer style.",
      table: {
        category: "Drawer Content Props",
      },
    },
    headerClass: {
      control: "text",
      description: "Drawer content's header class.",
      table: {
        category: "Drawer Content Props",
      },
    },
    headerStyle: {
      control: "text",
      description: "Drawer content's header style.",
      table: {
        category: "Drawer Content Props",
      },
    },
    "native-scrollbar": {
      control: "boolean",
      description: "Whether to use native scrollbar on body part.",
      table: {
        category: "Drawer Content Props",
      },
    },
    title: {
      control: "text",
      description: "Drawer content title.",
      table: {
        category: "Drawer Content Props",
      },
    },

    //  events
    "after-enter": {
      control: false,
      description: "Callback after drawer is opened.",
    },
    "after-leave": {
      control: false,
      description: "Callback after drawer is closed.",
    },
    esc: {
      control: false,
      description:
        "Callback fired when the escape key is pressed and focus is within drawer.",
    },
    "mask-click": {
      control: false,
      description: "Callback triggered on mask clicked.",
    },
    "update-height": {
      control: false,
      description: "Callback trigger on drawer height change.",
    },
    "update-width": {
      control: false,
      description: "Callback trigger on drawer width change.",
    },
    "update-show": {
      table: {
        disable: true,
      },
    },
    "update:modelValue": {
      table: {
        disable: true,
      },
    },
  },
};
