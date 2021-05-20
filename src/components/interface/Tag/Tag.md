## Tag simple

Le tag catégorise/classe/organise les contenus à l'aide de mots-clés. Il aide les utilisateurs à rechercher et à trouver facilement une information.

### Tag simple par défault
```jsx
  <Tag>Label tag</Tag>
```
### Tag simple avec icône à gauche
```jsx
<Tag
    icon="ri-arrow-right-line"
    iconPosition="left">
    Label tag
</Tag>
```
### Tag simple avec icône à droite
```jsx
<Tag icon="ri-arrow-right-line">Label tag</Tag>
```

## Tag cliquable

Le tag cliquable donne accès à une page avec des contenus associés à ce tag.

### Tag cliquable par défault
```jsx
<Tag
    as="a"
    href="#">Label tag
</Tag>
```
### Tag cliquable avec icône à gauche
```jsx
  <Tag
    as="a"
    href="#"
    icon="ri-arrow-right-line"
    iconPosition="left">Label tag
</Tag>
```
### Tag cliquable avec icône à droite
```jsx
<Tag
    as="a"
    href="#"
    icon="ri-arrow-right-line">Label tag
</Tag>
```

## Groupe de tags

### Tags non cliquable

#### Large
```jsx
import { Tag, TagGroup } from '.';

<TagGroup>
    <Tag
        as="span"
        size="lg">Label tag
    </Tag>
    <Tag
        as="span"
        size="lg"
        icon="ri-markup-line"
        iconPosition="left">Label tag
    </Tag>
    <Tag
        as="span"
        size="lg"
        icon="ri-markup-line">Label tag
    </Tag>
</TagGroup>
```

#### Medium
```jsx
import { Tag, TagGroup } from '.';

<TagGroup>
    <Tag
        as="span">Label tag
    </Tag>
    <Tag
        as="span"
        icon="ri-arrow-right-line"
        iconPosition="left">Label tag
    </Tag>
    <Tag
        as="span"
        icon="ri-arrow-right-line">Label tag
    </Tag>
</TagGroup>
```

#### Small
```jsx
import { Tag, TagGroup } from '.';

<TagGroup>
    <Tag
        as="span"
        size="sm">Label tag
    </Tag>
    <Tag
        as="span"
        size="sm"
        icon="ri-chat-smile-2-line"
        iconPosition="left">Label tag
    </Tag>
    <Tag
        as="span"
        size="sm"
        icon="ri-chat-smile-2-line">Label tag
    </Tag>
</TagGroup>
```

### Tags cliquables

#### Large
```jsx
import { Tag, TagGroup } from '.';

<TagGroup>
  <Tag
      as="a"
      href="/"
      size="lg">Label tag
  </Tag>
  <Tag
      as="a"
      href="/"
      size="lg"
      icon="ri-arrow-right-s-line"
      iconPosition="left">Label tag
  </Tag>
  <Tag
      as="a"
      href="/"
      size="lg"
      icon="ri-arrow-right-s-line">Label tag
  </Tag>
</TagGroup>
```

#### Medium
```jsx
import { Tag, TagGroup } from '.';

<TagGroup>
  <Tag
      as="a"
      href="/">Label tag
  </Tag>
  <Tag
      as="a"
      href="/"
      icon="ri-arrow-right-line"
      iconPosition="left">Label tag
  </Tag>
  <Tag
      as="a"
      href="/"
      icon="ri-arrow-right-line">Label tag
  </Tag>
</TagGroup>
```

#### Small
```jsx
import { Tag, TagGroup } from '.';

<TagGroup>
  <Tag
      as="a"
      href="/"
      size="sm">Label tag
  </Tag>
  <Tag
      as="a"
      href="/"
      size="sm"
      icon="ri-arrow-right-line">Label tag
  </Tag>
  <Tag
      as="a"
      href="/"
      size="sm"
      icon="ri-arrow-right-line"
      iconPosition="left">Label tag
  </Tag>
</TagGroup>
```
