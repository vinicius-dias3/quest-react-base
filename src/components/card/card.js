import React from "react"
import './index.css'

const Card = ({text, color}) => {
    const textToUpperCase = text.toUpperCase()

    return (
        <div className="card">
            <p style={{color}}>{textToUpperCase}</p>
        </div>
    )
}


Card.defaultProps = {
    color: '#122750'
}

export default Card