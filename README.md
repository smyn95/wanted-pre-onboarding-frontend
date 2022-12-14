# 프로젝트 실행방법

git clone 레파지토리
yarn install
yarn start

## preonboarding프로젝트 실행 설명

1.로그인 기능
-> 처음 보이는 화면이 로그인
(\*로그인이 되어있는경우(localStorage에 토큰이 있는경우) TodoList로 넘어감)

아이디가 없을경우

2.회원가입 기능

로그인 아래에 제공된 회원가입을 클릭하여 이동
->이메일 형식("@")과 비밀번호 (8글자 이상)일 경우에만 버튼 활성화

(\*회원가입에 성공하면 토큰값을 받아와 todoList로 이동)

3.CreateTodo

로그인 이후 TodoList페이지로 이동함
이후 위에 있는 input창을 사용하여서 할일 목록을 추가 가능

4.FetchTodo

CreateTodo에서 생성한 할일 목록이 새로고침후에 반영되어 보이게 됨

5.DeleteTodo

할일 목록을 추가한 이후 삭제를 할수있음
오른쪽에 있는 삭제버튼을 클릭하면 삭제 가능

6.UpdateTodo

삭제버튼의 왼쪽에 있는 수정버튼을 누르면 새로운 input창이 열리고
이를 통하여 작성한 내용이 반영됨

7. isCompleted

완료하기를 누르면 할일을 끝마쳤다는 의미로 새로고침후에 완료로 반영되어 보이게 됨
되돌리기를 누르면 할일을 마치지 않았다는 의미로 새로고침 후에 미완료로 반영되어 보이게 됨

# 배포링크

https://frabjous-parfait-d2b066.netlify.app/
