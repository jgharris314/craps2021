import React, { useState, useEffect } from "react";
import { StyledPlaceBets } from "./place-bets.styles";

const PlaceBets = ({ bets, setBets, bankroll, setBankroll }) => {
	const [rerender, setRerender] = useState(false);
	const bettableNums = [4, 5, 6, 8, 9, 10];

	//To simulate casino cheques
	const bettingIncrements = [5, 25, 100, 500];
	//Add a spot to adjust increment value? probs but idk where yet
	const defaultIncrement = 5;
	const [incrementValue, setIncrementValue] = useState(defaultIncrement);
	const sixEightIncrement = incrementValue + incrementValue / 5;
	//increase bet based on increment value. if 6 or 8, the increment is divisible by 6
	const handleIncrease = (value) => {
		if (bankroll >= incrementValue) {
			if (value !== 6 && value !== 8) {
				setBets(bets, (bets[value] += incrementValue));
				setBankroll((bankroll -= incrementValue));
			} else {
				// let tempIncrement = incrementValue / 5;
				setBets(bets, (bets[value] += sixEightIncrement));
				setBankroll((bankroll -= sixEightIncrement));
			}
		}
		setRerender(!rerender);
	};
	//decrease bet based on increment value. if 6 or 8, the increment is divisible by 6

	const handleDecrease = (value) => {
		if (bets[value] < incrementValue) {
			setBankroll((bankroll += bets[value]));
			setBets(bets, (bets[value] = 0));
		} else if (value !== 6 && value !== 8) {
			setBets(bets, (bets[value] -= incrementValue));
			setBankroll((bankroll += incrementValue));
		} else {
			setBets(bets, (bets[value] -= sixEightIncrement));
			setBankroll((bankroll += sixEightIncrement));
		}

		setRerender(!rerender);
	};

	const handleIncrementChange = (event) => {
		event.preventDefault();
		setIncrementValue(Number(event.target.value));
	};
	useEffect(() => {
		// when bet value is changed, rerenders
	}, [rerender]);
	return (
		<StyledPlaceBets>
			{bettableNums.map((e, index) => (
				<div key={index} className="placebet">
					<div className="placebet-number">
						{e !== 6 && e !== 9 ? e : e === 6 ? "Six" : "Nine"}
					</div>
					<div className="placebet-value">${bets[e]}</div>

					<div className="placebet-buttons">
						<div
							className="placebet-buttons-decrease"
							onClick={() => handleDecrease(e)}
						>
							Decrease
						</div>
						<div
							onClick={() => handleIncrease(e)}
							className="placebet-buttons-increase"
						>
							Increase
						</div>
					</div>
				</div>
			))}
			<select onChange={handleIncrementChange}>
				{bettingIncrements.map((e, index) => (
					<option value={e} key={index}>
						{e}
					</option>
				))}
			</select>
		</StyledPlaceBets>
	);
};

export default PlaceBets;
