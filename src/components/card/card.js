import React from "react"
import './card.css'

const Card = ({text}) => {
    return (
        <div className="card">
            <Paragrafo text={text} />
        </div>
    )
}

function Paragrafo({text, color}){
    const textToUpperCase = text.toUpperCase()
    return <p style={{color}}>{textToUpperCase}</p>
}


Paragrafo.defaultProps = {
    color: '#122750'
}

export default Card