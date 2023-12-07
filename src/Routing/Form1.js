import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
const Form1 = () => {

    const [name, setname] = useState()
    let [id, setid] = useState()
    const [pri, setpri] = useState()
    const [image, setimage] = useState()
    const [getarr, setarr] = useState(JSON.parse(localStorage.getItem("value")))


    const param = useParams();
    console.log(param.id);

    useEffect(() => {

        if (param.id != undefined) {
            let edit = getarr.find((e) => {
                return e.id === param.id
            })

            setname(edit.name)
            setid(edit.id)
            setimage(edit.image)
            setpri(edit.price)
            console.log(edit);
        }
    }, [])

    let nav = useNavigate()
    const gocard = (e) => {
        e.preventDefault()
        nav("/Home1")
    }
    const handle = (e) => {
        if (e.target.name === "pna") {
            console.log(e.target.value, e.target.name);
            setname(e.target.value)
        }
        else if (e.target.name === "ppri") {
            console.log(e.target.value, e.target.name);
            setpri(e.target.value)
        }
        else if (e.target.name === "pid") {
            console.log(e.target.value, e.target.name);
            setid(e.target.value)
        }
        else if (e.target.name === "images") {
            console.log(e.target.value, e.target.name);
            setimage(e.target.value)
        }

    }

    const handlesubmit = (e) => {

        e.preventDefault()
        const temp = {
            name: name,
            price: pri,
            id: id,
            image: image
        }

        if (param.id != undefined) {


            let x = getarr.map((e) => {
                return param.id === e.id ? temp : e
            })
            // console.log(x);
            setformdata(x)
        }
        else {
            setformdata(temp)
        }
        setname("")
        setpri("")
        setid("")
        setimage("")
    }

        const setformdata = (val) => {
            console.log(val);

            if (param.id != undefined) {
                let setdata = JSON.parse(localStorage.getItem("value"));
                setdata = val
                localStorage.setItem("value", JSON.stringify(val))
            }
            else {
                const setdata = JSON.parse(localStorage.getItem("value")) || [];
                setdata.push(val)
                localStorage.setItem("value", JSON.stringify(setdata))
            }

        }
        return (
            <div>
                <div>

                    <div >
                        <form onSubmit={handlesubmit}>
                            <div>
                                <div>
                                    <label>product Id:</label>
                                    <input tyep="number" value={id} name="pid" onChange={handle}></input>
                                </div>
                                <div>
                                    <label>Product name:</label>
                                    <input type="text" value={name} name="pna" onChange={handle}></input>
                                </div>
                                <div>
                                    <label>Product price:</label>
                                    <input type="number" value={pri} name="ppri" onChange={handle}></input>
                                </div>
                                <div>
                                    <label>image:</label>
                                    <input type="text" value={image} name="images" onChange={handle}></input>
                                </div>
                                <div>
                                    <div>
                                        <button >submit</button>
                                    </div>

                                </div>


                            </div>
                        </form>

                        <div>
                            <div>
                                <button onClick={gocard}>Home</button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        )
    }
    export default Form1