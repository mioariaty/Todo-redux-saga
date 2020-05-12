import React from "react";
import { withStyles, Container, Button, Grid } from "@material-ui/core";
import styles from "./style";
import AddIcon from "@material-ui/icons/Add";
import { TASKS } from "../../redux/constants/task.constant";
import TaskList from "../../components/Task/TaskList/TaskList";
import TaskForm from "../../components/Task/TaskForm/TaskForm";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { requestFetchAllTasks } from "../../redux/actions/task.action";


class TaskBoard extends React.Component {
  state = {
    open: false,
  };

  componentDidMount() {
    this.props.tasksActionCreator()
  }

  renderTasks = () => {
    const {tasks} = this.props;

    return (
      <Grid container spacing={2}>
        {TASKS.map((task, index) => {
          const findByStatusTask = tasks.filter(
            (x) => x.status === task.value
          );
          return (
            <TaskList key={index} tasks={findByStatusTask} statusLabel={task} />
          );
        })}
      </Grid>
    );
  };

  handleClose = () => this.setState({ open: false });
  handleOpen = () => this.setState({ open: true });

  renderDialogCreate = () => {
    const { open } = this.state;
    return <TaskForm open={open} onHandleClose={this.handleClose} />;
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Button variant="contained" color="primary" onClick={this.handleOpen}>
          <AddIcon /> Thêm mới công việc
        </Button>

        <Container style={{ marginTop: 16 }}>
          {this.renderTasks()}
          {this.renderDialogCreate()}
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks.listTasks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    tasksActionCreator: bindActionCreators(requestFetchAllTasks, dispatch),
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(TaskBoard)
);
