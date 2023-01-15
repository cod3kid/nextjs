import React from "react";
import { useRouter } from "next/router";

function Blog() {
  const router = useRouter();
  const { params = [] } = router.query;

  console.log(params);
  return <div>THIS IS A BLOG</div>;
}

export default Blog;
