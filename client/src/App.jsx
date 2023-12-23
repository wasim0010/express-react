import  { useEffect, useState } from 'react'

const App = () => {
const [ youtube, setYoutube ] = useState({})
useEffect(() => {
const fetchData =  async()=>{
try {
  const response =await fetch("http://localhost:8000/api/youtube ");
if(!response.ok){
  throw new Error(`HTTP ERROR !STATUS : ${response.status}` );
}
 const data = await response.json();
 console.log(data);
 setYoutube(data);
} catch (error) {
  console.error(`error fetching data : ${error.message}`);
}
}

 fetchData();
},[])


  return (
    <>
      <h1>
        {youtube.like}
      </h1>
      <h1>
{youtube.subscribe}
      </h1>
    </>
  )
}

export default App
