[Npm Lib](https://www.npmjs.com/package/nepali-date-carburettor)

### Nepali Date Carburettor
Converts english date string to nepali date string, always returns in the format of `YYYY-MM-DD`,

### Caveat
support from `2000 BS` to `2100 BS` only.

### Usage
#### Install
``` bash
npm i nepali-dayjs-date-converter
```
``` bash
yarn add nepali-dayjs-date-converter
```
``` bash
pnpm add nepali-dayjs-date-converter
```

#### Ad to Bs

```ts
import {ADToBS} from "nepali-dayjs-date-converter"

const convertedNepaliDate = ADToBS('2024-06-14'); // 2081-02-32
```

#### Bs to Ad
```ts
import {BSToAD} from "nepali-dayjs-date-converter"

const convertedNepaliDate = BSToAD('2081-02-32'); // 2024-06-14
```