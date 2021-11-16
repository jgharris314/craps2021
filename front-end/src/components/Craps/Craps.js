import React, { useState } from "react";
import { StyledCraps } from "./craps.styles";
import PlaceBets from "./components/PlaceBets/PlaceBets";
//The main component. Renders individual layout components.
const Craps = () => {
	const defaultBets = { 4: 0, 5: 0, 6: 0, 8: 0, 9: 0, 10: 0 };
	const [bets, setBets] = useState(defaultBets);
	const [bankroll, setBankroll] = useState(10000);

	return (
		<StyledCraps>
			<PlaceBets
				bets={bets}
				setBets={setBets}
				bankroll={bankroll}
				setBankroll={setBankroll}
			/>
			Bankroll {bankroll}
		</StyledCraps>
	);
};

export default Craps;
