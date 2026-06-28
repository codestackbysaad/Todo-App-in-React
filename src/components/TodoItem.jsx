import { useContext } from "react";
import { TodoDataContext } from "../TodoContext";

const TodoItem = ({ item }) => {
  const { checkedHandle, deleteHandler } = useContext(TodoDataContext);

  return (
    <li style={{display:'flex', alignItems:'center', gap:'10px', background:'#242424', borderRadius:'12px', padding:'12px 14px', marginBottom:'10px', listStyle:'none', transition:'background .2s'}}>
      <button
        onClick={() => checkedHandle(item.id, !item.completed)}
        style={{width:'20px', height:'20px', minWidth:'20px', borderRadius:'50%', border: item.completed ? 'none' : '2px solid #555', background: item.completed ? '#4ade80' : 'transparent', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', transition:'all .2s', padding:0, flexShrink:0}}
      >
        {item.completed && (
          <svg width="11" height="11" fill="none" viewBox="0 0 24 24" stroke="#000" strokeWidth="3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
          </svg>
        )}
      </button>

      <span style={{flex:1, minWidth:0, fontSize:'clamp(12px, 2.5vw, 14px)', fontWeight:'500', textTransform:'capitalize', color: item.completed ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.85)', textDecoration: item.completed ? 'line-through' : 'none', transition:'all .2s', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>
        {item.todo}
      </span>

      <button
        onClick={() => deleteHandler(item.id)}
        style={{background:'transparent', border:'none', cursor:'pointer', color:'rgba(255,255,255,0.3)', padding:'4px', borderRadius:'6px', display:'flex', alignItems:'center', flexShrink:0, transition:'color .2s'}}
        onMouseOver={e=>e.currentTarget.style.color='#f87171'}
        onMouseOut={e=>e.currentTarget.style.color='rgba(255,255,255,0.3)'}
      >
        <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
        </svg>
      </button>
    </li>
  );
};

export default TodoItem;
