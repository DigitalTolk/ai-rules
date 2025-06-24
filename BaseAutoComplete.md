# BaseAutoComplete Component

## Description
BaseAutoComplete is an input component that provides suggestions as the user types. It wraps Naive UI's n-auto-complete component and offers a customizable interface for creating searchable dropdown inputs with various options and behaviors.

## Props

### Core Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| modelValue | String/Number | "" | The current value of the input |
| options | Array | [] | Array of options to display in the dropdown |
| placeholder | String | - | Placeholder text for the input |
| disabled | Boolean | false | Whether the input is disabled |
| loading | Boolean | false | Whether to show a loading indicator |

### Behavior Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| blurAfterSelect | Boolean | false | Whether to blur the input after selecting an option |
| clearAfterSelect | Boolean | false | Whether to clear the input after selecting an option |
| clearable | Boolean | false | Whether the input can be cleared with a button |
| defaultValue | String | null | Default value for the input |
| getShow | - | false | Custom function to control when to show the dropdown |
| showEmpty | Boolean | false | Whether to show the dropdown when there are no options |

### Appearance Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| size | 'small' \| 'medium' \| 'large' | 'medium' | Size of the input |
| status | 'success' \| 'warning' \| 'error' | - | Status style of the input |
| placement | String | 'bottom-start' | Position of the dropdown relative to the input |
| themeOverrides | Object | {} | Custom theme overrides for styling |

### Advanced Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| inputProps | Object | - | Props to pass to the underlying input element |
| menuProps | Object | - | Props to pass to the dropdown menu |

## Events

| Event | Parameters | Description |
|-------|------------|-------------|
| update:modelValue | (value: string/number) | Emitted when the input value changes |
| blur | (event: FocusEvent) | Emitted when the input loses focus |
| focus | (event: FocusEvent) | Emitted when the input gains focus |
| select | (value: string/number) | Emitted when an option is selected |

## Slots

| Slot | Description |
|------|-------------|
| [dynamic] | All slots are dynamically passed to the underlying n-auto-complete component |

## Examples

### Basic Usage
```vue
<template>
  <BaseAutoComplete
    v-model="searchQuery"
    :options="options"
    placeholder="Search..."
    @select="handleSelect"
  />
</template>

<script setup>
import { ref } from 'vue';
import { BaseAutoComplete } from '@digitaltolk/ui';

const searchQuery = ref('');
const options = ref([
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Orange', value: 'orange' },
  { label: 'Pineapple', value: 'pineapple' },
  { label: 'Mango', value: 'mango' }
]);

const handleSelect = (value) => {
  console.log('Selected:', value);
};
</script>
```

### With Custom Filtering
```vue
<template>
  <BaseAutoComplete
    v-model="searchQuery"
    :options="filteredOptions"
    placeholder="Type to search..."
    clearable
  />
</template>

<script setup>
import { ref, computed } from 'vue';
import { BaseAutoComplete } from '@digitaltolk/ui';

const searchQuery = ref('');
const allOptions = [
  { label: 'JavaScript', value: 'js' },
  { label: 'TypeScript', value: 'ts' },
  { label: 'Python', value: 'py' },
  { label: 'Java', value: 'java' },
  { label: 'C#', value: 'cs' },
  { label: 'PHP', value: 'php' },
  { label: 'Ruby', value: 'rb' }
];

const filteredOptions = computed(() => {
  if (!searchQuery.value) return [];
  
  return allOptions.filter(option => 
    option.label.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});
</script>
```

### With Custom Rendering
```vue
<template>
  <BaseAutoComplete
    v-model="searchQuery"
    :options="userOptions"
    placeholder="Search users..."
  >
    <template #option="{ option }">
      <div class="user-option">
        <BaseAvatar :src="option.avatar" size="small" />
        <div class="user-info">
          <div class="user-name">{{ option.label }}</div>
          <div class="user-email">{{ option.email }}</div>
        </div>
      </div>
    </template>
  </BaseAutoComplete>
</template>

<script setup>
import { ref } from 'vue';
import { BaseAutoComplete, BaseAvatar } from '@digitaltolk/ui';

const searchQuery = ref('');
const userOptions = ref([
  { 
    label: 'John Doe', 
    value: 'john', 
    avatar: '/avatars/john.jpg',
    email: 'john@example.com'
  },
  { 
    label: 'Jane Smith', 
    value: 'jane', 
    avatar: '/avatars/jane.jpg',
    email: 'jane@example.com'
  },
  // More users...
]);
</script>

<style scoped>
.user-option {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 4px 0;
}

.user-info {
  display: flex;
  flex-direction: column;
}

.user-name {
  font-weight: 500;
}

.user-email {
  font-size: 12px;
  color: #666;
}
</style>
```

