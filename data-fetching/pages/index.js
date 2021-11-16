import path from "path";
import fs from "fs/promises";

function Home(props) {
  const { products } = props;
  return (
    <div>
      <ul>
        {products.map((item) => (
          <li>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonFile = await fs.readFile(filePath);
  const data = JSON.parse(jsonFile);

  return {
    props: {
      products: data.products,
    },
  };
}
export default Home;
