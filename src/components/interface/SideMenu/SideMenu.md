## SideMenu - Menu latéral

Le menu latéral permet aux utilisateurs de naviguer entre les différentes pages d’une rubrique ou d’un même thème.

```jsx
import { SideMenu, SideMenuItem, SideMenuLink } from '.';

<SideMenu title="SideMenu Title" buttonLabel="SideMenu Button">
  <SideMenuItem title="SideMenu Item #1">
    <SideMenuLink href="/">SideMenu Link #1</SideMenuLink>
    <SideMenuLink href="/">SideMenu Link #2</SideMenuLink>
  </SideMenuItem>
  <SideMenuItem title="SideMenu Item #2">
    <SideMenuItem title="SideMenu Level 2 Item #1">
      <SideMenuLink href="/">SideMenu Level 2 Link #1</SideMenuLink>
          <SideMenuLink href="/">SideMenu Level 2 Link #2</SideMenuLink>
    </SideMenuItem>
  </SideMenuItem>
</SideMenu>
```
