import logo from './logo.svg';
import './App.css';
import MyComponent from './comp1';
import Button from './button1';
import Card from './Card';
import UserInputComp from './UserInputForm'
import TodoList from './Todo'

function App() {
    return (
      <div>
        <Button/>
        <Card title="Welcome" content="This is a simple and beautiful card component." />
        <Card title="Instructions" content="Duplicate this component to create more cards!" />
        <UserInputComp/>
        <TodoList/>
      </div>
    );
}

export default App;
