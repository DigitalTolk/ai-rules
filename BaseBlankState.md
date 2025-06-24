# BaseBlankState Component

## Description
Empty state component for when content is unavailable or no data is present. This component provides a standardized way to display empty states in your application with customizable icon, description, and additional content.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| description | String | "No data found" | Text message to display beneath the icon |
| showDescription | Boolean | true | Whether to show the description text |
| showIcon | Boolean | true | Whether to show the empty state icon |
| size | String | "medium" | Size of the empty state component ("small", "medium", "large", "huge") |
| boxed | Boolean | false | When true, adds a dashed border, background, and padding to create a boxed appearance |
| themeOverrides | Object | {} | Custom theme overrides for component styling |

## Slots

| Slot | Description |
|------|-------------|
| default | Default content slot, typically used for adding action buttons |
| icon | Custom icon slot to replace the default empty state icon |
| extra | Additional content slot below the description |
| description | Custom description content slot |

## Usage Examples

### Basic Usage
```vue
<template>
  <BaseBlankState description="No items found" />
</template>
```

### With Custom Action Button
```vue
<template>
  <BaseBlankState description="Your inbox is empty">
    <BaseButton type="primary">Create new message</BaseButton>
  </BaseBlankState>
</template>
```

### Boxed Style with Custom Size
```vue
<template>
  <BaseBlankState 
    description="No search results" 
    size="large" 
    boxed
  />
</template>
```

### With Custom Icon
```vue
<template>
  <BaseBlankState description="No files uploaded">
    <template #icon>
      <BaseIcon name="file-upload" size="48" />
    </template>
  </BaseBlankState>
</template>
```

### Full Customization Example
```vue
<template>
  <BaseBlankState 
    :show-description="false" 
    :theme-overrides="{ 
      iconSize: '64px',
      iconMargin: '24px auto',
      fontSizeSmall: '16px'
    }"
  >
    <template #description>
      <h3>Nothing to see here</h3>
      <p>Try adjusting your filters or creating a new item.</p>
    </template>
    
    <template #extra>
      <div class="blank-state-actions">
        <BaseButton>Reset filters</BaseButton>
        <BaseButton type="primary">Create new</BaseButton>
      </div>
    </template>
  </BaseBlankState>
</template>
```

## Styling
The component provides a `base-blank-state--boxed` class when the `boxed` prop is true, which adds:
- Light gray background (#fafafa)
- Dashed border (1px, #ccc)
- Rounded corners (6px border-radius)
- Padding (90px)

## Notes
- BaseBlankState is a wrapper around Naive UI's n-empty component
- The component dynamically renders all slots provided to it

## Related Components
- BaseIcon - Can be used in the icon slot for custom icons
- BaseButton - Often used within the default slot for action buttons
- BaseWrapper - Provides base functionality for UI components
