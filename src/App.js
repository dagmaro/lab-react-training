import './App.css';
import IdCard from './components/IdCard';

function App() {
  return (
    <div className="App">
     <IdCard 
      picture="https://randomuser.me/api/portraits/men/44.jpg"
      firstName="John"
      lastName="Doe"
      gender="male"
      height={178}
      birth={("1992-05-11")}
     />
    </div>
  );
}

export default App;
