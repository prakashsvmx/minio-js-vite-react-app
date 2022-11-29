import React from "react"

import './App.css'
import ListBuckets from "./ListBuckets";
function App() {

  return (
    <div className="flex flex-col p-5">

        <h2>List of Buckets</h2>
        <div className="mt-5">
        <ListBuckets />
        </div>
    </div>
  )
}

export default App
