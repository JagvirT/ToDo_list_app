import React, { Component } from 'react';
import List from './List';

export default class App extends Component{
  constructor () {
    super();

    this.state = {
      input_string: '',
      tasks: []
    };
  }
  
  onAddChange = (event) => {
    this.setState({
      input_string: event.target.value
    })
  }

  onList = (event) => {
    event.preventDefault()
    this.setState({
      input_string: '',
      tasks: [...this.state.tasks, this.state.input_string]
    });
  }

  onDeleteTask = (index) => {
    const deleteTask = [...this.state.tasks];
    deleteTask.splice(index,1);
    this.setState({
      tasks:deleteTask
    })
  }

  onRealDelete = (index) =>{

  }


  render() {
    const style1 ={
        textAlign: 'center',
        fontFamily: 'Rockwell',
        color: 'blue'
    }
    const style2= {
      display: 'block',
      margin : '0 auto',
      marginBottom: '10px',
      width : '300px',
      height: '25px'
    }
    const style3 = {
        display: 'block',
        margin : '0 auto',
        backgroundColor :'#3123',
        color: '#949',
        width: '120px',
        height: '29px',
        borderRadius: "4px",
        fontSize: '15px',
        fontWieght: 'bold',
        cursor: 'pointer'
    }
    const style4 = {
      textAlign:'center',
      listStyleType: 'none',
      marginRight: '-100vh',
      marginTop: '-50px',
    }

    const listStyle ={
      marginLeft:'300px'
    }

    return(
      <div>
        <form>
          <h1 style= {style1}>To Do List</h1>
          <input type='text' placeholder = "Enter Task" value= {this.state.toAdd} onChange= {this.onAddChange} style= {style2}/>
            <button onClick={this.onList} style ={style3}> Add to List</button>
          <div style = {listStyle}>  
            <ol>  
              {this.state.tasks.map((task,index) => (
              <li key = {index}>{task}</li>))}
            </ol>
          </div>     
        </form>
        <div style ={style4}>
          <List deleteTask = {this.onDeleteTask} tasks={this.state.tasks}/>         
        </div>

        
      </div>
    )
  }
}

