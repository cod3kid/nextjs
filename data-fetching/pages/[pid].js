import { getStaticProps } from ".";

function IndividualPages(props) {
  const { products } = props;

  // For pages which are not prerendered by default
  if (!products) {
    return <p>Loading ...</p>;
  }

  return (
    <div>
      {products.map((item) => {
        <li>{item.name}</li>;
      })}
    </div>
  );
}

export async function getStaticProps(context) {
  // get dynamic params
  const { params } = context;
  const productId = params.pid;
}

export async function getStaticPaths(context) {
  return {
    paths: [
      {
        params: { pid: "p1" },
      },
      {
        params: { pid: "p2" },
      },
      {
        params: { pid: "p3" },
      },
    ],
    // If we have a pid4, and it's not included in the prerendered pages, this will fetch that page
    fallback: true,
  };
}

export default IndividualPages;
