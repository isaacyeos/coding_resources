## Styling:
Use states to change styling for a HTML element or adding CSS classes dynamically.
```javascript
[isValid, setIsValid] = useState(true);

if(enteredValue,trim().length === 0) {
  setIsValid(false);
  return;
}

return (
  <div className={`form-control ${!isValid ? 'invalid' : ''}`}  // .form-control.invalid is a CSS class
  <label style={{ color: !isValid ? 'red' : 'black'}}   // setting inline 
  
)
```
## CSS Files:
When adding CSS files to components, they are added globally and not scoped only to the components they are added in. Can use either Styled Components or CSS Module library.

## Styled Components:
Has methods for all HTML tags. Guarantees every className is unique so that it doesn't spill over to other components. Styling stored in js files.
For different devices, use @media (condition) to set styling for mobile devices, computer etc.
```
npm install --save styled-components
```
```javascript
import styled from 'styled-components'' ;

const Button = styled.button`
  font: inherit;
  padding: 0.5rem 1.5rem;
  color: ${props => (props.invalid ? 'red' : white)}; // props are set in JSX styled component
  
  & focus {   // special pseudo selector for this component only
    outline: none;
  }
`; 

return (
  <Button invalid={!isValid}>
)
```
## CSS Module:
Buiilt into React. Simply use styles() method. Recommended way as styling is stored in .css files.
```javascript
import styles from './Button.module.css';

const Button = props => {
  return (
    <button className={styles.button}></button>   // or styles['button-control']
    <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}  // js will return 2nd element if results to true
  )
}
```
