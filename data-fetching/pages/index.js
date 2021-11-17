import path from "path";
// import fs from "fs/promises";

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

export async function getStaticProps(context) {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  // const jsonFile = await fs.readFile(filePath);
  const data = JSON.parse(jsonFile);

  if (!data) {
    return {
      redirect: {
        destination: "/home-page",
      },
    };
  }

  if (data.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
}
export default Home;