### With Loading State
```vue
<template>
  <BaseAutoComplete
    v-model="searchQuery"
    :options="options"
    :loading="loading"
    placeholder="Search cities..."
    @update:modelValue="handleSearch"
  />
</template>

<script setup>
import { ref } from 'vue';
import { BaseAutoComplete } from '@digitaltolk/ui';

const searchQuery = ref('');
const options = ref([]);
const loading = ref(false);

const handleSearch = async (value) => {
  if (value.length < 2) {
    options.value = [];
    return;
  }
  
  loading.value = true;
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Mock results
    options.value = [
      { label: 'New York', value: 'ny' },
      { label: 'Los Angeles', value: 'la' },
      { label: 'Chicago', value: 'chi' },
      { label: 'Houston', value: 'hou' },
      { label: 'Phoenix', value: 'phx' }
    ].filter(city => 
      city.label.toLowerCase().includes(value.toLowerCase())
    );
  } finally {
    loading.value = false;
  }
};
</script>
```

## Best Practices

1. **Input Experience**
   - Provide clear placeholder text that indicates what users can search for
   - Consider using `clearable` for longer search inputs
   - Set appropriate `size` based on the form context
   - Use `status` to indicate validation states

2. **Options Management**
   - Filter options based on user input for better performance
   - Limit the number of displayed options to prevent overwhelming the user
   - Consider grouping related options
   - Provide meaningful labels and values

3. **Behavior Configuration**
   - Use `blurAfterSelect` for single-selection scenarios
   - Use `clearAfterSelect` when users typically make one search at a time
   - Consider custom filtering logic for complex search requirements
   - Implement debouncing for API-based searches

4. **Accessibility**
   - Ensure keyboard navigation works properly
   - Provide sufficient color contrast
   - Include proper ARIA attributes
   - Test with screen readers

## Common Patterns

### Search with API Integration
```vue
<template>
  <BaseAutoComplete
    v-model="searchQuery"
    :options="searchResults"
    :loading="loading"
    placeholder="Search products..."
    @update:modelValue="debouncedSearch"
  />
</template>

<script setup>
import { ref } from 'vue';
import { BaseAutoComplete } from '@digitaltolk/ui';
import { debounce } from 'lodash-es';

const searchQuery = ref('');
const searchResults = ref([]);
const loading = ref(false);

const searchProducts = async (query) => {
  if (query.length < 2) {
    searchResults.value = [];
    return;
  }
  
  loading.value = true;
  
  try {
    const response = await fetch(`/api/products/search?q=${encodeURIComponent(query)}`);
    const data = await response.json();
    
    searchResults.value = data.products.map(product => ({
      label: product.name,
      value: product.id
    }));
  } catch (error) {
    console.error('Search failed:', error);
    searchResults.value = [];
  } finally {
    loading.value = false;
  }
};

const debouncedSearch = debounce(searchProducts, 300);
</script>
```

### Form Field with Validation
```vue
<template>
  <BaseForm>
    <BaseFormItem label="Country" :validation="countryValidation">
      <BaseAutoComplete
        v-model="country"
        :options="countries"
        :status="countryValidation.status"
        placeholder="Select a country"
        clearable
      />
    </BaseFormItem>
  </BaseForm>
</template>

<script setup>
import { ref, computed } from 'vue';
import { BaseForm, BaseFormItem, BaseAutoComplete } from '@digitaltolk/ui';

const country = ref('');
const countries = [
  { label: 'United States', value: 'us' },
  { label: 'Canada', value: 'ca' },
  { label: 'United Kingdom', value: 'uk' },
  { label: 'Australia', value: 'au' },
  { label: 'Germany', value: 'de' },
  { label: 'France', value: 'fr' },
  { label: 'Japan', value: 'jp' }
];

const countryValidation = computed(() => {
  if (!country.value) {
    return {
      status: 'error',
      message: 'Please select a country'
    };
  }
  return {
    status: 'success',
    message: ''
  };
});
</script>
```

## Implementation Notes

- The component is a wrapper around Naive UI's n-auto-complete component
- It supports two-way binding with v-model
- All slots from the underlying component are dynamically passed through
- Theme overrides are applied to the Input peer component
- The component handles all events from the underlying component
