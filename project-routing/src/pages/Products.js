import { Link } from "react-router-dom";

function Products() {
  return (
    <section>
      <h2>The Products page</h2>
      <ul>
        <li>
          <Link to="/products/1">Product1</Link>
        </li>
        <li>
          <Link to="/products/2">Product2</Link>
        </li>
        <li>
          <Link to="/products/3">Product3</Link>
        </li>
      </ul>
    </section>
  );
}

export default Products;
