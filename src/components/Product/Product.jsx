import css from "./Product.module.css";

function Product({ title, children }) {
  return (
    <>
      <h1>{title}</h1>
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
