import React from 'react'
import '../index.css'
import Celebrant from './Celebrant'
import {data} from '../data'


const Card = () => {
  const [people, setPeople] = React.useState(data)
  const [total, setTotal] = React.useState(data.length)

  const OnClickHandler = () => {
    setTotal(0);
    setPeople([]);
  }


  return (
    <div className="container">
      <section className="card">
        <h1>We have {total} birthdays Today!</h1>
        {people.map((person) => {
          return <Celebrant key={person.id} {...person} />;
          
        })}
        <button className="btn" onClick={OnClickHandler}>Clear All</button>
      </section>
    </div>
  );
}

export default Card
