# BaseTag Component

## Description
A compact component for displaying categories, labels, and status indicators. BaseTag is a wrapper around the n-tag component, providing customizable appearance and interactive options.

## Props

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

## Events

| Event | Parameters | Description |
|-------|------------|-------------|
| close | (event) | Triggered when the close button is clicked |
| update:modelValue | (value) | Triggered when the checked state changes |

## Slots

| Slot | Description |
|------|-------------|
| default | Main content of the tag |
| avatar | Avatar content displayed before the main content |
| icon | Icon content |
| suffix | Additional content displayed after the main content |

## Usage Examples

### Basic Usage
```vue
<template>
  <BaseTag>Tag Label</BaseTag>
</template>

<script setup>
import { BaseTag } from '@digitaltolk/ui';
</script>
```

### Different Types
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

### With Icon
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

### Closable Tags
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

<script setup>
import { ref } from 'vue';
import { BaseTag } from '@digitaltolk/ui';

const tags = ref(['JavaScript', 'Vue', 'React']);

const removeTag = (tag) => {
  tags.value = tags.value.filter(t => t !== tag);
};
</script>
```

### Checkable Tags
```vue
<template>
  <BaseTag 
    v-for="category in categories" 
    :key="category.name"
    checkable
    v-model="category.checked"
  >
    {{ category.name }}
  </BaseTag>
</template>

<script setup>
import { ref } from 'vue';
import { BaseTag } from '@digitaltolk/ui';

const categories = ref([
  { name: 'Technology', checked: false },
  { name: 'Design', checked: true },
  { name: 'Business', checked: false }
]);
</script>
```

### Different Sizes
```vue
<template>
  <BaseSpace>
    <BaseTag size="small">Small</BaseTag>
    <BaseTag size="medium">Medium</BaseTag>
    <BaseTag size="large">Large</BaseTag>
  </BaseSpace>
</template>
```

### Chips Style
```vue
<template>
  <BaseTag chips type="primary">Chip Style</BaseTag>
</template>
```

### Rounded Tags
```vue
<template>
  <BaseTag round>Rounded Tag</BaseTag>
</template>
```

### With Avatar
```vue
<template>
  <BaseTag>
    <template #avatar>
      <BaseAvatar size="small" src="/path/to/avatar.jpg" />
    </template>
    User Tag
  </BaseTag>
</template>
```

### Disabled Tags
```vue
<template>
  <BaseTag disabled>Disabled Tag</BaseTag>
</template>
```

## Styling

The BaseTag component includes custom styling for various tag types, with special handling for the "chips" variant. The component supports strong styling for more emphasis and custom color overrides for fine-grained control.

## Implementation Details

The BaseTag component wraps n-tag while providing consistent styling in accordance with the DigitalTolk design system. It includes custom CSS classes like n-tag-chips and tagType that modify the appearance based on props.

## Related Components
- BaseButton - For action buttons
- BaseBadge - For notification indicators
- BaseStatus - For status indicators
