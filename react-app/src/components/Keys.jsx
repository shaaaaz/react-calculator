import React, { useState } from 'react'
import Display from './Display'

const Keys = () => {
    const [name,setName] = useState("")

    function handleClick(e){
        setName(name + e.target.value)
        console.log(e.target.value)

        console.log(name)
    }

    function handleAllClear(){
        setName("")
    }

    function handleDelete(){
        setName(name.slice(0,-1))
    }

    function handleEvaluate(){
        setName(eval(name).toString())
    }

    function handlePress(){
        if(event.key == "Enter"){
            handleEvaluate()
        }
        else if(event.key == "Backspace"){
            handleDelete()
        }
        else{
            setName(name + event.key)
        }
    }

  return (
    <>
    <div>
        <Display name = {name}/>
    </div>

    <div className="keypad" onKeyDown={() => {handlePress()}}>
        <div className="a">
            <button onClick={handleAllClear} className='ac' >AC</button>
            <button onClick={handleDelete}>DEL</button>
            <button onClick={handleEvaluate}>=</button>
        </div>

        <div className="b">
            <button onClick={handleClick} className='num' value="7">7</button>
            <button onClick={handleClick} className='num' value="8">8</button>
            <button onClick={handleClick} className='num' value="9">9</button>
            <button onClick={handleClick} value="/">/</button>
        </div>

        <div className="c">
            <button onClick={handleClick} className='num' value="4">4</button>
            <button onClick={handleClick} className='num' value="5">5</button>
            <button onClick={handleClick} className='num' value="6">6</button>
            <button onClick={handleClick} value="*">*</button>
        </div>

        <div className="d">
            <button onClick={handleClick} className='num' value="1">1</button>
            <button onClick={handleClick} className='num' value="2">2</button>
            <button onClick={handleClick} className='num' value="3">3</button>
            <button onClick={handleClick} value="-">-</button>
        </div>

        <div className="e">
            <button onClick={handleClick} value=".">.</button>
            <button onClick={handleClick} className='num' value="0">0</button>
            <button onClick={handleClick} value="+">+</button>
            <button onClick={handleClick} value="%">%</button>
        </div>
    </div>

    </>
  )
}

export default Keys