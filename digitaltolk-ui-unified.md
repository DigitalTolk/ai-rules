# DigitalTolk UI Component Library - Unified Documentation

## Table of Contents
1. [Introduction](#introduction)
2. [Setup](#setup)
3. [Automatic Component Selection Rules](#automatic-component-selection-rules)
4. [Component Categories](#component-categories)
5. [Component Reference](#component-reference)
   - [Layout Components](#layout-components)
   - [Form Components](#form-components)
   - [Navigation Components](#navigation-components)
   - [Display Components](#display-components)
   - [Specialized Components](#specialized-components)
6. [Component Group Rules](#component-group-rules)
7. [Individual Component Documentation](#individual-component-documentation)

## Introduction

This comprehensive guide provides complete information about the DigitalTolk UI component library, including automatic component selection rules, selection guidelines, and component reference.

Always import components from `@digitaltolk/ui` and use DigitalTolk UI components instead of HTML elements when equivalent components exist.

```js
import { BaseButton, BaseTextField, BaseCard } from '@digitaltolk/ui';
```

## Setup

### Registry Configuration

To use the DigitalTolk UI component library, you must configure your package manager to use the private registry for the @dtolk scope.

Add a `.pnpmrc` (or `.npmrc`) file to the root of your project with the following content:

```
@dtolk:registry=https://gitlab.digitaltolk.net/api/v4/packages/npm/
```

This ensures that packages under the `@dtolk` scope are installed from the correct registry.

### Installation

After configuring the registry, install the DigitalTolk UI library by running:

```
pnpm add @dtolk/digitaltolk-ui
```

This will add the `@dtolk/digitaltolk-ui` package to your project dependencies.

### Vite/Nuxt Configuration

To enable auto-import and component resolution for DigitalTolk UI, update your Vite or Nuxt configuration as follows:

#### For Vite (vite.config.ts or vite.config.js)

```js
import Components from 'unplugin-vue-components/vite'
import DigitalTolkUIResolver from '@dtolk/digitaltolk-ui/resolvers'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    Components({
      dirs: ['src/components', 'src/modules'],
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [DigitalTolkUIResolver],
      dts: 'src/components.d.ts'
    }),
    AutoImport({
      imports: ['vue', 'vue-router', {
        "@dtolk/digitaltolk-ui": [
          "useDialog",
          "useMessage",
          "useNotification",
          "useLoadingBar",
        ],
      }],
      dts: 'src/auto-imports.d.ts',
      dirs: ['src/composables', 'src/stores', 'src/constants'],
      vueTemplate: true
    })
  ]
})
```

#### For Nuxt (nuxt.config.ts)

```ts
import Components from 'unplugin-vue-components/vite'
import DigitalTolkUIResolver from '@dtolk/digitaltolk-ui/resolvers'
import AutoImport from 'unplugin-auto-import/vite'

export default defineNuxtConfig({
  modules: [
    '@vite-pwa/nuxt',
    // ...other modules
  ],
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Nuxt App',
      short_name: 'NuxtApp',
      description: 'A Nuxt 3 app with PWA support',
      theme_color: '#ffffff',
      icons: [
        {
          src: '/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
  },
  vite: {
    plugins: [
      Components({
        resolvers: [DigitalTolkUIResolver],
        dts: 'components.d.ts'
      }),
      AutoImport({
        imports: ['vue', 'vue-router', {
          "@dtolk/digitaltolk-ui": [
            "useDialog",
            "useMessage",
            "useNotification",
            "useLoadingBar",
          ],
        }],
        dts: 'auto-imports.d.ts',
        vueTemplate: true
      })
    ]
  }
})
```

## Automatic Component Selection Rules

When implementing UI features, automatically select the most appropriate DigitalTolk UI components based on context and requirements without explicit instructions.

### Core Rules

1. **Always use DigitalTolk UI components** instead of HTML elements when equivalent components exist
2. **Import all components** from `'@digitaltolk/ui'`
3. **Select based on semantic meaning** and function, not just appearance
4. **Consider the entire user journey** and interaction flow

### HTML Element Mappings

Replace these HTML elements with DigitalTolk UI components:

| HTML Element | DigitalTolk UI Component | Usage Context |
| :--- | :--- | :--- |
| `<button>` | `<BaseButton>` | Actions, form submission |
| `<a>` | `<BaseLink>` | Navigation, external links |
| `<input type="text">` | `<BaseTextField>` | Text input, search fields |
| `<input type="number">` | `<BaseInputNumber>` | Numeric values, quantities |
| `<input type="checkbox">` | `<BaseCheckbox>` | Boolean choices, selections |
| `<input type="radio">` | `<BaseRadio>` | Exclusive selections |
| `<select>` | `<BaseSelect>` | Dropdown selections |
| `<table>` | `<BaseTable>` | Structured data display |
| `<textarea>` | `<BaseTextField multiline>` | Multi-line text input |
| `<div>` (container) | `<BaseCard>` | Content grouping |
| `<div>` (layout) | `<BaseGrid>` | Responsive layouts |
| `<hr>` | `<BaseDivider>` | Visual separation |
| `<form>` | `<BaseForm>` | Form containers |
| `<ul>` or `<ol>` | `<BaseList>` | Item collections |

### Component Selection Decision Tree

#### For Data Input

```
IF collecting user input:
  IF single line text → USE BaseTextField
  IF multi-line text → USE BaseTextField with multiline prop
  IF numeric value → USE BaseInputNumber
  IF date → USE BaseDatePicker
  IF time → USE BaseTimepicker
  IF location → USE BaseLocationField
  IF selection from options:
    IF single selection:
      IF few options (≤5) → USE BaseRadioGroup
      ELSE → USE BaseSelect
    IF multiple selection:
      IF few options (≤5) → USE BaseCheckboxGroup
      ELSE → USE BaseSelect with multiple prop
  IF binary choice:
    IF toggle style preferred → USE BaseSwitch
    ELSE → USE BaseCheckbox
  IF rich text → USE BaseTextEditor
  IF file upload → USE BaseUpload
  IF text with suggestions → USE BaseAutoComplete
```

#### For Data Display

```
IF displaying data:
  IF structured data with rows/columns → USE BaseTable
  IF user information:
    IF single user → USE BaseAvatar
    IF multiple users → USE BaseAvatarGroup
  IF status or category → USE BaseTag
  IF important message → USE BaseAlert
  IF loading state:
    IF placeholder for content → USE BaseSkeleton
    ELSE → USE BaseSpin
  IF empty state → USE BaseBlankState
  IF progress indication → USE BaseProgress
  IF code snippet → USE BaseCode
  IF timeline → USE BaseTimeline
  IF metrics → USE BaseMetric
  IF additional info on hover → USE BaseTooltip
```

#### For Navigation

```
IF navigation needed:
  IF clickable actions → USE BaseButton
  IF page/external links → USE BaseLink
  IF content sections → USE BaseTabs
  IF application menu → USE BaseMenu
  IF dropdown options → USE BaseDropdown
  IF page navigation → USE BasePagination
  IF slide-in panel → USE BaseDrawer
```

#### For Layout

```
IF layout structure needed:
  IF responsive grid → USE BaseGrid
  IF content container → USE BaseCard
  IF spacing between elements → USE BaseSpace
  IF visual separator → USE BaseDivider
  IF modal dialog → USE BaseModal
  IF collapsible sections → USE BaseCollapse
  IF popup content → USE BasePopover
  IF confirmation popup → USE BasePopconfirm
```

## Component Categories

### Layout Components

Components for creating layouts and managing spacing.

| Component | Description | When to Use |
| :--- | :--- | :--- |
| **BaseCard** | Versatile container with header, footer, and content areas | Content grouping, information sections |
| **BaseGrid** | Flexible responsive layout system with rows and columns | Page layouts, dashboard arrangements |
| **BaseSpace** | Utility for creating consistent spacing between elements | Stacked items, consistent spacing |
| **BaseDivider** | Visual separation component with optional text | Section separators, content dividers |

### Form Components

Components for building forms and collecting user input.

| Component | Description | When to Use |
| :--- | :--- | :--- |
| **BaseForm** | Container with validation handling for form elements | All form implementations |
| **BaseTextField** | Text input with validation support | Username, email, description, search |
| **BaseInputNumber** | Numeric input with increment/decrement controls | Age, quantity, price |
| **BaseSelect** | Dropdown with single and multiple selection modes | Country selection, category filters |
| **BaseCheckbox** | Checkbox input for boolean selections | Agree to terms, feature toggles |
| **BaseCheckboxGroup** | Group for managing multiple related checkboxes | Feature selection, permissions |
| **BaseRadio** | Radio button for single selections | Gender, plan selection |
| **BaseRadioGroup** | Group for managing related radio buttons | Exclusive choice sets |
| **BaseSwitch** | Toggle switch for boolean settings | Enable/disable features |
| **BaseDatePicker** | Date selection with calendar interface | Birth date, event dates |
| **BaseTimepicker** | Time selection component | Meeting times, appointments |
| **BaseAutoComplete** | Auto-complete text input with suggestions | Search with suggestions, tags |
| **BaseTextEditor** | Rich text editor component | Blog posts, formatted content |
| **BaseLocationField** | Location input with map integration | Addresses, delivery locations |

### Navigation Components

Components for navigation and user interaction.

| Component | Description | When to Use |
| :--- | :--- | :--- |
| **BaseButton** | Button for triggering actions | Submit, cancel, add new |
| **BaseLink** | Navigation for internal and external links | Page navigation, "learn more" |
| **BaseTabs** | Tabbed interface for organizing related content | Page sections, content categories |
| **BaseMenu** | Menu for displaying navigation options | Main navigation, settings |
| **BaseNavigation** | Navigation bar for site-wide navigation | Primary navigation |
| **BasePagination** | Pagination for navigating multi-page content | Search results, data tables |
| **BaseDrawer** | Sliding drawer for secondary content | Mobile menu, additional options |
| **BaseDropdown** | Dropdown menu component | Actions menu, user menu |

### Display Components

Components for displaying content and information.

| Component | Description | When to Use |
| :--- | :--- | :--- |
| **BaseAlert** | Important messages and notifications | Success messages, warnings, errors |
| **BaseAvatar** | User avatar with image and text fallback | User profiles, comment authors |
| **BaseAvatarGroup** | Groups of user avatars | Team members, participants |
| **BaseTag** | Compact categories, labels, and status indicators | Status labels, categories |
| **BaseIcon** | Icon component with Material Icons support | UI icons, status indicators |
| **BaseTooltip** | Informational tooltip component | Help text, additional details |
| **BaseTable** | Data table with sorting and pagination | User lists, product inventory |
| **BasePopover** | Popover for contextual information | Additional info, quick actions |
| **BasePopconfirm** | Confirmation popover for critical actions | Delete confirmation, logout |
| **BaseModal** | Modal dialog for focused user interactions | Detailed views, forms |
| **BaseToaster** | Toast notifications for temporary messages | Success/error notifications |
| **BaseSkeleton** | Loading placeholder for content | Content loading states |
| **BaseText** | Typography with consistent text styling | Formatted text display |
| **BaseProgress** | Progress indicator for operations | Upload progress, loading |
| **BaseBlankState** | Empty state for unavailable content | Empty lists, no search results |
| **BaseImage** | Enhanced image with loading and error states | User images, content images |
| **BaseImageGroup** | Groups of related images | Photo galleries, previews |
| **BaseRate** | Rating component for user feedback | Product ratings, reviews |
| **BaseList** | List for displaying collections of items | Simple data lists |
| **BaseCollapse** | Collapsible content for progressive disclosure | FAQ accordion, settings |
| **BaseCode** | Code display with syntax highlighting | Code examples, configuration |

### Specialized Components

Components for specific use cases or advanced functionality.

| Component | Description | When to Use |
| :--- | :--- | :--- |
| **BaseSpin** | Loading indicator for content loading states | Data fetching, processing |
| **BaseCalendar** | Calendar display and date selection | Event calendars, scheduling |
| **BaseChart** | Data visualization for various chart types | Analytics, reports |
| **BaseTimeline** | Timeline for displaying chronological events | Activity history, processes |
| **BaseMenuCustom** | Customizable menu component | Custom navigation patterns |
| **BaseMetric** | Numeric metrics display component | KPIs, dashboard statistics |
| **BasePageHeader** | Page header with title and actions | Page titles, breadcrumbs |

## Context-Based Automatic Selection

### Form Implementation
Automatically use when implementing forms:
- `<BaseForm>` as the container
- `<BaseTextField>` for text inputs
- `<BaseSelect>` for dropdowns
- `<BaseCheckbox>` or `<BaseSwitch>` for boolean choices
- `<BaseRadioGroup>` for exclusive selections
- `<BaseButton type="primary">` for submit actions

### Dashboard or Statistics
Automatically use for dashboards:
- `<BaseGrid>` for layout
- `<BaseCard>` for content containers
- `<BaseMetric>` for key performance indicators
- `<BaseChart>` for data visualization

### User Information Display
Automatically use for user-related content:
- `<BaseAvatar>` for user images
- `<BaseAvatarGroup>` for groups of users
- `<BaseTag>` for status or roles

### Data Tables or Lists
Automatically use for data display:
- `<BaseTable>` for structured data with columns
- `<BaseList>` for simpler data lists
- `<BasePagination>` for multi-page data

### Status and Feedback
Automatically use for user feedback:
- `<BaseAlert>` for important messages
- `<BaseToaster>` for temporary notifications
- `<BaseProgress>` for showing progress
- `<BaseSpin>` or `<BaseSkeleton>` for loading states

## Component Group Rules

### Form Components Rule

#### Available Form Components

**Input Components**
- BaseTextField - Text input component with validation support
- BaseInputNumber - Numeric input component with increment/decrement controls
- BaseSelect - Dropdown selection component with single and multiple selection modes
- BaseAutoComplete - Auto-complete text input with suggestions
- BaseLocationField - Location input component with map integration
- BaseTextEditor - Rich text editor component

**Selection Components**
- BaseCheckbox - Checkbox input component for boolean selections
- BaseCheckboxGroup - Group component for managing multiple related checkboxes
- BaseRadio - Radio button input component for single selections
- BaseRadioGroup - Group component for managing related radio buttons
- BaseSwitch - Toggle switch component for boolean settings
- BaseRate - Rating component for user feedback

**Container Components**
- BaseForm - Container component with validation handling for form elements

#### Implementation Guidelines

**Form Structure**
```jsx
import { BaseForm } from '@digitaltolk/ui';

const MyForm = () => {
  return (
    <BaseForm
      layout="vertical"
      onFinish={handleSubmit}
      initialValues={initialData}
    >
      {/* Form fields */}
    </BaseForm>
  );
};
```

**Form Fields**
```jsx
// Text Input
<BaseTextField
  name="username"
  label="Username"
  required
  rules={[
    { required: true, message: 'Please enter username' },
    { min: 3, message: 'Username must be at least 3 characters' }
  ]}
/>

// Select
<BaseSelect
  name="country"
  label="Country"
  options={countryOptions}
  required
/>

// Checkbox Group
<BaseCheckboxGroup
  name="interests"
  label="Interests"
  options={interestOptions}
/>

// Switch
<BaseSwitch
  name="notifications"
  label="Enable Notifications"
  defaultChecked
/>
```

**Form Validation**
```jsx
const validationRules = {
  email: [
    { required: true, message: 'Email is required' },
    { type: 'email', message: 'Invalid email format' }
  ],
  password: [
    { required: true, message: 'Password is required' },
    { min: 8, message: 'Password must be at least 8 characters' }
  ]
};
```

**Form Submission**
```jsx
const handleSubmit = async (values) => {
  try {
    await submitForm(values);
    BaseToaster.success('Form submitted successfully');
  } catch (error) {
    BaseToaster.error('Failed to submit form');
  }
};
```

#### Best Practices

1. **Form Layout**
   - Use consistent spacing between fields
   - Group related fields together
   - Use appropriate field sizes
   - Implement responsive layouts

2. **Validation**
   - Implement client-side validation
   - Show clear error messages
   - Validate on blur and submit
   - Use appropriate validation rules

3. **State Management**
   - Handle loading states
   - Manage form errors
   - Implement field-level validation
   - Track form dirty state

4. **Accessibility**
   - Use proper labels
   - Implement keyboard navigation
   - Add ARIA attributes
   - Ensure proper focus management

5. **Performance**
   - Debounce input handlers
   - Optimize re-renders
   - Use proper key props
   - Implement proper cleanup

#### Common Patterns

**Dynamic Forms**
```jsx
const DynamicForm = () => {
  const [fields, setFields] = useState([]);

  return (
    <BaseForm>
      {fields.map((field, index) => (
        <BaseTextField
          key={field.id}
          name={`field-${index}`}
          label={field.label}
        />
      ))}
      <BaseButton onClick={() => addField()}>Add Field</BaseButton>
    </BaseForm>
  );
};
```

**Form with Location Field**
```jsx
const FormWithLocation = () => {
  return (
    <BaseForm>
      <BaseLocationField
        name="address"
        label="Address"
        required
        onLocationSelect={handleLocationSelect}
      />
    </BaseForm>
  );
};
```

**Form with Autocomplete**
```jsx
const FormWithAutocomplete = () => {
  return (
    <BaseForm>
      <BaseAutoComplete
        name="skill"
        label="Skills"
        options={skillOptions}
        filterOption={(input, option) =>
          option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      />
    </BaseForm>
  );
};
```

**Form with Conditional Fields**
```jsx
const ConditionalForm = () => {
  const [showAdditionalField, setShowAdditionalField] = useState(false);
  
  return (
    <BaseForm>
      <BaseSwitch
        name="enableFeature"
        label="Enable Feature"
        onChange={(checked) => setShowAdditionalField(checked)}
      />
      
      {showAdditionalField && (
        <BaseTextField
          name="featureConfig"
          label="Feature Configuration"
        />
      )}
    </BaseForm>
  );
};
```

#### Error Handling

**Form Level Errors**
```jsx
<BaseForm
  onFinishFailed={({ errorFields }) => {
    BaseToaster.error('Please fix the errors in the form');
  }}
>
  {/* Form fields */}
</BaseForm>
```

**Field Level Errors**
```jsx
<BaseTextField
  name="email"
  validateStatus={errors.email ? 'error' : ''}
  help={errors.email}
/>
```

## Individual Component Documentation

-------------------------

### BaseButton Component

#### Description
Button component for triggering actions. BaseButton is a versatile component that provides a clickable button with various styles, sizes, states, and icon support. It can be used as a standalone button or as part of a button group.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| attrType | String | "button" | HTML button type attribute ("button", "submit", "reset") |
| block | Boolean | false | When true, button takes full width of its container |
| bordered | Boolean | true | Whether to show the button border |
| circle | Boolean | false | Whether the button should be circular |
| icon | String | undefined | Material icon name to display inside the button |
| dashed | Boolean | false | Whether the border is dashed |
| disabled | Boolean | false | Whether the button is disabled |
| focusable | Boolean | true | Whether the button can receive focus |
| ghost | Boolean | false | Whether to use ghost style (transparent background with border) |
| group | Boolean | false | Whether the button is part of a button group |
| keyboard | Boolean | true | Whether the button responds to keyboard events |
| label | String | undefined | Text label for the button |
| loading | Boolean | false | Whether to show a loading indicator |
| round | Boolean | false | Whether the button has rounded corners |
| size | String | "medium" | Size of the button ("tiny", "small", "medium", "large") |
| text | Boolean | false | Whether to use text button style (no background or border) |
| textColor | String | undefined | Custom text color |
| type | String | "primary" | Type of button ("default", "tertiary", "primary", "success", "info", "warning", "error", "secondary") |
| tag | String | "button" | HTML tag to use for the button |
| vertical | Boolean | false | Whether to arrange buttons vertically when in a group |
| themeOverrides | Object | {} | Custom theme overrides for component styling |

#### Slots

| Slot | Description |
|------|-------------|
| default | Content of the button, will display label prop if no content is provided |
| prefix | Content to prepend, replaces icon prop if provided |
| suffix | Content to append |
| icon | Custom icon content (only used when prefix slot isn't provided) |

#### Usage Examples

**Basic Usage**
```vue
<template>
  <BaseButton>Click Me</BaseButton>
</template>
```

**Button Types**
```vue
<template>
  <div>
    <BaseButton type="primary">Primary</BaseButton>
    <BaseButton type="secondary">Secondary</BaseButton>
    <BaseButton type="default">Default</BaseButton>
    <BaseButton type="success">Success</BaseButton>
    <BaseButton type="warning">Warning</BaseButton>
    <BaseButton type="error">Error</BaseButton>
  </div>
</template>
```

**Button Sizes**
```vue
<template>
  <div>
    <BaseButton size="tiny">Tiny</BaseButton>
    <BaseButton size="small">Small</BaseButton>
    <BaseButton size="medium">Medium</BaseButton>
    <BaseButton size="large">Large</BaseButton>
  </div>
</template>
```

**With Icon**
```vue
<template>
  <BaseButton icon="search">Search</BaseButton>
</template>
```

**With Prefix and Suffix**
```vue
<template>
  <BaseButton>
    <template #prefix>
      <BaseIcon>search</BaseIcon>
    </template>
    Search
    <template #suffix>
      <BaseIcon>arrow_forward</BaseIcon>
    </template>
  </BaseButton>
</template>
```

**Ghost and Text Buttons**
```vue
<template>
  <div>
    <BaseButton ghost>Ghost Button</BaseButton>
    <BaseButton text>Text Button</BaseButton>
  </div>
</template>
```

**Circle Button**
```vue
<template>
  <BaseButton circle icon="add" />
</template>
```

**Button Group**
```vue
<template>
  <BaseButton group>
    <BaseButton>Left</BaseButton>
    <BaseButton>Middle</BaseButton>
    <BaseButton>Right</BaseButton>
  </BaseButton>
</template>
```

-------------------------

### BaseAlert Component

#### Description
BaseAlert is a versatile component for displaying important messages, notifications, or status information to users. It wraps Naive UI's n-alert component and provides a consistent interface for showing alerts with various styles, icons, and interactive elements.

#### Props

**Core Props**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| type | 'default' \| 'info' \| 'success' \| 'warning' \| 'error' | 'default' | The type/style of the alert |
| title | String | undefined | Title text displayed at the top of the alert |
| closable | Boolean | false | Whether the alert can be closed by the user |
| showIcon | Boolean | true | Whether to display an icon based on the alert type |

**Appearance Props**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| bordered | Boolean | true | Whether to show a border around the alert |
| ghost | Boolean | false | Whether to remove the background color and border |
| themeOverrides | Object | {} | Custom theme overrides for styling the component |

#### Events

| Event | Description |
|-------|-------------|
| close | Emitted when the close button is clicked (if closable is true) |
| after-leave | Emitted after the alert's closing animation completes |

#### Slots

| Slot | Description |
|------|-------------|
| default | Main content of the alert |
| header | Custom header content (replaces the title prop if provided) |
| icon | Custom icon content (overrides the default icon based on type) |
| action | Content for the action area, typically containing buttons |

#### Usage Examples

**Basic Alert**
```vue
<template>
  <BaseAlert type="info">
    This is a basic info alert
  </BaseAlert>
</template>
```

**Alert with Title**
```vue
<template>
  <BaseAlert 
    type="success" 
    title="Success!"
  >
    Your operation was completed successfully
  </BaseAlert>
</template>
```

**Closable Warning Alert**
```vue
<template>
  <BaseAlert 
    type="warning" 
    title="Warning" 
    closable 
    @close="handleClose"
  >
    This action cannot be undone
  </BaseAlert>
</template>

<script setup>
const handleClose = () => {
  console.log('Alert closed');
};
</script>
```

**Error Alert with Action Buttons**
```vue
<template>
  <BaseAlert type="error" title="Error">
    Failed to save changes
    <template #action>
      <BaseButton size="small" @click="retry">Retry</BaseButton>
      <BaseButton size="small" @click="cancel">Cancel</BaseButton>
    </template>
  </BaseAlert>
</template>
```

-------------------------

### BaseTextField Component

#### Description
A versatile text input component supporting various input types, validation, and customization options. BaseTextField is a wrapper around the n-input component, providing enhanced functionality and consistent styling.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| modelValue | String/Number | "" | The value of the input (v-model binding) |
| allowInput | Boolean | undefined | Whether to allow input |
| autofocus | Boolean | false | Whether to autofocus the input |
| autosize | Boolean/Object | { minRows: 3 } | For textarea, whether to automatically adjust height |
| clearable | Boolean | false | Whether the input can be cleared |
| countGraphemes | Number | undefined | Custom grapheme counter |
| defaultValue | String | null | Default value of the input |
| disabled | Boolean | false | Whether the input is disabled |
| ghost | Boolean | false | Whether to use ghost style without borders |
| inputProps | Object | undefined | Props to pass to the inner input element |
| loading | Boolean | false | Whether to show loading state |
| maxlength | Number | undefined | Maximum input length |
| minlength | Number | undefined | Minimum input length |
| pair | Boolean | false | Whether to show a paired input |
| passivelyActivated | Boolean | false | Whether the input is passively activated |
| placeholder | String | null | Placeholder text |
| readonly | Boolean | false | Whether the input is read-only |
| renderCount | Function | undefined | Custom render function for character count |
| round | Boolean | false | Whether the input has rounded corners |
| rows | Number | 3 | Number of rows for textarea |
| separator | String | undefined | Separator for paired inputs |
| showCount | Boolean | false | Whether to show character count |
| showPasswordOn | String | undefined | When to show password text |
| size | String | "medium" | Size of the input ("tiny", "small", "medium", "large") |
| status | String | undefined | Status of the input ("success", "warning", "error") |
| customValidationMessage | String | undefined | Custom validation message |
| type | String | "text" | Input type ("text", "password", "textarea", "url", "email", "phone") |
| themeOverrides | Object | {} | Custom theme overrides for the component |

#### Events

| Event | Parameters | Description |
|-------|------------|-------------|
| update:modelValue | (value) | Triggered when the input value changes |
| blur | () | Triggered when the input loses focus |
| change | (value) | Triggered when the input value is changed and confirmed |
| clear | () | Triggered when the input is cleared |
| input | (value) | Triggered when the input value changes (with each keystroke) |
| focus | () | Triggered when the input gains focus |
| select | (event) | Triggered when text in the input is selected |
| scrollTo | (event) | Triggered when scrolling the input |

#### Slots

| Slot | Description |
|------|-------------|
| label | Input label content |
| title-info | Additional information displayed next to the label |
| help-text | Help text displayed below the input |
| clear-icon | Custom clear icon |
| count | Custom character count display |
| password-invisible-icon | Custom icon for hidden password |
| password-visible-icon | Custom icon for visible password |
| prefix | Content displayed before the input |
| suffix | Content displayed after the input |
| separator | Custom separator for paired inputs |

#### Validation

The component includes built-in validation for the following input types:
- Email: Validates email format
- URL: Validates URL format
- Phone: Validates phone number format

Validation errors are displayed in the help-text slot by default.

#### Usage Examples

**Basic Text Input**
```vue
<template>
  <BaseTextField v-model="inputValue" placeholder="Enter text">
    <template #label>Username</template>
  </BaseTextField>
</template>
```

**Password Input**
```vue
<template>
  <BaseTextField 
    v-model="password" 
    type="password" 
    placeholder="Enter password"
    showPasswordOn="click"
  >
    <template #label>Password</template>
    <template #help-text>Password must be at least 8 characters</template>
  </BaseTextField>
</template>
```

**Email Input with Validation**
```vue
<template>
  <BaseTextField 
    v-model="email" 
    type="email" 
    placeholder="user@example.com"
  >
    <template #label>Email Address</template>
  </BaseTextField>
</template>
```

-------------------------

### BaseAvatar Component

#### Description
BaseAvatar is a versatile component for displaying user avatars, profile pictures, or placeholder icons. It wraps Naive UI's n-avatar component and provides various customization options including fallback behavior when images fail to load.

#### Props

**Core Props**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| src | String | "" | URL of the avatar image |
| size | String | "medium" | Size of the avatar: "small", "medium", "large", or custom size |
| round | Boolean | true | Whether the avatar should be circular |
| color | String | undefined | Background color of the avatar |

**Fallback Props**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| fallbackSrc | String | URL | Fallback image URL to use when the main image fails to load |
| fallbackIcon | String | undefined | Icon to display when no image is available |
| renderFallback | Function | undefined | Custom renderer for fallback content |

**Appearance Props**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| bordered | Boolean | false | Whether to show a border around the avatar |
| objectFit | String | "fill" | CSS object-fit property: "fill", "contain", "cover", "none", "scale-down" |
| themeOverrides | Object | {} | Custom theme overrides for styling |

**Loading Props**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| lazy | Boolean | false | Whether to lazy load the image |
| IntersectionObserverObject | Object | undefined | Custom IntersectionObserver for lazy loading |
| renderPlaceholder | Function | undefined | Custom renderer for placeholder content while loading |
| imgProps | Object | undefined | Props to pass to the underlying img element |

#### Events

| Event | Parameters | Description |
|-------|------------|-------------|
| error | (event: Event) | Emitted when the image fails to load |

#### Slots

| Slot | Description |
|------|-------------|
| default | Content to display when no image is available (overrides fallbackIcon) |
| placeholder | Content to display while the image is loading |

#### Examples

**Basic Avatar with Image**
```vue
<template>
  <BaseAvatar src="/path/to/avatar.jpg" />
</template>
```

**Avatar with Fallback Icon**
```vue
<template>
  <BaseAvatar 
    src="/path/to/avatar.jpg" 
    fallbackIcon="person"
    @error="handleImageError"
  />
</template>
```

**Avatar with Text**
```vue
<template>
  <BaseAvatar color="#8c6ff0">
    JD
  </BaseAvatar>
</template>
```

**Square Avatar**
```vue
<template>
  <BaseAvatar 
    src="/path/to/avatar.jpg" 
    :round="false"
  />
</template>
```

**Avatar with Status Indicator**
```vue
<template>
  <div class="avatar-with-status">
    <BaseAvatar :src="user.avatarUrl" />
    <div 
      class="status-indicator" 
      :class="{ 'online': user.isOnline }"
    ></div>
  </div>
</template>

<style scoped>
.avatar-with-status {
  position: relative;
}

.status-indicator {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ccc;
  border: 2px solid white;
}

.status-indicator.online {
  background-color: #4caf50;
}
</style>
```

-------------------------

### BaseCard Component

#### Description
A versatile container component with header, footer, and content areas. BaseCard provides a structured way to display content with optional borders, hover effects, and customizable styling for each section.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| bordered | Boolean | true | Whether to show a border around the card |
| closable | Boolean | false | Whether to show a close button in the top-right corner |
| contentClass | String | undefined | Custom CSS class for the content area |
| contentStyle | Object/String | undefined | Custom inline style for the content area |
| embedded | Boolean | false | Whether the card has an embedded style (inset appearance) |
| footerClass | String | undefined | Custom CSS class for the footer |
| footerStyle | Object/String | undefined | Custom inline style for the footer |
| headerClass | String | undefined | Custom CSS class for the header |
| headerStyle | Object/String | undefined | Custom inline style for the header |
| headerExtraClass | String | undefined | Custom CSS class for the extra header content |
| headerExtraStyle | Object/String | undefined | Custom inline style for the extra header content |
| hoverable | Boolean | false | Whether the card has hover effect |
| segmented | Boolean/Object | false | Whether the card has segmented content areas |
| size | String | "medium" | Size of the card ("small", "medium", "large", "huge") |
| tag | String | "div" | HTML tag to use for the card |
| title | String | undefined | Card title (displayed in header if no header slot is used) |
| themeOverrides | Object | {} | Custom theme overrides for component styling |

#### Events

| Event | Parameters | Description |
|-------|------------|-------------|
| close | none | Emitted when the close button is clicked |

#### Slots

| Slot | Description |
|------|-------------|
| cover | Content for the card cover (displayed above the header) |
| header | Custom header content (overrides the title prop) |
| header-extra | Additional content in the header (positioned at the right side) |
| default | Main content of the card |
| footer | Footer content |
| action | Content for action area (typically used for buttons) |

#### Usage Examples

**Basic Usage**
```vue
<template>
  <BaseCard title="Card Title">
    <p>This is the card content.</p>
  </BaseCard>
</template>
```

**With Cover, Header, and Footer**
```vue
<template>
  <BaseCard>
    <template #cover>
      <img src="/images/banner.jpg" alt="Banner" />
    </template>
    
    <template #header>
      <h3>Custom Header</h3>
    </template>
    
    <template #header-extra>
      <BaseButton size="small">Action</BaseButton>
    </template>
    
    <p>Main content goes here.</p>
    
    <template #footer>
      <div>Footer content</div>
    </template>
  </BaseCard>
</template>
```

**Hoverable and Borderless Card**
```vue
<template>
  <BaseCard
    title="Hoverable Card"
    :bordered="false"
    hoverable
    content-style="padding: 24px"
  >
    <p>This card has no border but shows a shadow on hover.</p>
  </BaseCard>
</template>
```

**Card with Segmented Content**
```vue
<template>
  <BaseCard
    title="Segmented Card"
    :segmented="{ content: true, footer: 'soft' }"
  >
    <p>This card has segmented content areas with dividers.</p>
    
    <template #footer>
      <div class="footer-actions">
        <BaseButton>Cancel</BaseButton>
        <BaseButton type="primary">Submit</BaseButton>
      </div>
    </template>
  </BaseCard>
</template>
```

[Additional component documentation will be added here for each component] 

-------------------------

### BaseForm Component

#### Description
The BaseForm component is a wrapper around the naive-ui form component, providing a container with validation handling for form elements. It supports form validation, custom styling, and various layout options.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| disabled | Boolean | false | Disables all form elements within the form |
| inline | Boolean | false | Displays the form as an inline form |
| labelWidth | Number, String | undefined | The width of label. Useful when label-placement is 'left' |
| labelAlign | String | undefined | Text alignment within the label. Options: 'left', 'right' |
| labelPlacement | String | 'top' | The placement of the label. Options: 'left', 'top' |
| model | Object | {} | Data object containing the form values |
| rules | Object | {} | Validation rules for the form fields |
| showFeedback | Boolean | true | Whether to display the feedback area |
| showLabel | Boolean | true | Whether to display the label |
| showRequireMark | Boolean | undefined | Whether to show the required mark for fields |
| requireMarkPlacement | String | 'right' | Placement of the required mark. Options: 'left', 'right', 'right-hanging' |
| size | String | 'medium' | Size of the form elements. Options: 'small', 'medium', 'large' |
| validateMessages | Object | undefined | Custom validation messages |
| themeOverrides | Object | {} | Custom theme overrides for the form component |

#### Methods

| Method | Parameters | Return | Description |
|--------|------------|--------|-------------|
| validate | (callback, rule) | Promise | Validates the form and calls the callback with errors (if any) |
| restoreValidation | - | - | Restores the validation state (clears validation) |

#### Slots

| Slot | Description |
|------|-------------|
| default | Form content, typically containing BaseFormItem components |

#### Usage Examples

**Basic Form**
```vue
<template>
  <BaseForm :model="formData" :rules="rules">
    <BaseFormItem label="Name" path="name">
      <BaseTextField v-model="formData.name" />
    </BaseFormItem>
    
    <BaseFormItem label="Email" path="email">
      <BaseTextField v-model="formData.email" />
    </BaseFormItem>
    
    <BaseFormItem>
      <BaseButton @click="submitForm">Submit</BaseButton>
    </BaseFormItem>
  </BaseForm>
</template>

<script setup>
import { ref } from 'vue';
import { BaseForm, BaseFormItem, BaseTextField, BaseButton } from '@digitaltolk/ui';

const formData = ref({
  name: '',
  email: ''
});

const rules = {
  name: {
    required: true,
    message: 'Please enter your name',
    trigger: 'blur'
  },
  email: {
    required: true,
    message: 'Please enter your email',
    trigger: 'blur'
  }
};

const submitForm = () => {
  // Form submission logic
};
</script>
```

**Form Validation**
```vue
<template>
  <BaseForm ref="formRef" :model="formData" :rules="rules">
    <BaseFormItem label="Age" path="age">
      <BaseTextField v-model="formData.age" />
    </BaseFormItem>
    
    <BaseFormItem>
      <BaseButton @click="validateForm">Validate</BaseButton>
      <BaseButton @click="resetValidation">Reset</BaseButton>
    </BaseFormItem>
  </BaseForm>
</template>

<script setup>
import { ref } from 'vue';
import { BaseForm, BaseFormItem, BaseTextField, BaseButton } from '@digitaltolk/ui';

const formRef = ref(null);
const formData = ref({
  age: null
});

const rules = {
  age: [
    {
      required: true,
      validator(rule, value) {
        if (!value) {
          return new Error('Age is required');
        } else if (!/^\d*$/.test(value)) {
          return new Error('Age should be an integer');
        } else if (Number(value) < 18) {
          return new Error('Age should be above 18');
        }
        return true;
      },
      trigger: ['input', 'blur']
    }
  ]
};

const validateForm = () => {
  formRef.value.validate((errors) => {
    if (!errors) {
      console.log('Validation successful');
    } else {
      console.log('Validation failed', errors);
    }
  });
};

const resetValidation = () => {
  formRef.value.restoreValidation();
};
</script>
```

**Custom Form Layout**
```vue
<template>
  <BaseForm 
    :model="formData" 
    :rules="rules"
    labelPlacement="left"
    labelWidth="100px"
    labelAlign="right"
    size="small"
  >
    <!-- Form content -->
  </BaseForm>
</template>
```

-------------------------

### BaseGrid Component

#### Description
The BaseGrid component is a flexible grid layout system implemented as two components: BaseRow and BaseColumn. It provides a responsive and customizable grid system for arranging content in rows and columns, with support for different breakpoints.

#### Components

**BaseRow Props**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| cols | Number, Object | 24 | Number of columns in the grid |
| collapsed | Boolean | false | Whether the grid is collapsed |
| collapsedRows | Number | 1 | Number of rows to show when collapsed |
| layoutShiftDisabled | Boolean | false | Whether to disable layout shift |
| responsive | String | 'screen' | Responsive mode - 'self' or 'screen' |
| itemResponsive | Boolean | false | Whether items should respond to screen size |
| xGap | Number, Object | 0 | Horizontal gap between grid items |
| yGap | Number, Object | 0 | Vertical gap between grid items |

**BaseColumn Props**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| offset | Number, Object | 0 | Number of columns to offset |
| span | Number, Object | 1 | Number of columns to span |
| suffix | Boolean | false | Whether this is a suffix column |
| xs | Number | undefined | Column span at extra small breakpoint |
| sm | Number | undefined | Column span at small breakpoint |
| md | Number | undefined | Column span at medium breakpoint |
| lg | Number | undefined | Column span at large breakpoint |
| xl | Number | undefined | Column span at extra large breakpoint |
| xxl | Number | undefined | Column span at extra extra large breakpoint |

#### Usage Examples

**Basic Grid**
```vue
<template>
  <BaseRow :x-gap="12" :y-gap="8">
    <BaseColumn :span="12">
      <div class="content-box">Column 1</div>
    </BaseColumn>
    <BaseColumn :span="12">
      <div class="content-box">Column 2</div>
    </BaseColumn>
  </BaseRow>
</template>
```

**Responsive Grid**
```vue
<template>
  <BaseRow :x-gap="12" :y-gap="8" responsive="screen" itemResponsive>
    <BaseColumn :span="24" :md="12" :lg="8">
      <div class="content-box">
        Full width on small screens, half width on medium, one-third on large
      </div>
    </BaseColumn>
    <BaseColumn :span="24" :md="12" :lg="8">
      <div class="content-box">
        Full width on small screens, half width on medium, one-third on large
      </div>
    </BaseColumn>
    <BaseColumn :span="24" :md="24" :lg="8">
      <div class="content-box">
        Full width on small and medium screens, one-third on large
      </div>
    </BaseColumn>
  </BaseRow>
</template>
```

**Grid with Offsets**
```vue
<template>
  <BaseRow :cols="24" :x-gap="8">
    <BaseColumn :span="12" :offset="6">
      <div class="content-box">Centered Column (offset by 6)</div>
    </BaseColumn>
    <BaseColumn :span="8" :offset="4">
      <div class="content-box">Left of center (offset by 4)</div>
    </BaseColumn>
    <BaseColumn :span="8" :offset="4">
      <div class="content-box">Right of center (offset by 4)</div>
    </BaseColumn>
  </BaseRow>
</template>
```

**Nested Grids**
```vue
<template>
  <BaseRow :x-gap="8" :y-gap="8">
    <BaseColumn :span="12">
      <div class="parent-box">
        <BaseRow :x-gap="4">
          <BaseColumn :span="12">
            <div class="nested-box">Nested Column 1</div>
          </BaseColumn>
          <BaseColumn :span="12">
            <div class="nested-box">Nested Column 2</div>
          </BaseColumn>
        </BaseRow>
      </div>
    </BaseColumn>
    <BaseColumn :span="12">
      <div class="content-box">Normal Column</div>
    </BaseColumn>
  </BaseRow>
</template>
``` 

-------------------------

### BaseSelect Component

#### Description
The BaseSelect component provides a dropdown selection interface that allows users to choose one or multiple options from a list. It supports filtering, custom rendering, and various display options to handle complex selection scenarios.

#### Props

**Core Props**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| consistentMenuWidth | Boolean | true | Whether the dropdown menu width matches the select width |
| childrenField | String | 'children' | Field name for nested options |
| clearable | Boolean | false | Whether the selection can be cleared |
| clearFilterAfterSelect | Boolean | true | Whether to clear the filter input after selection |
| disabled | Boolean | false | Whether the select is disabled |
| filterable | Boolean | false | Whether the options can be filtered by typing |
| icon | String | undefined | Icon to display in the select |
| loading | Boolean | false | Whether the select is in loading state |
| multiple | Boolean | false | Whether multiple options can be selected |
| options | Array | [] | Options for the select dropdown |
| placeholder | String | undefined | Placeholder text when nothing is selected |
| showArrow | Boolean | true | Whether to show the dropdown arrow |
| showCheckmark | Boolean | true | Whether to show checkmarks for selected options |
| showCheckbox | Boolean | false | Whether to show checkboxes for options |
| size | String | 'medium' | Size of the select: 'tiny', 'small', 'medium', 'large' |
| status | String | undefined | Validation status: 'success', 'warning', 'error' |
| modelValue | Array, String, Number, null | undefined | The currently selected value(s) |
| virtualScroll | Boolean | true | Whether to use virtual scrolling for large option lists |
| useCustomDropdown | Boolean | false | Whether to use a custom dropdown component |

**Advanced Props**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| defaultValue | Array | null | Default selected value when component mounts |
| ellipsisTagPopoverProps | Object | undefined | Props for the popover shown when tags are ellipsed |
| fallbackOption | Boolean, Function | undefined | Behavior for handling missing options |
| filter | Function | undefined | Custom filter function |
| ignoreComposition | Boolean | true | Whether to ignore IME composition |
| inputProps | Object | undefined | Props for the input element |
| keyboard | Boolean | true | Whether keyboard navigation is enabled |
| labelField | String | 'label' | Field name for option labels |
| maxTagCount | Number, String | undefined | Maximum number of tags to display before truncating |
| menuProps | Object | undefined | Props for the dropdown menu |
| nodeProps | Object | undefined | Props for option nodes |
| placement | String | 'bottom-start' | Placement of the dropdown menu |
| remote | Boolean | false | Whether options are loaded remotely |
| renderLabel | Function | undefined | Custom function for rendering labels |
| renderOption | Function | undefined | Custom function for rendering options |
| renderTag | Function | undefined | Custom function for rendering tags |
| resetMenuOnOptionsChange | Boolean | true | Whether to reset menu state when options change |
| show | Boolean | undefined | Controls visibility of the dropdown menu |
| showOnFocus | Boolean | false | Whether to show dropdown on focus |
| tag | Boolean | false | Whether to display selections as tags |
| to | String, HTMLElement, Boolean | 'body' | Where to mount the dropdown menu |
| valueField | String | 'value' | Field name for option values |
| themeOverrides | Object | {} | Custom theme overrides |

#### Events

| Event | Parameters | Description |
|-------|------------|-------------|
| update:value | (value: any) | Emitted when selection changes |
| update:ModelValue | (value: any) | Emitted when selection changes for v-model binding |
| clear | - | Emitted when selection is cleared |
| create | (option: Object) | Emitted when a new option is created |
| scroll | (e: Event) | Emitted when dropdown is scrolled |
| update:show | (show: boolean) | Emitted when dropdown visibility changes |
| focus | (e: FocusEvent) | Emitted when select is focused |
| blur | (e: FocusEvent) | Emitted when select loses focus |

#### Slots

| Slot | Description |
|------|-------------|
| default | Slot for option content when using the custom dropdown |
| header | Content to display at the top of the dropdown menu |
| action | Additional actions at the bottom of the dropdown menu |
| empty | Content to display when no options match the filter |
| arrow | Custom arrow icon |
| prefix | Content to display before the select input |
| options | Custom options rendering |

#### Usage Examples

**Basic Select**
```vue
<template>
  <BaseSelect 
    v-model="selectedOption" 
    :options="options" 
    placeholder="Select an option"
  />
</template>

<script setup>
import { ref } from 'vue';
import { BaseSelect } from '@digitaltolk/ui';

const selectedOption = ref(null);
const options = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' }
];
</script>
```

**Multiple Select**
```vue
<template>
  <BaseSelect 
    v-model="selectedOptions" 
    :options="options" 
    multiple
    placeholder="Select multiple options"
  />
</template>
```

**Filterable Select**
```vue
<template>
  <BaseSelect 
    v-model="selectedOption" 
    :options="options" 
    filterable
    placeholder="Type to filter options"
  />
</template>
```

**Grouped Options**
```vue
<template>
  <BaseSelect 
    v-model="selectedOption" 
    :options="groupedOptions" 
    placeholder="Select from groups"
  />
</template>

<script setup>
import { ref } from 'vue';
import { BaseSelect } from '@digitaltolk/ui';

const selectedOption = ref(null);
const groupedOptions = [
  {
    label: 'Fruits',
    type: 'group',
    children: [
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana' },
      { label: 'Cherry', value: 'cherry' }
    ]
  },
  {
    label: 'Vegetables',
    type: 'group',
    children: [
      { label: 'Carrot', value: 'carrot' },
      { label: 'Broccoli', value: 'broccoli' },
      { label: 'Spinach', value: 'spinach' }
    ]
  }
];
</script>
```

-------------------------

### BaseTable Component

#### Description
A data table component for displaying, sorting, filtering, and interacting with tabular data. BaseTable is a wrapper around the n-data-table component, providing advanced table functionality with customizable appearance and behavior.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| allowCheckingNotLoaded | Boolean | false | Whether to allow checking rows that are not loaded |
| bordered | Boolean | false | Whether to show table borders |
| bottomBordered | Boolean | false | Whether to show bottom border |
| checkedRowKeys | Array | undefined | The keys of checked rows (controlled mode) |
| cascade | Boolean | true | Whether to cascade check children when checking parent row |
| childrenKey | String | "children" | The key for accessing nested children rows |
| columns | Array | [] | Table columns configuration |
| data | Array | [] | Table data source |
| defaultCheckedRowKeys | Array | [] | Default checked row keys (uncontrolled mode) |
| defaultExpandedRowKeys | Array | [] | Default expanded row keys (uncontrolled mode) |
| defaultExpandAll | Boolean | false | Whether to expand all rows by default |
| expandedRowKeys | Boolean | undefined | The keys of expanded rows (controlled mode) |
| paginationBehaviorOnFilter | String | "current" | Pagination behavior when filtering ("current", "first") |
| flexHeight | Boolean | false | Whether table has flexible height |
| indent | Number | 16 | Indentation for nested rows |
| loading | Boolean | false | Whether table is in loading state |
| maxHeight | Number/String | undefined | Maximum height of the table |
| minHeight | Number/String | undefined | Minimum height of the table |
| paginateSinglePage | Boolean | true | Whether to show pagination with only one page |
| pagination | Boolean/Object | false | Pagination configuration or false to disable |
| remote | Boolean | false | Whether table uses remote data |
| renderCell | Function | undefined | Custom cell render function |
| renderExpandIcon | Function | undefined | Custom expand icon render function |
| rowClassName | String/Object/Function | undefined | Custom row class name |
| rowKey | Function | undefined | Function to get unique key for each row |
| rowProps | Function | undefined | Function to get props for each row |
| scrollX | Number/String | undefined | Width of horizontal scroll |
| scrollbarProps | Object | undefined | Props for the scrollbar |
| singleColumn | Boolean | false | Whether table has only a single column |
| singleLine | Boolean | true | Whether table cells are single line |
| size | String | "medium" | Size of the table ("small", "medium", "large") |
| spinProps | Object | undefined | Props for the loading spinner |
| stickyExpandedRows | Boolean | false | Whether expanded rows are sticky |
| striped | Boolean | false | Whether table has striped rows |
| summary | Function | undefined | Function to generate summary row |
| summaryPlacement | String | "bottom" | Placement of summary row ("top", "bottom") |
| tableLayout | String | "auto" | Table layout ("auto", "fixed") |
| virtualScroll | Boolean | false | Whether to use virtual scrolling for large datasets |
| themeOverrides | Object | {} | Custom theme overrides for the component |

#### Events

| Event | Parameters | Description |
|-------|------------|-------------|
| load | (page) | Triggered when page is loaded |
| scroll | (event) | Triggered when table is scrolled |
| update:checked:row:keys | (keys, row, checked) | Triggered when checked rows change |
| update:expanded:row:keys | (keys) | Triggered when expanded rows change |
| update:filters | (filters, filterOptions) | Triggered when filters change |
| update:page | (page) | Triggered when page changes |
| update:sorter | (sorter) | Triggered when sorting changes |
| rowClick | (row, index) | Triggered when a row is clicked |

#### Slots

The BaseTable component supports dynamic column slots. Each slot will be treated as a column in the table.

For each slot, you can pass the following props to the slot element to configure the column:

| Prop | Description |
|------|-------------|
| title | Column title (defaults to slot name) |
| columnKey | Unique key for the column (defaults to slot name) |
| visible | Whether the column is visible |
| colSpan | Column span |
| rowSpan | Row span |
| sorter | Sorting function or boolean |
| align | Text alignment in the column |
| titleAlign | Title alignment |
| cellProps | Props for the cell |
| className | Custom class name |
| defaultFilterOptionValue | Default filter option value |
| defaultFilterOptionValues | Default filter option values |
| defaultSortOrder | Default sort order |
| disabled | Whether the column is disabled |
| ellipsis | Whether text in the column can be ellipsised |
| filter | Filter configuration |
| filterMode | Filter mode |
| filterMultiple | Whether multiple filtering is allowed |
| resizable | Whether the column is resizable |
| fixed | Whether the column is fixed (can be "left", "right") |
| minWidth | Minimum width of the column |
| maxWidth | Maximum width of the column |
| width | Width of the column |

#### Usage Examples

**Basic Usage**
```vue
<template>
  <BaseTable :data="tableData" :pagination="{ pageSize: 10 }">
    <template #name="{ rowData }">
      {{ rowData.name }}
    </template>
    <template #age="{ rowData }">
      {{ rowData.age }}
    </template>
    <template #address="{ rowData }">
      {{ rowData.address }}
    </template>
  </BaseTable>
</template>

<script setup>
import { ref } from 'vue';
import { BaseTable } from '@digitaltolk/ui';

const tableData = ref([
  { id: 1, name: 'John Doe', age: 30, address: '123 Main St' },
  { id: 2, name: 'Jane Smith', age: 25, address: '456 Oak Ave' },
  // more data...
]);
</script>
```

**With Column Configuration**
```vue
<template>
  <BaseTable :data="tableData" :pagination="{ pageSize: 10 }">
    <template #name="{ rowData }">
      <div title="Name" :sorter="true" align="center">
        {{ rowData.name }}
      </div>
    </template>
    <template #age="{ rowData }">
      <div title="Age" :sorter="true" align="center">
        {{ rowData.age }}
      </div>
    </template>
    <template #actions="{ rowData }">
      <div title="Actions" align="center">
        <BaseButton size="small" @click="editUser(rowData)">Edit</BaseButton>
        <BaseButton size="small" @click="deleteUser(rowData)">Delete</BaseButton>
      </div>
    </template>
  </BaseTable>
</template>
```

**Row Selection**
```vue
<template>
  <BaseTable 
    :data="tableData" 
    :pagination="{ pageSize: 10 }"
    :row-key="row => row.id"
    v-model:checked-row-keys="selectedRowKeys"
    @update:checked:row:keys="onSelectionChange"
  >
    <!-- Column slots -->
  </BaseTable>
</template>
```

**With Nested Data**
```vue
<template>
  <BaseTable 
    :data="nestedData" 
    :children-key="'children'"
    :default-expand-all="true"
  >
    <!-- Column slots -->
  </BaseTable>
</template>
``` 

-------------------------

### BaseModal Component

#### Description
The BaseModal component is a dialog box that appears over the current page, requiring user interaction before returning to the main content. It provides a focused way to present information, receive user input, or display notifications.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| autoFocus | Boolean | true | Whether to automatically focus the modal when it opens |
| blockScroll | Boolean | true | Whether to block page scrolling when modal is open |
| closeOnEsc | Boolean | true | Whether the modal can be closed by pressing the Escape key |
| displayDirective | String | 'if' | Vue directive to use for showing/hiding: 'if' or 'show' |
| footerLayout | String | 'row' | Layout direction for footer buttons - 'row' or 'column' |
| maskClosable | Boolean | true | Whether clicking the backdrop closes the modal |
| preset | String | 'card' | Visual preset for the modal. Set to empty string for no styling |
| show | Boolean | false | Controls visibility (when using v-model:show syntax) |
| modelValue | Boolean | false | Controls visibility (when using v-model syntax) |
| to | String, HTMLElement | 'body' | Where to mount the modal in the DOM |
| transformOrigin | String | 'mouse' | Origin of the opening animation: 'mouse' or 'center' |
| trapFocus | Boolean | true | Whether to trap focus within the modal |
| zIndex | Number | undefined | CSS z-index for the modal |
| width | String | '600px' | Width of the modal |
| themeOverrides | Object | {} | Custom theme overrides for the modal |

#### Events

| Event | Parameters | Description |
|-------|------------|-------------|
| update:modelValue | (value: boolean) | Emitted when modal visibility changes (v-model) |
| after-enter | - | Emitted after the modal enter transition completes |
| after-leave | - | Emitted after the modal leave transition completes |
| esc | - | Emitted when the Escape key is pressed |
| mask-click | - | Emitted when the backdrop is clicked |
| update-show | (value: boolean) | Emitted when show state changes |

#### Slots

| Slot | Description |
|------|-------------|
| default | The main content of the modal |
| header | The header section of the modal (when using card preset) |
| footer | The footer section of the modal (when using card preset) |

#### Usage Examples

**Basic Modal**
```vue
<template>
  <div>
    <BaseButton @click="showModal = true">
      Open Modal
    </BaseButton>
    
    <BaseModal v-model="showModal">
      <template #header>
        User Information
      </template>
      
      <p>This is the modal content where you can display important information.</p>
      
      <template #footer>
        <BaseButton @click="showModal = false">
          Close
        </BaseButton>
      </template>
    </BaseModal>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { BaseModal, BaseButton } from '@digitaltolk/ui';

const showModal = ref(false);
</script>
```

**Confirmation Modal**
```vue
<template>
  <BaseModal 
    v-model="showConfirmation" 
    width="400px"
    :mask-closable="false"
    :close-on-esc="false"
  >
    <template #header>
      Confirm Deletion
    </template>
    
    <p>Are you sure you want to delete this item? This action cannot be undone.</p>
    
    <template #footer>
      <BaseButton type="default" @click="showConfirmation = false">
        Cancel
      </BaseButton>
      <BaseButton type="error" @click="confirmDelete">
        Delete
      </BaseButton>
    </template>
  </BaseModal>
</template>
```

**Modal with Column Footer Layout**
```vue
<template>
  <BaseModal 
    v-model="showModal" 
    footerLayout="column"
  >
    <template #header>
      Action Required
    </template>
    
    <p>Please make a selection.</p>
    
    <template #footer>
      <BaseButton type="primary" block>
        Option 1
      </BaseButton>
      <BaseButton type="secondary" block>
        Option 2
      </BaseButton>
      <BaseButton type="default" block @click="showModal = false">
        Cancel
      </BaseButton>
    </template>
  </BaseModal>
</template>
```

-------------------------

### BaseCheckbox Component

#### Description
Checkbox input component for boolean selections. BaseCheckbox supports both standalone usage and integration with form components, with v-model binding for easy state management.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| modelValue | String/Number/Boolean | undefined | Value used with v-model for two-way binding |
| checked | Boolean | undefined | Whether the checkbox is checked |
| defaultChecked | Boolean | false | The default checked state when uncontrolled |
| disabled | Boolean | false | Whether the checkbox is disabled |
| focusable | Boolean | true | Whether the checkbox can receive focus |
| indeterminate | Boolean | false | Whether the checkbox is in an indeterminate state |
| label | String | undefined | Text label to display next to the checkbox |
| size | String | "medium" | Size of the checkbox ("small", "medium", "large") |
| value | String/Number | undefined | Value for the checkbox when used in groups |
| isVertical | Boolean | false | Whether to arrange content vertically |
| themeOverrides | Object | {} | Custom theme overrides for styling |

#### Events

| Event | Parameters | Description |
|-------|------------|-------------|
| update:modelValue | value | Emitted when the checkbox state changes (for v-model) |
| update:checked | value | Emitted when the checkbox state changes |
| blur | event | Emitted when the checkbox loses focus |
| focus | event | Emitted when the checkbox receives focus |

#### Slots

| Slot | Description |
|------|-------------|
| default | Custom content to replace or append to the label |

#### Usage Examples

**Basic Usage**
```vue
<template>
  <BaseCheckbox v-model="isChecked" label="Accept terms" />
</template>

<script setup>
import { ref } from 'vue';

const isChecked = ref(false);
</script>
```

**With Custom Label Content**
```vue
<template>
  <BaseCheckbox v-model="rememberMe">
    Remember me on this device
    <span style="color: red; margin-left: 4px;">*</span>
  </BaseCheckbox>
</template>
```

**Disabled and Indeterminate States**
```vue
<template>
  <div>
    <BaseCheckbox label="Disabled checkbox" disabled />
    <BaseCheckbox
      label="Some items selected"
      :indeterminate="true"
      v-model="someSelected"
    />
  </div>
</template>
```

**Different Sizes**
```vue
<template>
  <div>
    <BaseCheckbox label="Small checkbox" size="small" />
    <BaseCheckbox label="Medium checkbox" size="medium" />
    <BaseCheckbox label="Large checkbox" size="large" />
  </div>
</template>
```

-------------------------

### BaseTabs Component

#### Description
A tabbed interface component for organizing related content into selectable panes. BaseTabs is a wrapper around the n-tabs component, providing a flexible navigation system with multiple visual styles and configurations.

#### Related Components
- BaseTab - Individual tab component used within BaseTabs
- BaseTabPane - Content container for each tab panel

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| addable | Boolean | false | Whether to show an add button for creating new tabs |
| animated | Boolean | false | Whether to animate tab transitions |
| barWidth | Number | undefined | Width of the active tab indicator bar |
| closable | Boolean | false | Whether tabs can be closed |
| defaultValue | String/Number | undefined | Initial active tab (uncontrolled mode) |
| displayDirective | String | "if" | Directive used for pane content rendering |
| justifyContent | String | undefined | Tab alignment ("space-between", "space-around", etc.) |
| size | String | "medium" | Size of the tabs ("small", "medium", "large") |
| paneClass | String | undefined | Class applied to tab panes |
| paneStyle | String/Object | undefined | Style applied to tab panes |
| paneWrapperClass | String | undefined | Class applied to tab pane wrapper |
| paneWrapperStyle | String/Object | undefined | Style applied to tab pane wrapper |
| placement | String | "top" | Position of tabs ("top", "bottom", "left", "right") |
| tabStyle | String/Object | undefined | Style applied to tabs |
| tabsPadding | Number | 0 | Padding around tabs |
| tabPane | Boolean | true | Whether to use BaseTabPane components |
| trigger | String | "click" | Tab activation trigger ("click", "hover") |
| type | String | "bar" | Tab style type ("bar", "line", "card", "segment") |
| value | String/Number | undefined | Active tab value (v-model, legacy) |
| modelValue | String/Number | undefined | Active tab value (v-model) |
| themeOverrides | Object | {} | Custom theme overrides for the component |

#### Events

| Event | Parameters | Description |
|-------|------------|-------------|
| add | () | Triggered when the add button is clicked |
| close | (tabName) | Triggered when a tab is closed |
| update:modelValue | (tabName) | Triggered when the active tab changes |
| before:leave | (tabName, event) | Triggered before leaving a tab |

#### Slots

| Slot | Description |
|------|-------------|
| default | Tab panes or tabs content |
| paneSlot | Alternative slot for tab panes |
| prefix | Content displayed before the tabs |
| suffix | Content displayed after the tabs |

#### BaseTabPane Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| closable | Boolean | false | Whether this tab can be closed |
| disabled | Boolean | false | Whether this tab is disabled |
| displayDirective | String | "if" | Directive used for content rendering ("if", "show", "show:lazy") |
| name | String/Number | undefined | Unique identifier for the tab |
| tab | String/Object | undefined | Tab label content |
| tabProps | Object | undefined | Props to pass to the tab |
| themeOverrides | Object | {} | Custom theme overrides for the component |

#### Usage Examples

**Basic Usage with Tab Panes**
```vue
<template>
  <BaseTabs v-model="activeTab">
    <BaseTabPane name="profile" tab="Profile">
      <div>Profile content goes here</div>
    </BaseTabPane>
    <BaseTabPane name="settings" tab="Settings">
      <div>Settings content goes here</div>
    </BaseTabPane>
    <BaseTabPane name="notifications" tab="Notifications">
      <div>Notifications content goes here</div>
    </BaseTabPane>
  </BaseTabs>
</template>

<script setup>
import { ref } from 'vue';
import { BaseTabs, BaseTabPane } from '@digitaltolk/ui';

const activeTab = ref('profile');
</script>
```

**With Custom Tab Contents**
```vue
<template>
  <BaseTabs v-model="activeTab">
    <BaseTabPane name="profile">
      <template #tab>
        <BaseIcon>account_circle</BaseIcon> Profile
      </template>
      <div>Profile content goes here</div>
    </BaseTabPane>
    <BaseTabPane name="settings">
      <template #tab>
        <BaseIcon>settings</BaseIcon> Settings
      </template>
      <div>Settings content goes here</div>
    </BaseTabPane>
  </BaseTabs>
</template>
```

**Different Tab Styles**
```vue
<template>
  <BaseSpace vertical>
    <BaseTabs type="bar" v-model="activeTab">
      <!-- Tab panes -->
    </BaseTabs>
    
    <BaseTabs type="line" v-model="activeTab">
      <!-- Tab panes -->
    </BaseTabs>
    
    <BaseTabs type="card" v-model="activeTab">
      <!-- Tab panes -->
    </BaseTabs>
    
    <BaseTabs type="segment" v-model="activeTab">
      <!-- Tab panes -->
    </BaseTabs>
  </BaseSpace>
</template>
```

**Closable Tabs**
```vue
<template>
  <BaseTabs v-model="activeTab" closable @close="handleCloseTab">
    <BaseTabPane 
      v-for="tab in tabs" 
      :key="tab.name" 
      :name="tab.name" 
      :tab="tab.label"
      closable
    >
      <div>{{ tab.content }}</div>
    </BaseTabPane>
  </BaseTabs>
</template>
```

-------------------------

### BaseTooltip Component

#### Description
The BaseTooltip component provides a way to display informational tooltips that appear when hovering, clicking, or focusing on an element. It's a lightweight overlay perfect for providing additional context, explanations, or help text.

#### Props

**Appearance Props**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| animated | Boolean | true | Whether the tooltip has animations |
| arrowPointToCenter | Boolean | false | Whether the tooltip arrow points to the center of the trigger element |
| arrowStyle | Object, String | undefined | Custom style for the tooltip arrow |
| contentStyle | Object, String | undefined | Custom style for the tooltip content |
| footerStyle | Object, String | undefined | Custom style for the tooltip footer |
| headerStyle | Object, String | undefined | Custom style for the tooltip header |
| raw | Boolean | false | Whether to use raw HTML content without wrapping |
| scrollable | Boolean | false | Whether the tooltip content is scrollable |
| showArrow | Boolean | true | Whether to show the tooltip arrow |
| width | Number, String | undefined | Fixed width of the tooltip |
| zIndex | Number | undefined | Z-index of the tooltip |
| themeOverrides | Object | {} | Custom theme overrides for the component |

**Behavior Props**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| delay | Number | 100 | Delay before showing the tooltip (milliseconds) |
| disabled | Boolean | false | Whether the tooltip is disabled |
| displayDirective | String | 'if' | Vue directive to use for display ('if' or 'show') |
| duration | Number | 100 | Duration of the animation (milliseconds) |
| flip | Boolean | true | Whether to flip placement when there's not enough space |
| keepAliveOnHover | Boolean | true | Whether to keep tooltip open when hovering it |
| overlap | Boolean | false | Whether the tooltip should overlap the trigger |
| show | Boolean | undefined | Controls visibility of the tooltip |
| to | String, HTMLElement, Boolean | 'body' | Where to mount the tooltip |
| trigger | String | 'hover' | Trigger type: 'hover', 'click', 'focus', or 'manual' |
| x | Number | undefined | X coordinate for manual positioning |
| y | Number | undefined | Y coordinate for manual positioning |

**Placement Props**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| placement | String | 'top' | Tooltip placement relative to the trigger element. Options: 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-start', 'bottom', 'bottom-end', 'left-start', 'left', 'left-end' |

#### Events

| Event | Parameters | Description |
|-------|------------|-------------|
| clickoutside | (e: Event) | Emitted when clicking outside the tooltip |
| update:show | (show: boolean) | Emitted when visibility changes |
| setShow | (show: boolean) | Emitted when show state is set programmatically |
| syncPosition | - | Emitted when position needs to be synchronized |

#### Slots

| Slot | Description |
|------|-------------|
| trigger | The element that triggers the tooltip |
| default | Main content of the tooltip |
| header | Content for the tooltip header |
| footer | Content for the tooltip footer |

#### Usage Examples

**Basic Tooltip**
```vue
<template>
  <BaseTooltip content="This is a simple tooltip">
    <template #trigger>
      <BaseButton>Hover Me</BaseButton>
    </template>
  </BaseTooltip>
</template>

<script setup>
import { BaseTooltip, BaseButton } from '@digitaltolk/ui';
</script>
```

**Tooltip with Custom Content**
```vue
<template>
  <BaseTooltip placement="right">
    <template #trigger>
      <BaseIcon>help_outline</BaseIcon>
    </template>
    
    <template #header>
      Help Information
    </template>
    
    <div class="tooltip-content">
      <p>This feature allows you to customize your preferences.</p>
      <p>Click the button to save your settings.</p>
    </div>
    
    <template #footer>
      <small>Press ESC to close</small>
    </template>
  </BaseTooltip>
</template>
```

**Click Triggered Tooltip**
```vue
<template>
  <BaseTooltip trigger="click" width="200">
    <template #trigger>
      <BaseButton>Click for Information</BaseButton>
    </template>
    
    This tooltip appears when the button is clicked rather than hovered.
    It will remain open until clicked outside or triggered again.
  </BaseTooltip>
</template>
```

-------------------------

### BaseRadio Component

#### Description
The BaseRadio component is a selectable input control that allows users to select a single option from a set. It can be used individually or as part of a radio group, and supports both standard radio buttons and button-style variants.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| asRadio | Boolean | false | Whether to display as a button-style radio instead of a standard radio |
| modelValue | String, Number, Boolean | - | Value for v-model binding |
| checked | Boolean | - | Whether the radio is checked |
| defaultChecked | Boolean | false | Whether the radio is checked by default |
| disabled | Boolean | false | Whether the radio is disabled |
| label | String | - | Label text for the radio |
| name | String | - | Name attribute for the radio input |
| size | String | 'medium' | Size of the radio: 'small', 'medium', or 'large' |
| value | String, Number, Boolean | 'on' | Value of the radio when selected |
| btnPadding | String | undefined | Custom padding when displayed as a button |
| btnWidth | String | undefined | Custom width when displayed as a button |
| themeOverrides | Object | {} | Custom theme overrides for the component |

#### Events

| Event | Parameters | Description |
|-------|------------|-------------|
| update:modelValue | (value: any) | Emitted when the modelValue changes |
| update:checked | (checked: boolean) | Emitted when the checked state changes |

#### Slots

| Slot | Description |
|------|-------------|
| default | Content to display as the radio label |

#### Usage Examples

**Basic Radio**
```vue
<template>
  <BaseRadio v-model="selectedOption" value="option1">
    Option 1
  </BaseRadio>
</template>

<script setup>
import { ref } from 'vue';
import { BaseRadio } from '@digitaltolk/ui';

const selectedOption = ref(null);
</script>
```

**Disabled Radio**
```vue
<template>
  <div>
    <BaseRadio 
      v-model="selectedOption" 
      value="option1" 
      disabled
    >
      Disabled Option
    </BaseRadio>
    
    <BaseRadio 
      v-model="selectedOption" 
      value="option2"
    >
      Enabled Option
    </BaseRadio>
  </div>
</template>
```

**Button-Style Radio**
```vue
<template>
  <div class="radio-buttons">
    <BaseRadio 
      v-model="selectedOption" 
      value="option1" 
      asRadio
    >
      Option 1
    </BaseRadio>
    
    <BaseRadio 
      v-model="selectedOption" 
      value="option2" 
      asRadio
    >
      Option 2
    </BaseRadio>
  </div>
</template>
```

-------------------------

### BaseRadioGroup Component

#### Description
The BaseRadioGroup component manages a group of radio buttons, ensuring that only one can be selected at a time. It provides a consistent interface for managing radio selections and supports both standard and button-style radio groups.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| asRadio | Boolean | false | Whether to display radios as button-style radios |
| colGap | String | undefined | Gap between columns in the radio group |
| disabled | Boolean | false | Whether the entire radio group is disabled |
| defaultValue | String, Number, Boolean, null | null | Default selected value when component mounts |
| groupWidth | String | undefined | Width of the radio group |
| modelValue | String, Number, Boolean, null | null | The currently selected value (v-model) |
| name | String | undefined | Name attribute for the radio inputs |
| rowGap | String | undefined | Gap between rows in the radio group |
| size | String | 'medium' | Size of the radio buttons: 'small', 'medium', 'large' |
| vertical | Boolean | false | Whether to display the radio group in a vertical layout |
| themeOverrides | Object | undefined | Custom theme overrides for the component |
| value | String, Number, Boolean, null | null | Value for the radio group |

#### Events

| Event | Parameters | Description |
|-------|------------|-------------|
| update | (value: any) | Emitted when selection changes |
| update:value | (value: any) | Emitted when selection changes |
| update:modelValue | (value: any) | Emitted for v-model binding when selection changes |

#### Slots

| Slot | Description |
|------|-------------|
| default | Should contain BaseRadio components that will be part of the group |

#### Usage Examples

**Basic Radio Group**
```vue
<template>
  <BaseRadioGroup v-model="selectedOption">
    <BaseRadio value="option1">Option 1</BaseRadio>
    <BaseRadio value="option2">Option 2</BaseRadio>
    <BaseRadio value="option3">Option 3</BaseRadio>
  </BaseRadioGroup>
</template>

<script setup>
import { ref } from 'vue';
import { BaseRadioGroup, BaseRadio } from '@digitaltolk/ui';

const selectedOption = ref('option1');
</script>
```

**Button-Style Radio Group**
```vue
<template>
  <BaseRadioGroup v-model="selectedOption" asRadio>
    <BaseRadio value="option1">Option 1</BaseRadio>
    <BaseRadio value="option2">Option 2</BaseRadio>
    <BaseRadio value="option3">Option 3</BaseRadio>
  </BaseRadioGroup>
</template>
```

**Vertical Radio Group**
```vue
<template>
  <BaseRadioGroup v-model="selectedOption" vertical :row-gap="'10px'">
    <BaseRadio value="option1">Option 1</BaseRadio>
    <BaseRadio value="option2">Option 2</BaseRadio>
    <BaseRadio value="option3">Option 3</BaseRadio>
  </BaseRadioGroup>
</template>
```

-------------------------

### BaseIcon Component

#### Description
The BaseIcon component is a versatile icon component that provides support for Material Icons and custom icon components. It offers extensive customization options including size, color, style variants, and Material Design icon properties.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| color | String | undefined | The color of the icon |
| depth | Number | undefined | The depth effect for the icon |
| size | Number | 24 | The size of the icon in pixels |
| component | Object | undefined | Custom icon component to render |
| isIconWrapper | Boolean | false | Whether to use an icon wrapper (container) |
| borderRadius | Number | 6 | Border radius when using icon wrapper |
| iconColor | String | undefined | Color of the icon when using wrapper |
| themeOverrides | Object | {} | Custom theme overrides for the icon |
| isNative | Boolean | false | Whether to use naive-ui's native icon component |
| materialType | String | 'outlined' | Material icon style: 'outlined', 'rounded', or 'sharp' |
| iconName | String | undefined | Name of the icon to display |
| filled | Boolean | true | Whether the icon should be filled (for Material Icons) |
| weight | Number | 400 | The weight of the icon (for Material Icons) |
| grade | Number | 0 | The grade of the icon (for Material Icons) |
| optical | Number | 24 | The optical size of the icon (for Material Icons) |

#### Slots

| Slot | Description |
|------|-------------|
| default | The icon content. When using Material Icons, this should be the icon name |

#### Usage Examples

**Basic Material Icon**
```vue
<template>
  <BaseIcon>home</BaseIcon>
</template>

<script setup>
import { BaseIcon } from '@digitaltolk/ui';
</script>
```

**Customized Material Icon**
```vue
<template>
  <BaseIcon 
    iconColor="#1976D2" 
    size="32" 
    materialType="rounded" 
    :filled="false"
  >
    favorite
  </BaseIcon>
</template>
```

**Icon with Wrapper**
```vue
<template>
  <BaseIcon 
    isIconWrapper 
    color="#E3F2FD" 
    iconColor="#1976D2" 
    size="48" 
    :borderRadius="8"
  >
    notifications
  </BaseIcon>
</template>
```

**Different Material Icon Styles**
```vue
<template>
  <div>
    <BaseIcon materialType="outlined">settings</BaseIcon>
    <BaseIcon materialType="rounded">settings</BaseIcon>
    <BaseIcon materialType="sharp">settings</BaseIcon>
  </div>
</template>
```

-------------------------

### BaseLink Component

#### Description
The BaseLink component is a versatile navigation component that handles both internal routing using Vue Router and external links. It provides a consistent interface for links with support for icons and security features for external URLs.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| to | String, Object | '/' | Destination URL or route object. For strings, must be a URL with allowed protocols (http:, https:, mailto:, tel:) or a relative path starting with /, or #. |
| icon | String | '' | Icon name to display alongside the link text |
| iconSize | String | '' | Size of the icon |
| iconPlacement | String | 'left' | Position of the icon - 'left' or 'right' |
| iconColor | String | '' | Color of the icon |
| externalAttrs | Object | { target: '_blank', rel: 'noopener noreferrer' } | HTML attributes to apply to external links |

#### Slots

| Slot | Description |
|------|-------------|
| default | The link text content |

#### Usage Examples

**Basic Internal Link**
```vue
<template>
  <BaseLink to="/dashboard">
    Go to Dashboard
  </BaseLink>
</template>

<script setup>
import { BaseLink } from '@digitaltolk/ui';
</script>
```

**External Link**
```vue
<template>
  <BaseLink to="https://www.example.com">
    Visit Example Website
  </BaseLink>
</template>
```

**Link with Icon**
```vue
<template>
  <BaseLink 
    to="/settings" 
    icon="settings" 
    iconPlacement="left" 
    iconSize="20"
  >
    Settings
  </BaseLink>
</template>
```

**Email Link**
```vue
<template>
  <BaseLink 
    to="mailto:contact@example.com" 
    icon="email" 
    iconColor="#4285F4"
  >
    Contact Us
  </BaseLink>
</template>
```

-------------------------

### BaseSwitch Component

#### Description
A toggle switch component for boolean or multi-state selections. BaseSwitch is a wrapper around the n-switch component, providing a flexible toggle control with customizable appearance and behavior.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| modelValue | String/Number/Boolean | - | The value of the switch (v-model binding) |
| checkedValue | String/Boolean/Number | true | Value when switch is checked |
| defaultValue | Boolean | false | Default value of the switch |
| label | String | - | Label displayed next to the switch |
| disabled | Boolean | false | Whether the switch is disabled |
| loading | Boolean | false | Whether to show loading state |
| railStyle | Function | undefined | Custom style function for the switch rail |
| round | Boolean | true | Whether the switch has rounded corners |
| rubberBand | Boolean | true | Whether to apply rubber band effect when toggling |
| size | String | "medium" | Size of the switch ("small", "medium", "large") |
| uncheckedValue | String/Boolean/Number | false | Value when switch is unchecked |
| themeOverrides | Object | {} | Custom theme overrides for the component |

#### Events

| Event | Parameters | Description |
|-------|------------|-------------|
| update:modelValue | (value) | Triggered when the model value changes |
| update:value | (value) | Triggered when the switch value updates |

#### Slots

| Slot | Description |
|------|-------------|
| default | Content next to the switch (replaces label prop if provided) |
| checked | Content displayed when switch is checked |
| checked-icon | Icon displayed when switch is checked |
| icon | Icon displayed in the switch |
| unchecked | Content displayed when switch is unchecked |
| unchecked-icon | Icon displayed when switch is unchecked |

#### Usage Examples

**Basic Usage**
```vue
<template>
  <BaseSwitch v-model="enabled" label="Enable feature" />
</template>

<script setup>
import { ref } from 'vue';
import { BaseSwitch } from '@digitaltolk/ui';

const enabled = ref(false);
</script>
```

**Custom Checked/Unchecked Values**
```vue
<template>
  <BaseSwitch 
    v-model="status" 
    :checked-value="'active'" 
    :unchecked-value="'inactive'" 
    label="Status:" 
  />
</template>
```

**Different Sizes**
```vue
<template>
  <BaseSpace vertical>
    <BaseSwitch size="small" label="Small" />
    <BaseSwitch size="medium" label="Medium" />
    <BaseSwitch size="large" label="Large" />
  </BaseSpace>
</template>
```

-------------------------

### BaseTag Component

#### Description
A compact component for displaying categories, labels, and status indicators. BaseTag is a wrapper around the n-tag component, providing customizable appearance and interactive options.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| modelValue | Boolean | false | Whether the tag is checked (v-model) |
| bordered | Boolean | false | Whether to show a border around the tag |
| checkable | Boolean | false | Whether the tag can be checked/selected |
| checked | Boolean | false | Whether the tag is checked (without v-model) |
| closable | Boolean | false | Whether the tag can be closed |
| color | Object | undefined | Custom color overrides for the tag |
| disabled | Boolean | false | Whether the tag is disabled |
| chips | Boolean | false | Whether to use chips styling |
| round | Boolean | false | Whether the tag has rounded corners |
| size | String | "medium" | Size of the tag ("small", "medium", "large") |
| strong | Boolean | false | Whether to use strong styling |
| triggerClickOnClose | Boolean | false | Whether to trigger a click event when closed |
| type | String | "default" | Type of the tag ("default", "primary", "info", "success", "warning", "error") |
| themeOverrides | Object | {} | Custom theme overrides for the component |

#### Events

| Event | Parameters | Description |
|-------|------------|-------------|
| close | (event) | Triggered when the close button is clicked |
| update:modelValue | (value) | Triggered when the checked state changes |

#### Slots

| Slot | Description |
|------|-------------|
| default | Main content of the tag |
| avatar | Avatar content displayed before the main content |
| icon | Icon content |
| suffix | Additional content displayed after the main content |

#### Usage Examples

**Basic Usage**
```vue
<template>
  <BaseTag>Tag Label</BaseTag>
</template>

<script setup>
import { BaseTag } from '@digitaltolk/ui';
</script>
```

**Different Types**
```vue
<template>
  <BaseSpace>
    <BaseTag>Default</BaseTag>
    <BaseTag type="primary">Primary</BaseTag>
    <BaseTag type="info">Info</BaseTag>
    <BaseTag type="success">Success</BaseTag>
    <BaseTag type="warning">Warning</BaseTag>
    <BaseTag type="error">Error</BaseTag>
  </BaseSpace>
</template>
```

**With Icon**
```vue
<template>
  <BaseTag>
    <template #icon>
      <BaseIcon>star</BaseIcon>
    </template>
    Featured
  </BaseTag>
</template>
```

**Closable Tags**
```vue
<template>
  <BaseTag 
    v-for="tag in tags" 
    :key="tag" 
    closable
    @close="removeTag(tag)"
  >
    {{ tag }}
  </BaseTag>
</template>
```

-------------------------

### BaseAvatarGroup Component

#### Description
Component for displaying groups of user avatars with configurable layout and overflow handling. The BaseAvatarGroup component renders multiple avatars in a row or column with customizable styling and behavior options.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| expandOnHover | Boolean | false | When true, expands all avatars on hover for better visibility |
| max | Number | undefined | Maximum number of avatars to display before showing a "+X" indicator |
| maxStyle | String/Object | undefined | Custom style for the "+X" indicator element |
| options | Array | [] | Array of avatar configuration objects (alternative to using slots) |
| size | String | "medium" | Size of the avatars ("small", "medium", "large") |
| vertical | Boolean | false | When true, displays avatars in a vertical column instead of horizontal row |
| themeOverrides | Object | {} | Custom theme overrides for component styling |

#### Slots

| Slot | Description |
|------|-------------|
| default | Default slot for avatar content |
| avatar | Slot for customizing avatar appearance. Receives slotProps that can be accessed via :bind parameter |
| rest | Slot for customizing the appearance of the "+X" overflow indicator. Receives slotProps that can be accessed via :bind parameter |

#### Usage Examples

**Basic Usage with Default Slot**
```vue
<template>
  <BaseAvatarGroup :max="3" size="small">
    <BaseAvatar src="/images/avatar1.jpg" />
    <BaseAvatar src="/images/avatar2.jpg" />
    <BaseAvatar src="/images/avatar3.jpg" />
    <BaseAvatar src="/images/avatar4.jpg" />
    <BaseAvatar src="/images/avatar5.jpg" />
  </BaseAvatarGroup>
</template>
```

**Using Options Array**
```vue
<template>
  <BaseAvatarGroup
    :options="[
      { src: '/images/avatar1.jpg' },
      { src: '/images/avatar2.jpg' },
      { src: '/images/avatar3.jpg' },
      { text: 'AB' },
      { text: 'CD' }
    ]"
    :max="4"
    expand-on-hover
  />
</template>
```

**Vertical Layout with Custom Overflow Indicator**
```vue
<template>
  <BaseAvatarGroup :max="3" vertical>
    <BaseAvatar src="/images/avatar1.jpg" />
    <BaseAvatar src="/images/avatar2.jpg" />
    <BaseAvatar src="/images/avatar3.jpg" />
    <BaseAvatar src="/images/avatar4.jpg" />
    <BaseAvatar src="/images/avatar5.jpg" />
    
    <template #rest="{ bind }">
      <BaseAvatar>
        <template #icon>
          <span>+{{ bind.rest }}</span>
        </template>
      </BaseAvatar>
    </template>
  </BaseAvatarGroup>
</template>
```

-------------------------

### BasePopover Component

#### Description
The BasePopover component displays floating content when a user interacts with a trigger element. It's useful for displaying additional information, contextual menus, or custom UI elements without taking up permanent screen space.

#### Props

**Appearance Props**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| animated | Boolean | true | Whether the popover should animate when showing/hiding |
| arrowPointToCenter | Boolean | false | Whether the arrow should point to the center of the trigger |
| arrowClass | String | undefined | Custom class for the arrow |
| arrowStyle | String, Object | undefined | Custom style for the arrow |
| contentClass | String | undefined | Custom class for the content |
| contentStyle | String, Object | undefined | Custom style for the content |
| footerClass | String | undefined | Custom class for the footer |
| headerClass | String | undefined | Custom class for the header |
| placement | String | 'top' | Placement of the popover relative to the trigger |
| raw | Boolean | false | Whether to use raw content without default styling |
| scrollable | Boolean | false | Whether the content is scrollable |
| showArrow | Boolean | true | Whether to show the arrow |
| title | String | undefined | Title text for the popover |
| width | Number, String | undefined | Width of the popover |

**Behavior Props**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| delay | Number | 100 | Delay before showing the popover (milliseconds) |
| disabled | Boolean | false | Whether the popover is disabled |
| displayDirective | String | 'if' | Vue directive to use for display ('if' or 'show') |
| duration | Number | 100 | Duration of the animation (milliseconds) |
| flip | Boolean | true | Whether to flip placement when there's not enough space |
| keepAliveOnHover | Boolean | true | Whether to keep popover open when hovering it |
| trigger | String | 'hover' | Trigger type: 'hover', 'click', 'focus', or 'manual' |
| themeOverrides | Object | {} | Custom theme overrides |

#### Events

| Event | Parameters | Description |
|-------|------------|-------------|
| clickoutside | (e: Event) | Emitted when clicking outside the popover |
| update:show | (show: boolean) | Emitted when visibility changes |

#### Slots

| Slot | Description |
|------|-------------|
| trigger | The element that triggers the popover |
| default | Main content of the popover |
| header | Content for the popover header |
| footer | Content for the popover footer |

#### Usage Examples

**Basic Popover**
```vue
<template>
  <BasePopover>
    <template #trigger>
      <BaseButton>Hover Me</BaseButton>
    </template>
    
    This is a simple popover with default settings.
  </BasePopover>
</template>
```

**Popover with Title and Custom Placement**
```vue
<template>
  <BasePopover 
    title="Information" 
    placement="right"
  >
    <template #trigger>
      <BaseButton>Click for Info</BaseButton>
    </template>
    
    <div>
      This popover appears to the right of the trigger and has a title.
    </div>
  </BasePopover>
</template>
```

**Click Triggered Popover**
```vue
<template>
  <BasePopover trigger="click">
    <template #trigger>
      <BaseButton>Click Me</BaseButton>
    </template>
    
    <div>
      This popover opens when you click the trigger, rather than on hover.
    </div>
  </BasePopover>
</template>
```

-------------------------

### BaseProgress Component

#### Description
The BaseProgress component provides visual feedback about the status of ongoing operations. It supports different types of progress indicators, including linear and circular displays, with customizable appearances.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| borderRadius | Number, String | undefined | Border radius of the progress bar |
| circleGap | Number | 1 | Gap size for circular progress indicator |
| color | String, Array | undefined | Color of the progress indicator (can be gradient for line type) |
| fillBorderRadius | Number, String | undefined | Border radius of the filled part of the progress bar |
| gapDegree | Number | 75 | Gap degree for circular progress with gaps |
| gapOffsetDegree | Number | 0 | Offset degree for the gap |
| height | Number | undefined | Height of the progress bar |
| indicatorPlacement | String | 'outside' | Placement of the indicator: 'outside', 'end', 'center', 'space-around', 'space-between', 'space-evenly' |
| indicatorTextColor | String | undefined | Color of the indicator text |
| percentage | Number, Array | 0 | Percentage complete (can be array for multiple segments) |
| processing | Boolean | false | Whether the progress bar shows a processing animation |
| railColor | String, Array | undefined | Color of the unfilled part (can be array for multiple segments) |
| showIndicator | Boolean | true | Whether to show the percentage indicator |
| status | String | 'default' | Status of the progress: 'default', 'success', 'error', 'warning', 'info' |
| strokeWidth | Number | 7 | Width of the progress bar stroke |
| type | String | 'line' | Type of progress: 'line' or 'circle' |
| unit | String | '%' | Unit to display after the percentage |
| themeOverrides | Object | {} | Custom theme overrides for the component |

#### Slots

| Slot | Description |
|------|-------------|
| default | Custom content to display in the progress indicator |

#### Usage Examples

**Basic Line Progress**
```vue
<template>
  <BaseProgress :percentage="50" />
</template>

<script setup>
import { BaseProgress } from '@digitaltolk/ui';
</script>
```

**Circle Progress**
```vue
<template>
  <BaseProgress 
    type="circle" 
    :percentage="75" 
    :stroke-width="6"
  />
</template>
```

**Progress with Status**
```vue
<template>
  <div class="progress-samples">
    <BaseProgress :percentage="40" status="default" />
    <BaseProgress :percentage="100" status="success" />
    <BaseProgress :percentage="70" status="warning" />
    <BaseProgress :percentage="50" status="error" />
    <BaseProgress :percentage="85" status="info" />
  </div>
</template>
```

**Multiple Segments Progress**
```vue
<template>
  <BaseProgress 
    :percentage="[30, 20, 10]" 
    :color="['#1890ff', '#52c41a', '#722ed1']" 
  />
</template>
```

-------------------------

### BaseSpin Component

#### Description
A loading indicator component for content loading states. BaseSpin is a wrapper around the n-spin component, providing flexible loading animation with customizable appearance.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| contentClass | String | undefined | Class applied to the content wrapper |
| contentStyle | String/Object | undefined | Style applied to the content wrapper |
| description | String | undefined | Text description below the spinner |
| rotate | Boolean | true | Whether the spinner should rotate |
| size | Number | 40 | Size of the spinner in pixels |
| show | Boolean | true | Whether to show the spinner |
| strokeWidth | Number | undefined | Width of the spinner stroke |
| stroke | String | undefined | Color of the spinner |
| delay | Number | undefined | Delay in ms before showing the spinner |

#### Slots

| Slot | Description |
|------|-------------|
| default | Content that will be blurred/disabled while loading |
| description | Custom description content (overrides description prop) |
| icon | Custom spinner icon (defaults to BaseIcon with progress_activity) |

#### Usage Examples

**Basic Usage**
```vue
<template>
  <BaseSpin />
</template>

<script setup>
import { BaseSpin } from '@digitaltolk/ui';
</script>
```

**With Custom Size and Color**
```vue
<template>
  <BaseSpin :size="60" stroke="#1976d2" />
</template>
```

**Loading Content**
```vue
<template>
  <BaseSpin :show="isLoading">
    <BaseCard>
      <!-- Content that will be blurred while loading -->
      <p>Card content here</p>
    </BaseCard>
  </BaseSpin>
</template>

<script setup>
import { ref } from 'vue';
import { BaseSpin, BaseCard } from '@digitaltolk/ui';

const isLoading = ref(true);
// Set to false when content is loaded
setTimeout(() => {
  isLoading.value = false;
}, 2000);
</script>
```

-------------------------

### BaseAutoComplete Component

#### Description
BaseAutoComplete is an input component that provides suggestions as the user types. It wraps Naive UI's n-auto-complete component and offers a customizable interface for creating searchable dropdown inputs with various options and behaviors.

#### Props

**Core Props**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| modelValue | String/Number | "" | The current value of the input |
| options | Array | [] | Array of options to display in the dropdown |
| placeholder | String | - | Placeholder text for the input |
| disabled | Boolean | false | Whether the input is disabled |
| loading | Boolean | false | Whether to show a loading indicator |

**Behavior Props**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| blurAfterSelect | Boolean | false | Whether to blur the input after selecting an option |
| clearAfterSelect | Boolean | false | Whether to clear the input after selecting an option |
| clearable | Boolean | false | Whether the input can be cleared with a button |
| defaultValue | String | null | Default value for the input |
| showEmpty | Boolean | false | Whether to show the dropdown when there are no options |

**Appearance Props**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| size | 'small' \| 'medium' \| 'large' | 'medium' | Size of the input |
| status | 'success' \| 'warning' \| 'error' | - | Status style of the input |
| placement | String | 'bottom-start' | Position of the dropdown relative to the input |
| themeOverrides | Object | {} | Custom theme overrides for styling |

#### Events

| Event | Parameters | Description |
|-------|------------|-------------|
| update:modelValue | (value: string/number) | Emitted when the input value changes |
| blur | (event: FocusEvent) | Emitted when the input loses focus |
| focus | (event: FocusEvent) | Emitted when the input gains focus |
| select | (value: string/number) | Emitted when an option is selected |

#### Slots

| Slot | Description |
|------|-------------|
| [dynamic] | All slots are dynamically passed to the underlying n-auto-complete component |

#### Usage Examples

**Basic Usage**
```vue
<template>
  <BaseAutoComplete
    v-model="searchQuery"
    :options="options"
    placeholder="Search..."
    @select="handleSelect"
  />
</template>

<script setup>
import { ref } from 'vue';
import { BaseAutoComplete } from '@digitaltolk/ui';

const searchQuery = ref('');
const options = ref([
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Orange', value: 'orange' },
  { label: 'Pineapple', value: 'pineapple' },
  { label: 'Mango', value: 'mango' }
]);

const handleSelect = (value) => {
  console.log('Selected:', value);
};
</script>
```

**With Custom Filtering**
```vue
<template>
  <BaseAutoComplete
    v-model="searchQuery"
    :options="filteredOptions"
    placeholder="Type to search..."
    clearable
  />
</template>

<script setup>
import { ref, computed } from 'vue';
import { BaseAutoComplete } from '@digitaltolk/ui';

const searchQuery = ref('');
const allOptions = [
  { label: 'JavaScript', value: 'js' },
  { label: 'TypeScript', value: 'ts' },
  { label: 'Python', value: 'py' },
  { label: 'Java', value: 'java' },
  { label: 'C#', value: 'cs' }
];

const filteredOptions = computed(() => {
  if (!searchQuery.value) return [];
  
  return allOptions.filter(option => 
    option.label.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});
</script>
```

-------------------------

### BaseSkeleton Component

#### Description
A loading placeholder component for content. BaseSkeleton provides visual feedback to users while content is being loaded, improving perceived performance and user experience. It's a wrapper around the n-skeleton component.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| text | Boolean | false | Whether to display as a text skeleton |
| round | Boolean | false | Whether to display with rounded corners |
| circle | Boolean | false | Whether to display as a circle skeleton |
| height | String/Number | undefined | The height of the skeleton |
| width | String/Number | undefined | The width of the skeleton |
| size | String | undefined | Predefined size of the skeleton |
| repeat | String/Number | 1 | Number of times to repeat the skeleton element |
| animated | Boolean | true | Whether to enable animation effect |
| sharp | Boolean | true | Whether to display as a right-angled skeleton |
| themeOverrides | Object | {} | Custom theme overrides for the component |

#### Usage Examples

**Basic Usage**
```vue
<template>
  <BaseSkeleton></BaseSkeleton>
</template>

<script setup>
import { BaseSkeleton } from '@digitaltolk/ui';
</script>
```

**Custom Dimensions**
```vue
<template>
  <BaseSkeleton :height="20" :width="140" />
</template>
```

**Text Skeleton**
```vue
<template>
  <BaseSkeleton text />
</template>
```

**Circle Skeleton (for avatars)**
```vue
<template>
  <BaseSkeleton circle :width="40" :height="40" />
</template>
```

**Repeating Skeletons (for lists)**
```vue
<template>
  <BaseSkeleton :height="20" :width="140" :repeat="3" />
</template>
```

-------------------------

### BaseDivider Component

#### Description
Component for visual separation with optional text. BaseDivider provides horizontal or vertical dividing lines that can optionally include a title or content in the center, left, or right.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| dashed | Boolean | false | Whether the divider line should be dashed |
| titlePlacement | String | "center" | Placement of title text ("left", "center", "right") |
| height | String | "1em" | Height of vertical divider |
| vertical | Boolean | false | Whether the divider is vertical |
| xMargin | String | "24px" | Horizontal margin on both sides |
| themeOverrides | Object | {} | Custom theme overrides for styling |

#### Slots

| Slot | Description |
|------|-------------|
| default | Content to display in the divider (optional) |

#### Usage Examples

**Basic Horizontal Divider**
```vue
<template>
  <BaseDivider />
</template>
```

**Divider with Text**
```vue
<template>
  <BaseDivider>OR</BaseDivider>
</template>
```

**Divider with Title Placement**
```vue
<template>
  <div>
    <BaseDivider title-placement="left">Left Title</BaseDivider>
    <BaseDivider title-placement="center">Center Title</BaseDivider>
    <BaseDivider title-placement="right">Right Title</BaseDivider>
  </div>
</template>
```

**Vertical Divider**
```vue
<template>
  <div style="height: 50px; display: flex; align-items: center;">
    <span>Text</span>
    <BaseDivider vertical height="30px" />
    <span>More Text</span>
  </div>
</template>
```

-------------------------

### BaseSpace Component

#### Description
Utility component for creating consistent spacing between elements. BaseSpace is a wrapper around the n-space component, providing flexible layout control with various alignment and spacing options.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| align | String | undefined | Element alignment |
| inline | Boolean | false | Whether to display as an inline element |
| wrapItem | Boolean | true | Whether to wrap each item |
| itemClass | String | undefined | Class applied to each item |
| itemStyle | String/Object | undefined | Style applied to each item |
| horizontalAlign | String | "start" | Horizontal alignment when not in vertical mode |
| justify | String | "start" | Content justification ("start", "end", "center", "space-around", "space-between", "space-evenly") |
| size | String/Number | "medium" | Spacing size between items |
| vertical | Boolean | false | Whether to arrange items vertically |
| alignItems | String | "start" | Vertical alignment when in vertical mode |
| wrap | Boolean | true | Whether to allow items to wrap |
| themeOverrides | Object | {} | Custom theme overrides for the component |

#### Slots

| Slot | Description |
|------|-------------|
| default | Content to be spaced according to the props |

#### Usage Examples

**Basic Usage**
```vue
<template>
  <BaseSpace>
    <BaseButton>Button 1</BaseButton>
    <BaseButton>Button 2</BaseButton>
    <BaseButton>Button 3</BaseButton>
  </BaseSpace>
</template>

<script setup>
import { BaseSpace, BaseButton } from '@digitaltolk/ui';
</script>
```

**Vertical Spacing**
```vue
<template>
  <BaseSpace vertical>
    <BaseTextField label="Name" />
    <BaseTextField label="Email" />
    <BaseTextField label="Phone" />
  </BaseSpace>
</template>
```

**Alignment and Justification**
```vue
<template>
  <BaseSpace justify="space-between" horizontalAlign="center">
    <BaseButton>Left</BaseButton>
    <BaseButton>Center</BaseButton>
    <BaseButton>Right</BaseButton>
  </BaseSpace>
</template>
```

-------------------------

### BaseBlankState Component

#### Description
Empty state component for when content is unavailable or no data is present. This component provides a standardized way to display empty states in your application with customizable icon, description, and additional content.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| description | String | "No data found" | Text message to display beneath the icon |
| showDescription | Boolean | true | Whether to show the description text |
| showIcon | Boolean | true | Whether to show the empty state icon |
| size | String | "medium" | Size of the empty state component ("small", "medium", "large", "huge") |
| boxed | Boolean | false | When true, adds a dashed border, background, and padding to create a boxed appearance |
| themeOverrides | Object | {} | Custom theme overrides for component styling |

#### Slots

| Slot | Description |
|------|-------------|
| default | Default content slot, typically used for adding action buttons |
| icon | Custom icon slot to replace the default empty state icon |
| extra | Additional content slot below the description |
| description | Custom description content slot |

#### Usage Examples

**Basic Usage**
```vue
<template>
  <BaseBlankState description="No items found" />
</template>
```

**With Custom Action Button**
```vue
<template>
  <BaseBlankState description="Your inbox is empty">
    <BaseButton type="primary">Create new message</BaseButton>
  </BaseBlankState>
</template>
```

**With Custom Icon**
```vue
<template>
  <BaseBlankState description="No files uploaded">
    <template #icon>
      <BaseIcon name="file-upload" size="48" />
    </template>
  </BaseBlankState>
</template>
```

-------------------------

### BaseDropdown Component

#### Description
BaseDropdown is a versatile dropdown menu component that wraps Naive UI's n-dropdown. It provides a customizable interface for displaying hierarchical options that can be triggered by various user interactions. The component supports navigation, custom rendering, and complex nested structures.

#### Props

**Core Props**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| options | Array | [] | Array of options to display in the dropdown |
| trigger | String | "hover" | How the dropdown is triggered: "hover", "click", "focus", or "manual" |
| placement | String | "bottom-start" | Position of the dropdown relative to its trigger element |
| size | String | "medium" | Size of the dropdown: "small", "medium", "large", or "huge" |

**Data Structure Props**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| childrenField | String | "children" | Field name for nested options |
| keyField | String | "key" | Field name for option keys |
| labelField | String | "label" | Field name for option labels |

**Appearance Props**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| animated | Boolean | true | Whether to animate the dropdown opening/closing |
| inverted | Boolean | false | Whether to use inverted styling |
| overlap | Boolean | false | Whether the dropdown should overlap the trigger |
| showArrow | Boolean | false | Whether to show an arrow pointing to the trigger |
| width | String/Number | undefined | Width of the dropdown menu |
| themeOverrides | Object | {} | Custom theme overrides for styling |

#### Events

| Event | Parameters | Description |
|-------|------------|-------------|
| click:outside | (event: Event) | Emitted when clicking outside the dropdown |
| select | (key: string/number, event: Event) | Emitted when an option is selected |

#### Slots

| Slot | Description |
|------|-------------|
| default | Trigger element that activates the dropdown |
| dropdown | Custom dropdown content (using BaseDropdownItem components) |
| [dynamic] | All slots are dynamically passed to the underlying n-dropdown component |

#### Usage Examples

**Basic Dropdown**
```vue
<template>
  <BaseDropdown :options="options">
    <BaseButton>Click Me</BaseButton>
  </BaseDropdown>
</template>

<script setup>
import { ref } from 'vue';
import { BaseDropdown, BaseButton } from '@digitaltolk/ui';

const options = ref([
  {
    label: 'Option 1',
    key: 'option1'
  },
  {
    label: 'Option 2',
    key: 'option2'
  },
  {
    label: 'Option 3',
    key: 'option3'
  }
]);
</script>
```

**Dropdown with Nested Options**
```vue
<template>
  <BaseDropdown :options="nestedOptions">
    <BaseButton>Nested Menu</BaseButton>
  </BaseDropdown>
</template>

<script setup>
import { ref } from 'vue';
import { BaseDropdown, BaseButton } from '@digitaltolk/ui';

const nestedOptions = ref([
  {
    label: 'Level 1 Item 1',
    key: 'item1'
  },
  {
    label: 'Level 1 Item 2',
    key: 'item2',
    children: [
      {
        label: 'Level 2 Item 1',
        key: 'item2-1'
      },
      {
        label: 'Level 2 Item 2',
        key: 'item2-2'
      }
    ]
  }
]);
</script>
```

**Using Dropdown Items**
```vue
<template>
  <BaseDropdown>
    <BaseButton>Custom Items</BaseButton>
    
    <template #dropdown>
      <BaseDropdownItem key="item1" @click="handleItem1Click">
        <template #icon>
          <BaseIcon>home</BaseIcon>
        </template>
        Home
      </BaseDropdownItem>
      
      <BaseDropdownItem key="item2" to="/settings">
        <template #icon>
          <BaseIcon>settings</BaseIcon>
        </template>
        Settings
      </BaseDropdownItem>
    </template>
  </BaseDropdown>
</template>
```

-------------------------

### BaseCode Component

#### Description
Code display component with syntax highlighting for multiple programming languages. BaseCode uses highlight.js to provide high-quality syntax highlighting with support for JavaScript, CSS, PHP, and Java.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| code | String | undefined | The code to be displayed and highlighted |
| language | String | "javascript" | Programming language for syntax highlighting (javascript, css, php, java) |
| wordWrap | Boolean | false | Whether to wrap long lines of code |
| showLineNumbers | Boolean | false | Whether to display line numbers |
| themeOverrides | Object | {} | Custom theme overrides for styling |

#### Usage Examples

**Basic JavaScript Example**
```vue
<template>
  <BaseCode
    code="function greeting(name) {
  return `Hello, ${name}!`;
}

console.log(greeting('World'));"
    language="javascript"
  />
</template>
```

**CSS with Line Numbers**
```vue
<template>
  <BaseCode
    code=".button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border-radius: 4px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
}"
    language="css"
    :showLineNumbers="true"
  />
</template>
```

**PHP Example with Word Wrap**
```vue
<template>
  <BaseCode
    code="<?php
function factorial($n) {
  if ($n <= 1) {
    return 1;
  }
  return $n * factorial($n - 1);
}

echo 'Factorial of 5 is: ' . factorial(5);"
    language="php"
    :wordWrap="true"
  />
</template>
```

-------------------------

### BaseCollapse Component

#### Description
Collapsible content component for progressive disclosure. BaseCollapse allows sections of content to be expanded or collapsed, helping to organize information and reduce visual clutter. It supports both accordion and non-accordion modes.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| accordion | Boolean | false | Whether only one panel can be expanded at a time |
| arrowPlacement | String | "right" | Position of the arrow indicator ("left" or "right") |
| defaultExpandedNames | String/Number/Array/null | null | Default expanded panels when component is uncontrolled |
| displayDirective | String | "if" | Directive used for panel content display ("if" or "show") |
| expandedNames | String/Number/Array/null | undefined | Names of currently expanded panels (for controlled behavior) |
| themeOverrides | Object | {} | Custom theme overrides for styling |

#### Events

| Event | Parameters | Description |
|-------|------------|-------------|
| update:expanded-names | expandedNames | Emitted when expanded panels change (for v-model) |
| item-header-click | item | Emitted when a panel header is clicked |

#### Slots

| Slot | Description |
|------|-------------|
| default | Container for collapse items |
| arrow | Custom collapse arrow indicator (receives `collapsed` boolean) |

#### Usage Examples

**Basic Collapse with Multiple Panels**
```vue
<template>
  <BaseCollapse>
    <n-collapse-item title="Panel 1" name="1">
      <p>Content for panel 1</p>
    </n-collapse-item>
    <n-collapse-item title="Panel 2" name="2">
      <p>Content for panel 2</p>
    </n-collapse-item>
    <n-collapse-item title="Panel 3" name="3">
      <p>Content for panel 3</p>
    </n-collapse-item>
  </BaseCollapse>
</template>
```

**Accordion Mode (Only One Panel Open)**
```vue
<template>
  <BaseCollapse accordion>
    <n-collapse-item title="Features" name="1">
      <ul>
        <li>Feature 1</li>
        <li>Feature 2</li>
        <li>Feature 3</li>
      </ul>
    </n-collapse-item>
    <n-collapse-item title="Requirements" name="2">
      <p>System requirements information...</p>
    </n-collapse-item>
    <n-collapse-item title="Installation" name="3">
      <p>Installation instructions...</p>
    </n-collapse-item>
  </BaseCollapse>
</template>
```

**Controlled Expansion with v-model**
```vue
<template>
  <div>
    <BaseButton @click="togglePanels">Toggle Panels</BaseButton>
    <BaseCollapse v-model:expanded-names="expandedPanels">
      <n-collapse-item title="Section A" name="a">
        <p>Content for section A</p>
      </n-collapse-item>
      <n-collapse-item title="Section B" name="b">
        <p>Content for section B</p>
      </n-collapse-item>
    </BaseCollapse>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const expandedPanels = ref(['a']);

const togglePanels = () => {
  if (expandedPanels.value.includes('a')) {
    expandedPanels.value = ['b'];
  } else {
    expandedPanels.value = ['a'];
  }
};
</script>
```

-------------------------

### BaseCalendar Component

#### Description
A versatile calendar component for displaying and interacting with events, appointments, and schedules. BaseCalendar provides multiple view options (day, week, month, year) with extensive customization capabilities.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| activeView | String | "week" | Initial calendar view (week, day, month, year) |
| allDayBarHeight | String/Number | "25px" | Height of the all-day events bar |
| cellClickHold | Boolean | true | Enable event creation by clicking and holding |
| disableDays | Array | [] | Array of disabled days (0-6, 0 is Sunday) |
| disableViews | Array | [] | Array of views to disable |
| dragToCreateEvent | Boolean | true | Enable drag to create events |
| events | Array | [] | Array of events to display |
| hideWeekends | Boolean | false | Hide weekends |
| locale | String | "en" | Calendar locale |
| selectedDate | String/Date | "" | Currently selected date |
| showAllDayEvents | Boolean/String | false | Show all-day events |
| showWeekNumbers | Boolean/String | false | Show week numbers |
| timeFormat | String | "" | Time format |
| timeFrom | Number | 0 | Start time in minutes |
| timeStep | Number | 60 | Time step in minutes |
| timeTo | Number | 24 * 60 | End time in minutes |
| todayButton | Boolean | false | Show today button |
| twelveHour | Boolean | false | Use 12-hour format |

#### Events

| Event | Parameters | Description |
|-------|------------|-------------|
| ready | event | Emitted when the calendar is ready |
| view-change | event | Emitted when the view changes |
| cell-click | event | Emitted when a cell is clicked |
| event-create | event | Emitted when an event is created |
| event-change | event | Emitted when an event changes |
| update:selectedDate | date | Emitted when selected date changes |
| update:activeView | view | Emitted when active view changes |
| on-event-click | event, extra | Emitted when an event is clicked |

#### Slots

| Slot | Description |
|------|-------------|
| arrow-prev | Custom previous arrow content |
| arrow-next | Custom next arrow content |
| title | Custom title content |
| event | Custom event rendering |
| no-event | Custom content when no events |
| event-popover | Custom event popover |

#### Usage Examples

**Basic Usage**
```vue
<template>
  <BaseCalendar />
</template>
```

**With Events**
```vue
<template>
  <BaseCalendar
    :events="[
      {
        start: '2023-05-15 10:00',
        end: '2023-05-15 12:00',
        title: 'Meeting with team',
        content: 'Discuss project updates',
        class: 'meeting'
      },
      {
        start: '2023-05-16 14:00',
        end: '2023-05-16 15:30',
        title: 'Client call',
        content: 'Product demo',
        class: 'call'
      }
    ]"
  />
</template>
```

**Custom View and Selected Date**
```vue
<template>
  <BaseCalendar
    activeView="month"
    selectedDate="2023-05-01"
    @update:selectedDate="handleDateChange"
    @update:activeView="handleViewChange"
  />
</template>
```

-------------------------

### BasePopconfirm Component

#### Description
The BasePopconfirm component provides a lightweight confirmation dialog that appears when a user performs a potentially destructive action. It displays as a popover with customizable confirmation and cancellation options.

#### Props

**Action Props**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| negativeButtonProps | Object | undefined | Props to apply to the cancel button |
| negativeText | String, null | 'Cancel' | Text for the cancel button (null to hide) |
| positiveButtonProps | Object | undefined | Props to apply to the confirm button |
| positiveText | String, null | 'Confirm' | Text for the confirm button (null to hide) |
| showIcon | Boolean | false | Whether to show an icon in the confirmation |
| modelValue | Boolean | undefined | Controls the visibility of the popconfirm |

**Appearance Props**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| animated | Boolean | true | Whether to animate the popover |
| placement | String | 'top' | Placement of the popconfirm relative to the trigger |
| showArrow | Boolean | true | Whether to show the arrow |
| title | String | undefined | Title text of the popconfirm |
| width | Number, String | undefined | Width of the popconfirm |

**Behavior Props**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| disabled | Boolean | false | Whether the popconfirm is disabled |
| trigger | String | 'hover' | Trigger type ('hover', 'click', 'focus', 'manual') |
| themeOverrides | Object | {} | Custom theme overrides for the component |

#### Events

| Event | Parameters | Description |
|-------|------------|-------------|
| negative-click | (e: Event) | Emitted when the cancel button is clicked |
| positive-click | (e: Event) | Emitted when the confirm button is clicked |
| update:modelValue | (value: boolean) | Emitted when visibility changes |

#### Slots

| Slot | Description |
|------|-------------|
| default | Content of the popconfirm |
| action | Custom action buttons |
| icon | Custom icon |
| trigger | Element that triggers the popconfirm |

#### Usage Examples

**Basic Popconfirm**
```vue
<template>
  <BasePopconfirm>
    <template #trigger>
      <BaseButton>Delete</BaseButton>
    </template>
    
    Are you sure you want to delete this item?
  </BasePopconfirm>
</template>

<script setup>
import { BasePopconfirm, BaseButton } from '@digitaltolk/ui';
</script>
```

**Custom Button Text**
```vue
<template>
  <BasePopconfirm 
    positiveText="Yes, Delete It" 
    negativeText="Cancel"
  >
    <template #trigger>
      <BaseButton type="error">Delete</BaseButton>
    </template>
    
    This action cannot be undone.
  </BasePopconfirm>
</template>
```

**With Custom Icon**
```vue
<template>
  <BasePopconfirm showIcon>
    <template #icon>
      <BaseIcon>warning</BaseIcon>
    </template>
    
    <template #trigger>
      <BaseButton>Delete Item</BaseButton>
    </template>
    
    This action is permanent and cannot be undone.
  </BasePopconfirm>
</template>
```

-------------------------

### BaseChart Component

#### Description
Data visualization component that supports various chart types including doughnut, pie, line, and bar charts. BaseChart is built on Chart.js and provides a simple interface for creating responsive and interactive charts.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| type | String | "doughnut" | Chart type: "doughnut", "pie", "line", or "bar" |
| data | Object | `{labels: [], datasets: []}` | Chart data with labels and datasets |
| options | Object | `{}` | Chart.js options to override defaults |
| width | String | undefined | Width of the chart container (CSS value) |
| height | String | undefined | Height of the chart container (CSS value) |
| horizontalAlign | String | "start" | Horizontal alignment of the chart ("start", "center", "end") |
| isHalf | Boolean | false | For doughnut/pie charts, shows only half of the circle |

#### Events

| Event | Parameters | Description |
|-------|------------|-------------|
| click | event | Emitted when the chart is clicked |
| hover | `{event, element}` | Emitted when the chart is hovered (debounced) |

#### Usage Examples

**Basic Doughnut Chart**
```vue
<template>
  <BaseChart
    type="doughnut"
    :data="{
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [{
        label: 'Colors',
        data: [300, 50, 100]
      }]
    }"
    height="300px"
  />
</template>
```

**Line Chart with Custom Options**
```vue
<template>
  <BaseChart
    type="line"
    :data="lineChartData"
    :options="lineChartOptions"
    height="400px"
  />
</template>

<script setup>
const lineChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Sales 2022',
      data: [12, 19, 3, 5, 2, 3],
      borderColor: '#27ae60',
      backgroundColor: 'rgba(39, 174, 96, 0.2)',
      tension: 0.4
    },
    {
      label: 'Sales 2023',
      data: [7, 11, 5, 8, 3, 7],
      borderColor: '#8e44ad',
      backgroundColor: 'rgba(142, 68, 173, 0.2)',
      tension: 0.4
    }
  ]
};
</script>
```

**Bar Chart with Custom Colors**
```vue
<template>
  <BaseChart
    type="bar"
    :data="{
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      datasets: [{
        label: 'Quarterly Revenue',
        data: [540, 470, 620, 710],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)'
        ]
      }]
    }"
    height="350px"
    horizontalAlign="center"
  />
</template>
```

-------------------------

### BaseCheckboxGroup Component

#### Description
Group component for managing multiple related checkboxes with selection state management, layout options, and validation features. BaseCheckboxGroup allows for horizontal or vertical arrangement and provides min/max selection constraints.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| modelValue | Array/null | undefined | Selected values array (for v-model binding) |
| value | Array/null | undefined | Selected values array (alternative to modelValue) |
| defaultValue | Array | null | Default selected values when uncontrolled |
| disabled | Boolean | false | Whether all checkboxes in the group are disabled |
| vertical | Boolean | false | Whether to arrange checkboxes vertically |
| max | Number | undefined | Maximum number of checkboxes that can be selected |
| min | Number | undefined | Minimum number of checkboxes that must be selected |
| columnGap | String | undefined | Gap between columns (CSS value) |
| rowGap | String | undefined | Gap between rows (CSS value) |
| themeOverrides | Object | {} | Custom theme overrides for styling |

#### Events

| Event | Parameters | Description |
|-------|------------|-------------|
| update:modelValue | value | Emitted when the selection changes (for v-model) |
| update | value, event | Emitted when the selection changes, with additional event information |

#### Slots

| Slot | Description |
|------|-------------|
| default | Container for BaseCheckbox components |

#### Usage Examples

**Basic Usage**
```vue
<template>
  <BaseCheckboxGroup v-model="selectedFruits">
    <BaseCheckbox value="apple">Apple</BaseCheckbox>
    <BaseCheckbox value="banana">Banana</BaseCheckbox>
    <BaseCheckbox value="orange">Orange</BaseCheckbox>
  </BaseCheckboxGroup>
</template>

<script setup>
import { ref } from 'vue';

const selectedFruits = ref(['apple']);
</script>
```

**Vertical Layout with Spacing**
```vue
<template>
  <BaseCheckboxGroup
    v-model="selectedOptions"
    vertical
    rowGap="16px"
  >
    <BaseCheckbox value="option1">Option 1</BaseCheckbox>
    <BaseCheckbox value="option2">Option 2</BaseCheckbox>
    <BaseCheckbox value="option3">Option 3</BaseCheckbox>
  </BaseCheckboxGroup>
</template>

<script setup>
import { ref } from 'vue';

const selectedOptions = ref([]);
</script>
```

**With Min/Max Selection Limits**
```vue
<template>
  <div>
    <p>Please select between 1 and 2 toppings:</p>
    <BaseCheckboxGroup
      v-model="selectedToppings"
      :min="1"
      :max="2"
    >
      <BaseCheckbox value="cheese">Extra Cheese</BaseCheckbox>
      <BaseCheckbox value="pepperoni">Pepperoni</BaseCheckbox>
      <BaseCheckbox value="mushrooms">Mushrooms</BaseCheckbox>
      <BaseCheckbox value="olives">Olives</BaseCheckbox>
    </BaseCheckboxGroup>
  </div>
</template>
```

-------------------------

### BasePagination Component

#### Description
The BasePagination component provides navigation controls for content split across multiple pages. It supports customizable page sizes, quick jumper, and various display options to fit different use cases.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| defaultPage | Number | 1 | The default page number when the component is initially rendered |
| defaultPageSize | Number | 10 | The default number of items per page |
| disabled | Boolean | false | Whether the pagination is disabled |
| itemCount | Number | undefined | Total number of items to be paginated |
| pageCount | Number | 1 | Total number of pages |
| pageSizes | Array | [10] | Available options for items per page |
| pageSize | Number | undefined | Current number of items per page |
| pageSlot | Number | 9 | Maximum number of page buttons to display |
| page | Number | undefined | Current page number |
| showQuickJumper | Boolean | false | Whether to show the quick jump input |
| size | String | 'medium' | Size of the pagination component ('small', 'medium', 'large') |
| simple | Boolean | false | Whether to use simple mode (only prev/next) |
| round | Boolean | false | Whether to use rounded styling for pagination items |
| showSizePicker | Boolean | false | Whether to show the page size picker |
| themeOverrides | Object | {} | Custom theme overrides for the component |

#### Events

| Event | Parameters | Description |
|-------|------------|-------------|
| update:page | (page: number) | Emitted when the current page changes |
| update:page-size | (size: number) | Emitted when the page size changes |

#### Usage Examples

**Basic Pagination**
```vue
<template>
  <BasePagination 
    v-model:page="currentPage" 
    :page-count="totalPages" 
  />
</template>

<script setup>
import { ref } from 'vue';
import { BasePagination } from '@digitaltolk/ui';

const currentPage = ref(1);
const totalPages = 10;
</script>
```

**Pagination with Item Count**
```vue
<template>
  <BasePagination 
    v-model:page="currentPage"
    v-model:page-size="pageSize"
    :item-count="totalItems"
    :page-sizes="[10, 20, 50, 100]"
    show-size-picker
  />
</template>

<script setup>
import { ref } from 'vue';
import { BasePagination } from '@digitaltolk/ui';

const currentPage = ref(1);
const pageSize = ref(10);
const totalItems = 256;
</script>
```

**Simple Pagination**
```vue
<template>
  <BasePagination 
    v-model:page="currentPage"
    :page-count="totalPages"
    simple
  />
</template>
```

-------------------------

### BaseToasterProvider Component

#### Description
The BaseToasterProvider component is a wrapper around vue-sonner's Toaster component for displaying temporary toast notifications in your application. It provides a global toast notification system that can be used to show success, error, warning, info, and loading messages.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| position | String | 'top-right' | Position of toasts. Options: 'top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right' |
| theme | String | 'light' | Theme for toasts. Options: 'light', 'dark', 'system' |
| richColors | Boolean | true | Whether to use rich colors for different toast types |
| expand | Boolean | false | Whether toasts expand to fit content |
| visibleToasts | Number | 3 | Maximum number of visible toasts at once |
| closeButton | Boolean | true | Whether to show a close button on toasts |
| offset | String | '32px' | Offset from the edges of the viewport |
| dir | String | 'auto' | Text direction. Options: 'ltr', 'rtl', 'auto' |

#### The `useToaster` Composable

**Basic Usage**
```js
import { useToaster } from '@digitaltolk/ui';

// Get the toaster instance
const { toaster } = useToaster();

// Show a basic toast
toaster({
  content: 'This is a toast message',
  description: 'This is additional information',
  duration: 3000, // 3 seconds
});
```

**Toast Types**
```js
// Success toast
toaster.success({
  content: 'Operation successful!',
  description: 'Your changes have been saved',
});

// Error toast
toaster.error({
  content: 'Operation failed',
  description: 'Please try again',
});

// Warning toast
toaster.warning({
  content: 'Caution required',
  description: 'This action has consequences',
});

// Info toast
toaster.info({
  content: 'For your information',
  description: 'Something happened',
});
```

**Promise-based Toast**
```js
const saveData = async () => {
  const promise = fetch('/api/data', {
    method: 'POST',
    body: JSON.stringify(data),
  });

  toaster.promise(promise, {
    loading: 'Saving data...',
    success: (data) => `Data saved successfully`,
    error: (err) => `Error: ${err.message}`,
    duration: 3000,
  });
};
```

#### Basic Setup
```vue
<template>
  <div>
    <App />
    <BaseToasterProvider />
  </div>
</template>

<script setup>
import { BaseToasterProvider } from '@digitaltolk/ui';
</script>
``` 