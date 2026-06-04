---
storybook_id: components-navigationheader--docs
title: "Components/NavigationHeader"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-navigationheader--docs"
import_path: "./src/components/NavigationHeader/NavigationHeader.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:09:43.645Z
---

# Source: Components/NavigationHeader

- Storybook ID: `components-navigationheader--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-navigationheader--docs
- Import path: `./src/components/NavigationHeader/NavigationHeader.mdx`
- Capture status: `extracted`

# NavigationHeader

## A navigation bar for your application, set to be sticky to the top.

## Example

## Anatomy

```
import { NavigationHeader, ButtonIcon, Button, ButtonSize, ButtonVariant, IconName, Image } from "@sanofi-accelerator/elements";

const sanofiLogo = "https://cdn.prod.accelerator.sanofi/elements/icons/sanofi-logo-inverse.svg";

export default () => (
<NavigationHeader.Root
  logo={
    <Image src={sanofiLogo} alt="Logo" />
  }
  mobileMenuIcon={
    <ButtonIcon icon="menu" size={ButtonSize.SMALL} variant={ButtonVariant.TERTIARY} />
  }
  {...rest}
>
  <NavigationHeader.StartContent>
    <NavigationHeader.Item>
      <NavigationHeader.Action>Nav Item</NavigationHeader.Action>
    </NavigationHeader.Item>
    <NavigationHeader.Item>
      <NavigationHeader.Action>Nav Item</NavigationHeader.Action>
    </NavigationHeader.Item>
  </NavigationHeader.StartContent>
  <NavigationHeader.EndContent>
    <NavigationHeader.Item>
      <NavigationHeader.Action>Nav Item</NavigationHeader.Action>
    </NavigationHeader.Item>
    <NavigationHeader.Item>
      <NavigationHeader.Action>Nav Item</NavigationHeader.Action>
    </NavigationHeader.Item>
    <NavigationHeader.Item>
      <ButtonIcon
        icon={IconName.SEARCH}
        variant={ButtonVariant.TERTIARY}
      />
    </NavigationHeader.Item>
    <NavigationHeader.Item>
      <ButtonIcon
        icon={IconName.ARROW_FORWARD}
        variant={ButtonVariant.TERTIARY}
      />
    </NavigationHeader.Item>
    <NavigationHeader.Item>
      <Button label="Action" />
    </NavigationHeader.Item>
  </NavigationHeader.EndContent>
  <NavigationHeader.QuickAction>
    <ButtonIcon
      icon={IconName.SEARCH}
      size={ButtonSize.SMALL}
      variant={ButtonVariant.TERTIARY}
    />
  </NavigationHeader.QuickAction>
</NavigationHeader.Root>
);
```

## Example use case: Sanofi.com

An example using the menu structure of Sanofi.com

Here is a definition of the menu structure:

```
type MenuItem = {
label: string;
content?: MenuSection;
};

type MenuSection = {
title: string;
sectionContent: MenuItem[];
sectionSize?: ItemSize;
};

