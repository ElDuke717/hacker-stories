import * as React from 'react';

function getTitle(title) {
  return title;
}

const list = [
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

const  App = () => 
   (
    <div>
      <h1>My Hacker Stories</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />

      <hr />

      <List />
      <List />
    </div>
  );


const Search = () => 
  (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
      </div>
  );


const List = () => {
  return (
  <ul>
        {list.map( (item) => {
          return (
            <li key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
            </li>
          );
        })}
      </ul>
  );
}


 

export default App;