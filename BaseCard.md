# BaseCard Component

## Description
A versatile container component with header, footer, and content areas. BaseCard provides a structured way to display content with optional borders, hover effects, and customizable styling for each section.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| bordered | Boolean | true | Whether to show a border around the card |
| closable | Boolean | false | Whether to show a close button in the top-right corner |
| contentClass | String | undefined | Custom CSS class for the content area |
| contentStyle | Object/String | undefined | Custom inline style for the content area |
| embedded | Boolean | false | Whether the card has an embedded style (inset appearance) |
| footerClass | String | undefined | Custom CSS class for the footer |
| footerStyle | Object/String | undefined | Custom inline style for the footer |
| headerClass | String | undefined | Custom CSS class for the header |
| headerStyle | Object/String | undefined | Custom inline style for the header |
| headerExtraClass | String | undefined | Custom CSS class for the extra header content |
| headerExtraStyle | Object/String | undefined | Custom inline style for the extra header content |
| hoverable | Boolean | false | Whether the card has hover effect |
| segmented | Boolean/Object | false | Whether the card has segmented content areas |
| size | String | "medium" | Size of the card ("small", "medium", "large", "huge") |
| tag | String | "div" | HTML tag to use for the card |
| title | String | undefined | Card title (displayed in header if no header slot is used) |
| themeOverrides | Object | {} | Custom theme overrides for component styling |

## Events

| Event | Parameters | Description |
|-------|------------|-------------|
| close | none | Emitted when the close button is clicked |

## Slots

| Slot | Description |
|------|-------------|
| cover | Content for the card cover (displayed above the header) |
| header | Custom header content (overrides the title prop) |
| header-extra | Additional content in the header (positioned at the right side) |
| default | Main content of the card |
| footer | Footer content |
| action | Content for action area (typically used for buttons) |

## Usage Examples

### Basic Usage
```vue
<template>
  <BaseCard title="Card Title">
    <p>This is the card content.</p>
  </BaseCard>
</template>
```

### With Cover, Header, and Footer
```vue
<template>
  <BaseCard>
    <template #cover>
      <img src="/images/banner.jpg" alt="Banner" />
    </template>
    
    <template #header>
      <h3>Custom Header</h3>
    </template>
    
    <template #header-extra>
      <BaseButton size="small">Action</BaseButton>
    </template>
    
    <p>Main content goes here.</p>
    
    <template #footer>
      <div>Footer content</div>
    </template>
  </BaseCard>
</template>
```

### Hoverable and Borderless Card
```vue
<template>
  <BaseCard
    title="Hoverable Card"
    :bordered="false"
    hoverable
    content-style="padding: 24px"
  >
    <p>This card has no border but shows a shadow on hover.</p>
  </BaseCard>
</template>
```

### Embedded Card with Close Button
```vue
<template>
  <BaseCard
    title="Closable Card"
    embedded
    closable
    @close="handleClose"
  >
    <p>Click the X in the corner to close this card.</p>
  </BaseCard>
</template>

<script setup>
const handleClose = () => {
  console.log('Card closed');
};
</script>
```

### Card with Segmented Content
```vue
<template>
  <BaseCard
    title="Segmented Card"
    :segmented="{ content: true, footer: 'soft' }"
  >
    <p>This card has segmented content areas with dividers.</p>
    
    <template #footer>
      <div class="footer-actions">
        <BaseButton>Cancel</BaseButton>
        <BaseButton type="primary">Submit</BaseButton>
      </div>
    </template>
  </BaseCard>
</template>
```

## Styling
The component includes default styling with a box shadow defined by the CSS variable `--n-box-shadow`. You can customize the card's appearance using the theme overrides or by targeting the `.n-card` class.

## Component Behavior Notes
- When using the `segmented` prop as an object, you can specify which parts are segmented with dividers:
  - `{ content: true }` adds a divider between header and content
  - `{ footer: true }` adds a divider between content and footer
  - `{ footer: 'soft' }` adds a subtle divider for the footer
- The `title` prop is only used if the `header` slot is not provided
- The close button appears only when `closable` is set to true

## Related Components
- BaseWrapper - Provides base functionality for UI components
- BaseButton - Often used within header-extra and footer slots
