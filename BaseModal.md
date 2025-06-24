# BaseModal Component

## Description
The BaseModal component is a dialog box that appears over the current page, requiring user interaction before returning to the main content. It provides a focused way to present information, receive user input, or display notifications.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| autoFocus | Boolean | true | Whether to automatically focus the modal when it opens |
| blockScroll | Boolean | true | Whether to block page scrolling when modal is open |
| closeOnEsc | Boolean | true | Whether the modal can be closed by pressing the Escape key |
| displayDirective | String | 'if' | Vue directive to use for showing/hiding: 'if' or 'show' |
| footerLayout | String | 'row' | Layout direction for footer buttons - 'row' or 'column' |
| maskClosable | Boolean | true | Whether clicking the backdrop closes the modal |
| preset | String | 'card' | Visual preset for the modal. Set to empty string for no styling |
| show | Boolean | false | Controls visibility (when using v-model:show syntax) |
| modelValue | Boolean | false | Controls visibility (when using v-model syntax) |
| to | String, HTMLElement | 'body' | Where to mount the modal in the DOM |
| transformOrigin | String | 'mouse' | Origin of the opening animation: 'mouse' or 'center' |
| trapFocus | Boolean | true | Whether to trap focus within the modal |
| zIndex | Number | undefined | CSS z-index for the modal |
| width | String | '600px' | Width of the modal |
| themeOverrides | Object | {} | Custom theme overrides for the modal |

## Events

| Event | Parameters | Description |
|-------|------------|-------------|
| update:modelValue | (value: boolean) | Emitted when modal visibility changes (v-model) |
| after-enter | - | Emitted after the modal enter transition completes |
| after-leave | - | Emitted after the modal leave transition completes |
| esc | - | Emitted when the Escape key is pressed |
| mask-click | - | Emitted when the backdrop is clicked |
| update-show | (value: boolean) | Emitted when show state changes |

## Slots

| Slot | Description |
|------|-------------|
| default | The main content of the modal |
| header | The header section of the modal (when using card preset) |
| footer | The footer section of the modal (when using card preset) |

## Usage Examples

### Basic Modal

```vue
<template>
  <div>
    <BaseButton @click="showModal = true">
      Open Modal
    </BaseButton>
    
    <BaseModal v-model="showModal">
      <template #header>
        User Information
      </template>
      
      <p>This is the modal content where you can display important information.</p>
      
      <template #footer>
        <BaseButton @click="showModal = false">
          Close
        </BaseButton>
      </template>
    </BaseModal>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { BaseModal, BaseButton } from '@digitaltolk/ui';

const showModal = ref(false);
</script>
```

### Custom Width Modal

```vue
<template>
  <BaseModal 
    v-model="showModal" 
    width="800px"
  >
    <template #header>
      Wide Modal
    </template>
    
    <div>
      This modal is wider than the default 600px.
    </div>
    
    <template #footer>
      <BaseButton @click="showModal = false">Close</BaseButton>
    </template>
  </BaseModal>
</template>
```

### Confirmation Modal

```vue
<template>
  <BaseModal 
    v-model="showConfirmation" 
    width="400px"
    :mask-closable="false"
    :close-on-esc="false"
  >
    <template #header>
      Confirm Deletion
    </template>
    
    <p>Are you sure you want to delete this item? This action cannot be undone.</p>
    
    <template #footer>
      <BaseButton type="default" @click="showConfirmation = false">
        Cancel
      </BaseButton>
      <BaseButton type="error" @click="confirmDelete">
        Delete
      </BaseButton>
    </template>
  </BaseModal>
</template>

<script setup>
import { ref } from 'vue';
import { BaseModal, BaseButton } from '@digitaltolk/ui';

const showConfirmation = ref(false);

const confirmDelete = () => {
  // Perform delete operation
  showConfirmation.value = false;
};
</script>
```

### Modal with Column Footer Layout

```vue
<template>
  <BaseModal 
    v-model="showModal" 
    footerLayout="column"
  >
    <template #header>
      Action Required
    </template>
    
    <p>Please make a selection.</p>
    
    <template #footer>
      <BaseButton type="primary" block>
        Option 1
      </BaseButton>
      <BaseButton type="secondary" block>
        Option 2
      </BaseButton>
      <BaseButton type="default" block @click="showModal = false">
        Cancel
      </BaseButton>
    </template>
  </BaseModal>
</template>
```

### Raw (Unstyled) Modal

```vue
<template>
  <BaseModal 
    v-model="showModal" 
    preset=""
  >
    <div class="custom-modal">
      <h2>Custom Modal</h2>
      <p>This is a modal with custom styling.</p>
      <button @click="showModal = false">Close</button>
    </div>
  </BaseModal>
</template>

<style scoped>
.custom-modal {
  padding: 30px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}
</style>
```

## Behavior Notes

- The modal can be controlled using either `v-model` or `v-model:show` binding
- When using the card preset, the modal includes header, content, and footer sections
- The footer layout can be changed between row (default) and column orientations
- By default, the modal traps focus for better accessibility
- The component prevents page scrolling when the modal is open

## CSS Customization

The component provides styling options:
- Close button appearance customization
- Footer layout options (row or column)
- Custom card header styling with typography controls
- Card footer layout with end justification
- Optional raw mode for complete custom styling

## Related Components
- BaseButton - Typically used in modal footers for actions
- BaseForm - Often used within modals for data input
- BaseCard - Similar container component without the modal behavior
