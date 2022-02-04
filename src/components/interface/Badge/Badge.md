Le composant badge permet de mettre en avant une information de type “statut” ou “état” sur un élément du site.
Les icônes sont disponibles uniquement pour les badges systèmes ('success', 'error', 'warning', 'new', 'info').

### Success

```jsx
<Badge text="Success" type="success" colorFamily="brown-caramel"/>
```

### Erreur
A utiliser quand il y a plusieurs erreurs dans un formulaire, ou des erreurs bloquantes à remonter pour l’utilisateur.

```jsx
<Badge text="error" type="error"/>
```

### Small

```jsx
<Badge small text="Information" icon={false}/>
```
