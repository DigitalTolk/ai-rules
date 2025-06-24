# BaseDropdown Component

## Description
BaseDropdown is a versatile dropdown menu component that wraps Naive UI's n-dropdown. It provides a customizable interface for displaying hierarchical options that can be triggered by various user interactions. The component supports navigation, custom rendering, and complex nested structures.

## Props

### Core Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| options | Array | [] | Array of options to display in the dropdown |
| trigger | String | "hover" | How the dropdown is triggered: "hover", "click", "focus", or "manual" |
| placement | String | "bottom-start" | Position of the dropdown relative to its trigger element |
| size | String | "medium" | Size of the dropdown: "small", "medium", "large", or "huge" |

### Data Structure Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| childrenField | String | "children" | Field name for nested options |
| keyField | String | "key" | Field name for option keys |
| labelField | String | "label" | Field name for option labels |

### Appearance Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| animated | Boolean | true | Whether to animate the dropdown opening/closing |
| inverted | Boolean | false | Whether to use inverted styling |
| overlap | Boolean | false | Whether the dropdown should overlap the trigger element |
| showArrow | Boolean | false | Whether to show an arrow pointing to the trigger |
| width | String/Number | undefined | Width of the dropdown menu |
| themeOverrides | Object | {} | Custom theme overrides for styling |

### Positioning Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| to | String/Object/Boolean | "body" | Where to mount the dropdown in the DOM |
| x | Number | undefined | X coordinate for manual positioning |
| y | Number | undefined | Y coordinate for manual positioning |
| zIndex | Number | undefined | Z-index for the dropdown |

### Behavior Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| keyboard | Boolean | true | Whether to enable keyboard navigation |
| nodeProps | Object | undefined | Props for dropdown nodes |
| menuProps | Object | undefined | Props for the dropdown menu |

### Rendering Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| renderIcon | Object | undefined | Custom renderer for option icons |
| renderLabel | Object | undefined | Custom renderer for option labels |
| renderOption | Object | undefined | Custom renderer for entire options |

## Events

| Event | Parameters | Description |
|-------|------------|-------------|
| click:outside | (event: Event) | Emitted when clicking outside the dropdown |
| select | (key: string/number, event: Event) | Emitted when an option is selected |

## Slots

| Slot | Description |
|------|-------------|
| default | Trigger element that activates the dropdown |
| dropdown | Custom dropdown content (using BaseDropdownItem components) |
| [dynamic] | All slots are dynamically passed to the underlying n-dropdown component |

## Examples

### Basic Dropdown
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

### Dropdown with Nested Options
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
        key: 'item2-2',
        children: [
          {
            label: 'Level 3 Item 1',
            key: 'item2-2-1'
          }
        ]
      }
    ]
  },
  {
    label: 'Level 1 Item 3',
    key: 'item3'
  }
]);
</script>
```

### Click Trigger Dropdown
```vue
<template>
  <BaseDropdown 
    :options="options" 
    trigger="click"
    @select="handleSelect"
  >
    <BaseButton>Click to Open</BaseButton>
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
  }
]);

const handleSelect = (key, event) => {
  console.log('Selected:', key);
};
</script>
```

### Using Dropdown Items
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
      
      <BaseDropdownItem key="item3" disabled>
        <template #icon>
          <BaseIcon>lock</BaseIcon>
        </template>
        Restricted Area
      </BaseDropdownItem>
    </template>
  </BaseDropdown>
</template>

<script setup>
import { BaseDropdown, BaseDropdownItem, BaseButton, BaseIcon } from '@digitaltolk/ui';

const handleItem1Click = () => {
  console.log('Home clicked');
};
</script>
```

### Dropdown with Different Placement
```vue
<template>
  <BaseDropdown 
    :options="options" 
    placement="top-start"
  >
    <BaseButton>Open Above</BaseButton>
  </BaseDropdown>
</template>
```

## Best Practices

1. **Trigger Element**
   - Use a clear trigger element that indicates a dropdown is available
   - Consider using a button with a dropdown icon for clarity
   - Ensure the trigger element has sufficient contrast and is easily clickable

2. **Option Structure**
   - Keep dropdown options concise and clear
   - Group related options together
   - Use icons to enhance visual recognition
   - Limit nesting to 2-3 levels for better usability

3. **Interaction Design**
   - Choose the appropriate trigger type for your use case:
     - Use "hover" for navigation menus
     - Use "click" for action menus
     - Use "focus" for form elements
   - Ensure proper keyboard navigation support
   - Position the dropdown where users expect it (typically below the trigger)

4. **Accessibility**
   - Ensure dropdown is keyboard navigable
   - Use ARIA attributes appropriately
   - Maintain sufficient color contrast
   - Test with screen readers

## Common Patterns

### Navigation Menu
```vue
<template>
  <BaseDropdown>
    <BaseButton>
      Navigation
      <BaseIcon>expand_more</BaseIcon>
    </BaseButton>
    
    <template #dropdown>
      <BaseDropdownItem key="home" to="/">Home</BaseDropdownItem>
      <BaseDropdownItem key="products" to="/products">Products</BaseDropdownItem>
      <BaseDropdownItem key="about" to="/about">About</BaseDropdownItem>
      <BaseDropdownItem key="contact" to="/contact">Contact</BaseDropdownItem>
    </template>
  </BaseDropdown>
</template>
```

### Action Menu
```vue
<template>
  <BaseDropdown trigger="click">
    <BaseButton>
      Actions
      <BaseIcon>more_vert</BaseIcon>
    </BaseButton>
    
    <template #dropdown>
      <BaseDropdownItem key="edit" @click="handleEdit">
        <template #icon><BaseIcon>edit</BaseIcon></template>
        Edit
      </BaseDropdownItem>
      <BaseDropdownItem key="duplicate" @click="handleDuplicate">
        <template #icon><BaseIcon>content_copy</BaseIcon></template>
        Duplicate
      </BaseDropdownItem>
      <BaseDropdownItem key="delete" @click="handleDelete">
        <template #icon><BaseIcon>delete</BaseIcon></template>
        Delete
      </BaseDropdownItem>
    </template>
  </BaseDropdown>
</template>
```

### User Menu
```vue
<template>
  <BaseDropdown trigger="click">
    <BaseAvatar src="/path/to/avatar.jpg" />
    
    <template #dropdown>
      <BaseDropdownItem key="profile" to="/profile">
        <template #icon><BaseIcon>person</BaseIcon></template>
        Profile
      </BaseDropdownItem>
      <BaseDropdownItem key="settings" to="/settings">
        <template #icon><BaseIcon>settings</BaseIcon></template>
        Settings
      </BaseDropdownItem>
      <BaseDropdownItem key="logout" @click="handleLogout">
        <template #icon><BaseIcon>logout</BaseIcon></template>
        Logout
      </BaseDropdownItem>
    </template>
  </BaseDropdown>
</template>
```

## Implementation Notes

- The component handles complex nested dropdown structures
- It supports both options array and slot-based dropdown items
- When using the `to` prop on dropdown items, it supports both direct URLs and vue-router navigation
- The dropdown menu has a minimum width of 190px by default
- Custom styling can be applied using the `themeOverrides` prop
- The component exposes the underlying dropdown methods through a ref
