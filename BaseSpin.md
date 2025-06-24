# BaseSpin Component

## Description
A loading indicator component for content loading states. BaseSpin is a wrapper around the n-spin component, providing flexible loading animation with customizable appearance.

## Props

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

## Slots

| Slot | Description |
|------|-------------|
| default | Content that will be blurred/disabled while loading |
| description | Custom description content (overrides description prop) |
| icon | Custom spinner icon (defaults to BaseIcon with progress_activity) |

## Usage Examples

### Basic Usage
```vue
<template>
  <BaseSpin />
</template>

<script setup>
import { BaseSpin } from '@digitaltolk/ui';
</script>
```

### With Custom Size and Color
```vue
<template>
  <BaseSpin :size="60" stroke="#1976d2" />
</template>
```

### With Description
```vue
<template>
  <BaseSpin description="Loading data..." />
</template>
```

### Loading Content
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

### Custom Spinner Icon
```vue
<template>
  <BaseSpin>
    <template #icon>
      <BaseIcon>refresh</BaseIcon>
    </template>
  </BaseSpin>
</template>
```

### With Delayed Display
```vue
<template>
  <BaseSpin :delay="300" />
</template>
```

## Attributes

The component forwards all additional attributes to the underlying n-spin component using v-bind="$attrs".

## Implementation Details

The BaseSpin component wraps n-spin while providing consistent styling in accordance with the DigitalTolk design system. It uses BaseIcon with the "progress_activity" material icon as the default spinner but allows customization through slots.

## Related Components
- BaseSkeleton - Alternative loading placeholder for content
- BaseBlankState - Empty state when no content is available



