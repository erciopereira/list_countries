import React from 'react'

const Card = ({name}) => {
    return(
        <div style={{border: '1px solid #999', padding: '10px'}}>
            <div>{name}</div>
        </div>
    )
}

export default Card;