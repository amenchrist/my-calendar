import Calendar from "./components/Calendar";

function App() {

  const date = `4/11/2022`
  
  return (
    <div style={{width: '500px'}}>
        <Calendar date={date} />
    </div>
  );
}

export default App;
