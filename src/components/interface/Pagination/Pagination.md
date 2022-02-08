## Avec gestion de la page par URL

```jsx
<Pagination buildURL={(page) => `my-path/page-${page}`} currentPage={8} pageCount={15} />
```

## Avec gestion de la page par state react

```jsx
import { useState } from 'react';

const [page, setPage] = useState(8);
<Pagination onClick={setPage} currentPage={page} pageCount={15} />
```
