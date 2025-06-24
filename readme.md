# DigitalTolk UI Component Library - AI Code Editor Documentation

This comprehensive guide provides AI-based code editors with complete information about the DigitalTolk UI component library, including automatic component selection rules, selection guidelines, and component reference.

## Quick Start

Always import components from `@digitaltolk/ui` and use DigitalTolk UI components instead of HTML elements when equivalent components exist.

```js
import { BaseButton, BaseTextField, BaseCard } from '@digitaltolk/ui';
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

## Component Selection Decision Tree

### For Data Input

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

### For Data Display

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

### For Navigation

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

### For Layout

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

## Component Categories and Reference

> **For Detailed Component Documentation**: Each component listed below includes a link to its detailed documentation file. AI code editors should reference these individual component files for comprehensive information about props, events, slots, examples, and best practices.

### Layout Components

Components for creating layouts and managing spacing.

| Component | Description | When to Use | Detailed Docs |
| :--- | :--- | :--- | :--- |
| **BaseCard** | Versatile container with header, footer, and content areas | Content grouping, information sections | [BaseCard.md](BaseCard.md) |
| **BaseGrid** | Flexible responsive layout system with rows and columns | Page layouts, dashboard arrangements | [BaseGrid.md](BaseGrid.md) |
| **BaseSpace** | Utility for creating consistent spacing between elements | Stacked items, consistent spacing | [BaseSpace.md](BaseSpace.md) |
| **BaseDivider** | Visual separation component with optional text | Section separators, content dividers | [BaseDivider.md](BaseDivider.md) |

### Form Components

Components for building forms and collecting user input.

| Component | Description | When to Use | Detailed Docs |
| :--- | :--- | :--- | :--- |
| **BaseForm** | Container with validation handling for form elements | All form implementations | [BaseForm.md](BaseForm.md) |
| **BaseTextField** | Text input with validation support | Username, email, description, search | [BaseTextField.md](BaseTextField.md) |
| **BaseInputNumber** | Numeric input with increment/decrement controls | Age, quantity, price | *See BaseTextField.md* |
| **BaseSelect** | Dropdown with single and multiple selection modes | Country selection, category filters | [BaseSelect.md](BaseSelect.md) |
| **BaseCheckbox** | Checkbox input for boolean selections | Agree to terms, feature toggles | [BaseCheckbox.md](BaseCheckbox.md) |
| **BaseCheckboxGroup** | Group for managing multiple related checkboxes | Feature selection, permissions | [BaseCheckboxGroup.md](BaseCheckboxGroup.md) |
| **BaseRadio** | Radio button for single selections | Gender, plan selection | [BaseRadio.md](BaseRadio.md) |
| **BaseRadioGroup** | Group for managing related radio buttons | Exclusive choice sets | [BaseRadioGroup.md](BaseRadioGroup.md) |
| **BaseSwitch** | Toggle switch for boolean settings | Enable/disable features | [BaseSwitch.md](BaseSwitch.md) |
| **BaseDatePicker** | Date selection with calendar interface | Birth date, event dates | [BaseCalendar.md](BaseCalendar.md) |
| **BaseTimepicker** | Time selection component | Meeting times, appointments | *See BaseCalendar.md* |
| **BaseAutoComplete** | Auto-complete text input with suggestions | Search with suggestions, tags | [BaseAutoComplete.md](BaseAutoComplete.md) |
| **BaseTextEditor** | Rich text editor component | Blog posts, formatted content | *Component docs available* |
| **BaseLocationField** | Location input with map integration | Addresses, delivery locations | *Component docs available* |

### Navigation Components

Components for navigation and user interaction.

| Component | Description | When to Use | Detailed Docs |
| :--- | :--- | :--- | :--- |
| **BaseButton** | Button for triggering actions | Submit, cancel, add new | [BaseButton.md](BaseButton.md) |
| **BaseLink** | Navigation for internal and external links | Page navigation, "learn more" | [BaseLink.md](BaseLink.md) |
| **BaseTabs** | Tabbed interface for organizing related content | Page sections, content categories | [BaseTabs.md](BaseTabs.md) |
| **BaseMenu** | Menu for displaying navigation options | Main navigation, settings | *Component docs available* |
| **BaseNavigation** | Navigation bar for site-wide navigation | Primary navigation | *Component docs available* |
| **BasePagination** | Pagination for navigating multi-page content | Search results, data tables | [BasePagination.md](BasePagination.md) |
| **BaseDrawer** | Sliding drawer for secondary content | Mobile menu, additional options | *Component docs available* |
| **BaseDropdown** | Dropdown menu component | Actions menu, user menu | [BaseDropdown.md](BaseDropdown.md) |

### Display Components

Components for displaying content and information.

| Component | Description | When to Use | Detailed Docs |
| :--- | :--- | :--- | :--- |
| **BaseAlert** | Important messages and notifications | Success messages, warnings, errors | [BaseAlert.md](BaseAlert.md) |
| **BaseAvatar** | User avatar with image and text fallback | User profiles, comment authors | [BaseAvatar.md](BaseAvatar.md) |
| **BaseAvatarGroup** | Groups of user avatars | Team members, participants | [BaseAvatarGroup.md](BaseAvatarGroup.md) |
| **BaseTag** | Compact categories, labels, and status indicators | Status labels, categories | [BaseTag.md](BaseTag.md) |
| **BaseIcon** | Icon component with Material Icons support | UI icons, status indicators | [BaseIcon.md](BaseIcon.md) |
| **BaseTooltip** | Informational tooltip component | Help text, additional details | [BaseTooltip.md](BaseTooltip.md) |
| **BaseTable** | Data table with sorting and pagination | User lists, product inventory | [BaseTable.md](BaseTable.md) |
| **BasePopover** | Popover for contextual information | Additional info, quick actions | [BasePopover.md](BasePopover.md) |
| **BasePopconfirm** | Confirmation popover for critical actions | Delete confirmation, logout | [BasePopconfirm.md](BasePopconfirm.md) |
| **BaseModal** | Modal dialog for focused user interactions | Detailed views, forms | [BaseModal.md](BaseModal.md) |
| **BaseToaster** | Toast notifications for temporary messages | Success/error notifications | [BaseToasterProvider.md](BaseToasterProvider.md) |
| **BaseSkeleton** | Loading placeholder for content | Content loading states | [BaseSkeleton.md](BaseSkeleton.md) |
| **BaseText** | Typography with consistent text styling | Formatted text display | *Component docs available* |
| **BaseProgress** | Progress indicator for operations | Upload progress, loading | [BaseProgress.md](BaseProgress.md) |
| **BaseBlankState** | Empty state for unavailable content | Empty lists, no search results | [BaseBlankState.md](BaseBlankState.md) |
| **BaseImage** | Enhanced image with loading and error states | User images, content images | *Component docs available* |
| **BaseImageGroup** | Groups of related images | Photo galleries, previews | *Component docs available* |
| **BaseRate** | Rating component for user feedback | Product ratings, reviews | *Component docs available* |
| **BaseList** | List for displaying collections of items | Simple data lists | *Component docs available* |
| **BaseCollapse** | Collapsible content for progressive disclosure | FAQ accordion, settings | [BaseCollapse.md](BaseCollapse.md) |
| **BaseCode** | Code display with syntax highlighting | Code examples, configuration | [BaseCode.md](BaseCode.md) |

### Specialized Components

Components for specific use cases or advanced functionality.

| Component | Description | When to Use | Detailed Docs |
| :--- | :--- | :--- | :--- |
| **BaseSpin** | Loading indicator for content loading states | Data fetching, processing | [BaseSpin.md](BaseSpin.md) |
| **BaseCalendar** | Calendar display and date selection | Event calendars, scheduling | [BaseCalendar.md](BaseCalendar.md) |
| **BaseChart** | Data visualization for various chart types | Analytics, reports | [BaseChart.md](BaseChart.md) |
| **BaseTimeline** | Timeline for displaying chronological events | Activity history, processes | *Component docs available* |
| **BaseMenuCustom** | Customizable menu component | Custom navigation patterns | *Component docs available* |
| **BaseMetric** | Numeric metrics display component | KPIs, dashboard statistics | *Component docs available* |
| **BasePageHeader** | Page header with title and actions | Page titles, breadcrumbs | *Component docs available* |

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

## Implementation Examples

### User Registration Form
```jsx
<BaseForm>
  <BaseTextField name="name" label="Full Name" required />
  <BaseTextField name="email" label="Email" type="email" required />
  <BaseTextField name="password" label="Password" type="password" required />
  <BaseSelect name="country" label="Country" options={countryOptions} />
  <BaseCheckbox name="terms" label="I agree to the terms and conditions" required />
  <BaseButton type="primary" htmlType="submit">Register</BaseButton>
