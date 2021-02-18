## Liens - Links

Le lien permet la navigation entre une page et un autre contenu au sein de la même page, du même site ou externe. 
Pour les actions d’un autre type, comme la soumission d’un formulaire, il faut utiliser le composant boutons.

### Lien contextuel
Le lien contextuel se trouve au sein d’un texte et reprend les caractéristiques typographiques de celui-ci (font, couleur, taille) tout en étant souligné. Il peut être suivi d’une icône (par exemple : lien sortant).

```js
  <p>
    Lorem [...] elit, <Link title="titre lien interne" href="#" target="_self">lien interne</Link> incididunt [...] morbi.
  </p>
```

### Lien externe
Le lien ‘externe’ doit être utilisé pour les liens pointant vers un autre site et ouvrant un nouvel onglet/une nouvelle page (via l’attribut target=”blank”). Cela est matérialisé par une icône à droite du lien, l’attribut ‘title’ du lien doit mentionner qu’il s’agit d’un lien externe et que l’on ouvre une nouvelle fenêtre.

```js
<p>
  Lorem [...] elit, <Link title="titre lien externe - nouvelle fenêtre" href="#" target="_blank">lien externe - nouvelle fenêtre</Link> incididunt [...]   morbi.
</p>
```

#### Lien simple
Le  lien simple en dehors du contenu peut se présenter : 
- avec une icône à droite 
- avec une icône à gauche 
- sans icône
- icône seule

Si une icône est présente, son choix et son emplacement doit rendre l’action à venir ou la destination plus explicite. 
L’icône seule n'est à utiliser que très rarement, et le lien doit contenir un texte afin d'être lu par les lecteurs d'écran. 

```js
  <Link href="#" isSimple>lien simple</Link>
```

```js
  <Link href="#" isSimple icon="rf-fi-arrow-right-line">lien simple avec icône à droite</Link>
```

```js
  <Link href="#" isSimple icon="rf-fi-arrow-left-line" iconPlace="left">lien simple avec icône à gauche</Link>
```

```js
  <Link href="#" isSimple icon="rf-fi-arrow-down-line" iconPlace="left" />
```