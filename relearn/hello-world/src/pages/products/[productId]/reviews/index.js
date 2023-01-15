import React from "react";
import { useRouter } from "next/router";

function Reviews() {
  const router = useRouter();
  const productId = router.query.productId;
  return <div>All reviews of the product {productId}</div>;
}

export default Reviews;
