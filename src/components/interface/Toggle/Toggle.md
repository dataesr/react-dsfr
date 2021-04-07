## Interrupteur - Toggle

### Toggle simple
```jsx
import { useState } from 'react';
const [checked, setCheched] = useState(true);

<Toggle
    isChecked={checked}
    onChange={() => setCheched(!checked)}
    label="Accepter les cookies"
/>
```

### Toggle label à gauche avec séparateur
```jsx
import { useState } from 'react';
const [checked, setCheched] = useState(false);

<Toggle
    isChecked={checked}
    onChange={() => setCheched(!checked)}
    label="Accepter les cookies"
    hasSeparator
    hasLabelLeft
/>
```

### Toggle disabled
```jsx
<Toggle
    isDisabled
    isChecked
    label="Accepter les cookies"
    description="Je suis en état inactif"
/>
```
