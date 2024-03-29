## Call Stack:
Manages execution contexts including Global Execution Context and Function Execution Contexts. Based on LIFO principle i.e. last-in-first-out. Primitives are stored in
Global Execution Context (top level code that is not inside any function). Contains variable environment, scope chan and this keyword.

Scope refers to the space or environment in which a certain variable is declared. Three types of scope: global, function and block.

## Heap:
Much larger region for storing objects. Separation is useful to make execution safer from corruption and faster.

## Asynchronous Tasks:
1) Tasks such as setting image source attribute and timers are non-blocking as they take place in web APIs environment and not in callstack.
2) Callback functions attached to the asynchronous events through addEventListener are only placed in callback queue once completed.
3) Callback functions in callback queue will wait for event loop to pick them up and put into callstack. 
4) For promises, they have special callback queue known as microstasks queue which has priority over callback queue.

## Event Loop:
The activity of event loop taking a callback function from callback queue and execute in the callstack is known as event loop tick. Coordinates between callstack and callback functions in callback queue. 
```javascript
console.log('Test Start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('resolved promise 1').then(res => console.log(res));
Promise.resolve('resolved promise 2').then(res => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(res);
};
console.log('Test End');

// Test Start
// Test End
// resolved promise 1
// resolved promise 2
// 0 sec timer      Happens after microtasks queue is completed. Cannot do high precision tasks with Javascript timers.
```
