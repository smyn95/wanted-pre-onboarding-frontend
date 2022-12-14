import styled from '@emotion/styled';

export default function TodoListPresenter(props) {
  return (
    <>
      <li style={{ marginBottom: '10px' }}>
        {!props.open ? (
          <>
            <Edit id={props.el.id} onClick={props.onClickComplete}>
              {!props.el.isCompleted ? '완료하기' : '되돌리기'}
            </Edit>
            <strong style={{ marginRight: '20px' }}>
              {props.el.isCompleted ? '완료' : '미완료'}
            </strong>
            <Contents>{props.el.todo}</Contents>
          </>
        ) : (
          <>
            <input
              type='text'
              defaultValue={props.el.todo}
              onChange={props.onChangeTodo}
              style={{ height: '30px' }}
            />{' '}
            <Edit id={props.el.id} onClick={props.onClickUpdate}>
              제출
            </Edit>
            <Edit id={props.el.id} onClick={props.onClickClose}>
              취소
            </Edit>
          </>
        )}
        {!props.open && (
          <>
            <Edit id={props.el.id} onClick={props.onClickOpen}>
              수정
            </Edit>
            <Edit id={props.el.id} onClick={props.onClickDel}>
              삭제
            </Edit>
          </>
        )}
      </li>
    </>
  );
}
const Contents = styled.span`
  min-width: 200px;
  display: inline-block;
`;

const Edit = styled.button`
  min-width: 50px;
  margin-right: 5px;
`;
