### Toggle

```jsx
import { useState } from 'react';
const [checked, setCheched] = useState(false);
const handleCheck = () => setCheched(!checked);
<Toggle isChecked={checked} onChange={handleCheck} label="switcher ?" description="Désactivez-moi!" hasSeparator hasLabelLeft />
```
