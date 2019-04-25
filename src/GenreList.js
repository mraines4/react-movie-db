import React from 'react';


function GenreList(props) {
    return (
        <ul>
            {
                props.genre.map((genre, i) => <li key={i}>{genre}</li>)
            }
        </ul>
    );
}


export default GenreList;