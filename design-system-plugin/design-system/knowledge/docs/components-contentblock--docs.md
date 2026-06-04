---
storybook_id: components-contentblock--docs
title: "Components/ContentBlock"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-contentblock--docs"
import_path: "./src/components/ContentBlock/ContentBlock.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:07:35.948Z
---

# Source: Components/ContentBlock

- Storybook ID: `components-contentblock--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-contentblock--docs
- Import path: `./src/components/ContentBlock/ContentBlock.mdx`
- Capture status: `extracted`

# ContentBlock

## ContentBlock is a layout primitive that wraps content in a consistently
padded, optionally bordered container. It supports both passive and
interactive variants.

## Introduction

ContentBlock provides a simple, flexible container for grouping content with consistent spacing and optional visual boundaries. Unlike the more structured Card component, ContentBlock gives you complete control over its internal layout while handling common container concerns like padding, borders, and interactivity states.

> ⚠️ ContentBlock is a free-form container. The composition and accessibility of content inside the block is entirely the consumer's responsibility.
> 
> Unlike the Card component which provides structured slots, ContentBlock gives you full control over its contents. Ensure your content follows accessibility best practices:
> 
> - Use proper heading hierarchy with Title components
> - Provide adequate color contrast
> - Include meaningful labels for interactive elements

### When to use ContentBlock

Use ContentBlock when you need:

- Selection lists: Build option selectors, radio/checkbox lists, or multi-select interfaces where each item is a clickable region
- Custom card layouts: Create card-like containers without the predefined structure of the Card component
- Interactive regions: Make entire content areas clickable with proper accessibility (renders as a <button>)
- Simple content grouping: Wrap content with consistent padding and optional borders

### When to use Card instead

Use the Card component when you need:

- Structured content display: Cards with predefined areas for media, title, description, and actions
- Article or product previews: Content that follows a media + content + action pattern
- Multiple interactive elements: Cards containing several independent links or buttons

## ContentBlock vs Card

| Feature | ContentBlock | Card |
| --- | --- | --- |
| Structure | Single container, no predefined layout | Compound component with Section, Media, Content, Action, Footer |
| Content control | Full control - you define all content | Predefined slots (category, title, subText, etc.) |
| Interactive mode | With onClick: renders as <button> | With onClick: renders as <button> |
| Multiple actions | Omit onClick, add buttons/links inside | Omit onClick, use Card.Action for buttons |
| Use case | Selection lists, custom layouts, clickable regions | Article cards, product cards, content previews |
| Complexity | Minimal - free-form container | Feature-rich - structured layout |

## Basic Usage

### Content Block

This is a default (non-interactive) content block. It serves as a passive container with consistent padding and optional border.

```
import { ContentBlock, ContentBlockPadding, Title, TitleVariant, Typography } from "@sanofi-accelerator/elements";

<ContentBlock padding={ContentBlockPadding.MD} border>
<Title variant={TitleVariant.TITLE_3}>Content Block</Title>
<Typography>
  This is a default (non-interactive) content block.
</Typography>
</ContentBlock>
```

## Interactive Variant

When you provide an onClick handler, ContentBlock renders as a <button> element with managed hover, active, and selected states.

```
import { ContentBlock, Title, TitleVariant, Typography } from "@sanofi-accelerator/elements";

<ContentBlock border onClick={() => handleClick()}>
<Title variant={TitleVariant.TITLE_3}>Interactive Block</Title>
<Typography>
  Click anywhere on this block. The entire surface is clickable.
</Typography>
</ContentBlock>
```

## Selection List Pattern

ContentBlock excels at building selection interfaces. Combine it with Checkbox or Radio for accessible, clickable option lists.

```
import { ContentBlock, Checkbox, Flex, Title, TitleVariant, Typography, Tag, TagCategoricalColor } from "@sanofi-accelerator/elements";

const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

const toggleSelection = (id: string) => {
setSelectedIds((prev) => {
const newSet = new Set(prev);
newSet.has(id) ? newSet.delete(id) : newSet.add(id);
return newSet;
});
};

{items.map((item) => {
const isSelected = selectedIds.has(item.id);
return (
<ContentBlock
key={item.id}
border
onClick={() => toggleSelection(item.id)}
isSelected={isSelected} >
<Flex align="start" justify="between" gap="md">
<Flex align="start" gap="md">
<Checkbox
checked={isSelected}
tabIndex={-1}
aria-hidden
onChange={() => {}}
/>
<Flex direction="column">
<Title variant={TitleVariant.TITLE_4}>{item.title}</Title>
<Typography>{item.description}</Typography>
</Flex>
</Flex>
<Tag color={TagCategoricalColor.BLUE}>{item.tag}</Tag>
</Flex>
</ContentBlock>
);
})}
```

## Padding Sizes

ContentBlock supports multiple padding sizes using Elements spacing tokens.

Padding: none

Padding: xs

Padding: sm

Padding: md

Padding: lg

Padding: xl

| Size | Token | Value |
| --- | --- | --- |
| none | --elements-spacing-none | 0px |
| xs | --elements-spacing-xs | 8px |
| sm | --elements-spacing-sm | 12px |
| md | --elements-spacing-md | 16px (default) |
| lg | --elements-spacing-lg | 20px |
| xl | --elements-spacing-xl | 24px |

## Disabled State

Interactive ContentBlocks can be disabled to prevent user interaction.

## API Reference

| Name | Description | Default |
| --- | --- | --- |
| padding | Inner padding using Elements spacing tokensContentBlockPadding | md |
| border | Renders a border around the blockboolean | false |
| isSelected | Marks the block as selected (interactive variant only)boolean | false |
| isActive | Marks the block as active (interactive variant only)boolean | false |
| disabled | Disables the interactive block, preventing clicks and applying a desaturated visual style (interactive variant only)boolean | false |
| children* | Content to render inside the blockReactNode | - |
| classNames | Custom CSS classes for ContentBlock elements.{ root?: string } | - |
| onClick | Click handler that activates the interactive variant. When absent, renders as a passive container.() => void | - |

## Accessibility

ContentBlock is built with accessibility in mind:

- Interactive variant: Renders as a semantic <button> element with proper keyboard support
- Selected state: Uses aria-pressed to communicate selection to assistive technologies
- Disabled state: Native disabled attribute prevents interaction and is announced by screen readers
- Focus management: Visible focus ring using the standard Elements focus style

### ⚠️ Multiple Interactive Elements

> When a ContentBlock contains multiple independent interactive elements (buttons, links, form controls), do not use the onClick prop on the ContentBlock itself.
> 
> A ContentBlock should only be made interactive (clickable) when it represents a single action. If you need multiple actions within a block, keep the ContentBlock non-interactive and let each inner element handle its own interaction.
> 
> Correct usage:
> 
> - Single action → Use onClick on ContentBlock (renders as <button>)
> - Multiple actions → Omit onClick, use individual buttons/links inside (renders as <div>)

### Keyboard Navigation

| Key | Action |
| --- | --- |
| Tab | Move focus to the ContentBlock (when interactive) |
| Enter / Space | Activate the click handler |

### Best Practice: Decorative Inner Elements

When using ContentBlock in interactive mode with inner form controls (Checkbox, Radio), make those controls decorative:

```
<ContentBlock onClick={handleClick} isSelected={isSelected}>
  <Checkbox
    checked={isSelected}
    tabIndex={-1} // Remove from tab order
    aria-hidden // Hide from screen readers
    onChange={() => {}} // No-op handler
  />
  <Typography>Option label</Typography>
</ContentBlock>
```

This ensures the ContentBlock is the single interactive target, avoiding nested interactive element issues.
