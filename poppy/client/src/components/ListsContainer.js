import React, { Component } from 'react';
import List from './List'; 
import NewListForm from './NewListForm'; 
import axios from 'axios';

class ListsContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            lists: []
        }
        this.addNewList = this.addNewList.bind(this);
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
    
    addNewList(title, excerpt) {
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


    render() {
        return (
            <div className="lists-container">
                {this.state.lists.map( list => {
                    return (
                        <List list={list} key={list.id} />                    )
                })}
                <hr />
                <NewListForm onNewList={this.addNewList} />
            </div>
        )
    }
}
export default ListsContainer;