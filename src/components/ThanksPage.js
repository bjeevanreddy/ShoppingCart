import React,{useEffect} from 'react'
// import {Redirect} from 'react-router-dom'
const ThanksPage=(props)=>{
    useEffect(()=>{
            setTimeout(()=>{
                props.history.push('/')
            },4000)   
    })
    return (
        <div className='thanks'>
            <h2>Thanks For your Order!!!Shop More</h2>
            <p>You Will be redirected to shop page after 5 seconds!!!!!!!</p>
            
        </div>
    )
}

export default ThanksPage