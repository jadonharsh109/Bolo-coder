import React, { useState } from 'react'
import "./ErrorPage.css"


const ErrorPage = () => {
const [loading, setloading] = useState("loading errorpage")
setTimeout(()=>{
  setloading("errorpage")
},1000)

  return (
    <section className={loading}>
      <h1>500</h1>
  <h2>Unexpected Error <b>:(</b></h2>
  <div className="gears">
    <div className="gear one">
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
    <div className="gear two">
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
    <div className="gear three">
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  </div>
    </section>

    
  )
}

export default ErrorPage