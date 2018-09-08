import React from 'react';

const NewListForm = (props) => {
    let title, excerpt
    const submit = e => {
        e.preventDefault()
        props.onNewList(title.value, excerpt.value)
        title.value = ''
        excerpt.value = ''
        title.focus()
    }

    return (
        <form onSubmit={submit}>
        <h2>Add New List</h2>
            <input ref={input => title = input}
                   type="text"
                   placeholder="Title..." required />
            <input ref={input => excerpt = input}
                   type="text"
                   placeholder="Excerpt..." required />
            <button>Add List</button>
        </form>
    )
}



export default NewListForm;