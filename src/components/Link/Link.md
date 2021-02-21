## Liens - Links

Le lien permet la navigation. Pour les actions d’un autre type, comme la soumission d’un formulaire, il faut utiliser le composant boutons.

### Lien contextuel
Le lien contextuel se trouve au sein d’un texte et reprend les caractéristiques typographiques de celui-ci (font, couleur, taille) tout en étant souligné.

```js
  <p>
    Lorem elit, <Link title="titre lien interne" href="#" target="_self">lien contextuel</Link> incididunt morbi.
  </p>
```

```js
  <p>
    Lorem elit, <Link icon="rf-fi-search-line" title="titre lien interne" href="#" target="_self">lien contextuel avec icône</Link> incididunt morbi.
  </p>
```

### Lien externe
Le lien ‘externe’ doit être utilisé pour les liens pointant vers un autre site et ouvrant un nouvel onglet (via l’attribut target=”blank”).

```js
<p>
  Lorem elit, <Link title="titre lien externe - nouvelle fenêtre" href="#" target="_blank">lien externe - nouvelle fenêtre</Link> incididunt morbi.
</p>
```

#### Lien simple


```js
  <Link href="#" isSimple>lien simple</Link>
```

```js
  <Link href="#" isSimple icon="rf-fi-arrow-right-line">lien simple avec icône à droite</Link>
```

```js
  <Link href="#" isSimple icon="rf-fi-arrow-left-line" iconPosition="left">lien simple avec icône à gauche</Link>
```


L’icône seule n'est à utiliser que très rarement, et le lien doit contenir un texte afin d'être lu par les lecteurs d'écran.
```js
  <Link href="#" isSimple icon="rf-fi-arrow-down-line" iconPosition="left" />
```