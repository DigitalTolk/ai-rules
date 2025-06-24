# BaseSelect Component

## Description
The BaseSelect component provides a dropdown selection interface that allows users to choose one or multiple options from a list. It supports filtering, custom rendering, and various display options to handle complex selection scenarios.

## Props

### Core Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| consistentMenuWidth | Boolean | true | Whether the dropdown menu width matches the select width |
| childrenField | String | 'children' | Field name for nested options |
| clearable | Boolean | false | Whether the selection can be cleared |
| clearFilterAfterSelect | Boolean | true | Whether to clear the filter input after selection |
| disabled | Boolean | false | Whether the select is disabled |
| filterable | Boolean | false | Whether the options can be filtered by typing |
| icon | String | undefined | Icon to display in the select |
| loading | Boolean | false | Whether the select is in loading state |
| multiple | Boolean | false | Whether multiple options can be selected |
| options | Array | [] | Options for the select dropdown |
| placeholder | String | undefined | Placeholder text when nothing is selected |
| showArrow | Boolean | true | Whether to show the dropdown arrow |
| showCheckmark | Boolean | true | Whether to show checkmarks for selected options |
| showCheckbox | Boolean | false | Whether to show checkboxes for options |
| size | String | 'medium' | Size of the select: 'tiny', 'small', 'medium', 'large' |
| status | String | undefined | Validation status: 'success', 'warning', 'error' |
| modelValue | Array, String, Number, null | undefined | The currently selected value(s) |
| virtualScroll | Boolean | true | Whether to use virtual scrolling for large option lists |
| useCustomDropdown | Boolean | false | Whether to use a custom dropdown component |

### Advanced Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| defaultValue | Array | null | Default selected value when component mounts |
| ellipsisTagPopoverProps | Object | undefined | Props for the popover shown when tags are ellipsed |
| fallbackOption | Boolean, Function | undefined | Behavior for handling missing options |
| filter | Function | undefined | Custom filter function |
| ignoreComposition | Boolean | true | Whether to ignore IME composition |
| inputProps | Object | undefined | Props for the input element |
| keyboard | Boolean | true | Whether keyboard navigation is enabled |
| labelField | String | 'label' | Field name for option labels |
| maxTagCount | Number, String | undefined | Maximum number of tags to display before truncating |
| menuProps | Object | undefined | Props for the dropdown menu |
| nodeProps | Object | undefined | Props for option nodes |
| placement | String | 'bottom-start' | Placement of the dropdown menu |
| remote | Boolean | false | Whether options are loaded remotely |
| renderLabel | Function | undefined | Custom function for rendering labels |
| renderOption | Function | undefined | Custom function for rendering options |
| renderTag | Function | undefined | Custom function for rendering tags |
| resetMenuOnOptionsChange | Boolean | true | Whether to reset menu state when options change |
| show | Boolean | undefined | Controls visibility of the dropdown menu |
| showOnFocus | Boolean | false | Whether to show dropdown on focus |
| tag | Boolean | false | Whether to display selections as tags |
| to | String, HTMLElement, Boolean | 'body' | Where to mount the dropdown menu |
| valueField | String | 'value' | Field name for option values |
| themeOverrides | Object | {} | Custom theme overrides |

## Events

| Event | Parameters | Description |
|-------|------------|-------------|
| update:value | (value: any) | Emitted when selection changes |
| update:ModelValue | (value: any) | Emitted when selection changes for v-model binding |
| clear | - | Emitted when selection is cleared |
| create | (option: Object) | Emitted when a new option is created |
| scroll | (e: Event) | Emitted when dropdown is scrolled |
| update:show | (show: boolean) | Emitted when dropdown visibility changes |
| focus | (e: FocusEvent) | Emitted when select is focused |
| blur | (e: FocusEvent) | Emitted when select loses focus |

## Slots

| Slot | Description |
|------|-------------|
| default | Slot for option content when using the custom dropdown |
| header | Content to display at the top of the dropdown menu |
| action | Additional actions at the bottom of the dropdown menu |
| empty | Content to display when no options match the filter |
| arrow | Custom arrow icon |
| prefix | Content to display before the select input |
| options | Custom options rendering |

## Usage Examples

### Basic Select

```vue
<template>
  <BaseSelect 
    v-model="selectedOption" 
    :options="options" 
    placeholder="Select an option"
  />
</template>

<script setup>
import { ref } from 'vue';
import { BaseSelect } from '@digitaltolk/ui';

const selectedOption = ref(null);
const options = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' }
];
</script>
```

