import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField, Button } from '@material-ui/core';

export class TaskForm extends Component {
  render() {
    const { open, onHandleClose } = this.props;
    return (
      <Dialog
        open={open}
        onClose={onHandleClose}
        aria-labelledby='form-dialog-title'
        fullWidth
      >
        <DialogTitle id='form-dialog-title'>Thêm mới công việc á</DialogTitle>
        <DialogContent>
          <TextField
            margin='dense'
            id='title'
            label='Title'
            type='text'
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onHandleClose} color='primary'>
            Cancel
          </Button>
          <Button onClick={onHandleClose} color='primary'>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default TaskForm;
