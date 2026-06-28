import { useContext } from "react";
import { TodoDataContext } from "../TodoContext";

const Form = () => {
  const { submitHandler, inputHandler, value } = useContext(TodoDataContext);

  return (
    <div style={{marginBottom:'20px'}}>
      <form onSubmit={submitHandler} style={{display:'flex', alignItems:'center', gap:'10px'}}>
        <input
          onChange={inputHandler}
          value={value}
          placeholder="write your next task"
          style={{flex:1, minWidth:0, background:'#242424', border:'1px solid #333', borderRadius:'10px', padding:'11px 14px', color:'rgba(255,255,255,0.7)', fontSize:'clamp(12px, 2.5vw, 13px)', outline:'none', fontFamily:'inherit', width:'100%'}}
          type="text"
        />
        <button
          type="submit"
          style={{width:'38px', height:'38px', minWidth:'38px', borderRadius:'50%', background:'#e8533a', border:'none', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0}}
        >
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14"/>
          </svg>
        </button>
      </form>
    </div>
  );
};

export default Form;
