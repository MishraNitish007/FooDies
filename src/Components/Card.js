import React, { useEffect, useState ,useRef } from 'react'
import { useDispatchCart,useCart } from './ContextReducer';


export default function Card(props) {

  let dispatch=useDispatchCart();
let data =useCart();
const priceRef = useRef();
  let options = props.options;
  let priceOption =Object.keys(options);
  const [qty,setQty]=useState(1)
  const [size,setSize]=useState("")


  const handleAddTocart = async()=>{

    // update of cart by diffrent size
    let food =[]
    for (const item of data ){
      if(item.id === props.foodName._id){
food =item;

break;
      }
    }

    if(food !==[]){
      if (food.size === size){
        await dispatch({type:"UPDATE",id:props.foodName._id,price:finalPrice,qty:qty})
        return
      }
else if(food.size !== size){
  await dispatch({type:"ADD",id:props.foodName._id,name:props.foodName.name,price:finalPrice,qty:qty,size:size})
  return
}
// await dispatch({type:"ADD",id:props.foodName._id,name:props.foodName.name,price:finalPrice,qty:qty,size:size})
    }
await dispatch({type:"ADD",id:props.foodName._id,name:props.foodName.name,price:finalPrice,qty:qty,size:size})


// console.log(data);
  }

  let finalPrice = qty*parseInt(options[size]);
  useEffect(()=>{
setSize(priceRef.current.value)

  },[])


  return (
    <div>
      <div>
    <div className="card mt-3 my-5 mb-5" style={{ "width": "17rem", "maxHeight": "560px" }}>
      <img src={props.foodName.img} className="card-img-top" alt="..." style={{height:"150px",objectFit:"fill"}} />
      <div className="card-body">
        <h5 className="card-title">{props.foodName.name}</h5>
       
        <div className='container w-100'>
          <select className='m-2 h-100  bg-success rounded' onChange={(e)=>setQty(e.target.value)}>
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              )
            })}

          </select>

          <select className='m-2 h-100  bg-success rounded' ref={priceRef} onChange={(e)=>setSize(e.target.value)}>
          {priceOption.map((data)=>{
            return <option key={data} value={data}>{data}</option>
          })}
          </select>

          <div className='d-inline h-100 fs-5 text-Success'>
          ₹{finalPrice}/-
          </div>

        </div>
<hr />
<div className='btn bg-success text-danger mx-2'onClick={handleAddTocart}>
Add to cart
      </div>
      </div>
    </div>
  </div>
  
  
  </div>
  )
}
