#!/bin/bash

# Script to generate placeholder documentation with frontmatter

COMPONENTS_DIR=".cursor/rules/dtolk-ui"

# Function to get description for a component
get_description() {
  local component=$1
  
  case "$component" in
    "BaseAutoComplete") echo "Auto-complete text input with suggestions" ;;
    "BaseAvatarGroup") echo "Component for displaying groups of user avatars" ;;
    "BaseBlankState") echo "Empty state component for when content is unavailable" ;;
    "BaseCalendar") echo "Calendar display and date selection component" ;;
    "BaseChart") echo "Data visualization component for various chart types" ;;
    "BaseCheckbox") echo "Checkbox input component for boolean selections" ;;
    "BaseCheckboxGroup") echo "Group component for managing multiple related checkboxes" ;;
    "BaseCode") echo "Code display component with syntax highlighting" ;;
    "BaseCollapse") echo "Collapsible content component for progressive disclosure" ;;
    "BaseDropdown") echo "Dropdown menu component for contextual options" ;;
    "BaseForm") echo "Container component with validation handling for form elements" ;;
    "BaseIcon") echo "Icon component with Material Icons support" ;;
    "BasePagination") echo "Pagination component for navigating multi-page content" ;;
    "BasePopconfirm") echo "Confirmation popover for critical actions" ;;
    "BasePopover") echo "Popover component for contextual information" ;;
    "BaseProgress") echo "Progress indicator component for operations" ;;
    "BaseRadio") echo "Radio button input component for single selections" ;;
    "BaseRadioGroup") echo "Group component for managing related radio buttons" ;;
    "BaseSelect") echo "Dropdown selection component with single and multiple selection modes" ;;
    "BaseSkeleton") echo "Loading placeholder component for content" ;;
    "BaseSwitch") echo "Toggle switch component for boolean settings" ;;
    "BaseTabs") echo "Tabbed interface component for organizing related content" ;;
    "BaseTextField") echo "Text input component with validation support" ;;
    "BaseToaster") echo "Toast notification component for temporary messages" ;;
    "BaseTooltip") echo "Informational tooltip component" ;;
    *) echo "Component for the DigitalTolk UI library" ;;
  esac
}

# Function to generate placeholder documentation
generate_placeholder() {
  local component=$1
  local description=$(get_description "$component")
  local file="${COMPONENTS_DIR}/${component}.mdc"
  
  echo "Generating placeholder for: $component"
  
  # Create the file with frontmatter and basic structure
  cat > "$file" << EOF
---
description: $description
globs: components/base/${component}.vue
alwaysApply: false
---

# $component Component

## Description
$description

## Props

### Core Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| prop1 | string | - | Description of prop1 |
| prop2 | boolean | false | Description of prop2 |

## Slots

| Slot | Description |
|------|-------------|
| default | Default content of the component |

## Examples

### Basic Usage
\`\`\`vue
<template>
  <$component></$component>
</template>

<script setup>
import { $component } from '@digitaltolk/ui';
</script>
\`\`\`

## Related Components
- List of related components
EOF

  echo "Created: $file"
}

# Get list of placeholder files (files smaller than 100 bytes)
placeholder_files=$(find "$COMPONENTS_DIR" -name "*.mdc" -size -100c | grep -v "index.mdc")

# Generate placeholder documentation for each component
for file in $placeholder_files; do
  component=$(basename "$file" .mdc)
  generate_placeholder "$component"
done

echo "Finished generating placeholder documentation" 