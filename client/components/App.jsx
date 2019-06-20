import React from 'react'
import Table from './Table'
import Background from './Background'
import Head from './Head'


const App = () => {
  return (
    <div className="mainContainer">
      <div className="compTitle">
        <h1 className="title"> PonkeyDonk</h1>
      </div>
      <div className="compBg">
        <Background />
      </div>
      <div className="compTable">
        <Table />
        <Head />
      </div>
    </div>
  )
}

export default App
