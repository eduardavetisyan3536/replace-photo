import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../Context/context'
import axios from 'axios'
import './prod.css'


function ProdPrint() {
    const users = useContext(MyContext)
    const [create, setcreate] = useState([])
    useEffect(() => {
        axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&page=2&category_ids=${users}`).then(res => setcreate(res.data))
    }, [users])
    
    console.log(create);
  return (
    <div className='ProdPrint'>
        {create.map(item => {
            return <div className='createBox'>
            <img src={item.url} alt="" />
            </div>
        })}

    </div>
  )
}

export default ProdPrint
