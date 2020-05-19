import React from "react";
import { connect } from "react-redux";
import * as courseActions from '../../redux/actions/courseAction';
import PropTypes from 'prop-types';
import { bindActionCreators } from "redux";


class CoursesPage extends React.Component {
  constructor(props){
    super(props)
    
    this.state={
      course:{
        title:''
      }
    };
  }

  componentDidMount(){
    courseActions.loadCourses().catch(error=>{
      alert("Load courses Failed" + error)
    })
  }


  render() {
    return (
      <>
      <h1>Courses</h1>
        {this.props.courses.map(course=>(
          <div key={course.title}>
            {course.title}
            </div>
        ))
        }
      </>
    )
  }
}

CoursesPage.propTypes={
  courses:PropTypes.array.isRequired,
  createCourse:PropTypes.func.isRequired
}

function mapDispatchToProps(dispatch){
  return{
    actions:bindActionCreators(courseActions,dispatch)
  }
}

function mapStateToProps(state){
  return{
    courses:state.courses,
    test:state.test
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(CoursesPage);
