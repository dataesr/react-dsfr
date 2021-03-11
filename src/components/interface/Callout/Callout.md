### Callout

```jsx
import { Callout, CalloutText, CalloutTitle } from '.';
<Callout hasInfoIcon={false}>
  <CalloutTitle as="h3">Callout title</CalloutTitle>
  <CalloutText>Callout text that might be short and concise.</CalloutText>
</Callout>
```

```jsx
import { Callout, CalloutText, CalloutTitle } from '.';
<Callout scheme="soft-green-warm">
  <CalloutTitle as="h3">Callout title</CalloutTitle>
  <CalloutText>Callout text that might be short and concise.</CalloutText>
</Callout>
```

```jsx
import { Callout, CalloutText, CalloutTitle } from '.';
import Button from '../Button';
<Callout scheme="soft-green-warm">
  <CalloutTitle as="h3">Callout title</CalloutTitle>
  <CalloutText>Callout text that might be short and concise.</CalloutText>
  <Button title="acceder...">
    Accéder au service
  </Button>
</Callout>
```
