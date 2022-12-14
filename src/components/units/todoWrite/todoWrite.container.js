import axios from 'axios';
import TodoWritePresenter from './todoWrite.presenter';

export default function TodoWriteContainer(props) {
  const onChangeTodo = (event) => {
    props.setTodo(event.target.value);
  };

  const onClickCreate = async () => {
    try {
      await axios.request({
        url: 'https://pre-onboarding-selection-task.shop/todos',
        method: 'post',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json',
        },
        data: {
          todo: props.todo,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <TodoWritePresenter
      onChangeTodo={onChangeTodo}
      onClickCreate={onClickCreate}
    />
  );
}
