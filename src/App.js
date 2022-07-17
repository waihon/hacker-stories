import * as React from 'react';

const list = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
]

// Declaration of App component
function App() {
  return (
    <div>
      <h1>My Hacker Stories</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />

      <hr />

      {/* Creating an instance of List component */}
      <List list={list} />
      {/* Creating another instance of List component */}
      <List list={list} />
    </div>
  );
}

// Declaration of List component
function List({ list }) {
  return (
    <ul>
      {list.map(function (item) {
        return (
          <Item item={item} />
        );
      })}
    </ul>
  );
}

function Item({ item }) {
  return (
    <li key={item.objectID}>
      <span>
        <a href={item.url}>{item.title}</a>
      </span> &bull;
      <span>{item.author}</span> &bull;
      <span>{item.num_comments}</span> &bull;
      <span>{item.points}</span>
    </li>
  );
}

export default App;
