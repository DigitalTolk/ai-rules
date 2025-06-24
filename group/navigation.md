# Navigation Components Rule

## Description
This rule provides guidance for implementing navigation components from the DigitalTolk UI library. These components are used for user navigation, interaction, and information architecture.

## Available Navigation Components

### Basic Navigation
- BaseLink - Navigation component for internal and external links
- BaseButton - Button component for triggering actions

### Container Navigation
- BaseTabs - Tabbed interface component for organizing related content
- BaseMenu - Menu component for displaying navigation options
- BaseNavigation - Navigation bar component for site-wide navigation
- BaseDropdown - Dropdown menu component for contextual options

### Pagination & Movement
- BasePagination - Pagination component for navigating multi-page content
- BaseDrawer - Sliding drawer component for secondary content

## Implementation Guidelines

### 1. Link Component
```jsx
import { BaseLink } from '@digitaltolk/ui';

const LinkExample = () => {
  return (
    <>
      <BaseLink href="/dashboard">Dashboard</BaseLink>
      <BaseLink href="https://example.com" target="_blank">External Link</BaseLink>
      <BaseLink onClick={handleClick}>Action Link</BaseLink>
    </>
  );
};
```

### 2. Button Component
```jsx
import { BaseButton } from '@digitaltolk/ui';

const ButtonExample = () => {
  return (
    <>
      <BaseButton type="primary" onClick={handleClick}>
        Primary Button
      </BaseButton>
      
      <BaseButton type="default">
        Default Button
      </BaseButton>
      
      <BaseButton type="text">
        Text Button
      </BaseButton>
      
      <BaseButton type="link">
        Link Button
      </BaseButton>
    </>
  );
};
```

### 3. Tabs Component
```jsx
import { BaseTabs } from '@digitaltolk/ui';

const TabsExample = () => {
  const tabs = [
    { key: 'tab1', tab: 'Tab 1', children: <div>Content of Tab 1</div> },
    { key: 'tab2', tab: 'Tab 2', children: <div>Content of Tab 2</div> },
    { key: 'tab3', tab: 'Tab 3', children: <div>Content of Tab 3</div> },
  ];

  return (
    <BaseTabs
      defaultActiveKey="tab1"
      onChange={handleTabChange}
      items={tabs}
    />
  );
};
```

### 4. Menu Component
```jsx
import { BaseMenu } from '@digitaltolk/ui';

const MenuExample = () => {
  return (
    <BaseMenu
      mode="horizontal"
      defaultSelectedKeys={['home']}
      onClick={handleMenuClick}
    >
      <BaseMenu.Item key="home">Home</BaseMenu.Item>
      <BaseMenu.Item key="about">About</BaseMenu.Item>
      <BaseMenu.SubMenu key="services" title="Services">
        <BaseMenu.Item key="service1">Service 1</BaseMenu.Item>
        <BaseMenu.Item key="service2">Service 2</BaseMenu.Item>
      </BaseMenu.SubMenu>
      <BaseMenu.Item key="contact">Contact</BaseMenu.Item>
    </BaseMenu>
  );
};
```

### 5. Pagination Component
```jsx
import { BasePagination } from '@digitaltolk/ui';

const PaginationExample = () => {
  return (
    <BasePagination
      current={currentPage}
      total={totalItems}
      pageSize={pageSize}
      onChange={handlePageChange}
      showSizeChanger
      showQuickJumper
    />
  );
};
```

## Best Practices

### 1. Link & Button Usage
- Use links for navigation to new pages
- Use buttons for actions within the current context
- Apply consistent styling for similar actions
- Use appropriate button types based on importance

### 2. Menu Structure
- Keep menus organized and logical
- Group related items into submenus
- Highlight active items
- Use icons to enhance visual recognition

### 3. Navigation Patterns
- Maintain consistent navigation across the application
- Implement breadcrumbs for deep navigation structures
- Use tabs for switching between related views
- Provide clear feedback for current location

