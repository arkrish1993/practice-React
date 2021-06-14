import { useRouter } from "next/router";

const Details = () => {
  const router = useRouter();
  const newsId = router.query.newsId;
  return <h1>The Details Page for ID: {newsId}</h1>;
};

export default Details;
