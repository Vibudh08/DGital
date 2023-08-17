import React from 'react'
import Banner from '../components/Banner';
import About from '../components/About';
import Services from '../components/Services';
import Gallery from '../components/Gallery'
import Form from '../components/Form';

import { BrowserRouter} from 'react-router-dom';

export default function () {
  return (
    <div>
            <Banner/>
            <About/>
            <Services/>
            <Gallery/>
            <Form/>
    </div>
  )
}
