import React, { useEffect, useState } from 'react'
import './ServiceDetails.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function ServicesDetail() {
  const [categories, setCategories] = useState("")

  useEffect(() => {
      // Fetch service data from API
    axios.get("https://app.ecwid.com/api/v3/82720670/categories", {
        headers: {
          accept: "application/json",
          Authorization: "Bearer secret_vGqByTVAXyhKzQtcKQGRFRNLUv8Q3U3x",
        }
      })

      .then((data) => {
        setCategories(data.data.items)
      })

      .catch(error => console.log(error));
  }, []);
  console.log(categories)

  return (
    <div className='serviceDetails'>
    <h1>Service Details</h1>
      <div className='serviceDetails-box'>
        {
          categories&&categories.map((items) => (
            <div className='content-box' key={items.id}>

              <Link to={`/serviceData?id=${items.id}`}>
              <div className='content-img'>
                <img src={items.imageUrl} alt="image" />
              </div>
              </Link>
              <h3>{items.name}</h3>
            </div>
          ))
        }
      </div>
    </div>
  )
}
