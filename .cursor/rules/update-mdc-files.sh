#!/bin/bash

# Script to add frontmatter to MDC files

COMPONENTS_DIR=".cursor/rules/dtolk-ui"

# Function to add frontmatter to a file
add_frontmatter() {
  local file=$1
  local description=$2
  local component_name=$(basename "$file" .mdc)
  
  # Create a temporary file
  local temp_file="${file}.temp"
  
  # Add frontmatter to the beginning of the file
  echo "---" > "$temp_file"
  echo "description: $description" >> "$temp_file"
  echo "globs: components/base/${component_name}.vue" >> "$temp_file"
  echo "alwaysApply: false" >> "$temp_file"
  echo "---" >> "$temp_file"
  echo "" >> "$temp_file"
  
  # Append the original content
  cat "$file" >> "$temp_file"
  
  # Replace the original file
  mv "$temp_file" "$file"
  
  echo "Updated: $file"
}

# Main processing
echo "Updating MDC files with frontmatter..."

# BaseCard
add_frontmatter "${COMPONENTS_DIR}/BaseCard.mdc" "A versatile container component with header, footer, and content areas"

# BaseAlert
add_frontmatter "${COMPONENTS_DIR}/BaseAlert.mdc" "Component for displaying important messages and notifications"

# BaseAvatar
add_frontmatter "${COMPONENTS_DIR}/BaseAvatar.mdc" "User avatar component with image and text fallback"

# BaseButton
add_frontmatter "${COMPONENTS_DIR}/BaseButton.mdc" "Button component for triggering actions"

# BaseGrid
add_frontmatter "${COMPONENTS_DIR}/BaseGrid.mdc" "A flexible layout system with responsive rows and columns"

# BaseLink
add_frontmatter "${COMPONENTS_DIR}/BaseLink.mdc" "Navigation component for internal and external links"

# BaseModal
add_frontmatter "${COMPONENTS_DIR}/BaseModal.mdc" "Modal dialog component for focused user interactions"

# BaseTable
add_frontmatter "${COMPONENTS_DIR}/BaseTable.mdc" "Data table component with sorting and pagination"

# BaseTag
add_frontmatter "${COMPONENTS_DIR}/BaseTag.mdc" "Compact component for categories, labels, and status indicators"

# BaseSpace
add_frontmatter "${COMPONENTS_DIR}/BaseSpace.mdc" "Utility component for creating consistent spacing between elements"

# BaseDivider
add_frontmatter "${COMPONENTS_DIR}/BaseDivider.mdc" "Component for visual separation with optional text"

# BaseSpin
add_frontmatter "${COMPONENTS_DIR}/BaseSpin.mdc" "Loading indicator component for content loading states"

echo "Finished updating MDC files" 