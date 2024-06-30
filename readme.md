### Nepali Date Carburettor
Converts english date string to nepali date string, always returns in the format of `YYYY-MM-DD`,

### Caveat
support from `2000BS` to `2100BS` only.

### Usuage

#### Ad to Bs
```ts
import {AdToB} from "nepali-date-carburettor"

const convertedNepaliDate = ADToBS('2024-06-14'); // 2081-02-32
```

#### Bs to Ad
```ts
import {BsToAd} from "nepali-date-carburettor"

const convertedNepaliDate = ADToBS('2081-02-32'); // 2024-06-14
```