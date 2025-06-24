# BasePopover Component

## Description
The BasePopover component displays floating content when a user interacts with a trigger element. It's useful for displaying additional information, contextual menus, or custom UI elements without taking up permanent screen space.

## Props

### Appearance Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| animated | Boolean | true | Whether the popover should animate when showing/hiding |
| arrowPointToCenter | Boolean | false | Whether the arrow should point to the center of the trigger |
| arrowClass | String | undefined | Custom class for the arrow |
| arrowStyle | String, Object | undefined | Custom style for the arrow |
| arrowWrapperClass | String | undefined | Custom class for the arrow wrapper |
| arrowWrapperStyle | String, Object | undefined | Custom style for the arrow wrapper |
| contentClass | String | undefined | Custom class for the content |
| contentStyle | String, Object | undefined | Custom style for the content |
| footerClass | String | undefined | Custom class for the footer |
| footerStyle | String, Object | undefined | Custom style for the footer |
| headerClass | String | undefined | Custom class for the header |
| headerStyle | String, Object | undefined | Custom style for the header |
| placement | String | 'top' | Placement of the popover relative to the trigger |
| raw | Boolean | false | Whether to use raw content without default styling |
| scrollable | Boolean | false | Whether the content is scrollable |
| showArrow | Boolean | true | Whether to show the arrow |
| title | String | undefined | Title text for the popover |
| width | Number, String | undefined | Width of the popover |

### Behavior Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| delay | Number | 100 | Delay before showing the popover (milliseconds) |
| disabled | Boolean | false | Whether the popover is disabled |
| displayDirective | String | 'if' | Vue directive to use for display ('if' or 'show') |
| duration | Number | 100 | Duration of the animation (milliseconds) |
| flip | Boolean | true | Whether to flip placement when there's not enough space |
| keepAliveOnHover | Boolean | true | Whether to keep popover open when hovering it |
| overlap | Boolean | false | Whether the popover should overlap the trigger |
| show | Boolean | undefined | Controls visibility of the popover |
| to | String, HTMLElement, Boolean | 'body' | Where to mount the popover |
| trigger | String | 'hover' | Trigger type: 'hover', 'click', 'focus', or 'manual' |
| x | Number | undefined | X coordinate for manual positioning |
| y | Number | undefined | Y coordinate for manual positioning |
| zIndex | Number | undefined | Z-index of the popover |
| themeOverrides | Object | {} | Custom theme overrides |

## Events

| Event | Parameters | Description |
|-------|------------|-------------|
| clickoutside | (e: Event) | Emitted when clicking outside the popover |
| update:show | (show: boolean) | Emitted when visibility changes |
| setShow | (show: boolean) | Emitted when show state is set programmatically |
| syncPosition | - | Emitted when position needs to be synchronized |

## Slots

| Slot | Description |
|------|-------------|
| trigger | The element that triggers the popover |
| default | Main content of the popover |
| header | Content for the popover header |
| footer | Content for the popover footer |

## Usage Examples

### Basic Popover

```vue
<template>
  <BasePopover>
    <template #trigger>
      <BaseButton>Hover Me</BaseButton>
    </template>
    
    This is a simple popover with default settings.
  </BasePopover>
</template>

<script setup>
import { BasePopover, BaseButton } from '@digitaltolk/ui';
</script>
```

### Popover with Title and Custom Placement

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

<script setup>
import { BasePopover, BaseButton } from '@digitaltolk/ui';
</script>
```

### Click Triggered Popover

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

<script setup>
import { BasePopover, BaseButton } from '@digitaltolk/ui';
</script>
```

### Popover with Header and Footer

```vue
<template>
  <BasePopover width="300">
    <template #trigger>
      <BaseButton>More Details</BaseButton>
    </template>
    
    <template #header>
      <h3>Product Information</h3>
    </template>
    
    <div>
      <p>This product is available in multiple colors and sizes.</p>
      <p>Made with high-quality materials for durability.</p>
    </div>
    
    <template #footer>
      <div style="display: flex; justify-content: flex-end;">
        <BaseButton size="small">View Details</BaseButton>
      </div>
    </template>
  </BasePopover>
</template>

<script setup>
import { BasePopover, BaseButton } from '@digitaltolk/ui';
</script>
```

### Controlled Popover

```vue
<template>
  <div>
    <BaseButton @click="showPopover = !showPopover">
      Toggle Popover
    </BaseButton>
    
    <BasePopover 
      trigger="manual"
      :show="showPopover"
      @update:show="showPopover = $event"
    >
      <template #trigger>
        <div style="display: inline-block; margin-left: 10px;">
          Target Element
        </div>
      </template>
      
      This popover is controlled programmatically.
    </BasePopover>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { BasePopover, BaseButton } from '@digitaltolk/ui';

const showPopover = ref(false);
</script>
```

### Custom Styled Popover

```vue
<template>
  <BasePopover
    contentClass="custom-popover-content"
    headerClass="custom-popover-header"
    footerClass="custom-popover-footer"
    arrowClass="custom-popover-arrow"
  >
    <template #trigger>
      <BaseButton>Custom Styled</BaseButton>
    </template>
    
    <template #header>
      Custom Header
    </template>
    
    Content with custom styling.
    
    <template #footer>
      Footer with custom styling
    </template>
  </BasePopover>
</template>

<script setup>
import { BasePopover, BaseButton } from '@digitaltolk/ui';
</script>

<style scoped>
.custom-popover-content {
  padding: 16px;
  background: #f8f9fa;
}

.custom-popover-header {
  border-bottom: 1px solid #e9ecef;
  padding-bottom: 8px;
  font-weight: bold;
}

.custom-popover-footer {
  border-top: 1px solid #e9ecef;
  padding-top: 8px;
  margin-top: 8px;
}

.custom-popover-arrow {
  color: #f8f9fa;
}
</style>
```

## Behavior Notes

- The default trigger is 'hover', which shows the popover when the mouse hovers over the trigger
- When using 'click' trigger, the popover toggles visibility when the trigger is clicked
- With 'manual' trigger, you must control the popover visibility using the `show` prop
- The popover uses the 'body' element as the default mounting point, ensuring it's not constrained by parent elements
- When `keepAliveOnHover` is true, the popover stays open when the mouse moves from the trigger to the popover content

## Related Components
- BaseTooltip - Simpler variant for displaying plain text tips
- BasePopconfirm - Similar component with built-in confirmation actions
- BaseDropdown - For dropdown menus
