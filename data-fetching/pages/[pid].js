import { getStaticProps } from ".";

function IndividualPages(props) {
  const { products } = props;
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
    fallback: false,
  };
}

export default IndividualPages;
