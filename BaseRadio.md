# BaseRadio Component

## Description
The BaseRadio component is a selectable input control that allows users to select a single option from a set. It can be used individually or as part of a radio group, and supports both standard radio buttons and button-style variants.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| asRadio | Boolean | false | Whether to display as a button-style radio instead of a standard radio |
| modelValue | String, Number, Boolean | - | Value for v-model binding |
| checked | Boolean | - | Whether the radio is checked |
| defaultChecked | Boolean | false | Whether the radio is checked by default |
| disabled | Boolean | false | Whether the radio is disabled |
| label | String | - | Label text for the radio |
| name | String | - | Name attribute for the radio input |
| size | String | 'medium' | Size of the radio: 'small', 'medium', or 'large' |
| value | String, Number, Boolean | 'on' | Value of the radio when selected |
| btnPadding | String | undefined | Custom padding when displayed as a button |
| btnWidth | String | undefined | Custom width when displayed as a button |
| themeOverrides | Object | {} | Custom theme overrides for the component |

## Events

| Event | Parameters | Description |
|-------|------------|-------------|
| update:modelValue | (value: any) | Emitted when the modelValue changes |
| update:checked | (checked: boolean) | Emitted when the checked state changes |

## Slots

| Slot | Description |
|------|-------------|
| default | Content to display as the radio label |

## Usage Examples

### Basic Radio

```vue
<template>
  <BaseRadio v-model="selectedOption" value="option1">
    Option 1
  </BaseRadio>
</template>

<script setup>
import { ref } from 'vue';
import { BaseRadio } from '@digitaltolk/ui';

const selectedOption = ref(null);
</script>
```

### Radio with Label Prop

```vue
<template>
  <BaseRadio 
    v-model="selectedOption" 
    value="option1" 
    label="Option 1"
  />
</template>

<script setup>
import { ref } from 'vue';
import { BaseRadio } from '@digitaltolk/ui';

const selectedOption = ref(null);
</script>
```

### Disabled Radio

```vue
<template>
  <div>
    <BaseRadio 
      v-model="selectedOption" 
      value="option1" 
      disabled
    >
      Disabled Option
    </BaseRadio>
    
    <BaseRadio 
      v-model="selectedOption" 
      value="option2"
    >
      Enabled Option
    </BaseRadio>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { BaseRadio } from '@digitaltolk/ui';

const selectedOption = ref(null);
</script>
```

### Different Sizes

```vue
<template>
  <div class="radio-sizes">
    <BaseRadio 
      v-model="selectedSize" 
      value="small" 
      size="small"
    >
      Small
    </BaseRadio>
    
    <BaseRadio 
      v-model="selectedSize" 
      value="medium" 
      size="medium"
    >
      Medium
    </BaseRadio>
    
    <BaseRadio 
      v-model="selectedSize" 
      value="large" 
      size="large"
    >
      Large
    </BaseRadio>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { BaseRadio } from '@digitaltolk/ui';

const selectedSize = ref('medium');
</script>

<style scoped>
.radio-sizes {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
```

### Button-Style Radio

```vue
<template>
  <div class="radio-buttons">
    <BaseRadio 
      v-model="selectedOption" 
      value="option1" 
      asRadio
    >
      Option 1
    </BaseRadio>
    
    <BaseRadio 
      v-model="selectedOption" 
      value="option2" 
      asRadio
    >
      Option 2
    </BaseRadio>
    
    <BaseRadio 
      v-model="selectedOption" 
      value="option3" 
      asRadio
      disabled
    >
      Option 3 (Disabled)
    </BaseRadio>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { BaseRadio } from '@digitaltolk/ui';

const selectedOption = ref('option1');
</script>

<style scoped>
.radio-buttons {
  display: flex;
  gap: 8px;
}
</style>
```

### Custom Width Button-Style Radio

```vue
<template>
  <div class="radio-buttons">
    <BaseRadio 
      v-model="selectedOption" 
      value="option1" 
      asRadio
      btnWidth="120px"
      btnPadding="8px 16px"
    >
      Option 1
    </BaseRadio>
    
    <BaseRadio 
      v-model="selectedOption" 
      value="option2" 
      asRadio
      btnWidth="120px"
      btnPadding="8px 16px"
    >
      Option 2
    </BaseRadio>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { BaseRadio } from '@digitaltolk/ui';

const selectedOption = ref('option1');
</script>

<style scoped>
.radio-buttons {
  display: flex;
  gap: 8px;
}
</style>
```

## Behavior Notes

- The component can be used in both standard radio button and button-style modes with the `asRadio` prop
- It receives its size from parent form or radio group components if available
- It similarly inherits disabled state from parent components
- The component supports two-way binding with v-model
- When used in a radio group, all radios with the same v-model will work together
- Button-style radios can have custom widths and padding with the btnWidth and btnPadding props

## CSS Customization

The component comes with extensive styling options:
- Custom sizing for different radio sizes
- Active and hover state customization
- Focus state with shadow effect
- Different styling for button variant
- Support for vertical and horizontal radio groups
- Custom dot sizing for different radio sizes

## Related Components
- BaseRadioGroup - For managing multiple related radio buttons
- BaseCheckbox - When users need to select multiple options
- BaseSelect - For selecting from a longer list of options
