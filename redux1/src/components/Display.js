import React from 'react';

const DisplayMovies = (props) => {
    const renderView = ({datalist}) => {
        if(datalist){
            return datalist.map((item) => {
                return(
                    <div>{item.name}</div>
                )
            })
        }
    }
    return(
        <div>
            <h3>Movies List</h3>
            {renderView(props)}
        </div>
    )
}

export default DisplayMovies;