const sanofiMenu: MenuItem[] = [
{
label: "Our Company",
content: {
title: "Our Company",
sectionContent: [
{ label: "Our Strategy" },
{
label: "Governance",
content: {
title: "Governance",
sectionContent: [
{ label: "Board of Directors" },
{ label: "Executive Committee" },
{ label: "Specialist Committees" },
],
},
},
{ label: "Our Legacy" },
{
label: "Social Impact",
content: {
title: "Social Impact",
sectionSize: 9,
sectionContent: [
{ label: "Access to Healthcare" },
{ label: "Innovation for Vulnerable Communities" },
{ label: "Environmental Sustainability and Resilience" },
{
label:
"Diversity, Equity, and Inclusion In and Beyond the Workplace",
},
{ label: "Code of Conduct and Responsible Business" },
],
},
},
],
},
},
{
label: "Our Science",
content: {
title: "Our Science",
sectionContent: [
{ label: "Our Pipeline" },
{
label: "R&D Focus Areas",
content: {
title: "R&D Focus Areas",
sectionContent: [
{ label: "Immunology R&D" },
{ label: "Neurology R&D" },
{ label: "Oncology R&D" },
{ label: "Rare Blood Disorders R&D" },
{ label: "Rare Diseases R&D" },
{ label: "Vaccines R&D" },
{ label: "Artificial Intelligence in R&D" },
],
},
},
{ label: "Technology Platforms" },
{
label: "Clinical Trials & Results",
content: {
title: "Clinical Trials & Results",
sectionContent: [
{ label: "Find a Clinical Trial" },
{ label: "Clinical Study Results" },
{ label: "Investigator Sponsored Studies" },
{ label: "Diversity in Clinical Trials" },
],
},
},
{
label: "Scientific Collaboration",
content: {
title: "Scientific Collaboration",
sectionContent: [
{ label: "Scientific Collaboration in North America" },
{ label: "Scientific Collaboration in Europe" },
{ label: "Scientific Collaboration in China" },
],
},
},
{ label: "Digital" },
{ label: "Manufacturing and Supply" },
],
},
},
{
label: "Your Health",
content: {
title: "Your Health",
sectionContent: [
{
label: "Vaccines",
content: {
title: "Vaccines",
sectionContent: [
{ label: "Influenza" },
{ label: "Meningococcal Meningitis" },
{ label: "Pertussis" },
{ label: "Respiratory Syncytial Virus (RSV)" },
{ label: "Production" },
{ label: "Why vaccines matter" },
],
},
},
{
label: "Medicines",
content: {
title: "Medicines",
sectionContent: [
{ label: "Immunology" },
{ label: "Neurology" },
{ label: "Oncology" },
{ label: "Rare Blood Disorders" },
{ label: "Rare Diseases" },
{ label: "Cardiovascular Diseases" },
{ label: "Diabetes" },
],
},
},
{
label: "Consumer Healthcare",
content: {
title: "Consumer Healthcare",
sectionContent: [
{ label: "Sustainability at Sanofi Consumer Healthcare" },
{ label: "Allergy" },
{ label: "Cough, Cold & Flu" },
{ label: "Digestive Wellness" },
{ label: "Pain Care" },
{ label: "Physical & Mental Wellness" },
],
},
},
{ label: "Patient Community Engagement" },
{
label: "Healthcare Professionals Support",
content: {
title: "Healthcare Professionals Support",
sectionContent: [
{ label: "Managed Access Programs (MAPs)" },
{ label: "Pre-Registration Import Licenses" },
{ label: "Post Trial Access (PTA)" },
],
},
},
],
},
},
{
label: "Partnering",
content: {
title: "Partnering",
sectionContent: [
{
label: "Partnering Focus Areas",
content: {
title: "Partnering Focus Areas",
sectionContent: [
{ label: "China" },
{ label: "Digital" },
{ label: "General Medicines" },
{ label: "Immunology" },
{ label: "Neuroscience" },
{ label: "Oncology" },
{ label: "Out-Licensing" },
{ label: "Rare Disease" },
{ label: "Technology Platforms" },
{ label: "Vaccines" },
],
},
},
{ label: "Meet the Partnering Team" },
{ label: "Contact Business Development Team" },
],
},
},
];
```

Based on the menu structure, here is an example of how you can implement a NavigationHeader, that displays on desktop, and on mobile, using the CascadingMenu component (visible on viewport size under md).

```
// Render the desktop version of the Navigation
const renderNavHeader = ({ label, content }: MenuItem) => {
return content ? (
  <NavigationHeader.Item key={label}>
    <MegaMenu.Trigger
      menuContent={
        <Grid.Root>
          <CascadingMenu.Root>
            {renderMenuSection(content)}
          </CascadingMenu.Root>
        </Grid.Root>
      }
    >
      <NavigationHeader.Action>{label}</NavigationHeader.Action>
    </MegaMenu.Trigger>
  </NavigationHeader.Item>
) : (
  <NavigationHeader.Item key={label}>
    <NavigationHeader.Action>{label}</NavigationHeader.Action>
  </NavigationHeader.Item>
);
};

// Render the mobile version of the Navigation
const MobileMenuContent = () => (
  <Grid.Root>
    <CascadingMenu.Root>
      {sanofiMenu.map(renderMenuItem)}
    </CascadingMenu.Root>
  </Grid.Root>
);

// Render a section of the menu
const renderMenuSection = ({
  title,
  sectionContent,
  sectionSize,
}: MenuSection) => (
  <Grid.Item key={title} sm={12} md={sectionSize || 3}>
    <MegaMenu.Title>{title}</MegaMenu.Title>
    {sectionContent.map(renderMenuItem)}
  </Grid.Item>
);

// Render a CascadingMenu Item
const renderMenuItem = ({ label, content }: MenuItem) => (
  <Grid.Item key={label}>
    <CascadingMenu.Item label={label}>
      {content && renderMenuSection(content)}
    </CascadingMenu.Item>
  </Grid.Item>
);

// Putting it all together
<NavigationHeader.Root
  logo={
    <img
      src={sanofiLogo || logoSrc}
      alt="Sanofi logo"
    />
  }
  mobileMenuIcon={
    <MegaMenu.Trigger
      menuContent={<MobileMenuContent />}
      hasActiveShadow={true}
    >
      <ButtonIcon
        icon="menu"
        size={ButtonSize.SMALL}
        variant={ButtonVariant.TERTIARY}
      />
    </MegaMenu.Trigger>
  }
