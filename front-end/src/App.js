import { StyledApp } from "./app.styles.js";
import Craps from "./components/Craps/Craps.js";
function App() {
	return (
		<StyledApp>
			<header className="App-header">Craps is a fun game</header>
			<Craps />
		</StyledApp>
	);
}

export default App;
