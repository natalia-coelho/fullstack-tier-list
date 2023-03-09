import React, {useState, useEffect } from 'react';

const RankItems = () => {
    const [items, setItems] = useState([]);
    const dataType = 1;
    
    useEffect(() => {
      fetch(`item/${dataType}`)
        .then((results) => {
            return results.json();
        })
        .then(data => {
            setItems(data);
        })
    }, [])

    return(
        <main>
            {
            (items != null)? items.map((item) => <h3>{item.title}</h3>)
            }
        </main>
    )
}