### 4. Accessibility
- Ensure keyboard navigability
- Implement proper ARIA attributes
- Maintain adequate contrast for text and backgrounds
- Support screen readers with appropriate labels

## Common Patterns

### 1. Main Navigation with Dropdown
```jsx
const MainNavigation = () => {
  return (
    <BaseNavigation>
      <BaseMenu mode="horizontal">
        <BaseMenu.Item key="home">Home</BaseMenu.Item>
        <BaseMenu.SubMenu key="products" title="Products">
          <BaseMenu.Item key="product1">Product 1</BaseMenu.Item>
          <BaseMenu.Item key="product2">Product 2</BaseMenu.Item>
        </BaseMenu.SubMenu>
        <BaseMenu.Item key="about">About</BaseMenu.Item>
        <BaseMenu.Item key="contact">Contact</BaseMenu.Item>
      </BaseMenu>
      
      <div className="nav-right">
        <BaseDropdown
          overlay={
            <BaseMenu>
              <BaseMenu.Item key="profile">Profile</BaseMenu.Item>
              <BaseMenu.Item key="settings">Settings</BaseMenu.Item>
              <BaseMenu.Item key="logout">Logout</BaseMenu.Item>
            </BaseMenu>
          }
        >
          <BaseButton>User <BaseIcon type="down" /></BaseButton>
        </BaseDropdown>
      </div>
    </BaseNavigation>
  );
};
```

### 2. Tabbed Interface with Content
```jsx
const TabbedInterface = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  
  return (
    <div>
      <BaseTabs
        activeKey={activeTab}
        onChange={setActiveTab}
        items={[
          { key: 'tab1', tab: 'Overview' },
          { key: 'tab2', tab: 'Details' },
          { key: 'tab3', tab: 'History' },
        ]}
      />
      
      <div className="tab-content">
        {activeTab === 'tab1' && <OverviewContent />}
        {activeTab === 'tab2' && <DetailsContent />}
        {activeTab === 'tab3' && <HistoryContent />}
      </div>
    </div>
  );
};
```

### 3. Paginated Data Table
```jsx
const PaginatedTable = () => {
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });
  
  const handleTableChange = (pagination, filters, sorter) => {
    fetchData({
      page: pagination.current,
      pageSize: pagination.pageSize,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters,
    });
    
    setPagination(pagination);
  };
  
  return (
    <BaseTable
      columns={columns}
      dataSource={data}
      pagination={pagination}
      onChange={handleTableChange}
    />
  );
};
```

### 4. Drawer Navigation
```jsx
const DrawerNavigation = () => {
  const [visible, setVisible] = useState(false);
  
  return (
    <>
      <BaseButton
        icon={<BaseIcon type="menu" />}
        onClick={() => setVisible(true)}
      />
      
      <BaseDrawer
        title="Navigation"
        placement="left"
        visible={visible}
        onClose={() => setVisible(false)}
      >
        <BaseMenu mode="vertical" defaultSelectedKeys={['home']}>
          <BaseMenu.Item key="home">Home</BaseMenu.Item>
          <BaseMenu.Item key="dashboard">Dashboard</BaseMenu.Item>
          <BaseMenu.Item key="settings">Settings</BaseMenu.Item>
          <BaseMenu.Item key="profile">Profile</BaseMenu.Item>
        </BaseMenu>
      </BaseDrawer>
    </>
  );
};
```

## Testing Checklist

- [ ] Links navigate to correct destinations
- [ ] Buttons trigger appropriate actions
- [ ] Menus display and collapse properly
- [ ] Tabs switch content correctly
- [ ] Dropdown menus open and close as expected
- [ ] Active navigation items are highlighted
- [ ] Drawer opens and closes smoothly
- [ ] Pagination correctly changes page content
- [ ] Navigation is responsive on different screen sizes
- [ ] Navigation is accessible via keyboard

## Notes
- Design navigation to be intuitive and consistent
- Consider mobile navigation patterns
- Implement proper loading states during navigation
- Test navigation on different screen sizes
- Follow accessibility guidelines for navigation components
