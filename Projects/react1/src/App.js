import logo from './logo.svg';
import './App.css';
import MyComponent from './comp1';
import Button from './button1';
import Card from './Card';
import UserInputComp from './UserInputForm'
import TodoList from './Todo'
import ProgressBar from './ProgressBar';
import ProgressBarHandler from './ProgressBarHandler';
import ProgressBarRep from './ProgressBarRep';
import SearchBar from './WordRecommender';
import Cricket from './Cricket';
import Sudoku from './Sudoku';
import TodoList1 from './Todo1';
import MultiStepForm from './MultiStep';
import CurrencyConverter from './CurrencyConvertor';
function App() {
    return (
      <div>
        {/* <Button/>
        <Card title="Welcome" content="This is a simple and beautiful card component." />
        <Card title="Instructions" content="Duplicate this component to create more cards!" />
        <UserInputComp/>
        <TodoList/>
        <SearchBar/> */}
        {/* <ProgressBarHandler/> */}
        {/* <ProgressBarRep/> */}
        {/* <Cricket/> */}
        {/* <Sudoku/> */}
        <TodoList1/>
        <MultiStepForm/>
        <CurrencyConverter/>
      </div>
    );
}

export default App;
