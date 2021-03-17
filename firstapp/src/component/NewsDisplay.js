import React from 'react';

const NewsDisplay = (props) => {

    const renderNews = props.newsdata.map((data) => {
        return(
            <div key={data.id}>
                <h3>{data.title}</h3>
                <p>{data.feed}</p>
            </div>
        )
    })

    return(
        <div>
            {renderNews}
        </div>
    )
}

export default NewsDisplay