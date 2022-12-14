export default function TodoWritePresenter(props) {
  return (
    <>
      <data>
        <input type='text' onChange={props.onChangeTodo} />
        <button onClick={props.onClickCreate}>추가</button>
      </data>
    </>
  );
}
