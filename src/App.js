import logo from "./logo.svg";
import "./App.css";
import GameComponent from "./components/gameComponent/GameComponent";
import Pikachu from "../src/media/photos/pikachu.png";
import Charmander from "../src/media/photos/charmander.png";
import Mimikyu from "../src/media/photos/mimikyu.png";
import Bulbasaur from "../src/media/photos/bulbasaur.png";

function App() {
  return (
    <div>
      {/* className= "Game" */}
      {/* <h1>Welcome to {props.venue}</h1> */}
      <GameComponent
        venue="Pokemon Yellow Battles"
        home="Pikachu"
        homeLogo={Pikachu}
        away="Charmander"
        awayLogo={Charmander}
      />
      <GameComponent
        venue="Pokemon Sun and Moon Battles"
        home="Mimikyu"
        homeLogo={Mimikyu}
        away="Bulbasaur"
        awayLogo={Bulbasaur}
        //Mimikyu is appeared in Pokemon Sun and Moon
        //as a dual-type Ghost/Fairy Pokemon,
        //and changes its appearance when hit by an attack.
        //It's special ability, "Disguise",
        //allows it to avoid damage from an enemy attack once during a battle.
      />
    </div>
  );
}

export default App;
