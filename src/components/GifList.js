import React from 'react'

const GifList = props => {
    console.log(props)
    return(
        <div>
            <ul>
                <li>{props.gifs.map(gif => <img key={gif.url} src={gif.url}/>)}</li>
            </ul>
        </div>
    )
}

export default GifList