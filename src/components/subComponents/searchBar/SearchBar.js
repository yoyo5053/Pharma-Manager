import { useState } from "react";
import "./searchBar.scss";
import { Link } from "react-router-dom";

const types = ["Médicament", "Catégorie"];

function SearchBar() {
  const [query, setQuery] = useState({
    type: "Médicament",
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  const handleChange = (e) => {
    setQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input
          type="text"
          name="maxPrice"
          placeholder={query.type == "Médicament" ? "Entrer le nom du médicament": "Entrer la catégorie"}
          onChange={handleChange}
        />
        <Link  to={`/list?type=${query.type}`}>
          <button>
            <img src="/search.png" alt="" />
          </button>
        </Link>
      </form>
    </div>
  );
}

export default SearchBar;