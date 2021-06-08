import React, { useEffect, useRef, useState } from "react";

import Card from "../UI/Card";
import "./Search.css";

const Search = React.memo((props) => {
  const { onFilter } = props;
  const [filterKey, setFilterKey] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (filterKey === inputRef.current.value) {
        const query =
          filterKey.length === 0
            ? ""
            : `?orderBy="title"&equalTo="${filterKey}"`;
        fetch(
          "https://udemy-http-1c237-default-rtdb.firebaseio.com/ingredients.json" +
            query
        )
          .then((response) => response.json())
          .then((data) => {
            let ingredients = [];
            for (const key in data) {
              ingredients.push({
                id: key,
                ...data[key],
              });
            }
            onFilter(ingredients);
          });
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [filterKey, onFilter]);

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
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
