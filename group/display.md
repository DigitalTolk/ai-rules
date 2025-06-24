# Display Components Rule

## Description
This rule provides guidance for implementing display components from the DigitalTolk UI library. These components are used for presenting information, content, and feedback to users.

## Available Display Components

### Status & Notification Components
- BaseAlert - Component for displaying important messages and notifications
- BaseTag - Compact component for categories, labels, and status indicators
- BaseProgress - Progress indicator component for operations
- BaseToaster - Toast notification component for temporary messages

### User Interface Components
- BaseAvatar - User avatar component with image and text fallback
- BaseAvatarGroup - Component for displaying groups of user avatars
- BaseIcon - Icon component with Material Icons support
- BaseTooltip - Informational tooltip component
- BasePopover - Popover component for contextual information
- BasePopconfirm - Confirmation popover for critical actions
- BaseModal - Modal dialog component for focused user interactions

### Content Display Components
- BaseTable - Data table component with sorting and pagination
- BaseSkeleton - Loading placeholder component for content
- BaseText - Typography component with consistent text styling
- BaseBlankState - Empty state component for when content is unavailable
- BaseImage - Enhanced image component with loading and error states
- BaseImageGroup - Component for displaying groups of related images
- BaseRate - Rating component for user feedback
- BaseList - List component for displaying collections of items
- BaseCollapse - Collapsible content component for progressive disclosure
- BaseCode - Code display component with syntax highlighting

## Implementation Guidelines

### 1. Alert Component
```jsx
import { BaseAlert } from '@digitaltolk/ui';

const AlertExample = () => {
  return (
    <BaseAlert
      type="success"
      message="Operation Successful"
      description="Your changes have been saved successfully."
      showIcon
      closable
    />
  );
};
```

### 2. Avatar Component
```jsx
import { BaseAvatar, BaseAvatarGroup } from '@digitaltolk/ui';

const AvatarExample = () => {
  return (
    <>
      <BaseAvatar
        src="https://example.com/avatar.jpg"
        alt="User Name"
        size="large"
      />
      
      <BaseAvatarGroup>
        <BaseAvatar src="https://example.com/user1.jpg" />
        <BaseAvatar src="https://example.com/user2.jpg" />
        <BaseAvatar>+3</BaseAvatar>
      </BaseAvatarGroup>
    </>
  );
};
```

### 3. Table Component
```jsx
import { BaseTable } from '@digitaltolk/ui';

const TableExample = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: true,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  return (
    <BaseTable
      columns={columns}
      dataSource={data}
      pagination={{ pageSize: 10 }}
      bordered
    />
  );
};
```

### 4. Tag Component
```jsx
import { BaseTag } from '@digitaltolk/ui';

const TagExample = () => {
  return (
    <>
      <BaseTag>Default</BaseTag>
      <BaseTag color="success">Success</BaseTag>
      <BaseTag color="error">Error</BaseTag>
      <BaseTag closable onClose={handleClose}>Closable</BaseTag>
    </>
  );
};
```

## Best Practices

### 1. Alert & Notification Usage
- Use appropriate alert types for different message contexts
- Keep alert messages concise and actionable
- Use icons to reinforce the message type
- Position toasts consistently throughout the application

### 2. Avatar Usage
- Provide fallback for missing images
- Use appropriate sizes based on context
- Implement consistent avatar styling
- Use AvatarGroup for displaying multiple users

### 3. Content Presentation
- Use tables for structured data
- Implement proper loading states with skeletons
- Use empty states for zero data scenarios
- Format content consistently

### 4. Interaction Feedback
- Use tooltips for additional information
- Implement popconfirm for destructive actions
- Show progress indicators for ongoing operations
- Provide visual feedback for user interactions

## Common Patterns

### 1. Data Table with Actions
```jsx
const DataTableWithActions = () => {
  const columns = [
    // Data columns
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <>
          <BaseButton type="link" onClick={() => handleView(record)}>View</BaseButton>
          <BasePopconfirm
            title="Are you sure you want to delete this item?"
            onConfirm={() => handleDelete(record.id)}
          >
            <BaseButton type="link" danger>Delete</BaseButton>
          </BasePopconfirm>
        </>
      ),
    },
  ];

  return <BaseTable columns={columns} dataSource={data} />;
};
```

### 2. Status Display with Tags
```jsx
const StatusDisplay = ({ status }) => {
  const statusConfig = {
    active: { color: 'success', text: 'Active' },
    pending: { color: 'warning', text: 'Pending' },
    inactive: { color: 'error', text: 'Inactive' },
  };
  
  const config = statusConfig[status] || { color: 'default', text: status };
  
  return <BaseTag color={config.color}>{config.text}</BaseTag>;
};
```

### 3. Content Loading States
```jsx
const ContentWithLoading = ({ loading, data }) => {
  return (
    <>
      {loading ? (
        <BaseSkeleton active paragraph={{ rows: 4 }} />
      ) : data ? (
        <div>{/* Content */}</div>
      ) : (
        <BaseBlankState
          image="empty.png"
          description="No data available"
        />
      )}
    </>
  );
};
```

### 4. User Information Display
```jsx
const UserInfoDisplay = ({ user }) => {
  return (
    <div>
      <BaseAvatar src={user.avatar} size="large" />
      <BaseText strong>{user.name}</BaseText>
      <BaseTag color="blue">{user.role}</BaseTag>
      <BaseTooltip title="View user profile">
        <BaseButton type="link">View Profile</BaseButton>
      </BaseTooltip>
    </div>
  );
};
```

## Testing Checklist

- [ ] Alert messages are displayed properly
- [ ] Tables render data correctly
- [ ] Loading states work as expected
- [ ] Empty states are displayed when no data
- [ ] Tooltips show on hover
- [ ] Popovers display and close properly
- [ ] Modal dialog renders and functions correctly
- [ ] Tags appear with proper styling
- [ ] Avatars display with fallback when needed
- [ ] Interactive elements provide proper feedback

## Notes
- Choose the appropriate display component for the content type
- Maintain consistent styling across all display components
- Consider loading and empty states for all content displays
- Follow accessibility guidelines for all display components
- Test all components in different screen sizes
