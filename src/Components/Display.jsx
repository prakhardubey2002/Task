import React, { useEffect,useState } from 'react'
import Card from './Card'
import { useGlobalContext } from './context';
const Display = () => {
    const {page, seTPage, blogcount, seTblogcount,filterdata, setFilterData,setLoad,SetData,load,setremo}=useGlobalContext();

    // const [data,SetData]=useState();
    // const [load,setLoad]=useState(false);
    // const [filterdata,setFilterData]=useState();

    // useEffect(()=>{
    //     fetch("https://jsonplaceholder.typicode.com/posts",{
    //         method:'GET',
    //         headers:{
    //             'Content-Type': 'application/json'
    //         }
    //     }).then(response=>response.json()).then(
    //         res=>{
    //             // console.log(res);
    //             SetData(res);
    //             setFilterData( res?.filter(item=>
    //                item.id>blogcount-6 && item.id <=blogcount)
    //                 );
    //             setLoad(true);
    //         }
    //     ).then(
    //         filterdata?.map((item)=>{
    //             console.log(item.id);
    //         })
    //     )
        
    // },[blogcount])
  return (
    <div className='cardbox' >
        {load && filterdata?.map((item)=>
            <Card key={item.id} idx={item.id} title={item.title} body={item.body} />
        ) }
       
        
    </div>
  )
}

export default Display