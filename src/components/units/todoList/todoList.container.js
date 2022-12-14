import axios from 'axios';
import { useState } from 'react';
import TodoListPresenter from './todoList.presenter';

export default function TodoListContainer(props) {
  const [open, setOpen] = useState(false);

  const onClickOpen = () => {
    setOpen(true);
  };
  const onClickClose = () => {
    setOpen(false);
  };

  const onChangeTodo = (event) => {
    props.setTodo(event.target.value);
  };

  const onClickUpdate = async (event) => {
    try {
      await axios.request({
        url: `https://pre-onboarding-selection-task.shop/todos/${event.target.id}`,
        method: 'put',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json',
        },
        data: {
          todo: props.todo,
          isCompleted: props.el.isCompleted,
        },
      });
      props.isEdit(false);
      setOpen(false);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <TodoListPresenter
      el={props.el}
      onClickUpdate={onClickUpdate}
      onClickOpen={onClickOpen}
      open={open}
      onClickClose={onClickClose}
      onChangeTodo={onChangeTodo}
    />
  );
}
