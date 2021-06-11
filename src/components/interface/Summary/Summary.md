## Sommaire - Summary

Le sommaire reprend les titres de section de la page sous forme d'ancre vers chaque titre de section. Au clic sur un des liens, l’utilisateur est redirigé dans la page, au niveau de la section cherchée.

```jsx
import { SummaryItem } from '.';

<Summary title="Sommaire">
    <SummaryItem href="#">Item 2</SummaryItem>
    <SummaryItem href="#">Item 3</SummaryItem>
    <SummaryItem href="#">Item 4</SummaryItem>
</Summary>
```

### Usage avec react-router-dom
```jsx
import { SummaryItem } from '.';
import { BrowserRouter as Router, Route, Link as RouterLink } from 'react-router-dom';

<Router>
    <Summary title="Sommaire">
        <SummaryItem asLink={<RouterLink to="/mySummaryItem" />}>Item 1</SummaryItem>
    </Summary>
</Router>
```
