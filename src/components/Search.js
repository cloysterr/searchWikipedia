import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("programming");
  const [searchResults, setSearchResults] = useState([]);
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);
  //const [searchTimeout, setSearchTimeout] = useState(null);
  //console.log("I run on every re-render");

  //   useEffect(() => {
  //     console.log("I run only once");
  //   }, []);

  //   useEffect(() => {
  //     console.log("I run once & on every re-render");
  //   });
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [searchTerm]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debouncedTerm,
        },
      });
      setSearchResults(data.query.search);
    };
    debouncedTerm && search();
  }, [debouncedTerm]);

  let searchResultsList = null;
  if (searchResults.length > 0) {
    searchResultsList = searchResults.map((data) => {
      return (
        <div className="item" key={data.pageid}>
          <div className="right floated content">
            <a
              className="ui button"
              target="_blank"
              href={`https://en.wikipedia.org?curid=${data.pageid}`}
            >
              GO
            </a>
          </div>
          <div className="content">
            <div className="header">{data.title}</div>
            <span dangerouslySetInnerHTML={{ __html: data.snippet }}></span>
          </div>
        </div>
      );
    });
  }
  return (
    <div>
      <div className="container ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={searchTerm}
            type="text"
            className="input"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="ui celled list">{searchResultsList}</div>
    </div>
  );
};

export default Search;
