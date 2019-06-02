import React,{Component} from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import * as contentful from 'contentful'
import Course from '../component/Course'


//you need to register in contentFul website-
const SPACE_ID='YOUR_SPACE_ID';
const ACCESS_TOKEN='YOUR_API_KEY';

const client    =   contentful.createClient({
    space:SPACE_ID,
    accessToken:ACCESS_TOKEN
})

class CourseList extends Component{
    state = {
        course :[],
        searchString:''
    }
    constructor(){
        super()
        this.getCourse()
    }

    getCourse = () =>{
        client.getEntries({
            content_type:'course',
            query:this.state.searchString
        }).then((response)=>{

            this.setState({course:response.items})
            console.log(response);

        }).catch((e)=>{

            console.log(e)
            console.log('---------')
        })
    }

    onSearchInputChange = (event) => {
        console.log(this.state.course)
        if(event.target.value){
            this.setState({searchString:event.target.value});
            this.getCourse();
        }
    }

    render(){
        return(
            <div>
                {this.state.course?(
                    <div>
                        <TextField 
                        id="searchInput"
                        placeholder="Search For Course"
                        onChange={this.onSearchInputChange}
                        ></TextField>
                        <Grid container>
                            {this.state.course.map(currentCourse => (
                                <Grid item>
                                    <Course course={currentCourse}></Course>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ):'No Record(s) Found'}
            </div>
        )
    }
}

export default CourseList