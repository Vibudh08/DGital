import React, { useEffect, useState } from 'react'
import './ServiceDetails.css'
import axios from 'axios'

export default function ServicesDetail() {
  const [categories, setCategories] = useState("")

  useEffect(() => {
    axios
      .get("https://app.ecwid.com/api/v3/82720670/categories", {
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
      <div className='serviceDetails-box'>
        {
          categories&&categories.map((items, index) => (
            <div className='content-box' key={index}>
              <div className='content-img'>
                <img src={items.imageUrl} alt="image" />
              </div>
              <h3>{items.name}</h3>
            </div>
          ))
        }
      </div>
    </div>
  )
}
