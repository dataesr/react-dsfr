## Tag simple

Le tag catégorise/classe/organise les contenus à l'aide de mots-clés. Il aide les utilisateurs à rechercher et à trouver facilement une information.

### Tag simple par défault
```jsx
  <Tag>Label tag</Tag>
```
### Tag simple avec icône à gauche
```jsx
  <Tag icon="arrow-right-line" iconPosition="left">Label tag</Tag>
```
### Tag simple avec icône à droite
```jsx
  <Tag icon="arrow-right-line">Label tag</Tag>
```

## Tag cliquable

Le tag cliquable donne accès à une page avec des contenus associés à ce tag.

### Tag cliquable par défault
```jsx
  <Tag as="a" href="#">Label tag</Tag>
```
### Tag cliquable avec icône à gauche
```jsx
  <Tag as="a" href="#" icon="arrow-right-line" iconPosition="left">Label tag</Tag>
```
### Tag cliquable avec icône à droite
```jsx
  <Tag as="a" href="#" icon="arrow-right-line">Label tag</Tag>
```

## Groupe de tags

### Tags non cliquables
```jsx
import { Tag, TagGroup } from '.';
<>
  Medium:
  <TagGroup>
    <Tag as="span">Label tag</Tag>
    <Tag as="span" scheme="soft-orange-dark" icon="arrow-right-line" iconPosition="left">Label tag</Tag>
    <Tag as="span" scheme="soft-orange-dark" icon="arrow-right-line">Label tag</Tag>
    <Tag as="span" scheme="soft-orange-dark">Label tag</Tag>
    <Tag as="span" icon="arrow-right-line" iconPosition="left">Label tag</Tag>
    <Tag as="span" icon="arrow-right-line">Label tag</Tag>
  </TagGroup>
  Small:
  <TagGroup>
    <Tag size="sm" as="span">Label tag</Tag>
    <Tag size="sm" as="span" icon="arrow-right-line" iconPosition="left">Label tag</Tag>
    <Tag size="sm" as="span" icon="arrow-right-line">Label tag</Tag>
    <Tag size="sm" as="span">Label tag</Tag>
    <Tag size="sm" as="span" icon="arrow-right-line" iconPosition="left">Label tag</Tag>
    <Tag size="sm" as="span" icon="arrow-right-line">Label tag</Tag>
  </TagGroup>
</>
```

### Tags cliquables
```jsx
import { Tag, TagGroup } from '.';
<>
Medium:
<TagGroup>
  <Tag as="a" href="#">Label tag</Tag>
  <Tag as="a" href="#" icon="arrow-right-line" iconPosition="left">Label tag</Tag>
  <Tag as="a" href="#" icon="arrow-right-line">Label tag</Tag>
  <Tag as="a" href="#">Label tag</Tag>
  <Tag as="a" href="#" icon="arrow-right-line" iconPosition="left">Label tag</Tag>
  <Tag as="a" href="#" icon="arrow-right-line">Label tag</Tag>
</TagGroup>
Small:
<TagGroup>
  <Tag as="a" href="#" size="sm">Label tag</Tag>
  <Tag as="a" href="#" size="sm" icon="arrow-right-line" iconPosition="left">Label tag</Tag>
  <Tag as="a" href="#" size="sm" icon="arrow-right-line">Label tag</Tag>
  <Tag as="a" href="#" size="sm">Label tag</Tag>
  <Tag as="a" href="#" size="sm" icon="arrow-right-line" iconPosition="left">Label tag</Tag>
  <Tag as="a" href="#" size="sm" icon="arrow-right-line">Label tag</Tag>
</TagGroup>
</>
```
