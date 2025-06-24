# Layout Components Rule

## Description
This rule provides guidance for implementing layouts using DigitalTolk UI layout components. It covers container structure, spacing, responsive behavior, and best practices.

## Available Layout Components

### Container Components
- BaseCard - A versatile container component with header, footer, and content areas
- BaseGrid - A flexible layout system with responsive rows and columns

### Spacing Components
- BaseSpace - Utility component for creating consistent spacing between elements
- BaseDivider - Component for visual separation with optional text

## Implementation Guidelines

### 1. Grid Layout
```jsx
import { BaseGrid } from '@digitaltolk/ui';

const GridLayout = () => {
  return (
    <BaseGrid container spacing={2}>
      <BaseGrid item xs={12} md={6}>
        <div>First column content</div>
      </BaseGrid>
      <BaseGrid item xs={12} md={6}>
        <div>Second column content</div>
      </BaseGrid>
    </BaseGrid>
  );
};
```

### 2. Card Container
```jsx
import { BaseCard } from '@digitaltolk/ui';

const CardContainer = () => {
  return (
    <BaseCard
      title="Card Title"
      extra={<a href="#">More</a>}
      bordered
    >
      <p>Card content</p>
      <p>More content</p>
    </BaseCard>
  );
};
```

### 3. Space Component
```jsx
import { BaseSpace } from '@digitaltolk/ui';

const SpacedContent = () => {
  return (
    <BaseSpace direction="vertical" size="middle">
      <div>First item</div>
      <div>Second item</div>
      <div>Third item</div>
    </BaseSpace>
  );
};
```

### 4. Divider Component
```jsx
import { BaseDivider } from '@digitaltolk/ui';

const DividedContent = () => {
  return (
    <div>
      <p>Content above</p>
      <BaseDivider text="Section Title" />
      <p>Content below</p>
    </div>
  );
};
```

## Best Practices

### 1. Responsive Layouts
- Use the grid system for responsive layouts
- Use breakpoints consistently across the application
- Test layouts on different screen sizes
- Avoid fixed widths that may break on smaller screens

### 2. Spacing Consistency
- Use the BaseSpace component for consistent spacing
- Follow the spacing scale from the design system
- Apply consistent margins and padding
- Use BaseDivider for logical separation of content

### 3. Container Usage
- Use BaseCard for standalone content sections
- Nest cards appropriately without excessive depth
- Add appropriate shadows and borders based on elevation
- Keep card content organized and concise

### 4. Performance Considerations
- Avoid deeply nested grid structures
- Use the appropriate grid item sizes
- Lazy load content in cards when possible

## Common Patterns

### 1. Responsive Dashboard Layout
```jsx
const DashboardLayout = () => {
  return (
    <BaseGrid container spacing={3}>
      <BaseGrid item xs={12} lg={8}>
        <BaseCard title="Main Content">
          {/* Main content */}
        </BaseCard>
      </BaseGrid>
      <BaseGrid item xs={12} lg={4}>
        <BaseSpace direction="vertical" size="large">
          <BaseCard title="Summary">
            {/* Summary content */}
          </BaseCard>
          <BaseCard title="Recent Activity">
            {/* Activity content */}
          </BaseCard>
        </BaseSpace>
      </BaseGrid>
    </BaseGrid>
  );
};
```

### 2. Card with Tabs
```jsx
const CardWithTabs = () => {
  return (
    <BaseCard
      tabList={[
        { key: 'tab1', tab: 'First Tab' },
        { key: 'tab2', tab: 'Second Tab' },
      ]}
      activeTabKey={activeTab}
      onTabChange={setActiveTab}
    >
      {activeTab === 'tab1' && <div>Content of first tab</div>}
      {activeTab === 'tab2' && <div>Content of second tab</div>}
    </BaseCard>
  );
};
```

### 3. Grouped Cards with Space
```jsx
const GroupedCards = () => {
  return (
    <BaseSpace direction="vertical" size="middle">
      <BaseCard title="First Card">
        <p>Content for first card</p>
      </BaseCard>
      <BaseCard title="Second Card">
        <p>Content for second card</p>
      </BaseCard>
      <BaseCard title="Third Card">
        <p>Content for third card</p>
      </BaseCard>
    </BaseSpace>
  );
};
```

## Testing Checklist

- [ ] Layouts are responsive on all screen sizes
- [ ] Spacing is consistent throughout the interface
- [ ] Card content is properly aligned and styled
- [ ] Dividers properly separate content sections
- [ ] Grid system resizes appropriately on window resize
- [ ] Card actions (if any) work correctly
- [ ] Nested layout components render correctly

## Notes
- Consider the information hierarchy when designing layouts
- Use appropriate component variations based on content importance
- Maintain consistent spacing and alignment
- Follow accessibility guidelines for layout structures
