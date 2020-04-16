import React,{Component} from 'react';
import TodoItem from './Item/Item'
import Item from './Item/Item';

class TodoList extends Component{

    render(){

        return(
            <section>
               <h2> To do item</h2>
               <Item/>
            </section>
        );
    }
}

export default TodoList;