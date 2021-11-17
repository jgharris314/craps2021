import React, { useState } from "react";
import { StyledCraps } from "./craps.styles";
import PlaceBets from "./components/PlaceBets/PlaceBets";
import ComeBet from "./components/ComeBet/ComeBet";
//The main component. Renders individual layout components.
const Craps = () => {
	const defaultBets = {
		placeBets: { 4: 0, 5: 0, 6: 0, 8: 0, 9: 0, 10: 0 },
		comeBetFlats: { 4: 5, 5: 0, 6: 0, 8: 0, 9: 0, 10: 0 },
		comeBetOdds: { 4: 0, 5: 0, 6: 0, 8: 0, 9: 0, 10: 0 },
		comeBet: 0,
		fieldBet: 0,
	};
	const [bets, setBets] = useState(defaultBets);

	const [bankroll, setBankroll] = useState(10000);
	const bettingIncrements = [5, 25, 100, 500];
	const defaultIncrement = 5;
	const [incrementValue, setIncrementValue] = useState(defaultIncrement);

	const handleIncrementChange = (event) => {
		event.preventDefault();
		setIncrementValue(Number(event.target.value));
	};
	return (
		<StyledCraps>
			<PlaceBets
				bets={bets}
				setBets={setBets}
				bankroll={bankroll}
				setBankroll={setBankroll}
				incrementValue={incrementValue}
				setIncrementValue={setIncrementValue}
			/>
			<ComeBet
				bets={bets}
				setBets={setBets}
				bankroll={bankroll}
				setBankroll={setBankroll}
				incrementValue={incrementValue}
			/>
			Bankroll {bankroll}
			<select onChange={handleIncrementChange}>
				{bettingIncrements.map((e, index) => (
					<option value={e} key={index}>
						{e}
					</option>
				))}
			</select>
		</StyledCraps>
	);
};

export default Craps;
