import Heading from "./components/Heading";
import StatsCard from "./components/StatsCard";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div style={{minHeight:'100vh', width:'100%', display:'flex', justifyContent:'center', alignItems:'center', background:'#c8b49a', padding:'16px'}}>
      <div style={{background:'#1a1a1a', borderRadius:'24px', width:'100%', maxWidth:'680px', minHeight:'480px', padding:'24px 20px', boxShadow:'0 30px 80px rgba(0,0,0,0.5)'}}>
        <Heading />
        <StatsCard />
        <Form />
        <TodoList />
      </div>
    </div>
  );
};

export default App;
