import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const ListePokemon = () => {
  const [pokemons, setPokemons] = useState([]);
    const navigate = useNavigate();


  useEffect(() => {
    axios.get("https://pokebuildapi.fr/api/v1/pokemon").then((res) => {
      setPokemons(res.data);
   

    });
  }, []);

//   function compareCard(name, ch) {
//     let tch = ch.length;
//     name = name.substr(0, tch);
//     return (name == ch)
//   }

//   function searchFilm() {
//     let tch = document.getElementById("pokemon").value;

//     { document.getElementById("listeCard").innerHTML = '' }

    
//         pokemons.map((item) => {
//             if (compareCard(item.name, tch)) {

//         {<div className="card col-xs-6 col-sm-4 col-md-3 col-lg-2">
//           <img src={item.image} className="card-img-top" alt="..." />
//           <div className="card-body">
//             <h5 className="card-title">{item.name}</h5>
//             <Link to="./tarsal" className="btn btn-primary">
//               En savoir plus
//             </Link>
//           </div>
//         </div>
//         }
//             }
//          })
//     }
  
    function navigatePoke(id) {
      navigate(`/pokemon/${id}`)  
    }

  return (
    <>
    {/* <nav className="navbar bg-secondary fixed-top">
        <div className="container-fluid">
        <Link to="/" className="navbar-brand bg-light btn">Mon Pokedex</Link>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Recherche" aria-label="Search" id='pokemon' onChange={searchFilm} />
            <Link to="./contact" className='btn bg-light'>Me contacter</Link>
          </form>
        </div>
      </nav> */}


      <div className="row" id="listeCard">
        {pokemons.map((item) => (
        <div className="card col-xs-6 col-sm-4 col-md-3 col-lg-2">
          <img src={item.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <button onClick={() => navigatePoke(item.id)} className="btn btn-primary">
              En savoir plus
            </button>
          </div>
        </div>

        ))}
      </div>
    </>
  );
};

export default ListePokemon;
