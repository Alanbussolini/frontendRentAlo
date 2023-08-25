import React from 'react';

const DeptoItem = (props) => {
    const { title, imagen, body } = props;

    return (
        <div className='depto'>
            <h2>{title}</h2>
            <img src={imagen}></img>
            <div dangerouslySetInnerHTML={{__html: body }} />
            <hr />
        </div>
    );
}

export default DeptoItem; 