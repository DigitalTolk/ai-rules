# BaseTooltip Component

## Description
The BaseTooltip component provides a way to display informational tooltips that appear when hovering, clicking, or focusing on an element. It's a lightweight overlay perfect for providing additional context, explanations, or help text.

## Props

### Appearance Props
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

### Behavior Props
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

### Placement Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| placement | String | 'top' | Tooltip placement relative to the trigger element. Options: 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-start', 'bottom', 'bottom-end', 'left-start', 'left', 'left-end' |

## Events

| Event | Parameters | Description |
|-------|------------|-------------|
| clickoutside | (e: Event) | Emitted when clicking outside the tooltip |
| update:show | (show: boolean) | Emitted when visibility changes |
| setShow | (show: boolean) | Emitted when show state is set programmatically |
| syncPosition | - | Emitted when position needs to be synchronized |

## Slots

| Slot | Description |
|------|-------------|
| trigger | The element that triggers the tooltip |
| default | Main content of the tooltip |
| header | Content for the tooltip header |
| footer | Content for the tooltip footer |

## Examples

### Basic Tooltip
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

### Tooltip with Custom Content
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

<script setup>
import { BaseTooltip, BaseIcon } from '@digitaltolk/ui';
</script>

<style scoped>
.tooltip-content {
  padding: 4px 0;
}
</style>
```

### Click Triggered Tooltip
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

<script setup>
import { BaseTooltip, BaseButton } from '@digitaltolk/ui';
</script>
```

### Programmatically Controlled Tooltip
```vue
<template>
  <div>
    <BaseTooltip 
      trigger="manual"
      :show="showTooltip"
      @update:show="showTooltip = $event"
    >
      <template #trigger>
        <BaseTextField 
          v-model="value"
          @focus="showTooltip = true"
          @blur="showTooltip = false"
        />
      </template>
      
      Enter your username in this field
    </BaseTooltip>
    
    <BaseButton @click="toggleTooltip">
      Toggle Tooltip
    </BaseButton>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { BaseTooltip, BaseTextField, BaseButton } from '@digitaltolk/ui';

const value = ref('');
const showTooltip = ref(false);

function toggleTooltip() {
  showTooltip.value = !showTooltip.value;
}
</script>
```

## Related Components
- BasePopover - For larger, more interactive content overlays
- BasePopconfirm - For confirmation dialogs
- BaseDropdown - For selection menus
