/* eslint-disable no-useless-escape */
import BaseIcon from "../components/base/BaseIcon.vue";
import BaseButton from "../components/base/BaseButton.vue";
import BaseForm from "../components/base/BaseForm.vue";
import BaseFormItem from "../components/base/BaseFormItem.vue";
import BaseSpace from "../components/base/BaseSpace.vue";
import BaseTextField from "../components/base/BaseTextField.vue";

export default {
  title: "Design System/Base Components/Form",
  component: BaseForm,
  tags: ["autodocs"],

  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
    },
    controls: { expanded: true },
  },
};

export const Form = {
  render: (args) => ({
    components: {
      BaseIcon,
      BaseButton,
      BaseForm,
      BaseFormItem,
      BaseSpace,
      BaseTextField,
    },
    setup() {
      const formRef = ref(null);
      const rPasswordFormItemRef = ref(null);
      const formErrors = ref([]);

      const formValue = ref({
        user: {
          name: null,
          age: null,
        },
        password: null,
        passwordAgain: null,
        date: null,
        startTime: null,
        phone: null,
        hobbies: "",
        skills: [],
        gender: "male",
        info: null,
      });

      const handleValidateClick = (e) => {
        e.preventDefault();

        formRef?.value?.validate((errors) => {
          formErrors.value = errors;

          if (!errors) {
            console.log("success");
          } else {
            console.log("Erorr Issues");
          }
        });
      };

      const handleReset = () => {
        formRef.value?.restoreValidation();
      };

      const rules = {
        user: {
          name: {
            required: true,
            message: "Please input your namez",
            trigger: "blur",
          },

          age: [
            {
              required: true,
              // message: "Please input your age",
              validator(rule, value) {
                if (!value) {
                  return new Error("Age is required");
                } else if (!/^\d*$/.test(value)) {
                  return new Error("Age should be an integer");
                } else if (Number(value) < 18) {
                  return new Error("Age should be above 18");
                }
                return true;
              },
              trigger: ["input", "blur"],
            },
          ],
        },
        password: [
          {
            required: true,
            message: "Password is required",
          },
        ],
      };

      return {
        args,
        formRef,
        formValue,
        handleValidateClick,
        handleReset,
        rules,
        rPasswordFormItemRef,
      };
    },

    template: `
         <base-form
            ref="formRef"
            :disabled="args.disabled"
            :inline="args.inline"
            :label-width="args.labelWidth"
            :label-align="args.labelAlign"
            :label-placement="args.labelPlacement"
            :model="formValue"
            :rules="rules"
            :show-feedback="args.showFeedback"
            :show-label="args.showLabel"
            :show-require-mark="args.showRequireMark"
            :require-mark-placement="args.requireMarkPlacement"
            :size="args.size"
         >
            <base-form-item
               path="user.name"
               :info="args.info"
               :feedback="args.feedback"
               :first="args.first"
               :ignore-path-change="args.ignorePathChange"
               :label="args.label"
               :label-align="args['label-align']"
               :label-placement="args['label-placement']"
               :label-props="args.labelProps"
               :label-style="args.labelStyle"
               :label-width="args['label-width']"
               :path="args.path"
               :required="args.required"
               :rule="args.rule"
               :rule-path="args.rulePath"
               :show-feedback="args['show-feedback']"
               :show-label="args['show-label']"
               :require-mark-placement="args.requireMarkPlacement"
               :size="args['item-size']"               
               :show-require-mark="args.showRequireMark"
               :theme-overrides="args.themeOverrides"
            >
               <base-text-field
                  v-model="formValue.user.name"
                  clearable
                  loading
               >
                  <template #prefix>
                     <base-icon filled="false" icon-color="#f1c40f">
                        person
                     </base-icon>
                  </template>
                  <template #suffix>
                     <base-icon icon-color="#16a085">stars</base-icon>
                  </template>
               </base-text-field>

               <template v-if="args['#feedback']" #feedback>
                  {{args['#feedback']}}
               </template>
               <template v-if="args['#label']" #label>
                  {{args['#label']}}
               </template>
            </base-form-item>

            <base-form-item
               label="Age"
               path="user.age"               
            >
               <base-text-field
                  v-model="formValue.user.age"
                  placeholder="Input Age"
               />
            </base-form-item>

            <base-form-item
               label="Password"
               path="password"
               show-label="true"
               info="The duck jumps over the fence"
            >
               <base-text-field
                  v-model="formValue.password"
                  placeholder="Password"
                  type="password"
                  >
                  <template #prefix>
                     <base-icon filled="false" size="10">lock</base-icon>
                  </template>
               </base-text-field>
               <template #feedback>
                  <span>help text</span>
               </template>
            </base-form-item>

            <base-form-item>
               <base-space>
                  <base-button @click="handleValidateClick" >
                     Validate
                  </base-button>
                  <base-button type="default" ghost @click="handleReset" >
                     Reset
                  </base-button>
               </base-space>
            </base-form-item>
         </base-form>
      `,
  }),

  decorators: [
    () => ({
      template: `<div style="width:500px"><story/></div>`,
    }),
  ],

  args: {
    label: "Firstname",
    labelAlign: "left",
    "label-align": "left",
    feedback: "Feedback message",
    size: "medium",
    showLabel: true,
    showFeedback: true,
    "show-feedback": true,
    path: "user.name",
  },

  argTypes: {
    model: {
      table: {
        disable: true,
      },
    },
    rules: {
      table: {
        disable: true,
      },
    },
    showRequireMark: {
      table: {
        disable: true,
      },
    },
    requireMarkPlacement: {
      table: {
        disable: true,
      },
    },
    validateMessages: {
      table: {
        disable: true,
      },
    },
    themeOverrides: {
      description:
        'Progress component style overrides. Check the <a href="https://www.naiveui.com/en-US/theme" target="_blank">Theme</a> for more options.',
      table: {
        category: "Form Props",
      },
    },
    disabled: {
      control: "boolean",
      description: "Whether to disable the form.",
      table: {
        category: "Form Props",
      },
    },
    inline: {
      control: "boolean",
      description: "Whether to display as an inline form.",
      table: {
        category: "Form Props",
      },
    },
    size: {
      control: "inline-radio",
      options: ["small", "medium", "large"],
      description: "The size of the form.",
      table: {
        category: "Form Props",
      },
    },
    labelAlign: {
      control: "inline-radio",
      options: ["left", "right"],
      description: "Applicable only if 'label-placement' is set to 'top'.",
      table: {
        category: "Form Props",
      },
    },
    labelWidth: {
      control: "text",
      description:
        "The width of label. Particularly useful when 'label-placement' is set to 'left','auto' means label width will be auto adjusted.",
      table: {
        category: "Form Props",
      },
    },
    labelPlacement: {
      control: "inline-radio",
      options: ["left", "top"],
      description:
        "The placement of the label depends on its setting: 'left' places the label to the left of the form control, while 'top' positions it above the form control.",
      table: {
        category: "Form Props",
      },
    },
    showLabel: {
      control: "boolean",
      description:
        "Determine whether to display the label in the form settings",
      table: {
        category: "Form Props",
      },
    },
    showFeedback: {
      description:
        "Determine whether to display the feedback area at the form level.",
      table: {
        category: "Form Props",
      },
    },

    //  form item props
    info: {
      control: "text",
      description:
        "A tooltip message that provides additional information about the form field.",
      table: {
        category: "Form Item Props",
      },
    },
    feedback: {
      control: "text",
      description: "Display a feedback message for the form field.",
      table: {
        category: "Form Item Props",
      },
    },
    first: {
      control: "boolean",
      description: "Whether to show the first error message.",
      table: {
        category: "Form Item Props",
      },
    },
    ignorePathChange: {
      control: "boolean",
      description:
        "Usually, changing path will cause a re-render and naive-ui will clear the validation result. Setting ignore-path-change to true will disable that behavior.",
      table: {
        category: "Form Item Props",
      },
    },
    label: {
      control: "text",
      description: "Label text.",
      table: {
        category: "Form Item Props",
      },
    },
    "label-align": {
      control: "inline-radio",
      options: ["left", "right"],
      description:
        "Text alignment within the label defaults to the parent form's 'label-align' if not explicitly set. Ensure that 'label-placement' is set to 'top' for this setting to take effect.",
      table: {
        category: "Form Item Props",
      },
    },
    "label-placement": {
      control: "inline-radio",
      options: ["left", "top"],
      description:
        "If not set, it will inherit the parent form's label-placement.",
      table: {
        category: "Form Item Props",
      },
    },
    "label-width": {
      control: "text",
      description:
        "Field label width, effective only when 'label-placement' is set to 'left'.",
      table: {
        category: "Form Item Props",
      },
    },
    path: {
      control: "text",
      description: "The path to use in the parent form's model object.",
      table: {
        category: "Form Item Props",
      },
    },
    required: {
      control: "boolean",
      description:
        "Whether to show the 'required' symbol. Note: a required rule has higher priority than this prop & this prop won't have any effect on validation. Validation still depends on rules.",
      table: {
        category: "Form Item Props",
      },
    },
    "show-label": {
      control: "boolean",
      description:
        "Determine whether to display the label in the form item level",
      table: {
        category: "Form Item Props",
      },
    },
    "show-feedback": {
      control: "boolean",
      description:
        "Indicate whether to display the feedback area at the form item level.",
      table: {
        category: "Form Item Props",
      },
    },
    "item-size": {
      control: "inline-radio",
      options: ["small", "medium", "large"],
      description:
        'You can individually set the size of each form item using the "size" property on the form item.',
      table: {
        category: "Form Item Props",
      },
    },

    //  Form Item Slots
    "#feedback": {
      control: "text",
      description:
        "Form item 'feedback' slot, this will override the 'feedback' prop.",
      table: {
        category: "Form Item Slots",
      },
    },
    "#label": {
      control: "text",
      description:
        "Form item 'label' slot, this will override the 'label' prop.",
      table: {
        category: "Form Item Slots",
      },
    },

    //  Shared slots
    default: {
      control: false,
      description: "The default slot of the 'form' and 'form item'.",
      table: {
        category: "Common Slot",
      },
    },

    validate: {
      table: {
        disable: true,
      },
    },
    restoreValidation: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    docs: {
      source: {
        code: `
        const formRef = ref(null);
      const rPasswordFormItemRef = ref(null);
      const formErrors = ref([]);
      const formValue = ref({
        user: {
          name: null,
          age: null,
        },
        password: null,
        passwordAgain: null,
        date: null,
        startTime: null,
        phone: null,
        hobbies: "",
        skills: [],
        gender: "male",
        info: null,
      });

      const handleValidateClick = (e) => {
        e.preventDefault();

        formRef?.value?.validate((errors) => {
          formErrors.value = errors;

          if (!errors) {
            console.log("success");
          } else {
            console.log("Erorr Issues");
          }
        });
      };

      const handleReset = () => {
        formRef.value?.restoreValidation();
      };

      const rules = {
        user: {
          name: {
            required: true,
            message: "Please input your namez",
            trigger: "blur",
          },

          age: [
            {
              required: true,
              // message: "Please input your age",
              validator(rule, value) {
                if (!value) {
                  return new Error("Age is required");
                } else if (!/^\d*$/.test(value)) {
                  return new Error("Age should be an integer");
                } else if (Number(value) < 18) {
                  return new Error("Age should be above 18");
                }
                return true;
              },
              trigger: ["input", "blur"],
            },
          ],
        },
        password: [
          {
            required: true,
            message: "Password is required",
          },
        ],
      };
      
        <base-form
            ref="formRef"
            :disabled="args.disabled"
            :inline="args.inline"
            :label-width="args.labelWidth"
            :label-align="args.labelAlign"
            :label-placement="args.labelPlacement"
            :model="formValue"
            :rules="rules"
            :show-feedback="args.showFeedback"
            :show-label="args.showLabel"
            :show-require-mark="args.showRequireMark"
            :require-mark-placement="args.requireMarkPlacement"
            :size="args.size"
         >
            <base-form-item
               path="user.name"
               :info="args.info"
               :feedback="args.feedback"
               :first="args.first"
               :ignore-path-change="args.ignorePathChange"
               :label="args.label"
               :label-align="args['label-align']"
               :label-placement="args['label-placement']"
               :label-props="args.labelProps"
               :label-style="args.labelStyle"
               :label-width="args['label-width']"
               :path="args.path"
               :required="args.required"
               :rule="args.rule"
               :rule-path="args.rulePath"
               :show-feedback="args['show-feedback']"
               :show-label="args['show-label']"
               :require-mark-placement="args.requireMarkPlacement"
               :size="args['item-size']"               
               :show-require-mark="args.showRequireMark"
               :theme-overrides="args.themeOverrides"
            >
               <base-text-field
                  v-model="formValue.user.name"
                  clearable
                  loading
               >
                  <template #prefix>
                     <base-icon filled="false" icon-color="#f1c40f">
                        person
                     </base-icon>
                  </template>
                  <template #suffix>
                     <base-icon icon-color="#16a085">stars</base-icon>
                  </template>
               </base-text-field>

               <template v-if="args['#feedback']" #feedback>
                  {{args['#feedback']}}
               </template>
               <template v-if="args['#label']" #label>
                  {{args['#label']}}
               </template>
            </base-form-item>

            <base-form-item
               label="Age"
               path="user.age"               
            >
               <base-text-field
                  v-model="formValue.user.age"
                  placeholder="Input Age"
               />
            </base-form-item>

            <base-form-item
               label="Password"
               path="password"
               show-label="true"
               info="The duck jumps over the fence"
            >
               <base-text-field
                  v-model="formValue.password"
                  placeholder="Password"
                  type="password"
                  >
                  <template #prefix>
                     <base-icon filled="false" size="10">lock</base-icon>
                  </template>
               </base-text-field>
               <template #feedback>
                  <span>help text</span>
               </template>
            </base-form-item>

            <base-form-item>
               <base-space>
                  <base-button @click="handleValidateClick" >
                     Validate
                  </base-button>
                  <base-button type="default" ghost @click="handleReset" >
                     Reset
                  </base-button>
               </base-space>
            </base-form-item>
         </base-form>
          `,
      },
    },
  },
};
