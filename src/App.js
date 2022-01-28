import React, { Component, useEffect, useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Dropdown } from 'react-bootstrap'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'
import { Value } from 'sass'



const App = () => {

  const [dogs, setDogs] = useState([])
  const [select, setSelected] = useState([])
  const [hasError, setHasError] = useState({ error: false, message: '' })

  useEffect(() => {
    const getDogBreeds = async () => {
      try {
        const { data } = await axios.get('https://dog.ceo/api/breeds/list/all')

        setDogs(Object.keys(data.message))

      } catch (err) {
        setHasError({ error: true, message: err.message })
      }
    }
    getDogBreeds()
  }, [])

  // const loopDog = (e) => {
  //   let value = e.target.value
  //   setSelected(value)
  //   console.log(select)
  // }
  // loopDog()
  return (
    <div className='dogs-main'>
      <h1 className='title'>🐶Click the dropDown to find your dog breed!🦴</h1>
      <select>
        {dogs.length && dogs.map((dog) => {

          return (

            <>

              <option key={dog} value={dog} className='dropdown'>

                {dog}

              </option>



            </>

          )
        })}
      </select>

    </div>
  )
}
export default App
