import Link from "next/link";
import router from "next/router";

export default function ClientsPage() {
  return (
    <div>
      <ul>
        <li>
          <Link href={{ pathname: "/clients/[id]", query: { id: 1 } }}>
            John Doe
          </Link>
        </li>
        <li
          onClick={() => {
            router.push("/clients/2");
          }}
        >
          Bob
        </li>
        <li>Lily</li>
      </ul>
    </div>
  );
}
