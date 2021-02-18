### Tag par défaut

Le tag par défaut permet d’afficher une information sur un contenu. 
Le tag est composé des éléments suivants :
- un libellé - obligatoire.
- une icône - optionnelle.

 Le libellé contient un mot-clé ou une expression qui permet de catégoriser votre contenu
```js
  <Tag>Label tag</Tag>
  <br /><br />
  <Tag icon="rf-fi-arrow-right-line" iconPlace="left">Label tag</Tag>
  <br /><br />
  <Tag icon="rf-fi-arrow-right-line">Label tag</Tag>
```

### Tag  cliquable
Le tag cliquable donne accès à une page avec des contenus associés à ce tag (liste de contenus, liste de résultats de recherche). Le tag cliquable peut être aussi utilisé pour filtrer des contenus (liste de contenus, moteur de recherche).
```js
  <Tag as="a" href="#">Label tag</Tag>
  <br /><br />
  <Tag as="a" href="#" icon="rf-fi-arrow-right-line" iconPlace="left">Label tag</Tag>
  <br /><br />
  <Tag as="a" href="#" icon="rf-fi-arrow-right-line">Label tag</Tag>
```

### Groupe de tags ???

### Tailles
Les deux types de tags sont disponibles en deux tailles SM et MD pour pouvoir s’adapter au contexte d’affichage. La taille MD est la taille par défaut. 
#### Tags non cliquables
```js
  <Tag>Label tag</Tag>
  <br /><br />
  <Tag icon="rf-fi-arrow-right-line" iconPlace="left">Label tag</Tag>
  <br /><br />
  <Tag icon="rf-fi-arrow-right-line">Label tag</Tag>
  <br /><br />
  <Tag size="sm">Label tag</Tag>
  <br /><br />
  <Tag size="sm" icon="rf-fi-arrow-right-line" iconPlace="left">Label tag</Tag>
  <br /><br />
  <Tag size="sm" icon="rf-fi-arrow-right-line">Label tag</Tag>
```
#### Tags cliquables
```js
  <Tag as="a" href="#">Label tag</Tag>
  <br /><br />
  <Tag as="a" href="#" icon="rf-fi-arrow-right-line" iconPlace="left">Label tag</Tag>
  <br /><br />
  <Tag as="a" href="#" icon="rf-fi-arrow-right-line">Label tag</Tag>
  <br /><br />
  <Tag size="sm" as="a" href="#">Label tag</Tag>
  <br /><br />
  <Tag size="sm" as="a" href="#" icon="rf-fi-arrow-right-line" iconPlace="left">Label tag</Tag>
  <br /><br />
  <Tag size="sm" as="a" href="#" icon="rf-fi-arrow-right-line">Label tag</Tag>
```

### Groupe de tag cliquable SM ???