## Table - Table de données

### Tableau simple
```jsx
<Table captionPosition="bottom" caption="Table Caption" bordered>
  <thead>
    <tr>
      <th scope="col">Head Title</th>
      <th scope="col"> Head Title </th>
      <th scope="col"> Head Title </th>
      <th scope="col"> Head Title </th>
      <th scope="col"> Head Title </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>data</td>
      <td>data</td>
      <td>data </td>
      <td>data</td>
      <td>data</td>
    </tr>
    <tr>
        <td>data</td>
        <td>data</td>
        <td>data </td>
        <td>data</td>
        <td>data</td>
    </tr>
  </tbody>
</Table>
```

### Tableau simple avec données en props
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
  }
];
<SimpleTable caption="Simple Table caption" data={data} />
```
