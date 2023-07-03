import React, { useEffect,useState } from 'react'
import Card from './Card'

const Display = () => {
    const [data,SetData]=useState();
    const [load,setLoad]=useState(false);
    const [pagecount,seTPagecount]=useState(1);
    const [filterdata,setFilterData]=useState();

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts",{
            method:'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(response=>response.json()).then(
            res=>{
                // console.log(res);
                SetData(res);
                setLoad(true);
                setFilterData( data?.filter(item=>item.id <=6));
            }
        ).then(
            filterdata?.map((item)=>{
                console.log(item.id);
            })
        )
        
    },[])
  return (
    <div className='cardbox' >
        {load && filterdata?.map((item)=>
            <Card key={item.id} id={item.id} title={item.title} body={item.body}  />
        ) }
       
        
    </div>
  )
}

export default Display