import React from "react";
import { useRouter } from "next/router";

function ProductDetails() {
  const router = useRouter();
  const productId = router.query.productId;
  return <div>Product Details of {productId}</div>;
}

export default ProductDetails;
