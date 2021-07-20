## Alertes - Alerts

Les alertes permettent d’attirer l’attention de l’utilisateur sur une information sans interrompre sa tâche en cours.

### Information
A utiliser pour mettre en exergue des informations importantes.

```jsx
<Alert title="Information" description="Description de l'alerte" />
```

### Succes
Sert à indiquer à l’utilisateur qu’une action ou une tâche a été terminée avec succès.

```jsx
<Alert title="Succes" description="Vous avez réussi !" type="success"/>
```

### Erreur
A utiliser quand il y a plusieurs erreurs dans un formulaire, ou des erreurs bloquantes à remonter pour l’utilisateur.

```jsx
<Alert title="Erreur" description="Impossible d'effectuer cette action" type="error"/>
```

### Alerte small

L’alerte small est à utiliser lorsque l’espace d’affichage est réduit.

```jsx
<Alert title="Information" description="Description de l'alerte" small/>
```

### Alerte avec bouton de fermeture

Il est possible d’ajouter un bouton de fermeture afin que l’utilisateur puisse masquer l’alerte. 

```jsx
<Alert title="Information" description="Description de l'alerte" closable/>
```
 