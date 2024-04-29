import HouseholdSalaryCalculator from "./components/HouseholdSalaryCalculator";
import UserContextComponent from "./context/UserContext";

function App() {
  return (
    <div className="">
      <UserContextComponent>
        <HouseholdSalaryCalculator />
      </UserContextComponent>
    </div>
  );
}

export default App;
