import React from 'react'
import SVG from 'react-inlinesvg';

export default function Icon({name,width,title}) {
    return (
        <SVG
            src={`${process.env.PUBLIC_URL}/${name}.svg`}
            width={width}
            height="auto"
            title={title}
           
        />
    )
}
