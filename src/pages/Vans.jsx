import React from 'react';

function Vans() {
    React.useEffect(() => {
        fetch("/api/vans")
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])
    return (
        <h1>Vans page goes here</h1>
    )
};

export default Vans;