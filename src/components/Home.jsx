import React, { useEffect, useRef } from 'react';

export default function Home(props) {
    const ref = useRef();

    useEffect(() => {
        console.log(ref);
    })
    return (
        <div ref={ref}>{props.name}</div>
    );
}
