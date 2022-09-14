import React from 'react';
import Card from './Components/Card';
import Data from './Data.json';
import Card2 from './Components/Card2';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  let items = [];
  // for(let i = 0; i<Data.length; i++){
  //   items.push(<Card name={Data[i].name} address={Data[i].address} />);
  // }

  items = Data.map((item) => <Card name={item.name} address={item.address} /> )

  let isLogedIn = true;
  const viewPage = (isLogedIn ? <Card2 /> : <Card name="tofayel ahmed" address="Badda, Dhaka"/>)


  return (
    <div>
    {/* {items}

    <Card2  name="tofayel" /> */}

    {viewPage}
    {/* {items} */}
    </div>
  );
}

export default App;
