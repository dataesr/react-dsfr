## Summary

Le sommaire reprend les titres de section de la page sous forme d'ancre vers chaque titre de section. Au clic sur un des liens, l’utilisateur est redirigé dans la page, au niveau de la section cherchée.

### Exemple
```jsx
    <Summary title="Sommaire">
        <SummaryItem asLink={<RouterLink to="/mySummaryItem" />}>Item 1</SummaryItem>
        <SummaryItem href="#">Item 2</SummaryItem>
        <SummaryItem href="#">Item 3</SummaryItem>
        <SummaryItem href="#">Item 4</SummaryItem>
    </Summary>
```
