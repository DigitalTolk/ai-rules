# BasePagination Component

## Description
The BasePagination component provides navigation controls for content split across multiple pages. It supports customizable page sizes, quick jumper, and various display options to fit different use cases.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| defaultPage | Number | 1 | The default page number when the component is initially rendered |
| defaultPageSize | Number | 10 | The default number of items per page |
| disabled | Boolean | false | Whether the pagination is disabled |
| displayOrder | Array | ['pages', 'size-picker', 'quick-jumper'] | The order of the pagination components |
| goto | Function | undefined | Custom function for navigation logic |
| itemCount | Number | undefined | Total number of items to be paginated |
| next | Function | undefined | Custom function for next page logic |
| prev | Function | undefined | Custom function for previous page logic |
| label | Function | undefined | Custom function for rendering page labels |
| pageCount | Number | 1 | Total number of pages |
| pageSizes | Array | [10] | Available options for items per page |
| pageSize | Number | undefined | Current number of items per page |
| pageSlot | Number | 9 | Maximum number of page buttons to display |
| page | Number | undefined | Current page number |
| prefix | Function | undefined | Custom function for rendering content before pagination |
| selectProps | Function | undefined | Custom function for page size selector props |
| showQuickJumper | Boolean | false | Whether to show the quick jump input |
| size | String | 'medium' | Size of the pagination component ('small', 'medium', 'large') |
| simple | Boolean | false | Whether to use simple mode (only prev/next) |
| round | Boolean | false | Whether to use rounded styling for pagination items |
| suffix | Function | undefined | Custom function for rendering content after pagination |
| showSizePicker | Boolean | false | Whether to show the page size picker |
| to | String, Boolean, Object | 'body' | Target element for dropdown placement |
| themeOverrides | Object | {} | Custom theme overrides for the component |

## Events

| Event | Parameters | Description |
|-------|------------|-------------|
| update:page | (page: number) | Emitted when the current page changes |
| update:page-size | (size: number) | Emitted when the page size changes |

## Slots

The component passes through all slots to the underlying pagination component.

## Usage Examples

### Basic Pagination

```vue
<template>
  <BasePagination 
    v-model:page="currentPage" 
    :page-count="totalPages" 
  />
</template>

<script setup>
import { ref } from 'vue';
import { BasePagination } from '@digitaltolk/ui';

const currentPage = ref(1);
const totalPages = 10;
</script>
```

### Pagination with Item Count

```vue
<template>
  <BasePagination 
    v-model:page="currentPage"
    v-model:page-size="pageSize"
    :item-count="totalItems"
    :page-sizes="[10, 20, 50, 100]"
    show-size-picker
  />
</template>

<script setup>
import { ref } from 'vue';
import { BasePagination } from '@digitaltolk/ui';

const currentPage = ref(1);
const pageSize = ref(10);
const totalItems = 256;
</script>
```

### Pagination with Quick Jumper

```vue
<template>
  <BasePagination 
    v-model:page="currentPage"
    :page-count="totalPages"
    show-quick-jumper
  />
</template>

<script setup>
import { ref } from 'vue';
import { BasePagination } from '@digitaltolk/ui';

const currentPage = ref(1);
const totalPages = 50;
</script>
```

### Simple Pagination

```vue
<template>
  <BasePagination 
    v-model:page="currentPage"
    :page-count="totalPages"
    simple
  />
</template>

<script setup>
import { ref } from 'vue';
import { BasePagination } from '@digitaltolk/ui';

const currentPage = ref(1);
const totalPages = 10;
</script>
```

### Rounded Style Pagination

```vue
<template>
  <BasePagination 
    v-model:page="currentPage"
    :page-count="totalPages"
    round
  />
</template>

<script setup>
import { ref } from 'vue';
import { BasePagination } from '@digitaltolk/ui';

const currentPage = ref(1);
const totalPages = 10;
</script>
```

### Custom Size Pagination

```vue
<template>
  <div>
    <BasePagination 
      v-model:page="currentPage"
      :page-count="totalPages"
      size="small"
    />
    
    <BasePagination 
      v-model:page="currentPage"
      :page-count="totalPages"
      size="large"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { BasePagination } from '@digitaltolk/ui';

const currentPage = ref(1);
const totalPages = 10;
</script>
```

## Behavior Notes

- The component supports two-way binding for both `page` and `page-size` using v-model
- When `simple` is set to true, only prev and next buttons are shown
- The `displayOrder` prop allows customizing the order of pagination components
- Setting `round` to true applies rounded corners to pagination items
- The `pageSlot` prop controls how many page buttons are shown before using ellipsis

## CSS Customization

The component applies specific styling, including:
- Bold font weight for pagination items
- Custom hover and active states
- Rounded styling when `round` prop is true
- Custom styling for disabled states
- Border and color customization for selected items

## Related Components
- BaseTable - Often uses pagination for table data
- BaseList - Can be paginated for long lists of items