>
  <NavigationHeader.StartContent>
    {sanofiMenu.map(renderNavHeader)}
  </NavigationHeader.StartContent>
  <NavigationHeader.CenterContent>
    <Typography variant={TypographyVariant.EYEBROW_SMALL}>
      Centered info
    </Typography>
  </NavigationHeader.CenterContent>
  <NavigationHeader.QuickAction>
    <ButtonIcon icon={IconName.SEARCH} size={ButtonSize.SMALL} inverse />
  </NavigationHeader.QuickAction>
</NavigationHeader.Root>
```

## API Reference

### Root

The Root component serves as a container for the NavigationHeader.

| Name | Description | Default |
| --- | --- | --- |
| logo | Displays the logo of the NavigationHeader.ReactNode | - |
| mobileMenuIcon | Icon displayed on the left of the NavigationHeader when viewport is less than md.ReactNode | - |
| mobileMenuFitContent | Set mobile menu to fit content instead of full screen.boolean | false |
| sticky | Sets the Root to top sticky.boolean | true |
| onSkipToMainAction | Callback to manage focus when skipping to main content (only available when navigating with keyboard).(() => void) | - |
| contained | Add a max-width to the Root container.boolean | false |
| fullWidth | Make the Root container full width. Takes precedence over contained propboolean | false |
| megaMenuTriggerMode | Mega menu trigger behavior (click or hover)."click""hover" | "TriggerMode.CLICK" |
| isBackgroundBranded | Applies branded background color.boolean | false |
| subHeader | Secondary header content below main navigation.ReactNode | - |
| burgerMd | Shows burger menu on tablet breakpoint (md: 768-1279px).boolean | false |

### StartContent

> Inherits from div tag

| Name | Description | Default |
| --- | --- | --- |
| overflowLabel | Label for the 'More' overflow button (only used when enableAutoOverflow is true)string | "More" |
| overflowAriaLabel | Accessible label for the 'More' overflow button (only used when enableAutoOverflow is true)string | "Show more items" |
| enableAutoOverflow | Enable automatic overflow handling with a 'More' button. When enabled, items that don't fit will be moved to a dropdown menu.boolean | false |

### CenterContent

> Inherits from div tag

### EndContent

> Inherits from div tag

### Item

Item manages the responsive features of the NavigationHeader. It is automatically hidden when viewport size is under md.

| Name | Description | Default |
| --- | --- | --- |
| md | Should display the item on md viewport sizeboolean | true |
| lg | Should display the item on lg viewport sizeboolean | true |
| xl | Should display the item on xl viewport sizeboolean | true |
| xxl | Should display the item on 2xl viewport sizeboolean | true |
| xxxl | Should display the item on 3xl viewport sizeboolean | true |

### Action

Manages styles and accessibility of the interactive element of the menu item.

> Inherits from Title props.

### QuickAction

The action to be displayed on the right side of the menu.
It is only displayed when viewport size is under md.

> Inherits from div tag.

## Additional Props

### burgerMd

Controls the visibility of the mobile burger menu on tablet devices (md breakpoint: 768px-1279px).

- Type: boolean
- Default: false
- Usage:
  - Set to false (default): The burger menu is hidden on tablets, showing the full navigation instead. Mobile (xs/sm) still shows the burger.
  - Set to true: The burger menu is also shown on tablets, useful for complex navigations.

```
// Default behavior - hide burger on tablets
<NavigationHeader.Root
logo={<img src={logo} alt="Logo" />}
mobileMenuIcon={<ButtonIcon icon="menu" />}
>
{/* Navigation items */}
</NavigationHeader.Root>

// Show burger on tablets

<NavigationHeader.Root
burgerMd={true}
logo={<img src={logo} alt="Logo" />}
mobileMenuIcon={<ButtonIcon icon="menu" />}
>
{/* Navigation items */}
</NavigationHeader.Root>
```

### subHeader

An optional secondary navigation bar displayed below the main navigation header.

- Type: ReactNode
- Usage: Typically used for additional navigation links, tabs, or contextual actions.

```
<NavigationHeader.Root
logo={<img src={logo} alt="Logo" />}
subHeader={
  <>
    <NavigationHeader.Item>
      <Menu openOnHover>
        <Menu.Trigger>
          <NavigationHeader.Action>
            Category 1 <Menu.Item.Icon name="expand_more" />
          </NavigationHeader.Action>
        </Menu.Trigger>
        <Menu.Dropdown>
          <Menu.Item>Subcategory 1</Menu.Item>
          <Menu.Item>Subcategory 2</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </NavigationHeader.Item>
    <NavigationHeader.Item>
      <NavigationHeader.Action>Category 2</NavigationHeader.Action>
    </NavigationHeader.Item>
  </>
}
>
{/* Main navigation items */}
</NavigationHeader.Root>
```

## Accessibility

Focusing with Tab on the logo will display the Skip to main content button.
