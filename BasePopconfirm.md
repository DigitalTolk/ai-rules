# BasePopconfirm Component

## Description
The BasePopconfirm component provides a lightweight confirmation dialog that appears when a user performs a potentially destructive action. It displays as a popover with customizable confirmation and cancellation options.

## Props

### Action Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| negativeButtonProps | Object | undefined | Props to apply to the cancel button |
| negativeText | String, null | 'Cancel' | Text for the cancel button (null to hide) |
| positiveButtonProps | Object | undefined | Props to apply to the confirm button |
| positiveText | String, null | 'Confirm' | Text for the confirm button (null to hide) |
| showIcon | Boolean | false | Whether to show an icon in the confirmation |
| modelValue | Boolean | undefined | Controls the visibility of the popconfirm |

### Appearance Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| animated | Boolean | true | Whether to animate the popover |
| arrowPointToCenter | Boolean | false | Whether the arrow points to the center of the trigger |
| arrowClass | String | undefined | Class for the arrow |
| arrowStyle | String, Object | undefined | Style for the arrow |
| arrowWrapperClass | String | undefined | Class for the arrow wrapper |
| arrowWrapperStyle | String, Object | undefined | Style for the arrow wrapper |
| contentClass | String | undefined | Class for the content |
| contentStyle | String, Object | undefined | Style for the content |
| footerClass | String | undefined | Class for the footer |
| footerStyle | String, Object | undefined | Style for the footer |
| headerClass | String | undefined | Class for the header |
| headerStyle | String, Object | undefined | Style for the header |
| placement | String | 'top' | Placement of the popconfirm relative to the trigger |
| raw | Boolean | false | Whether to use raw content without styling |
| scrollable | Boolean | false | Whether the content is scrollable |
| showArrow | Boolean | true | Whether to show the arrow |
| title | String | undefined | Title text of the popconfirm |
| width | Number, String | undefined | Width of the popconfirm |

### Behavior Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| delay | Number | 100 | Delay before showing (in milliseconds) |
| disabled | Boolean | false | Whether the popconfirm is disabled |
| displayDirective | String | 'if' | Vue directive to use for display ('if' or 'show') |
| duration | Number | 100 | Duration of animation (in milliseconds) |
| flip | Boolean | true | Whether to flip placement when there is not enough space |
| keepAliveOnHover | Boolean | true | Whether to keep popconfirm open when hovering it |
| overlap | Boolean | false | Whether to overlap the trigger element |
| to | String, HTMLElement, Boolean | 'body' | Where to mount the popconfirm |
| trigger | String | 'hover' | Trigger type ('hover', 'click', 'focus', 'manual') |
| x | Number | undefined | X coordinate for manual positioning |
| y | Number | undefined | Y coordinate for manual positioning |
| zIndex | Number | undefined | Z-index of the popconfirm |
| themeOverrides | Object | {} | Custom theme overrides for the component |

## Events

| Event | Parameters | Description |
|-------|------------|-------------|
| negative-click | (e: Event) | Emitted when the cancel button is clicked |
| positive-click | (e: Event) | Emitted when the confirm button is clicked |
| update:modelValue | (value: boolean) | Emitted when visibility changes |

## Slots

| Slot | Description |
|------|-------------|
| default | Content of the popconfirm |
| action | Custom action buttons |
| icon | Custom icon |
| trigger | Element that triggers the popconfirm |

## Usage Examples

### Basic Popconfirm

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

### Custom Button Text

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

<script setup>
import { BasePopconfirm, BaseButton } from '@digitaltolk/ui';
</script>
```

### With Custom Icon

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

<script setup>
import { BasePopconfirm, BaseButton, BaseIcon } from '@digitaltolk/ui';
</script>
```

### Using v-model for Control

```vue
<template>
  <div>
    <BaseButton @click="showConfirm = true">
      Show Confirmation
    </BaseButton>
    
    <BasePopconfirm 
      v-model="showConfirm"
      trigger="manual"
      @positive-click="handleConfirm"
      @negative-click="handleCancel"
    >
      <template #trigger>
        <div></div> <!-- Empty trigger when using manual mode -->
      </template>
      
      Do you want to proceed with this action?
    </BasePopconfirm>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { BasePopconfirm, BaseButton } from '@digitaltolk/ui';

const showConfirm = ref(false);

const handleConfirm = () => {
  // Handle confirmation
  showConfirm.value = false;
};

const handleCancel = () => {
  showConfirm.value = false;
};
</script>
```

### Custom Placement

```vue
<template>
  <BasePopconfirm placement="right">
    <template #trigger>
      <BaseButton>Actions</BaseButton>
    </template>
    
    Choose an action for this item.
    
    <template #action>
      <div class="custom-actions">
        <BaseButton size="small" @click="handleEdit">Edit</BaseButton>
        <BaseButton size="small" @click="handleDelete">Delete</BaseButton>
      </div>
    </template>
  </BasePopconfirm>
</template>

<script setup>
import { BasePopconfirm, BaseButton } from '@digitaltolk/ui';

const handleEdit = () => {
  // Edit logic
};

const handleDelete = () => {
  // Delete logic
};
</script>

<style scoped>
.custom-actions {
  display: flex;
  gap: 8px;
}
</style>
```

## Behavior Notes

- The popconfirm uses hover trigger by default, but can be changed to click, focus, or manual
- When using `trigger="manual"`, you should control visibility with v-model
- The component emits events for both positive and negative actions
- Setting either `positiveText` or `negativeText` to null will hide the respective button
- The popconfirm's position adapts to available space when `flip` is true

## Related Components
- BasePopover - Similar component without the confirmation actions
- BaseTooltip - For simple informational tooltips
- BaseModal - For more complex confirmation dialogs
