import { action } from "@storybook/addon-actions";
import BaseIcon from "../components/base/BaseIcon.vue";
import BaseModal from "../components/base/BaseModal.vue";
import BaseButton from "../components/base/BaseButton.vue";

export default {
  title: "Design System/Base Components/Modal",
  component: BaseModal,
  tags: ["autodocs"],

  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
    },
    controls: { expanded: true },
  },
};

export const Modal = {
  render: (args) => ({
    components: {
      BaseIcon,
      BaseModal,
      BaseButton,
    },
    setup() {
      const cardModal = ref(false);
      const isDialog = computed(() => args.preset === "dialog");
      return { args, cardModal, isDialog };
    },
    methods: {
      onAfterEnter: action("after-enter"),
      onAfterLeave: action("after-leave"),
      onEsc: action("esc"),
      onMaskClick: action("mask-click"),
      onUpdate: action("update"),
    },

    template: `
         <base-button @click="cardModal = true"> Click Me! </base-button>
         
         <base-modal
            v-model="cardModal"
            :block-scroll="args.blockScroll"
            :close-on-esc="args.closeOnEsc"
            :mask-closable="args.maskClosable"
            :preset="args.preset"
            :to="args.to"
            :transform-origin="args.transformOrigin"
            :z-index="args.zIndex"
            :closable="args.closable"
            :width="args.width"
            :footer-layout="args.footerLayout"
            :theme-overrides="args.themeOverrides"
            @after-enter="onAfterEnter"
            @after-leave="onAfterLeave"
            @esc="onEsc"
            @mask-click="onMaskClick"
            @update:show="onUpdate"
         >            
               <template #header>
                  {{args.header}}
               </template>

               <template v-if="!isDialog" #header-extra>
                  {{args['header-extra']}}
               </template>

               <template v-if="isDialog && args.icon" #icon>
                  <base-icon>{{args.icon}}</base-icon>
               </template>
               <template v-if="isDialog && args.close" #close>
                  <base-icon>{{args.close}}</base-icon>
               </template>

               <template #default>
                  <table style="width:100%; border:1px solid #f8f8f8;">
                     
                        <tr style="background:#f9f9f9;">
                           <th style="padding:12px">Abandon</th>
                           <th>Abnormal</th>
                           <th>Abolish</th>
                           <th>...</th>
                           <th>It's hard to learn words</th>
                        </tr>
                     
                     
                        <tr>
                           <td  style="padding:12px">放弃</td>
                           <td>反常的</td>
                           <td>彻底废除</td>
                           <td>...</td>
                           <td>Damn it! I can't remember those words.</td>
                        </tr>
                        <tr>
                           <td  style="padding:12px">...</td>
                           <td>...</td>
                           <td>...</td>
                           <td>...</td>
                           <td>...</td>
                        </tr>
                     
                  </table>
               </template>

               <template v-if="!isDialog" #footer>
                  <div>#footer</div>
                  <base-button ghost type="secondary">Secondary</base-button>
                  <base-button>Primary</base-button>
               </template>

               <template #action>
                  {{args.action}}
                  <template v-if="isDialog">
                      <base-button ghost type="secondary">Secondary</base-button>
                     <base-button>Primary</base-button>
                  </template>
               </template>
            
         </base-modal>
      `,
  }),

  args: {
    action: "#action",
    header: "#header",
    "header-extra": "#header-extra",
    transformOrigin: "mouse",
    footerLayout: "row",
    preset: "card",
  },

  argTypes: {
    autoFocus: {
      table: {
        disable: true,
      },
    },

    blockScroll: {
      description: "Whether to disabled body scrolling when it's active.",
    },
    closeOnEsc: {
      description: "Whether to close modal on Esc is pressed.",
    },
    closable: {
      control: "boolean",
      description:
        "Display the close button when the preset is set to 'dialog'.",
      table: {
        category: "props",
      },
    },
    displayDirective: {
      table: {
        disable: true,
      },
    },
    maskClosable: {
      description: "Whether to emit `hide` event when click mask.",
    },
    preset: {
      control: "radio",
      options: ["dialog", "card"],
      description:
        "The 'preset' determines the type of modal, which can either be 'dialog' or 'card'.",
    },
    transformOrigin: {
      control: "radio",
      options: ["mouse", "center"],
      description: "The transform origin of the modal's display animation.",
    },
    footerLayout: {
      control: "radio",
      options: ["row", "column"],
      description:
        "The layout of the action slot with buttons is only applicable when the preset is set to 'dialog'.",
    },
    width: {
      control: "text",
      description: "The width of the modal.",
    },
    zIndex: {
      description: "Z index of the modal.",
    },

    show: {
      table: {
        disable: true,
      },
    },
    modelValue: {
      table: {
        disable: true,
      },
    },
    to: {
      table: {
        disable: true,
      },
    },
    trapFocus: {
      table: {
        disable: true,
      },
    },
    themeOverrides: {
      description:
        'Progress component style overrides. Check the <a href="https://www.naiveui.com/en-US/theme" target="_blank">Theme</a> for more options.',
    },
    "update:modelValue": {
      table: {
        disable: true,
      },
    },
    default: {
      table: {
        disable: true,
      },
    },
    slotData: {
      table: {
        disable: true,
      },
    },
    // slots
    header: {
      control: "text",
      description: "Customizable header slot container.",
      table: {
        category: "slots",
      },
    },
    "header-extra": {
      control: "text",
      description: "Customizable header-extra slot container.",
      table: {
        category: "slots",
      },
    },
    action: {
      control: "text",
      description: "Customizable action slot container.",
      table: {
        category: "slots",
      },
    },

    //  dialog slots
    icon: {
      control: "select",
      options: icons(),
      description:
        "Display an icon before the header slot when the preset is configured to 'dialog'.",
      table: {
        category: "slots",
      },
    },

    close: {
      control: "select",
      options: icons(),
      description:
        "Display a customized close icon when the preset is set to 'dialog'.",
      table: {
        category: "slots",
      },
    },

    //  events
    "after-enter": {
      description: "Callback after modal is opened.",
    },
    "after-leave": {
      description: "Callback after modal is closed.",
    },
    esc: {
      description:
        "Callback fired when the escape key is pressed and focus is within modal.",
    },
    "mask-click": {
      description: "Callback on mask is clicked.",
    },
    "update-show": {
      description: "Callback when modal's display status is changed.",
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
