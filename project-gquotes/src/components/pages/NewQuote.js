import { useHistory } from "react-router";
import QuoteForm from "../quotes/QuoteForm";

const NewQuote = () => {
  const history = useHistory();

  const addQuoteHandler = (quote) => {
    console.log(quote);
    history.push("/");
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
