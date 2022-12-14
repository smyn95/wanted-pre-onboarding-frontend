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
    let state = null;
    props.data.forEach((el) => {
      if (String(el.id) === String(event.target.id)) {
        state = props.el.isCompleted;
      }
    });
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
          isCompleted: state,
        },
      });
      props.isEdit(false);
      setOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  const onClickComplete = async (event) => {
    let todo = null;
    props.data.forEach((el) => {
      if (String(el.id) === String(event.target.id)) {
        todo = props.el.todo;
      }
    });

    try {
      await axios.request({
        url: `https://pre-onboarding-selection-task.shop/todos/${event.target.id}`,
        method: 'put',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json',
        },
        data: {
          todo: todo,
          isCompleted: event.target.innerText === '완료하기' ? true : false,
        },
      });
      props.isEdit(false);
      setOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  const onClickDel = (event) => {
    axios.request({
      url: `https://pre-onboarding-selection-task.shop/todos/${event.target.id}`,
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    });
  };
  return (
    <TodoListPresenter
      el={props.el}
      onClickUpdate={onClickUpdate}
      onClickOpen={onClickOpen}
      open={open}
      onClickClose={onClickClose}
      onChangeTodo={onChangeTodo}
      onClickComplete={onClickComplete}
      onClickDel={onClickDel}
    />
  );
}
