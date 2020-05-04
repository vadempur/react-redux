import React from "react";
import { connect } from "react-redux";
import * as courseActions from '../../redux/actions/courseAction';
import PropTypes from 'prop-types';


class CoursesPage extends React.Component {
  constructor(props){
    super(props)
    
    this.state={
      course:{
        title:''
      }
    };
  }

  handleChange=(event)=>{
   const course={...this.state.course ,title:event.target.value }
   this.setState({ course })
  }

  handleSubmit=(event)=>{
    event.preventDefault();
    this.props.createCourse(this.state.course)
    this.setState({course:{title:""}})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input type = "text"
         onChange={this.handleChange}
         value={this.state.course.title}
         />
        <input type="submit" value="save"/>
        {this.props.courses.map(course=>(
          <div key={course.title}>
            {course.title}
            </div>
        ))
        }
      </form>
    )
  }
}

CoursesPage.propTypes={
  courses:PropTypes.array.isRequired,
  createCourse:PropTypes.func.isRequired
}

function mapDispatchToProps(dispatch){
  return{
    createCourse:course=>dispatch(courseActions.createCourse(course))
  }
}

function mapStateToProps(state){
  return{
    courses:state.courses,
    test:state.test
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(CoursesPage);
