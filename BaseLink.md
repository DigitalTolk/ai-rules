# BaseLink Component

## Description
The BaseLink component is a versatile navigation component that handles both internal routing using Vue Router and external links. It provides a consistent interface for links with support for icons and security features for external URLs.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| to | String, Object | '/' | Destination URL or route object. For strings, must be a URL with allowed protocols (http:, https:, mailto:, tel:) or a relative path starting with /, or #. |
| icon | String | '' | Icon name to display alongside the link text |
| iconSize | String | '' | Size of the icon |
| iconPlacement | String | 'left' | Position of the icon - 'left' or 'right' |
| iconColor | String | '' | Color of the icon |
| externalAttrs | Object | { target: '_blank', rel: 'noopener noreferrer' } | HTML attributes to apply to external links |

## Slots

| Slot | Description |
|------|-------------|
| default | The link text content |

## Usage Examples

### Basic Internal Link

```vue
<template>
  <BaseLink to="/dashboard">
    Go to Dashboard
  </BaseLink>
</template>

<script setup>
import { BaseLink } from '@digitaltolk/ui';
</script>
```

### External Link

```vue
<template>
  <BaseLink to="https://www.example.com">
    Visit Example Website
  </BaseLink>
</template>

<script setup>
import { BaseLink } from '@digitaltolk/ui';
</script>
```

### Link with Icon

```vue
<template>
  <BaseLink 
    to="/settings" 
    icon="settings" 
    iconPlacement="left" 
    iconSize="20"
  >
    Settings
  </BaseLink>
</template>

<script setup>
import { BaseLink } from '@digitaltolk/ui';
</script>
```

### Email Link

```vue
<template>
  <BaseLink 
    to="mailto:contact@example.com" 
    icon="email" 
    iconColor="#4285F4"
  >
    Contact Us
  </BaseLink>
</template>

<script setup>
import { BaseLink } from '@digitaltolk/ui';
</script>
```

### Using with Router Objects

```vue
<template>
  <BaseLink :to="{ name: 'product', params: { id: productId } }">
    View Product Details
  </BaseLink>
</template>

<script setup>
import { BaseLink } from '@digitaltolk/ui';
import { ref } from 'vue';

const productId = ref('123');
</script>
```

### Custom External Link Attributes

```vue
<template>
  <BaseLink 
    to="https://docs.example.com" 
    :externalAttrs="{ target: '_blank', rel: 'noopener', class: 'docs-link' }"
  >
    View Documentation
  </BaseLink>
</template>

<script setup>
import { BaseLink } from '@digitaltolk/ui';
</script>
```

## Behavior Notes

- Automatically detects if a link is external based on the URL protocol
- External links are rendered as `<button>` elements with click handlers for security
- Internal links use Vue Router's `<router-link>` for client-side navigation
- For external links, the component validates URL protocols for security
- The component supports both string URLs and Vue Router location objects

## CSS Customization

The component comes with default styling:
- Flex layout with centered alignment
- Customizable icon placement (left or right)
- No text decoration by default
- Custom styling for button elements used for external links
- Gap spacing between icon and text

## Security Features

- URL validation to prevent malicious links
- Use of `noopener` and `noreferrer` for external links to prevent tab nabbing attacks
- Protocol validation to only allow safe URL schemes

## Related Components
- BaseButton - For action buttons that aren't links
- BaseIcon - Used internally for displaying icons
- BaseText - Used for styling the link text

