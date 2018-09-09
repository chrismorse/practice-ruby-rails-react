import React, { Component } from 'react';
import List from './List'; 
import NewListForm from './NewListForm'; 
import EditListForm from './EditListForm'; 
import axios from 'axios';

class ListsContainer extends Component {
    state = {
        lists: [],
        editingListId: null,
    }

    componentDidMount() {
        axios.get('api/v1/lists.json')
        .then(response => {
            console.log(response)
            this.setState({
                lists: response.data
            })
        })
        .catch(error => console.log(error))
    }
    
    addNewList = (title, excerpt) => {
        axios.post('/api/v1/lists', { list: {title, excerpt} })
        .then(response => {
            console.log(response)
            const lists = [ ...this.state.lists, response.data ]
            this.setState({lists})
        })
        .catch(error => {
            console.log(error)
        })
      }

    removeList = (id) => {
        axios.delete('/api/v1/lists/' + id)
        .then(response => {
            console.log(id, "deleted")
            const lists = this.state.lists.filter(
                list => list.id !== id
            )
            console.log(lists)
            this.setState({lists}) 
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    editingList = (id) => {
        this.setState({
            editingListId: id
        })
    }

    editList = (id, title, excerpt) => {
        console.log("editing list")
        axios.put('/api/v1/lists/' + id,  {list: {title, excerpt}})
        .then(response => {
            console.log(response);
            let newList = {id, title, excerpt};
            let lists = this.state.lists;
            lists.forEach((list, index) => {
                if (list.id === id) {
                    lists[index] = newList
                }
            })
            this.setState(() => ({
                lists, 
                editingListId: null
            }))
        })
        .catch(error => {
            console.log(error)
        })      
    }

    render() {
        return (
            <div className="lists-container">
                {this.state.lists.map( list => {
                    if ( this.state.editingListId === list.id ) {
                        return (<EditListForm 
                                    list={list} 
                                    key={list.id} 
                                    editList={this.editList} 
                        />)
                    } else {
                        return (<List 
                                    list={list} 
                                    key={list.id} 
                                    onRemoveList={this.removeList}
                                    editingList={this.editingList} 
                        />)
                    }
                })}
                <NewListForm onNewList={this.addNewList} />
            </div>
        )
    }
}
export default ListsContainer;