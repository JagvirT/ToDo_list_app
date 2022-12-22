import React from "react";

export default class List extends React.Component{
    render() {
        const style5 ={
            listStyleType:"none",
            color: "green",
            fontFamily: 'Apple Chancery',
            fontWeight: 'bold',
            cursor: 'pointer'
        }
        const style6 = {
            textAlign: 'center',
            marginTop:'-200px',
            display: 'block',
            margin : '0 auto',
            backgroundColor :'blue',
            width: '50vh',
            height: '29px',
            borderRadius: "4px",
            fontSize: '15px',
            fontWieght: 'bold',
            cursor: 'pointer',
            fontFamily: 'Apple Chancery',
            color: 'yellow'
        }
        return (
            <div>
                <ul style= {style5}>
                {this.props.tasks.map((task,index) => (
                    <li key = {index}> <button onClick = {this.props.deleteTask.bind(this,index)} style= {style6}>
                     Remove {task}</button>
                    </li>))}
                </ul>
            </div>
        )
    }
}