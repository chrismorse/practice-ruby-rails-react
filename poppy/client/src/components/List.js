import React from 'react';

const List = (props) =>
    <div className="single-list" key={props.list.id}>
        <h4>{props.list.title}</h4>
        <p>{props.list.excerpt}</p>
        <button onClick={() => props.onRemoveList(props.list.id)}>Erase</button>
        <hr />
    </div>

export default List;