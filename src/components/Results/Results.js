import React from 'react'
import "./Results.css"
const Results = () => {
  return (
    <section className='result-section'>
      <div className='container'>
        <h1 className='title-style'>Results</h1>
        <div className='row pt-5'>
        <div className='col-lg col-md-6 col-sm-12 mb-2'>
        <img src='	https://gymvisual.com/img/p/2/1/5/7/0/21570.gif'/>
        </div>
        <div className='col-lg col-md-6 col-sm-12 mb-2'>
        <img src="https://gymvisual.com/img/p/2/2/5/7/4/22574.gif"/>
        </div>
        <div className='col-lg col-md-6 col-sm-12 mb-2'>
        <img src='https://gymvisual.com/img/p/1/0/7/3/9/10739.gif'/>
        </div>
        <div className='col-lg col-md-6 col-sm-12 mb-2'>
        <img src="https://gymvisual.com/img/p/1/7/3/3/8/17338.gif"/>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Results
