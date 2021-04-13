## Médias (intégrés au contenu) - Responsive medias
Les médias désignent vos contenus photos et vidéos. Lorsqu’ils sont intégré à une page de contenu, il est recommandé de suivre les règles décrites ci-dessous.

### Vidéo intégrée dans un contenu
Lorsqu’une vidéo est intégrée dans un contenu éditorial, elle est présentée par défaut en format 16:9 et peut intégrer une légende et un lien pour afficher la transcription. L’Iframe générée par l’hébergeur de la vidéo peut être différent du ratio par défaut de 16:9.

Il est possible d’opter pour un format 4:3 de la vidéo, à l’aide du modifier .rf-responsive-vid--4x3.

#### Ratio 16:9 :
```jsx
  <MediaVideo
    legend="Legend"
    buttonLabel="Button Label"
  >
    <iframe title="titre de l’iframe" class="rf-responsive-vid__player" src="https://www.youtube.com/embed/HyirpmPL43I" width="100%" height="100%" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" />
  </MediaVideo>
```

#### Ratio 4:3 :
```jsx
  <MediaVideo
    legend="Legend"
    ratio="4x3"
    buttonLabel="Transcription"
  >
    <iframe title="titre de l’iframe" class="rf-responsive-vid__player" src="https://www.youtube.com/embed/HyirpmPL43I" width="100%" height="100%" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" />
  </MediaVideo>
```

### Les trois tailles proposées pour les vidéos
Si vous souhaitez accentuer la visibilité d'une vidéo vous pouvez utiliser les différentes tailles à votre disposition
- LG : dans cette taille, la largeur de la vidéo est supérieure à celle du contenu.
- MD : dans cette taille, la largeur de la vidéo correspond à celle du contenu.
- SM : dans cette taille, la largeur de la vidéo est inférieure à celle du contenu.

#### Vidéo taille LG (125%)
La vidéo est plus grande que la zone de texte.
Exemple de vidéo LG format 16/9 :
```jsx
  <MediaVideo
    legend="Legend"
    size="lg"
    buttonLabel="Transcription"
  >
    <iframe title="titre de l’iframe" class="rf-responsive-vid__player" src="https://www.youtube.com/embed/HyirpmPL43I" width="100%" height="100%" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" />
  </MediaVideo>
```
Exemple de vidéo LG format 4/3 :
```jsx
  <MediaVideo
    legend="Legend"
    size="lg"
    ratio="4X3"
    buttonLabel="Transcription"
  >
    <iframe title="titre de l’iframe" class="rf-responsive-vid__player" src="https://www.youtube.com/embed/HyirpmPL43I" width="100%" height="100%" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" />
  </MediaVideo>
```

#### Vidéo taille SM (75%)
La largeur de la vidéo est plus petite que la zone de texte.
Exemple de vidéo SM format 16/9 :
```jsx
  <MediaVideo
    legend="Legend"
    size="sm"
    buttonLabel="Transcription"
  >
    <iframe title="titre de l’iframe" class="rf-responsive-vid__player" src="https://www.youtube.com/embed/HyirpmPL43I" width="100%" height="100%" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" />
  </MediaVideo>
```
Exemple de vidéo SM format 4/3 :
```jsx
  <MediaVideo
    legend="Legend"
    size="sm"
    ratio="4X3"
    buttonLabel="Transcription"
  >
    <iframe title="titre de l’iframe" class="rf-responsive-vid__player" src="https://www.youtube.com/embed/HyirpmPL43I" width="100%" height="100%" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" />
  </MediaVideo>
```