</BaseForm>
```

### Product Dashboard
```jsx
<BaseGrid container spacing={3}>
  <BaseGrid item xs={12} md={4}>
    <BaseCard>
      <BaseMetric title="Total Sales" value="$10,258" trend="+12%" />
    </BaseCard>
  </BaseGrid>
  <BaseGrid item xs={12} md={4}>
    <BaseCard>
      <BaseMetric title="Orders" value="356" trend="+8%" />
    </BaseCard>
  </BaseGrid>
  <BaseGrid item xs={12} md={4}>
    <BaseCard>
      <BaseMetric title="Customers" value="1,245" trend="+5%" />
    </BaseCard>
  </BaseGrid>
  <BaseGrid item xs={12}>
    <BaseCard title="Sales Data">
      <BaseChart type="line" data={salesData} />
    </BaseCard>
  </BaseGrid>
</BaseGrid>
```

### User Management Interface
```jsx
<BaseCard title="Users">
  <BaseSpace direction="vertical" size="middle">
    <BaseTextField placeholder="Search users" suffix={<BaseIcon type="search" />} />
    <BaseTable
      columns={userColumns}
      dataSource={userData}
      pagination={{ pageSize: 10 }}
      rowActions={(record) => (
        <BaseSpace>
          <BaseButton type="text" icon={<BaseIcon type="edit" />} onClick={() => editUser(record)}>
            Edit
          </BaseButton>
          <BasePopconfirm 
            title="Are you sure you want to delete this user?" 
            onConfirm={() => deleteUser(record.id)}
          >
            <BaseButton type="text" danger icon={<BaseIcon type="delete" />}>
              Delete
            </BaseButton>
          </BasePopconfirm>
        </BaseSpace>
      )}
    />
  </BaseSpace>
