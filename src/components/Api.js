import React from 'react'


function fetchApi() {

    const apiGet = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
            });
    }

    return (
        <div>
            <button onClick={apiGet}>fetch api</button>
            <ul>

            </ul>
        </div>
    );
}

export default fetchApi;