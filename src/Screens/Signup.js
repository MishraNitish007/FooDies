import React,{useState} from 'react'

import { Link } from 'react-router-dom'
import NavBar from '../Components/NavBar';


export default function Signup() {

    const [credentials, setcredentials] = useState({name:"",email:"",password:"",geolocation:""})

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response =  await fetch("http://localhost:5000/api/createUser",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geolocation})
        
        });
        const json = await response.json()
        console.log(json);

        if(!json.success){
            alert("Enter Valid Credentials")
        }

        if(json.success){
            alert("Account Created Now You can Login ")
        }

    }


const onChange=(event)=>{
    setcredentials({...credentials,[event.target.name]:event.target.value})
}


    return (
        <div style={{ backgroundImage: 'url("https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', backgroundSize: 'cover',height: '100vh' }}>
      <div>
      <NavBar />
      </div>

        
        <div>

            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label text-light">Name</label>
                        <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label text-light">Email address</label>
                        <input type="email" className="form-control"   name='email' value={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text text-light">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label text-light">Password</label>
                        <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} id="exampleInputPassword1" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label text-light">Address</label>
                        <input type="text" className="form-control" name='geolocation' value={credentials.geolocation} onChange={onChange} id="exampleInputPassword1" />
                    </div>

                    <button type="submit" className=" m-3 btn btn-success">Submit</button>
                   
                    <Link to="/Login" className='m-3 btn btn-danger'>Already a user</Link>
                </form>
            </div>
        </div>
        </div>
    )
}
