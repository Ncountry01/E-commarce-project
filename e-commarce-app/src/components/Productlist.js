import axios from "axios";
import React, { useEffect, useState }  from "react";
import NavbarApp from "../navbar/Navbar";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductListApp=() => {
const [data, setData] = useState([])
useEffect(async ()=>{
let result =axios.post("http://localhost:9002/register")
   
result = await result.json();
setData(result)

}, [])


  function deleteOperations () {
    axios.delete("http://localhost:9002/register")
    getData();
  }


  function getData() {
    axios.delete("http://localhost:9002/register")
  }


  function updateOperations () {
    axios.put("http://localhost:9002/register")
    updateData();
  }
  function updateData() {
    axios.put("http://localhost:9002/register")
  }
console.log("data", data);
  return (<>
  <NavbarApp />
    <h2> Product LIST Page</h2>
    <div>
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th> Name</th>
      <th>Image/File</th>
      <th>Price</th>
      <th>Description</th>
      <th> Delete Operation</th>
      <th> Update Operation</th>
    </tr>
  </thead>
  <tbody>
    {
      data.map((Item, i)=>
  
    <tr key={i}>
      <td>{Item.id}</td>
      <td>{Item.name}</td>
      <td><img src={"" + Item.file_path}/></td>
      <td>{Item.Price}</td>
      <td>{Item.description}</td>
      <td><Button onClick={()=>deleteOperations(Item.id)}>Delete</Button></td>
      <td><Button onClick={()=>updateOperations(Item.id)}><Link to="/update">Update</Link></Button></td>
    </tr>
    )
}
  </tbody>
</Table>



    </div>

  </>)
}

export default ProductListApp;