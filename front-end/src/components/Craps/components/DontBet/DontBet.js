import React from "react";

import { StyledDontBet } from "./dont-bet.styles";

const DontBet = ({
	bets,
	setBets,
	bankroll,
	setBankroll,
	incrementValue,
	rerender,
	setRerender,
	pointOnNumber,
	maxOdds,
}) => {
	const handleDontBetFlatIncrease = () => {
		if (bankroll >= incrementValue) {
			setBets(bets, (bets.dontBet += incrementValue));
			setBankroll((bankroll -= incrementValue));
		}
		setRerender(!rerender);
	};

	const handleDontBetFlatDecrease = () => {
		//if the bet is smaller than the increment, just give bet back.
		if (bets.dontBet < incrementValue) {
			setBankroll((bankroll += bets.dontBet));
			setBets(bets, (bets.dontBet = 0));
		} else {
			setBets(bets, (bets.dontBet -= incrementValue));
			setBankroll((bankroll += incrementValue));
		}
	};
	return (
		<StyledDontBet>
			<div>Don't Pass/Don't Come ${bets.dontBet}</div>
			<div className="buttons">
				<div
					className="buttons-decrease"
					onClick={() => handleDontBetFlatDecrease()}
				>
					-
				</div>
				<div
					className="buttons-increase"
					onClick={() => handleDontBetFlatIncrease()}
				>
					+
				</div>
			</div>
		</StyledDontBet>
	);
};

export default DontBet;
