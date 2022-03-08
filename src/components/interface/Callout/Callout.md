## Callout - Mise en avant

La mise en avant est une proposition de mise en page du contenu éditorial pour mettre en évidence une information complémentaire.

```jsx
import { Callout, CalloutText, CalloutTitle } from '.';
<Callout hasInfoIcon={false}>
  <CalloutTitle as="h3">Callout title</CalloutTitle>
  <CalloutText>Callout text that might be short and concise.</CalloutText>
</Callout>
```

```jsx
import { Callout, CalloutText, CalloutTitle } from '.';
<Callout>
  <CalloutTitle as="h3">Callout title</CalloutTitle>
  <CalloutText>Callout text that might be short and concise.</CalloutText>
</Callout>
```

```jsx
import { Callout, CalloutText, CalloutTitle } from '.';
import { Button } from '../Button';
<Callout>
  <CalloutTitle as="h3">Callout title</CalloutTitle>
  <CalloutText>Callout text that might be short and concise.</CalloutText>
  <Button title="access">
    Access to service
  </Button>
</Callout>
```
