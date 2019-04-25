import React from 'react';


function GenreList(props) {
    return (
        <ul>
            {
                props.genre.map((genre, i) => {
                    // console.log(genre);
                    return <li key={i}>
                        <a href="#" onClick={() => {
                            // console.log(genre);
                            props.handleClick(genre);
                        }}>
                            {genre}
                        </a>
                    </li>
                })
            }
        </ul>
    );
}


export default GenreList;