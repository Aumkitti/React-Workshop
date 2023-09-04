import React from 'react'
import './List.css';

const List = (props) => {
    const {people} = props;
  return (
    <div>
        {people.map((person) => {
            const {id, name, age, image } = person;
            return (         
                <article className="person" key={id}>  
                <img src={image} alt="" />
                <div>
                    <h4>{name}</h4>
                    <p>{age} years old</p>
                </div>  
                </article>                             
            );
        })}
    </div>
  );
}

export default List
