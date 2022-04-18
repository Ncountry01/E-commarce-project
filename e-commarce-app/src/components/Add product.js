import axios from "axios";
import React, { useState }  from "react";
import { Button } from "react-bootstrap";
import NavbarApp from "../navbar/Navbar";


const AddProductApp=() => {

  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

 async function addProduct() {
    console.warn(name, file, price, description)

    const formData = new FormData();
    formData.append("file", file)
    formData.append("name", name)
    formData.append("price", price)
    formData.append("description", description)
     axios.post("http://localhost:9002/register")
  }
  return (<>
  <NavbarApp />
    <h2>Add Product Page</h2>
    <div>
<input  type="text" className="form-control" 
onChange={(event)=>setName(event.target.value)}
placeholder="name" /> <br/> <br/>


<input  type="file" className="form-control" 
onChange={(event)=>setFile(event.target.files[0])}
placeholder="file" /> <br/> <br/>

<input  type="text" className="form-control" 
onChange={(event)=>setPrice(event.target.value)}
placeholder="price" /> <br/> <br/>

<input  type="text" className="form-control" 
onChange={(event)=>setDescription(event.target.value)}
placeholder="description" /> <br/> <br/>

<Button  type="submit" onClick={addProduct}>Add Product</Button>
</div>
  </>)
}

export default AddProductApp;