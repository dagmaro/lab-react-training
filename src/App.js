import './App.css';
import BoxColor from './components/BoxColor';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';
import Random from './components/Random';

function App() {
  return (
    <div className="App">
      <IdCard
        picture="https://randomuser.me/api/portraits/men/44.jpg"
        firstName="John"
        lastName="Doe"
        gender="male"
        height={178}
        birth={'1992-05-11'}
      />
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">Alexandre</Greetings>
      <Greetings lang="es">Mari Carmen</Greetings>
      <Greetings lang="en">Skylar</Greetings>

      <Random min={1} max={6} />
      <Random min={18} max={24} />

      <BoxColor />
    </div>
  );
}

export default App;
