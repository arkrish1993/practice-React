import { useParams } from "react-router";

function ProductDetails() {
  const params = useParams();
  return (
    <section>
      <h2>The ProductDetails page</h2>
      <p>{params.id}</p>
    </section>
  );
}

export default ProductDetails;
