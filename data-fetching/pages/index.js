import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

function Home(props) {
  const { products } = props;
  return (
    <div className={styles.container}>
      <ul>
        {products.map((item) => (
          <li>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      products: [
        { id: "p1", title: "Product 1" },
        { id: "p2", title: "Product 2" },
      ],
    },
  };
}
export default Home;
