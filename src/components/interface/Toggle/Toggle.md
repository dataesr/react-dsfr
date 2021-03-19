### Toggle

```jsx
import { useState } from 'react';
import Container from '../../foundation/grid/Container';
import Row from '../../foundation/grid/Row';
import Col from '../../foundation/grid/Col';
const [checked1, setCheched1] = useState(false);
const [checked2, setCheched2] = useState(false);
const handleCheck1 = () => setCheched1(!checked1);
const handleCheck2 = () => setCheched2(!checked2);
<Container>
  <Row gutter>
    <Col n="4">
      <Toggle
        isChecked={checked1}
        onChange={handleCheck1}
        label="Accepter les cookies"
        description="Activez-moi!"
        hasSeparator
        hasLabelLeft
      />
    </Col>
    <Col n="4">
      <Toggle
        isDisabled
        isChecked={checked2}
        onChange={handleCheck2}
        label="Accepter les cookies"
        description="Je suis en état inactif"
        hasSeparator
      />
    </Col>
  </Row>
</Container>
```
