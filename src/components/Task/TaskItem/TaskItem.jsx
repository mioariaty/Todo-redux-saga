import React, { Component } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  CardActions,
  Fab,
} from "@material-ui/core";
import "./style.scss";

class TaskItem extends Component {
  render() {
    const { task } = this.props;
    return (
      <Card key={task.id}>
        {/* title */}
        <CardHeader title={task.title} />

        {/* content */}
        <CardContent>
          <Typography component="p">{task.description}</Typography>
        </CardContent>

        {/* actions */}
        <CardActions className="card-action-wrapper">
          <Fab size="small" color="primary" variant="round" aria-label="Add">
            <EditIcon />
          </Fab>
          <Fab  size="small" variant="round" color="secondary" aria-label="Delete">
            <DeleteIcon />
          </Fab>
        </CardActions>
      </Card>
    );
  }
}

export default TaskItem;
