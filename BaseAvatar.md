# BaseAvatar Component

## Description
BaseAvatar is a versatile component for displaying user avatars, profile pictures, or placeholder icons. It wraps Naive UI's n-avatar component and provides various customization options including fallback behavior when images fail to load.

## Props

### Core Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| src | String | "" | URL of the avatar image |
| size | String | "medium" | Size of the avatar: "small", "medium", "large", or custom size |
| round | Boolean | true | Whether the avatar should be circular |
| color | String | undefined | Background color of the avatar |

### Fallback Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| fallbackSrc | String | URL | Fallback image URL to use when the main image fails to load |
| fallbackIcon | String | undefined | Icon to display when no image is available |
| renderFallback | Function | undefined | Custom renderer for fallback content |

### Appearance Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| bordered | Boolean | false | Whether to show a border around the avatar |
| objectFit | String | "fill" | CSS object-fit property: "fill", "contain", "cover", "none", "scale-down" |
| themeOverrides | Object | {} | Custom theme overrides for styling |

### Loading Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| lazy | Boolean | false | Whether to lazy load the image |
| IntersectionObserverObject | Object | undefined | Custom IntersectionObserver for lazy loading |
| renderPlaceholder | Function | undefined | Custom renderer for placeholder content while loading |
| imgProps | Object | undefined | Props to pass to the underlying img element |

## Events

| Event | Parameters | Description |
|-------|------------|-------------|
| error | (event: Event) | Emitted when the image fails to load |

## Slots

| Slot | Description |
|------|-------------|
| default | Content to display when no image is available (overrides fallbackIcon) |
| placeholder | Content to display while the image is loading |

## Examples

### Basic Avatar with Image
```vue
<template>
  <BaseAvatar src="/path/to/avatar.jpg" />
</template>

<script setup>
import { BaseAvatar } from '@digitaltolk/ui';
</script>
```

### Avatar with Fallback Icon
```vue
<template>
  <BaseAvatar 
    src="/path/to/avatar.jpg" 
    fallbackIcon="person"
    @error="handleImageError"
  />
</template>

<script setup>
import { BaseAvatar } from '@digitaltolk/ui';

const handleImageError = (event) => {
  console.log('Avatar image failed to load:', event);
};
</script>
```

### Custom Sized Avatar
```vue
<template>
  <BaseAvatar 
    src="/path/to/avatar.jpg" 
    size="large"
    :bordered="true"
  />
</template>
```

### Avatar with Text
```vue
<template>
  <BaseAvatar color="#8c6ff0">
    JD
  </BaseAvatar>
</template>
```

### Square Avatar
```vue
<template>
  <BaseAvatar 
    src="/path/to/avatar.jpg" 
    :round="false"
  />
</template>
```

### Avatar with Custom Object Fit
```vue
<template>
  <BaseAvatar 
    src="/path/to/avatar.jpg" 
    objectFit="cover"
  />
</template>
```

### Avatar with Custom Styling
```vue
<template>
  <BaseAvatar 
    src="/path/to/avatar.jpg" 
    :themeOverrides="{
      borderRadius: '8px',
      fontSize: '16px',
      color: '#ffffff',
      backgroundColor: '#1976d2'
    }"
  />
</template>
```

## Best Practices

1. **Image Handling**
   - Use appropriately sized and optimized images
   - Always provide a fallback for when images fail to load
   - Consider using lazy loading for lists with many avatars
   - Use the error event to track image loading failures

2. **Sizing and Appearance**
   - Choose an appropriate size based on the context
   - Maintain consistent sizing across similar contexts
   - Use round avatars for user profiles (the default)
   - Use square or rounded-corner avatars for content or objects

3. **Accessibility**
   - Include alt text for avatar images
   - Ensure sufficient contrast between text and background color
   - Consider using aria-label for avatars with meaningful content

4. **Performance**
   - Enable lazy loading for lists with many avatars
   - Use appropriate image formats (WebP, AVIF) with fallbacks
   - Consider using srcset for responsive images

## Common Patterns

### User Profile Avatar
```vue
<template>
  <div class="user-profile">
    <BaseAvatar 
      :src="user.avatarUrl" 
      fallbackIcon="person"
      size="large"
    />
    <div class="user-info">
      <h3>{{ user.name }}</h3>
      <p>{{ user.email }}</p>
    </div>
  </div>
</template>

<style scoped>
.user-profile {
  display: flex;
  align-items: center;
  gap: 16px;
}

.user-info {
  display: flex;
  flex-direction: column;
}
</style>
```

### Avatar with Status Indicator
```vue
<template>
  <div class="avatar-with-status">
    <BaseAvatar :src="user.avatarUrl" />
    <div 
      class="status-indicator" 
      :class="{ 'online': user.isOnline }"
    ></div>
  </div>
</template>

<style scoped>
.avatar-with-status {
  position: relative;
}

.status-indicator {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ccc;
  border: 2px solid white;
}

.status-indicator.online {
  background-color: #4caf50;
}
</style>
```

### Initials Avatar
```vue
<template>
  <BaseAvatar :color="getUserColor(user.name)">
    {{ getInitials(user.name) }}
  </BaseAvatar>
</template>

<script setup>
import { BaseAvatar } from '@digitaltolk/ui';

const getInitials = (name) => {
  if (!name) return '';
  
  const parts = name.split(' ');
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
};

const getUserColor = (name) => {
  if (!name) return '#1976d2';
  
  // Generate a consistent color based on the name
  const hash = name.split('').reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc);
  }, 0);
  
  const colors = [
    '#1976d2', '#388e3c', '#f57c00', '#d32f2f', 
    '#7b1fa2', '#c2185b', '#0097a7', '#fbc02d'
  ];
  
  return colors[Math.abs(hash) % colors.length];
};
</script>
```

## Implementation Notes

- The component automatically displays the fallback icon when no image is available
- When used inside a BaseAvatarGroup, it inherits the group's size setting
- The default slot content is only rendered when no image is available
- The component uses flex display for the avatar text content
- The component supports all props and events from the underlying n-avatar component
