import css from "./Product.module.css";
import { RxGithubLogo } from "react-icons/rx";

function Product({ title, children }) {
  return (
    <>
      <h1>
        {title}
        <RxGithubLogo className={css.iconProperty} size="25" />
      </h1>
      <img
        className={css.pic}
        src="https://cdn.pixabay.com/photo/2023/09/26/17/32/woman-8277925_640.jpg"
        alt="woman"
      />
      <p>{children}</p>
    </>
  );
}

export default Product;
