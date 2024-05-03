import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react';

const DetailsPoke = () => {
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        axios.get("https://pokebuildapi.fr/api/v1/pokemon/282").then((res) => {
          setPokemons(res.data);
       
    
        });
      }, []);

  return (
    <>
    <div className='row'>
    <img src={pokemons.image} alt="..." className='col-3' />
    <div class="card col-3">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
    <li class="list-group-item">A third item</li>
    <li class="list-group-item">A third item</li>
    <li class="list-group-item">A third item</li>
  </ul>
</div>
</div>
</>
  )
}

export default DetailsPoke