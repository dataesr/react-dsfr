## Toggle - Interrupteur
L’usage des interrupteurs est à privilégier pour paramétrer des fonctionnalités transverses. Le changement d'état de l’interrupteur ne nécessite pas de validation.

### Toggle simple
```jsx
<Toggle
    label="Toggle Label"
/>
```
### Usage avec React state
```jsx
import { useState } from 'react';
const [checked, setCheched] = useState(false);

<Toggle
    checked={checked}
    onChange={() => setCheched(!checked)}
    label="Toggle Label"
/>
```

### Toggle avec séparateur et label à gauche
```jsx
<Toggle
    checked={false}
    label="Toggle Label"
    hasSeparator
    hasLabelLeft
/>
```

### Toggle disabled
```jsx
<Toggle
    disabled
    checked
    label="Toggle Label"
    description="Toggle descirption"
/>
```
