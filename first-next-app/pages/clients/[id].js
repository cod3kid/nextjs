import { useRouter } from "next/router";
export default function SingleClientPage() {
  const router = useRouter();

  return <div>Client Id {router.query.id}</div>;
}
