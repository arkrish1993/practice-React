import Link from "next/link";

const News = () => {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/1">News Item 1</Link>
        </li>
        <li>
          <Link href="/news/2">News Item 2</Link>
        </li>
        <li>
          <Link href="/news/3">News Item 3</Link>
        </li>
      </ul>
    </>
  );
};

export default News;
