import css from './Button.module.css'

function Button() {
    function handleClick() {

        alert('You have successfully ')
    }
  return (
    <>
    <button onClick={handleClick} className={css.btn}>Click me!</button>
    </>
)}

export default Button