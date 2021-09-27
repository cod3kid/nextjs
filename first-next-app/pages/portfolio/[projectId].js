import { useRouter } from "next/router";

export default function PortfolioProjectPage() {
  const router = useRouter();
  return <div>{router.query.projectId}</div>;
}
