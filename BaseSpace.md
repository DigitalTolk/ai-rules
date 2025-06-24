# BaseSpace Component

## Description
Utility component for creating consistent spacing between elements. BaseSpace is a wrapper around the n-space component, providing flexible layout control with various alignment and spacing options.

## Props

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

## Usage Examples

### Basic Usage
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

### Vertical Spacing
```vue
<template>
  <BaseSpace vertical>
    <BaseTextField label="Name" />
    <BaseTextField label="Email" />
    <BaseTextField label="Phone" />
  </BaseSpace>
</template>
```

### Customizing Spacing Size
```vue
<template>
  <BaseSpace size="large">
    <BaseButton>Large Space</BaseButton>
    <BaseButton>Between Items</BaseButton>
  </BaseSpace>
</template>
```

### Alignment and Justification
```vue
<template>
  <BaseSpace justify="space-between" horizontalAlign="center">
    <BaseButton>Left</BaseButton>
    <BaseButton>Center</BaseButton>
    <BaseButton>Right</BaseButton>
  </BaseSpace>
</template>
```

### Inline Space
```vue
<template>
  <p>This is an <BaseSpace inline size="small"><BaseTag>example</BaseTag><BaseTag>of inline</BaseTag><BaseTag>spacing</BaseTag></BaseSpace> between elements.</p>
</template>
```

## Slots

| Slot | Description |
|------|-------------|
| default | Content to be spaced according to the props |

## Attributes

The component forwards all additional attributes to the underlying n-space component using v-bind="$attrs".

## Implementation Details

The BaseSpace component wraps n-space while providing consistent styling in accordance with the DigitalTolk design system. It handles alignment differently based on whether the orientation is vertical or horizontal through conditional styling.

## Related Components
- BaseGrid - For more complex grid-based layouts
- BaseRow/BaseColumn - For row and column-based layouts

