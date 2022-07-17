import * as React from 'react';

const reactList = [
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

const frameworkList = [
  {
    title: "Ember.js",
    url: "https://emberjs.com",
    author: "Yehuda Katz",
    num_comments: 4,
    points: 5,
    objectID: 0,
  },
  {
    title: "Vue.js",
    url: "https://vuejs.org",
    author: "Evan You",
    num_comments: 3,
    points: 4,
    objectID: 1,
  },
  {
    title: "Svelte",
    url: "https://svelte.dev",
    author: "Rich Harris",
    num_comments: 5,
    points: 4,
    objectID: 2
  },
]

// Declaration of App component
const App = () => (
  <div>
    <h1>My Hacker Stories</h1>

    <Search />

    <hr />

    {/* Creating an instance of List component */}
    <List list={reactList} />

    {/* Creating another instance of List component */}
    <List list={frameworkList} />
  </div>
);

const Search = () => {
  const handleChange = (event) => {
    // synthetic event
    console.log(event);
    // value of target (here: element)
    console.log(event.target.value)
  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
    </div>
  );
};

// Declaration of List component
const List = ({ list }) => (
  <ul>
    {list.map((item) => (
      <Item item={item} />
    ))}
  </ul>
);

const Item = ({ item }) => (
  <li key={item.objectID}>
    <span>
      <a href={item.url}>{item.title}</a>
    </span> &bull;
    <span>{item.author}</span> &bull;
    <span>{item.num_comments}</span> &bull;
    <span>{item.points}</span>
  </li>
);

export default App;
