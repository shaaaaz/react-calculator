import React from 'react'

function Display(props){
    console.log("props",props)
    let name = props.name

  return (
    <>
        <h1>{name}</h1>
    </>
  )
}

export default Display