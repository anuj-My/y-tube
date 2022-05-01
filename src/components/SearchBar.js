import React, { useState } from "react";

export default function SearchBar({ onTermSubmit }) {
  const [term, setTerm] = useState("");

  function onFormSubmit(e) {
    e.preventDefault();
    onTermSubmit(term);
  }

  return (
    <div className="ui segment search-bar">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Seach for a Video</label>
          <input
            type="text"
            onChange={(e) => setTerm(e.target.value)}
            value={term}
          />
        </div>
      </form>
    </div>
  );
}

// class SearchBar extends React.Component {
//   state = { term: "" };

//   onInputChange = (e) => {
//     this.setState({ term: e.target.value });
//   };

//   onFormSubmit = (e) => {
//     e.preventDefault();
//     this.props.onTermSubmit(this.state.term);
//   };

//   render() {
//     return (
//       <div className="ui segment search-bar">
//         <form onSubmit={this.onFormSubmit} className="ui form">
//           <div className="field">
//             <label>Video Search</label>
//             <input
//               type="text"
//               onChange={this.onInputChange}
//               value={this.state.term}
//             />
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// export default SearchBar;
