import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import './ServiceData.css' 
import axios from 'axios'

export default function ServiceData() {
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)

    const [details,setDetails]= useState("")

    useEffect(()=>{
        axios.get("https://app.ecwid.com/api/v3/82720670/categories/"+queryParams.get('id'),{
                headers: {
                    accept: "application/json",
                    Authorization: "Bearer secret_vGqByTVAXyhKzQtcKQGRFRNLUv8Q3U3x",
                }
            })
            
            .then((data)=>{
                setDetails(data.data)
            })

            .catch(error=>console.log(error));
        },[])
        console.log(details)
  return (
    <div className='sericeCont'>
        <div className='serviceData'>
            <div dangerouslySetInnerHTML={{ __html: details.description }} />
        </div>
        <div className='BoxServices'>
           <div></div> <img src="" alt="" />
        </div>
    </div>
  )
}
