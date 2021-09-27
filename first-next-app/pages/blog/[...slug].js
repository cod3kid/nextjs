import { useRouter } from "next/router";

// This is a Catch All Route

export default function BlogPage() {
  const router = useRouter();
  return <div>{router.query.slug}</div>;
}
