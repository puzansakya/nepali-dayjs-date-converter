[Npm Lib](https://www.npmjs.com/package/nepali-date-carburettor)

### Nepali Date Carburettor
Converts english date string to nepali date string, always returns in the format of `YYYY-MM-DD`,

### Caveat
support from `2000 BS` to `2100 BS` only.

### Usage
#### Install
``` bash
npm i nepali-date-carburettor
```
``` bash
yarn add nepali-date-carburettor
```
``` bash
pnpm add nepali-date-carburettor
```

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