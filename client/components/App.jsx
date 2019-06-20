import React from 'react'
import Table from './Table'
import Background from './Background'
import Head from './Head'


const App = () => {
  return (
    <div className="mainContainer">
      <h1> PonkeyDonk</h1>
      <Background />
      <Table />
      <Head />
    </div>
  )
}

export default App
