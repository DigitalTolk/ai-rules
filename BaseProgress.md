# BaseProgress Component

## Description
The BaseProgress component provides visual feedback about the status of ongoing operations. It supports different types of progress indicators, including linear and circular displays, with customizable appearances.

## Props

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
| offsetDegress | Number | 0 | Offset degree for circular progress |
| percentage | Number, Array | 0 | Percentage complete (can be array for multiple segments) |
| processing | Boolean | false | Whether the progress bar shows a processing animation |
| railColor | String, Array | undefined | Color of the unfilled part (can be array for multiple segments) |
| railStyle | String, Array | undefined | Style for the unfilled part of the progress bar |
| showIndicator | Boolean | true | Whether to show the percentage indicator |
| status | String | 'default' | Status of the progress: 'default', 'success', 'error', 'warning', 'info' |
| strokeWidth | Number | 7 | Width of the progress bar stroke |
| type | String | 'line' | Type of progress: 'line' or 'circle' |
| unit | String | '%' | Unit to display after the percentage |
| width | String | undefined | Width of the progress component |
| themeOverrides | Object | {} | Custom theme overrides for the component |

## Slots

| Slot | Description |
|------|-------------|
| default | Custom content to display in the progress indicator |

## Usage Examples

### Basic Line Progress

```vue
<template>
  <BaseProgress :percentage="50" />
</template>

<script setup>
import { BaseProgress } from '@digitaltolk/ui';
</script>
```

### Circle Progress

```vue
<template>
  <BaseProgress 
    type="circle" 
    :percentage="75" 
    :stroke-width="6"
  />
</template>

<script setup>
import { BaseProgress } from '@digitaltolk/ui';
</script>
```

### Progress with Custom Color

```vue
<template>
  <div class="progress-samples">
    <BaseProgress 
      :percentage="30" 
      color="#1890ff" 
      railColor="#e6f7ff"
    />
    
    <BaseProgress 
      :percentage="70" 
      color="#52c41a" 
      railColor="#e6ffec"
    />
    
    <BaseProgress 
      :percentage="90" 
      color="#722ed1" 
      railColor="#f5edff"
    />
  </div>
</template>

<script setup>
import { BaseProgress } from '@digitaltolk/ui';
</script>

<style scoped>
.progress-samples {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
```

### Progress with Status

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

<script setup>
import { BaseProgress } from '@digitaltolk/ui';
</script>

<style scoped>
.progress-samples {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
```

### Processing Progress

```vue
<template>
  <BaseProgress 
    :percentage="60" 
    processing 
  />
</template>

<script setup>
import { BaseProgress } from '@digitaltolk/ui';
</script>
```

### Multiple Segments Progress

```vue
<template>
  <BaseProgress 
    :percentage="[30, 20, 10]" 
    :color="['#1890ff', '#52c41a', '#722ed1']" 
  />
</template>

<script setup>
import { BaseProgress } from '@digitaltolk/ui';
</script>
```

### Custom Indicator Placement

```vue
<template>
  <div class="progress-samples">
    <BaseProgress :percentage="50" indicatorPlacement="outside" />
    <BaseProgress :percentage="50" indicatorPlacement="center" />
    <BaseProgress :percentage="50" indicatorPlacement="end" />
  </div>
</template>

<script setup>
import { BaseProgress } from '@digitaltolk/ui';
</script>

<style scoped>
.progress-samples {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
```

### Custom Unit

```vue
<template>
  <BaseProgress 
    :percentage="3.75" 
    unit="MB" 
  />
</template>

<script setup>
import { BaseProgress } from '@digitaltolk/ui';
</script>
```

### Circle Progress with Gap

```vue
<template>
  <BaseProgress 
    type="circle" 
    :percentage="80" 
    :gap-degree="120" 
    :gap-offset-degree="0"
  />
</template>

<script setup>
import { BaseProgress } from '@digitaltolk/ui';
</script>
```

## Behavior Notes

- The component can display both linear and circular progress indicators
- Linear progress bars can be customized with different heights, colors, and border radii
- Circle progress can be customized with different gaps and offset degrees
- Multiple segments can be displayed using array values for the percentage and color props
- The status prop changes the color scheme based on the status value
- When processing is true, an animation is shown to indicate ongoing activity

## CSS Customization

The component applies specific styling, including:
- Font size customization for the indicator text
- Flexible positioning of the indicator text
- Custom alignment options for different indicator placements

## Related Components
- BaseButton - Often used alongside progress indicators
- BaseLoading - For simple loading states
- BaseSpin - For spinning loading indicators
