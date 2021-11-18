import React from "react";
import { StyledPassLine } from "./pass-line.styles";

const PassLine = ({
	bets,
	setBets,
	bankroll,
	setBankroll,
	incrementValue,
	rerender,
	setRerender,
}) => {
	const handlePassLineIncrease = () => {
		if (bankroll >= incrementValue) {
			setBets(bets, (bets.passLine += incrementValue));
			setBankroll((bankroll -= incrementValue));
		}
		setRerender(!rerender);
	};

	const handlePassLineDecrease = () => {
		//if the bet is smaller than the increment, just give bet back.
		if (bets.passLine < incrementValue) {
			setBankroll((bankroll += bets.passLine));
			setBets(bets, (bets.passLine = 0));
		} else {
			setBets(bets, (bets.passLine -= incrementValue));
			setBankroll((bankroll += incrementValue));
		}
	};
	return (
		<StyledPassLine>
			<div>Pass Line</div> <div>${bets.passLine}</div>
			<div className="buttons">
				<div
					className="buttons-decrease"
					onClick={() => handlePassLineDecrease()}
				>
					-
				</div>
				<div
					className="buttons-increase"
					onClick={() => handlePassLineIncrease()}
				>
					+
				</div>
			</div>
		</StyledPassLine>
	);
};

export default PassLine;
