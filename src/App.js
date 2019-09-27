import React from 'react'
import AddTodo from './containers/AddTodo/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList/VisibleTodoList'
import Footer from './containers/Footer/Footer';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App;