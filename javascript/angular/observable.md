## Fundamentals:
An observable is a data source i.e. from user input events, HTTP requests, etc. Used for asynchronous tasks.
Observer can either handle data, error or completion. Biggest advantage over promises is that observables have operators to transform data using pipe().
```javascript
private anObservable: Subscription;

ngOnInit() {
  anObservable.subscribe(function(){}, error => console.error(error));
  
  anObservable.pipe(map(x => 3*x));
}

ngOnDestroy(){
  anObservable.unsubscribe();
}
```
## Subjects:
Recommended way rather than using emit() and subscribe(). Used for active events rather than passive like HTTPrequests.
```javascript
// services:
import { Subject } from 'rxjs';

someEmitter = new Subject<boolean>();

// component.ts to hear:
this.services.someEmitter.subscribe()   // or next()
```