### Multiple Select

```vue
<template>
  <BaseSelect 
    v-model="selectedOptions" 
    :options="options" 
    multiple
    placeholder="Select multiple options"
  />
</template>

<script setup>
import { ref } from 'vue';
import { BaseSelect } from '@digitaltolk/ui';

const selectedOptions = ref([]);
const options = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' }
];
</script>
```

### Filterable Select

```vue
<template>
  <BaseSelect 
    v-model="selectedOption" 
    :options="options" 
    filterable
    placeholder="Type to filter options"
  />
</template>

<script setup>
import { ref } from 'vue';
import { BaseSelect } from '@digitaltolk/ui';

const selectedOption = ref(null);
const options = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cherry', value: 'cherry' },
  { label: 'Durian', value: 'durian' },
  { label: 'Elderberry', value: 'elderberry' },
];
</script>
```

### With Checkboxes

```vue
<template>
  <BaseSelect 
    v-model="selectedOptions" 
    :options="options" 
    multiple
    showCheckbox
    placeholder="Select with checkboxes"
  />
</template>

<script setup>
import { ref } from 'vue';
import { BaseSelect } from '@digitaltolk/ui';

const selectedOptions = ref([]);
const options = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' }
];
</script>
```

### With Custom Icon

```vue
<template>
  <BaseSelect 
    v-model="selectedOption" 
    :options="options" 
    icon="search"
    placeholder="Select with icon"
  />
</template>

<script setup>
import { ref } from 'vue';
import { BaseSelect } from '@digitaltolk/ui';

const selectedOption = ref(null);
const options = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' }
];
</script>
```

### Grouped Options

```vue
<template>
  <BaseSelect 
    v-model="selectedOption" 
    :options="groupedOptions" 
    placeholder="Select from groups"
  />
</template>

<script setup>
import { ref } from 'vue';
import { BaseSelect } from '@digitaltolk/ui';

const selectedOption = ref(null);
const groupedOptions = [
  {
    label: 'Fruits',
    type: 'group',
    children: [
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana' },
      { label: 'Cherry', value: 'cherry' }
    ]
  },
  {
    label: 'Vegetables',
    type: 'group',
    children: [
      { label: 'Carrot', value: 'carrot' },
      { label: 'Broccoli', value: 'broccoli' },
      { label: 'Spinach', value: 'spinach' }
    ]
  }
];
</script>
```

### With Custom Option Rendering

```vue
<template>
  <BaseSelect 
    v-model="selectedOption" 
    :options="userOptions" 
    placeholder="Select a user"
  >
    <template #options>
      <BaseSelectOption 
        v-for="user in userOptions" 
        :key="user.value" 
        :value="user.value"
      >
        <div style="display: flex; align-items: center; gap: 8px;">
          <BaseAvatar size="small" :src="user.avatar" />
          <div>
            <div>{{ user.label }}</div>
            <div style="font-size: 12px; color: #999;">{{ user.email }}</div>
          </div>
        </div>
      </BaseSelectOption>
    </template>
  </BaseSelect>
</template>

<script setup>
import { ref } from 'vue';
import { BaseSelect, BaseSelectOption, BaseAvatar } from '@digitaltolk/ui';

const selectedOption = ref(null);
const userOptions = [
  { 
    label: 'John Doe', 
    value: 'john', 
    avatar: 'https://example.com/john.jpg',
    email: 'john@example.com'
  },
  { 
    label: 'Jane Smith', 
    value: 'jane',
    avatar: 'https://example.com/jane.jpg',
    email: 'jane@example.com'
  }
];
</script>
```

## Behavior Notes

- The component supports both single and multiple selection modes
- When `multiple` is true, the selected values are displayed as tags
- The dropdown can be filtered with the `filterable` prop
- Virtual scrolling is enabled by default for performance with large option lists
- The component integrates with form validation status
- When using `showCheckbox`, checkbox UI is displayed for options
- Custom rendering is supported for both options and tags
- The component can be configured to use either a native select dropdown or a custom implementation

## CSS Customization

The component applies specific styling, including:
- Support for icon prefixes on the left side
- Tag styling with custom content
- Selected option styling
- Custom checkbox styling when `showCheckbox` is enabled
- Various sizes to match the design system

## Related Components
- BaseSelectOption - Used to define options when using the slots API
- BaseRadioGroup - Alternative for a smaller set of mutually exclusive options
- BaseCheckboxGroup - When users need to select multiple visible options
- BaseCombobox - For more complex input with autocomplete functionality
