import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './products.css'
import ProdPrint from './ProdPrint'
import { MyContext } from '../Context/context'


function Products() {
    const [poructs, setporucts] = useState([])
    const [prodNames, setProdNames] = useState('')
    useEffect(() => {
        axios.get('https://api.thecatapi.com/v1/categories').then(res => setporucts(res.data))
    }, [])
    console.log(poructs);
    
  return (
    <div>
        <MyContext.Provider value={prodNames}>
        <div className='products'> 

      {poructs.map(item => {
        return <div>
        <button onClick={() => {setProdNames(item.id);}} className='productsBtn'>{item.name}</button>
        </div>
    })}
        </div>
        <ProdPrint/>
        </MyContext.Provider>
    </div>
  )
}

export default Products
