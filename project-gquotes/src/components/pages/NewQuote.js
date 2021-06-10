import { useHistory } from "react-router";
import useHttp from "../../hooks/use-http";
import QuoteForm from "../quotes/QuoteForm";
import { addQuote } from "../../lib/api";
import { useEffect } from "react";

const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();

  useEffect(() => {
    if (status === "completed") history.push("/");
  }, [status, history]);

  const addQuoteHandler = (quote) => {
    sendRequest(quote);
    history.push("/");
  };

  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={addQuoteHandler} />
  );
};

export default NewQuote;
