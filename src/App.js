import React from 'react';


function Food({ name, url}) {
  return (
    <div>
      <h3>Hello {name}</h3>
      <h3>Go to <a href={url}>{name}</a> </h3>
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    url: "www.kimchi.com"
  },
  {
    id: 2,
    name: "ramen",
    url: "www.ramen.com"
  }  
];


function App() {
  return (
    <div className="App">
      {foodILike.map(dish => (
          <Food key={dish.id} name={dish.name} url={dish.url}/>
      ))}
    </div>
  );
}

export default App;
