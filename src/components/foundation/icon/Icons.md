## Icons - Icônes

Toutes les icônes de la librairie [remixicon](https://remixicon.com/) sont utilisables.
Le cdn de la librairie remixicon doit être ajouté dans le <head> de votre site.
`<link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet">`

### Usage simple
```jsx
import Icon from './Icon';

<Icon
    name="ri-bubble-chart-line"
    size="1x">
    <p>Lorem ipsum</p>
</Icon>
```

```jsx
import Icon from './Icon';
<Icon
    className="ds-fr--v-middle"
    name="ri-music-2-line"
    iconPosition="right"
    size="lg">
    <h3>Title</h3>
</Icon>
```

### Usage avec un composant Button

```jsx
import Icon from './Icon';
import Button from '../../interface/Button';

<Button
    title="title"
    icon="ri-calendar-todo-fill"
    iconPosition="right">click
</Button>
```

### Usage avec un composant Link
```jsx
import Icon from './Icon';
import Link from '../../interface/Link';

<Link
    title="title"
    icon="ri-twitter-line"
    iconPosition="left"
    >this is a link
</Link>
```




