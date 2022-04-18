import React, { useEffect, useState } from 'react'
import withRouter from 'react-router-dom'

const UpdateProductApp = () =>{

const [data, setData] = useState([])
const [name, setName] = useState("");
const [file, setFile] = useState("");
const [price, setPrice] = useState("");
const [description, setDescription] = useState("");

useEffect (() => {
    axios.post("http://localhost:9002/register", props.match.params.id)
setData(data)
setName(data.name)
setPrice(data.price)
setFile(data.file)
setDescription(data.description)
},[])


    return (
        <>
        <h3>Update Product Page</h3>

        <div>
<input  type="text" className="form-control" 
onChange={(event)=>setName(event.target.value)}
placeholder="name"
defaultValue={data.name} /> <br/> <br/>


<input  type="file" className="form-control" 
onChange={(event)=>setFile(event.target.files[0])}
placeholder="file" 
    defaultValue={data.files([0])}
/> <br/> <br/>

<input  type="text" className="form-control" 
onChange={(event)=>setPrice(event.target.value)}
placeholder="price"
defaultValue={data.price}
 /> <br/> <br/>

<input  type="text" className="form-control" 
onChange={(event)=>setDescription(event.target.value)}
placeholder="description"
defaultValue={data.description}
 /> <br/> <br/>

<Button  type="submit" onClick={updateProduct}>Update Product</Button>
</div>
        </>
    )
}

export default withRouter(UpdateProductApp);