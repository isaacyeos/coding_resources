## Routing:
```javascript
<li rounterLinkActive="myActiveClass"              // add CSS class to element     
     [routerLinkActiveOptions]="{exact: true}">     // shows active tab, marked if full path is in router link
     <a [routerLink]="['/users', 10, 'anna']">      // prevents page from reloading by default, loads /users/10/anna
     [queryParams]="{allowEdit: '1', value: '10'}"  // /allowEdit?=1value?=10
     [fragment]="loading"                           // /#loading
     </a>
</li>

onLoadServers(id: number) {
  this.router.navigate(['/users', id, 'edit'], {queryParams: {allowEdit:1}, fragment: 'loading'});
```
```javascript
// Navigate programmatically
constructor(private router: Router, private route: ActivatedRoute) {}

onLoadServers() {
  // perform some complex calculation
  this.router.navigate(['/users'], {relativeTo: this.route});    // relativeTo tells Angular what current route it is on
}
```
## Fetching Route Parameters:
```javascript
// Fetching route parameters i.e. home/users/1/john
// route.ts:
const appRoutes: Routes = [
  {path: 'users/:id/:name', component: UserComponent},
]
```
```javascript
// component.ts:
import { Subscription } from './rxjs/Subscription';

constructor(private route: ActivatedRoute) {}

user: {id: number, name: string};
paramSubscription: Subscription;

ngOnInit() {
  this.user = {
    id: this.route.snapshot.param['id'],
    name: this,route.snapshot.param['name']
  };
  
  // also have queryParams.subscribe() and fragment.subscribe()
  this.paramSubscription = this.route.params.subscribe((params: Params) => {   // runs when user param changes
    this.user.id = params['id'];
    this.user.name = params['name'];
  })

ngOnDestroy() {
  this.paramSubscription.unsubscribe();   // good habit but not necessary
}
}
```
## Preserving Route Parameters:
```javascript
onEdit() {
     this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
}
```
## Nesting Routes:
```javascript
// routing.ts
const appRoutes: Routes = [
  {path: 'users', component: UserComponent, children: [
     {path: 'id', component: UserComponent}
  ]},
]

// UserComponent.html
<router-outlet></router-outlet>    // need add this
```

