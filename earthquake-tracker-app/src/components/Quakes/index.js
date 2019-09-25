import React from 'react'

const List = (props) =>{
    return (
        <div>
            {props.quakes.map((q,i) =>{
                return(
                    <div key={i}>
                        <p>{q.properties.title}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default List