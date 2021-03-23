## Médias (intégrés au contenu) - Responsive medias
Les médias désignent vos contenus photos et vidéos. Lorsqu’ils sont intégré à une page de contenu, il est recommandé de suivre les règles décrites ci-dessous.

### Image intégrée dans un contenu
Lorsqu’une image est intégrée dans un contenu éditorial, elle est présentée en format 16:9 et est précédée et suivie d'un espacement, et d'une légende comme illustré ci-dessous.
```jsx
  <MediaImage
    src="https://bibliotheques.csdm.qc.ca/files/2018/11/10_banques_dimages_gratuites_libres_de_droits-300x169.jpg"
    alt="description alternative à l‘image"
    legend="légende de l'image"
  />
```

#### Les trois tailles proposées pour les images
Si vous souhaitez accentuer la visibilité d'une image vous pouvez utiliser les différentes tailles à votre disposition :
- LG : dans cette taille, la largeur de l’image est supérieure à celle du contenu.
- MD : dans cette taille, la largeur de l’image correspond à celle du contenu. Par défaut (100%)
- SM : dans cette taille, la largeur de l’image est inférieure à celle du contenu.

#### Image taille LG (125%)
L’image est plus grande que la zone de texte.
```jsx
  <MediaImage
    src="https://bibliotheques.csdm.qc.ca/files/2018/11/10_banques_dimages_gratuites_libres_de_droits-300x169.jpg"
    alt="description alternative à l‘image"
    legend="légende de l'image"
    size="lg"
  />
```

#### Image taille SM (75%)
L’image est plus petite que la zone de texte.
```jsx
  <MediaImage
    src="https://bibliotheques.csdm.qc.ca/files/2018/11/10_banques_dimages_gratuites_libres_de_droits-300x169.jpg"
    alt="description alternative à l‘image"
    legend="légende de l'image"
    size="sm"
  />
```