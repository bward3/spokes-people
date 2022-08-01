import React from "react";
import "bulma/css/bulma.min.css";
import MapView from "../components/MapView";
import { useState,useEffect } from 'react';

const Bikes = () => {

  const [name, setName] = useState([]);

useEffect(() => {
  names()
}, [])

const names = async () => {
  const responce = await fetch('http://api.citybik.es/v2/networks/?rapidapi-key=f17db1dcddmsh3dce12092ca5ebep17ef72jsn4fcd0fdb0eeb')

  setName(await responce.json())
}

  return (
    
        <div>
          <h1>Hiya</h1>
          <ol className="list-group list-group-numbered">
    
            {name.map((data) => {
              return(
                <li className="list-group-item" key={data.id}> {data.bikes}</li>
              )
            })}
    
          </ol>
        </div>
      )
    }

    export default Bikes;
