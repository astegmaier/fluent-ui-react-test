# Purpose 
This repo tests the ability to import and use components from the [fluent-ui-react](https://github.com/microsoft/fluent-ui-react) library. It demonstrates [a bug](https://github.com/microsoft/fluent-ui-react/issues/2259) with the library not including the right type definitions by default.

## Repro Steps
1. Clone this repository locally.
2. Make sure yarn is installed (if it isn't run `npm install -g yarn`).
3. Run `yarn` to install dependencies.
4. Run `yarn start` to build the project and run it at http://localhost:1234. This will also run `tsc` to perform type checking. (You can also run `yarn run check` to run `tsc` by itself).

### Result:

The project builds and runs fine (showing a simple `<Button>` component). However, `tsc` complains:

```
node_modules/@fluentui/react/dist/es/components/Carousel/Carousel.d.ts:3:20 - error TS7016: Could not find a declaration file for module 'lodash'. '/Users/Andrew/Projects/fluent-ui-react-test/node_modules/lodash/lodash.js' implicitly has an 'any' type.
  Try `npm install @types/lodash` if it exists or add a new declaration (.d.ts) file containing `declare module 'lodash';`

3 import * as _ from 'lodash';
                     ~~~~~~~~

node_modules/@fluentui/react/dist/es/components/Dropdown/Dropdown.d.ts:3:20 - error TS7016: Could not find a declaration file for module 'lodash'. '/Users/Andrew/Projects/fluent-ui-react-test/node_modules/lodash/lodash.js' implicitly has an 'any' type.
  Try `npm install @types/lodash` if it exists or add a new declaration (.d.ts) file containing `declare module 'lodash';`

3 import * as _ from 'lodash';
                     ~~~~~~~~

node_modules/@fluentui/react/dist/es/utils/applyAccessibilityKeyHandlers.d.ts:2:20 - error TS7016: Could not find a declaration file for module 'lodash'. '/Users/Andrew/Projects/fluent-ui-react-test/node_modules/lodash/lodash.js' implicitly has an 'any' type.
  Try `npm install @types/lodash` if it exists or add a new declaration (.d.ts) file containing `declare module 'lodash';`

2 import * as _ from 'lodash';
                     ~~~~~~~~
```

This error can be fixed if you manually install `@types/lodash` (by running `yarn add @types/lodash -D`). However, for a good developer experience, this shouldn't be necessary - (perhaps `@types/lodash` should be among the dependencies of the package, or included through some other build mechanism).

