import React from "react";
import { StyledComeBet } from "./come-bet.styles";

const ComeBet = ({
	bets,
	setBets,
	bankroll,
	setBankroll,
	incrementValue,
	rerender,
	setRerender,
	pointOnNumber,
}) => {
	const handleComeBetFlatIncrease = () => {
		if (pointOnNumber !== 0) {
			if (bankroll >= incrementValue) {
				setBets(bets, (bets.comeBet += incrementValue));
				setBankroll((bankroll -= incrementValue));
			}
		}
		setRerender(!rerender);
	};

	const handleComeBetFlatDecrease = () => {
		//if the bet is smaller than the increment, just give bet back.
		if (bets.comeBet < incrementValue) {
			setBankroll((bankroll += bets.comeBet));
			setBets(bets, (bets.comeBet = 0));
		} else {
			setBets(bets, (bets.comeBet -= incrementValue));
			setBankroll((bankroll += incrementValue));
		}
	};
	return (
		<StyledComeBet>
			<div>COME</div> <div>${bets.comeBet}</div>
			<div className="buttons">
				<div
					className="buttons-decrease"
					onClick={() => handleComeBetFlatDecrease()}
				>
					-
				</div>
				<div
					className="buttons-increase"
					onClick={() => handleComeBetFlatIncrease()}
				>
					+
				</div>
			</div>
		</StyledComeBet>
	);
};

export default ComeBet;
