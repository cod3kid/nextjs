import React from "react";
import { useRouter } from "next/router";
function Reviews() {
  const router = useRouter();
  const productId = router.query.productId;
  const reviewId = router.query.reviewId;

  return (
    <div>
      Review {reviewId} of Product {productId}
    </div>
  );
}

export default Reviews;
