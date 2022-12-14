import TodoListContainer from '../todoList/todoList.container';
import TodoWriteContainer from '../todoWrite/todoWrite.container';
import * as S from './todo.styles';

export default function TodoPresenter(props) {
  return (
    <>
      <S.Wrapper>
        <TodoWriteContainer
          setTodo={props.setTodo}
          todo={props.todo}
          isEdit={false}
        />
        <ul>
          {props.data?.map((el) => (
            <TodoListContainer
              setTodo={props.setTodo}
              key={el.id}
              el={el}
              todo={props.todo}
              isEdit={true}
              data={props.data}
            />
          ))}
        </ul>
      </S.Wrapper>
    </>
  );
}
