import React, { Component } from "react";
import {
  Typography,
  Grid,
} from "@material-ui/core";
import './style.scss'
import TaskItem from "../TaskItem/TaskItem";

class TaskList extends Component {
  render() {
    const { tasks, statusLabel } = this.props;

    return (
      <Grid item xs={12} md={4} key={statusLabel.value}>
        <Typography color="primary" variant="h6">
          {statusLabel.label}
        </Typography>

        <React.Fragment>
          {tasks.map((task) => <TaskItem task={task} key={task.id} />)}
        </React.Fragment>
      </Grid>
    );
  }
}

export default TaskList;
