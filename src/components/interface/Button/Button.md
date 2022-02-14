```jsx
<Button
    size="sm"
    title="title">basic sm button
</Button>
```

```jsx
<Button
    title="title">basic md button
</Button>
```

```jsx
<Button
    size="lg"
    title="title">basic lg button
</Button>
```

```jsx
<Button
    size="sm"
    secondary
    title="title">secondary sm button
</Button>
```

```jsx
<Button
    disabled
    title="title">disabled button
</Button>
```

```jsx
<Button
    icon="ri-lock-line"
    title="title">icon button
</Button>
```

```jsx
<Button
    icon="ri-alert-fill"
    iconPosition='right'
    size="md"
    title="title">icon on the right
</Button>
```

```jsx
<Button
    icon="ri-alert-fill"
    title="title" />
```

```jsx
import ButtonGroup from './ButtonGroup';

<ButtonGroup
    size="sm"
    isEquisized
    align="center"
    isInlineFrom="md"
>
    <Button
        submit
        data-test-id="save-profile-button"
        icon="ri-check-line"
    >
        Valider
    </Button>
    <Button
        secondary
        icon="ri-close-line"
    >
        Annuler
    </Button>
</ButtonGroup>
```


```jsx
import ButtonGroup from './ButtonGroup';

<ButtonGroup
    size="lg">
  <Button
      secondary
      title="title">secondary sm button
  </Button>
  <Button
      title="title">sm button
  </Button>
</ButtonGroup>
```

