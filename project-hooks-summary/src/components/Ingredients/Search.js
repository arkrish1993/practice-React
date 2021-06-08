import React, { useEffect, useRef, useState } from "react";
import useHttp from "../../hooks/use-http";

import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import LoadingIndicator from "../UI/LoadingIndicator";
import "./Search.css";

const Search = React.memo((props) => {
  const { onFilter } = props;
  const [filterKey, setFilterKey] = useState("");
  const inputRef = useRef();
  const { isLoading, error, data, sendRequest, reset } = useHttp();

  useEffect(() => {
    if (!isLoading && !error) {
      let ingredients = [];
      for (const key in data) {
        ingredients.push({
          id: key,
          ...data[key],
        });
      }
      onFilter(ingredients);
    }
  }, [data, isLoading, error, onFilter]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (filterKey === inputRef.current.value) {
        const query =
          filterKey.length === 0
            ? ""
            : `?orderBy="title"&equalTo="${filterKey}"`;
        sendRequest(
          "https://udemy-http-1c237-default-rtdb.firebaseio.com/ingredients.json" +
            query,
          {}
        );
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [filterKey, onFilter, sendRequest]);

  return (
    <section className="search">
      {error && <ErrorModal onClose={reset}>{error}</ErrorModal>}
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          {isLoading && <LoadingIndicator />}
          <input
            type="text"
            value={filterKey}
            onChange={(event) => setFilterKey(event.target.value)}
            ref={inputRef}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
