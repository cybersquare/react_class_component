import './App.css';

import React from 'react';
import Item from './Item';


const course_list=[
  {name:"Python", description:"Fullstack application development using django"},
  {name:"React", description:"Frontend development using javascript framework"},
]

class App extends React.Component {

  constructor(props){
    console.log("app constructor")
    super(props)
  }

  getSnapshotBeforeUpdate() {
    console.log("App getSnapshotBeforeUpdate ");
    return 0;

  }

  AddCourse=()=>{
    var course_name = document.getElementById('name').value; 
    var course_description =  document.getElementById('desc').value; 
    var course = {name:course_name, description:course_description};
    course_list.push(course);
  }

  DeleteCourse=()=>{
    course_list.pop();
    this.setState({data:course_list});
  }

  componentDidMount(){
    console.log("app component did mount")
  }

  componentDidUpdate(){
    console.log("app component update")
    console.log(this.state)
  }

  render(){
    console.log("app render")
    return(
      <div className="App">
        <h1>CyberSquare courses</h1>
       { course_list.map((course)=>(
          <Item data={course} key={course.name}/>
       ))
      }
      <h1>Add course</h1>
      <input type="text" id="name" placeholder='Course name'/><br/><br/>
      <input type="text" id="desc" placeholder='Course description'/><br/><br/>
      <input type="button" onClick={this.AddCourse} value="Add course"/><br/><br/>
      <input type="button" onClick={this.DeleteCourse} value="Delete course"/><br/>
      </div>
    );
  } 
}

export default App;
