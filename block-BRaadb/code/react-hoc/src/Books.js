import React from "react";
import books from "./data/books.json";
import UpdatedComponent from "./WithSearch";

class Books extends React.Component {
  constructor(props){
    super(props)
  }
 
  render() {
    let filteredBooks = books.filter((article) =>
      article.title.toLowerCase().includes(this.props.searchTerm)
    );
    return (
      <div className="page">
        <input
          placeholder="Search"
          className="search"
          value={this.props.searchTerm}
          onChange={this.props.handleChange}
        />
        <ul className="archive">
          {filteredBooks.map((book) => (
            <Book {...book} />
          ))}
        </ul>
      </div>
    );
  }
}

function Book(props) {
  return (
    <li className="book">
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <p>
        Author:<span>{props.author}</span>
      </p>
      <a href={props.website}>
        <button>Buy Now</button>
      </a>
    </li>
  );
}

export default UpdatedComponent(Books);
