import { Route, useParams } from "react-router";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import HighlightedQuote from "../quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is fun!" },
  { id: "q2", author: "Maximilian", text: "Learning React is great!" },
];

const QuoteDetails = () => {
  const params = useParams();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  if (!quote) {
    return <p>No Quote Found...</p>;
  }
  const pageLink = `/quotes/${params.quoteId}`;
  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={pageLink} exact>
        <div className="centered">
          <Link className="btn--flat" to={pageLink + "/comments"}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={pageLink + "/comments"}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetails;