</BaseCard>
```

## Selection Criteria Priority

When selecting components, consider these criteria in order:

1. **Functional Requirements** - What the component needs to do
2. **UI Pattern** - What common UI pattern is being implemented  
3. **Data Type** - What kind of data needs to be displayed or collected
4. **User Interaction** - How users will interact with the component
5. **Context** - Where in the application the component will be used

## Best Practices for AI Implementation

1. **Semantic Selection**: Choose components based on their semantic meaning and function
2. **Consistent Patterns**: Follow established UI patterns for familiar user interactions
3. **Performance Consideration**: Consider performance implications when using complex components
4. **Accessibility**: Ensure all component selections meet accessibility requirements
5. **Responsive Design**: Use responsive layout components like BaseGrid
6. **User Experience**: Create consistent and intuitive user experiences

## Common Selection Patterns

- **Any form implementation** → Always use BaseForm as container
- **Any button elements** → Use BaseButton with appropriate type (primary, default, text, link)
- **Page/external links** → Use BaseLink instead of BaseButton
- **Layout structure** → Use BaseGrid with container and item props
- **Content containers** → Use BaseCard
- **Element spacing** → Use BaseSpace instead of manual margins
- **Status messages** → Use BaseAlert with appropriate type (success, info, warning, error)
- **Loading states** → Use BaseSpin or BaseSkeleton depending on context
- **Confirmation dialogs** → Use BaseModal or BasePopconfirm based on complexity
- **Dropdown menus** → Use BaseDropdown with BaseMenu as overlay

## Additional Documentation Resources

### Component Group Guidelines
For comprehensive guidance on using related components together:

- **[Layout Components Group](group/layout.md)** - Guidelines for using layout components together
- **[Form Components Group](group/form.md)** - Patterns for implementing forms with multiple components
- **[Display Components Group](group/display.md)** - Best practices for content display components
- **[Navigation Components Group](group/navigation.md)** - Guidelines for navigation and interaction patterns
- **[Specialized Components Group](group/specialized.md)** - Advanced component usage and combinations

### Setup and Configuration
- **[Setup Guide](setup.md)** - Installation and configuration instructions for the DigitalTolk UI library

This documentation ensures AI-based code editors can automatically select the most appropriate DigitalTolk UI components for any given scenario while maintaining consistency, accessibility, and best practices. 