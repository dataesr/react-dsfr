### Tableau

```jsx
<Table bordered captionPosition="bottom" caption="Mon super tableau">
  <thead>
    <tr>
      <th scope="col">Titre</th>
      <th scope="col"> Titre </th>
      <th scope="col"> Titre </th>
      <th scope="col"> Titre </th>
      <th scope="col"> Titre </th>
      <th scope="col"> Titre</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Donnée</td>
      <td>Donnée</td>
      <td>Donnée</td>
      <td>Donnée </td>
      <td>Donnée</td>
      <td>Donnée</td>
    </tr>
    <tr>
      <td>Donnée</td>
      <td>Donnée</td>
      <td>Donnée</td>
      <td>Donnée </td>
      <td>Donnée</td>
      <td>Donnée</td>
    </tr>
    <tr>
      <td>Donnée</td>
      <td>Donnée</td>
      <td>Donnée</td>
      <td>Donnée </td>
      <td>Donnée</td>
      <td>Donnée</td>
    </tr>
    <tr>
      <td>Donnée</td>
      <td>Donnée</td>
      <td>Donnée</td>
      <td>Donnée </td>
      <td>Donnée</td>
      <td>Donnée</td>
    </tr>
    <tr>
      <td>Donnée</td>
      <td>Donnée</td>
      <td>Donnée</td>
      <td>Donnée </td>
      <td>Donnée</td>
      <td>Donnée</td>
    </tr>
    <tr>
      <td>Donnée</td>
      <td>Donnée</td>
      <td>Donnée</td>
      <td>Donnée </td>
      <td>Donnée</td>
      <td>Donnée</td>
    </tr>
  </tbody>
</Table>
```

### Simple table with data
```js
import { SimpleTable } from '.';
const data = [
  {
    id: 'PE',
    level: 1,
    name_fr: 'Sciences & Technologies',
    name_en: 'Physical Sciences and Engineering',
  },
  {
    id: 'LS',
    level: 1,
    name_fr: 'Vie & Santé',
    name_en: 'Life Sciences',
  },
  {
    id: 'SH',
    level: 1,
    name_fr: 'Sciences Humaines & Sociales',
    name_en: 'Social Sciences and Humanities',
  },
  {
    id: 'PE1',
    level: 2,
    name_fr: 'Mathématiques',
    name_en: 'Mathematics',
  },
  {
    id: 'PE2',
    level: 2,
    name_fr: 'Constituants fondamentaux de la matière',
    name_en: 'Fundamental Constituents of Matter',
  },
  {
    id: 'PE3',
    level: 2,
    name_fr: 'Physique de la matière condensée',
    name_en: 'Condensed Matter Physics',
  },
  {
    id: 'PE4',
    level: 2,
    name_fr: 'Chimie physique et analytique',
    name_en: 'Physical and Analytical Chemical Sciences',
  },
  {
    id: 'PE5',
    level: 2,
    name_fr: 'Chimie de synthèse et matériaux',
    name_en: 'Synthetic Chemistry and Materials',
  },
  {
    id: 'PE6',
    level: 2,
    name_fr: 'Sciences informatiques et informatique',
    name_en: 'Computer Science and Informatics',
  },
  {
    id: 'PE7',
    level: 2,
    name_fr: 'Ingénierie des systèmes et de la communication',
    name_en: 'Systems and Communication Engineering',
  },
  {
    id: 'PE8',
    level: 2,
    name_fr: 'Ingénierie des produits et des procédés',
    name_en: 'Products and Processes Engineering',
  },
  {
    id: 'PE9',
    level: 2,
    name_fr: "Sciences de l'Univers",
    name_en: 'Universe Sciences',
  },
  {
    id: 'PE10',
    level: 2,
    name_fr: 'Sciences de la Terre',
    name_en: 'Earth System Science',
  }
];
<SimpleTable caption="Mon super tableau" data={data} />
```
