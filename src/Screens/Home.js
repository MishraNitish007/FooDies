import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';
import Card from '../Components/Card';
import Carousal from '../Components/Carousal'


export default function Home() {
  const [Search, setSearch] = useState('');

  const [foodCat, setfoodCat] = useState([]);
  const [foodItem, setfoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData ", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    });

    response = await response.json();
    // console.log(response[0]);
    setfoodItem(response[0]);
    setfoodCat(response[1]);
  }

  console.log(foodCat);
  useEffect(() => {
    loadData()
  }, [])




  return (
    <div>
      <div>
        <NavBar />
      </div>

      <div>
      
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel"  style={{objectFit:"contain !important","background-size": "cover"}}>
        <div className="carousel-inner " style={{ "maxHeight": "500px" }}>
          <div className="carousel-caption " style={{zIndex:"10"}}>
            <div className="d-flex justify-content-center">
              <input className="form-control me-2 mb-5 bg-dark text-light" type="search" placeholder="Search" aria-label="Search" value={Search} onChange={(e)=>{setSearch(e.target.value)}} />
              {/* <button classname="btn btn-outline-success me-2 text-white bg-danger" type="submit">Search</button> */}
            </div> 
          </div>
          <div className="carousel-item active">
            <img src="https://source.unsplash.com/random/900×700/?fruit" className="d-block w-100" alt="..." />
          </div>

          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/900×700/?pizza" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/900×700/?burger" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      </div>

      <div className='container-fluid bg-dark'>

        {
          foodCat !== []
            ? foodCat.map((data) => {
              return (<div className='row mb-3'>
                <div key={data._id} className="fs-3 m-3 text-light">{data.CategoryName} </div>
                <hr className=" text-light" />
                {foodItem !== [] ? foodItem.filter((item) => item.CategoryName === data.CategoryName && (item.name.toLowerCase().includes(Search.toLocaleLowerCase())))
                  .map(filterItem => {
                    return (
                      <div key={filterItem._id} className=" col-12 col-md-6 col-lg-3">
                        <Card  foodName={filterItem}
                        options ={filterItem.options[0]}
                       
                        
                        ></Card>
                      </div>
                    )

                  }) : <div>No Such Data Found</div>}
              </div>
              )
            })
            : ""
        }
       
      </div>

      <div className='m-5'>
        <Footer />
      </div>
    </div>
  )
} 
