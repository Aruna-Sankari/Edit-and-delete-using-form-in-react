import React, { useState } from 'react'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import './Card.css'

const Home1=()=>{
    let [arrobj,setarrobj]=useState(JSON.parse(localStorage.getItem("value")))

    const del = (val) => {
        console.log(val);
        let arr1 = []
        let x =arrobj.map((e) => {
            return e.id === val ? e = "" : arr1.push(e)
        })
        console.log(x);
        console.log(arr1);
        setarrobj(arr1)
        let setarr=(JSON.parse(localStorage.getItem("value")))
        setarr=arr1
        console.log(setarr);
        localStorage.setItem("value",JSON.stringify(setarr))
    }
    const nav=useNavigate()
    const edit=(val)=>{
       
        let x=arrobj.find((e)=>{
            return e.id===val
        })
    
        nav(`/Form1/${val}`)
        
    }
    return(

        <div className='row'>
                {
                    arrobj.map((value, i) => {
                        return (
                            <div key={i} className='col'>
                                <div className='card'>
                                        <img src={value.image} alt="" />
                                    <h3>{value.name}</h3>

                                    <p>{value.price}</p>

                        
                                                <AiFillDelete onClick={() => del(value.id)}  />
                                                <AiFillEdit onClick={()=>edit(value.id)}></AiFillEdit>
                                        </div>
                                    </div>
                        )

                    })

                }

            </div>
    )
}

export default Home1