import React from "react";
import { StyledField } from "./field.styles";

const Field = ({
	bets,
	setBets,
	bankroll,
	setBankroll,
	incrementValue,
	rerender,
	setRerender,
}) => {
	const handleFieldBetIncrease = () => {
		if (bankroll >= incrementValue) {
			setBets(bets, (bets.fieldBet += incrementValue));
			setBankroll((bankroll -= incrementValue));
		}
		setRerender(!rerender);
	};

	const handleFieldBetDecrease = () => {
		//if the bet is smaller than the increment, just give bet back.
		if (bets.fieldBet < incrementValue) {
			setBankroll((bankroll += bets.fieldBet));
			setBets(bets, (bets.fieldBet = 0));
		} else {
			setBets(bets, (bets.fieldBet -= incrementValue));
			setBankroll((bankroll += incrementValue));
		}
	};
	return (
		<StyledField>
			<div>Field ${bets.fieldBet}</div>
			<div className="field-numbers">2 3 4 9 10 11 12</div>

			<div className="buttons">
				<div
					className="buttons-decrease"
					onClick={() => handleFieldBetDecrease()}
				>
					-
				</div>
				<div
					className="buttons-increase"
					onClick={() => handleFieldBetIncrease()}
				>
					+
				</div>
			</div>
		</StyledField>
	);
};

export default Field;
