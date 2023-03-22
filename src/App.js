/* eslint-disable */

import './App.css';
import { useState } from 'react';

function App() {

  let [title, setTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [count, setCount] = useState([0,0,0]);
  let [modal,setModal] = useState(false);
  let [title1, setTitle1] = useState(0)
  let [inputValue, setInputValue] = useState('')

  return (
    <div className="App">
      <div className ="black-nav">
        <h4>React Blog</h4>
      </div>

      <button onClick={ () => {
        let copyTitle = [...title]; //[...] 괄호 벗기기
        copyTitle[0] = '여자 코트 추천'
        setTitle(copyTitle);
        }}>
        글 수정
        </button>

        <button onClick={ () => {
          let sortArr = [...title];
          sortArr.sort();
          setTitle(sortArr);
        }}>오름차순 정렬</button>

      {/* <div className='list'>
        <h4 onClick={ () => { 
          {modal == true ? setModal(false) : setModal(true)}
          }}>{ title[0] }
        <span onClick={() => {setCount(count+1)}}>👍</span>
        {count}
        </h4>
        <p>3월 21일 발행</p>
      </div>
      <div className='list'>
        <h4>{ title[1] }</h4>
        <p>3월 21일 발행</p>
      </div>
      <div className='list'>
        <h4>{ title[2] }</h4>
        <p>3월 21일 발행</p>
      </div> */}

      {
        title.map(function(a,i) {
          return (
            <div className='list' key={i}>
              <h4 onClick={ () => {
                setModal(!modal); setTitle1(i)
              }}>{title[i]}
              <span onClick={ (e) => { e.stopPropagation();
                let copyCount = [...count];
                copyCount[i] = copyCount[i] +1
                setCount(copyCount);
              }}>👍{count[i]}</span>
              <button onClick={ () => {
                let copy =[...title];
                copy.splice(i,1)
                setTitle(copy)
              }}>삭제</button>
              </h4>
              <p>3월 21일 발행</p>
            </div>
          )
        })
      }

      <input onChange={ (e) => {
        setInputValue(e.target.value);
      }}></input>
      <button onClick={ () => {
        let copy = [...title];
        copy.unshift(inputValue)
        setTitle(copy)
      }}>등록</button>

        {
          modal == true ? <Modal title1={title1} title={title} setTitle={setTitle}/> : null 
        }


    </div>
  );
}

// const Moda = () => { return () }

function Modal(props) {
  return (
    <div className='modal'>
        <h4>{props.title[props.title1]}</h4>
        <p>날짜</p>
        <p>상세 내용</p>
        <button onClick={ () => {
          props.setTitle(['여자 코트 추천', '강남 우동 맛집', '파이썬 독학'])
        }}>글 수정</button>
      </div>
  )
}

// [class 문법 참고]
// class Modal2 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state={
//       name : 'park',
//       age : 20
//     }
//   }
//   render() {
//     return(
//       <div>Hello {this.state.name}
//       <button onClick={() => {
//         this.setState({age :21})
//       }}>버튼</button>
//       </div>
//     );
//   }
// }


export default App;
