// import {useDispatch,getDvaApp,useSelector,useStore} from "umi" 
// import styles from './index.less';

// export default () => {
  
//  const dispatch=useDispatch()       // 获取dispatch
//  const storeState=useSelector(s=>s)   // 获取所有model的状态
// //  const dva=getDvaApp()             // 获取dva实例
// //  const store=useStore()        // 获取store对象

//   const add = user => {
//     // dispatch({type:'list/add',payload:{name:'a',age:18}})
//     dispatch({type: 'list/add',payload: user})
//   }

//   return (
//     <div className={styles.title}>
//       <button onClick={add}>add</button>
//       <ul>
//       {
//         // model的文件名或者namespce值为总状态的key
//         storeState.list.map((v)=><li></li>)
//       }
//       </ul>
//     </div>
//   );
// }

// import styles from './index.less';

// export default function IndexPage() {
//   return (
//     <div>
//       <h1 className={styles.title}>Page index</h1>
//     </div>
//   );
// }


import {connect} from "umi" 

const page = (props) => {
  const add = (user) => {
    props.dispatch({type:'list/add', payload: {name:'a'}})
  }

  const save = (user) => {
    props.dispatch({type:'list/save', payload: {todo:'a'}})
  }

  return (
    <div>
      <button onClick={add}>add</button>
      <button onClick={save}>save</button>
      <ul>
	    {
	      // model的文件名或者namespce值为总状态的key
	      props.list.map((v, i)=><li key={i}>{v.name}</li>)
	    }
      </ul>
    </div>
  );
}

export default connect(s=>s)(page)

