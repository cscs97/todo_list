

// import React ,{useState} from 'react';
import TodoList from "./pages/TodoList";
import * as data from "./utils/data";






function App() {

data.dbSet();

  return (
    <div className="App">
      <h1>TodoList</h1>

    <TodoList />
    
    </div>
  );
}

export default App;
