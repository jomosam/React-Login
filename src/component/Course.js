import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardCotent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typrography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent';

const Course = (props) => {
    return(
        <div>
            {props.course ? (
                <Card>
                    <CardMedia image="{props.course.fields.courseImage.fields.file.url}">

                    </CardMedia>
                    <CardContent>
                        <Typrography gutterBottom variant="headline">
                            {props.course.fields.title}
                        </Typrography>
                    </CardContent>
                </Card>
            ):' '}
        </div>
    )
}

export default Course