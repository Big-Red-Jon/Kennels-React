import React, { useState, useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { Animal } from "./Animal"
import "./Animal.css"
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


export const AnimalList = () => {
  const { getAnimals, animals } = useContext(AnimalContext)
  const history = useHistory()
  // Initialization effect hook -> Go get animal data
  useEffect(() => {
    getAnimals()
  }, [])

  return (
    <>
      <h2>Animals</h2>

      <button onClick={() => history.push("/animals/create")}>
        Add Animal
      </button>

      <div className="animals">
        {
          animals.map(animal => <Link className="animal" to={`/animals/detail/${animal.id}`}>
            {animal.name}
          </Link>
          )

        }
      </div>
    </>
  )
}










