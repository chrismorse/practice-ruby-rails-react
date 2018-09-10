import React from 'react';

const List = (props) =>
    <div className="single-list" key={props.list.id}>
        <h4>{props.list.title}</h4>
        <p>{props.list.excerpt}</p>
        <button onClick={() => {if (window.confirm('Are you sure you want to delete?')) props.onRemoveList(props.list.id) }}>Erase</button>
        <button onClick={() => props.editingList(props.list.id)}>Edit</button>
        <hr />
    </div>

export default List;