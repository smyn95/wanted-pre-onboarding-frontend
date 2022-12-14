import axios from 'axios';
import { useEffect, useState } from 'react';
import TodoPresenter from './todo.presenter';

export default function TodoContainer() {
  const [todo, setTodo] = useState('');
  const [data, setData] = useState([{}]);

  useEffect(() => {
    axios
      .request({
        url: 'https://pre-onboarding-selection-task.shop/todos',
        method: 'get',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      })
      .then((res) => {
        console.log('res' + res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <TodoPresenter data={data} setTodo={setTodo} todo={todo} />;
}
