# ChuckNorrisJokeModule

This project was built as an example of how an Angular module can be built for reuse among a number of different Angular applications. Simply import the module and reference the component tag and the example should work.


## Angular App Module
```
i...

import { ChuckNorrisJokeModule } from 'projects/chuck-norris-joke-module/src/public-api';

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