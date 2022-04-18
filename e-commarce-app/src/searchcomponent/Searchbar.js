import { Table } from "react-bootstrap";

const SearchApp=() => 

/**apply State change Functiuonality */
{
    const [data, setData] = useState()


/**Apply state change button functionality and API data calling functionality */
   async function Search() {
       if(key.length > 1 ){
        let result =fetch('http://localhost:9002/api/search')
     result = await result.json(); 
     setData(result)
   
    }
}
    return (
        <>
        {/**Declare input Tag */}
        <h2>Searching Page Component App</h2>
        <div>
        <input type="text" onChange={(event) => Search(event.target.value)}
         className="search"  placeholder="Serach product" />
          
{/**Apply Condition  */}

  {
      data.length > 0 ? 
  <Table striped bordered hover> {/**Apply Table functionality */}
  <thead>
    <tr>
      <th>#</th>
      <th> Name</th>
      <th>Image/File</th>
      <th>Price</th>
      <th>Description</th>
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
    </tr>
    )
}
  </tbody>
</Table>

: <h3>Search Product</h3>
  }
        </div>
        </>
    )
}

export default SearchApp;