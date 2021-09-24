import * as React from 'react';

function getTitle(title) {
  return title;
}



const App = () => {
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
    {
      title: 'You Don\'t Know JS, Yet',
      url: 'https://leanpub.com/ydkjsy-get-started',
      author: 'Kyle Simpson',
      num_comments: 3,
      points: 5,
      objectID: 2,
    },
    {
      title: 'Composing Software',
      url: 'https://leanpub.com/composingsoftware',
      author: 'Eric Ellliot',
      num_comments: 7,
      points: 4,
      objectID: 3,
    }
  ];
return (
  <div>
    <h1>My Hacker Stories</h1>

    <Search />

    <hr />

    <List list={stories}/>
  </div>
);
}

const Search = () => {
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
    </div>
  );
};

const List = (props) => (
  <ul>
    {props.list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
);

const Item = (props) => (
  <li>
    <span>
      <a href={props.item.url}>{props.item.title}</a>
    </span>
    <span>{props.item.author}</span>
    <span>{props.item.num_comments}</span>
    <span>{props.item.points}</span>
  </li>
);

export default App;