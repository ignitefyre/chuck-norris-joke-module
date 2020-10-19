# ChuckNorrisJokeModule

This project was built as an example of how an Angular module can be built for reuse among a number of different Angular applications. Simply import the module and reference the component tag and the example should work.

## Install Module
Run `npm i chuck-norris-joke-module`

## Angular App Module
```
...

import { ChuckNorrisJokeModule } from 'chuck-norris-joke-module';

@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...
    ChuckNorrisJokeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

## Angular App Component
```
<chuck-norris-joke></chuck-norris-joke>
```