import './App.css'
import TransactionItem from "./components/TransactionItem";
import TransactionList from "./components/TransactionList";
import RiskBadge from "./components/RiskBadge";

function App() {
  return (
    <> 
          <h1>Fintech Dashboard</h1>
          <TransactionItem />
          <TransactionList />
          <RiskBadge />
    </>
  );
}

export default App
