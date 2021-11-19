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
	maxOdds,
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

	const handlePassLineOddsIncrease = () => {
		const currentMax = bets.passLine * maxOdds;
		if (bankroll >= incrementValue) {
			if (bets.passLineOdds === currentMax) return null;
			else if (bets.passLineOdds + incrementValue > currentMax) {
				const difference = currentMax - bets.passLineOdds;
				setBets(bets, (bets.passLineOdds = currentMax));
				setBankroll((bankroll -= difference));
			} else {
				setBets(bets, (bets.passLineOdds += incrementValue));
				setBankroll((bankroll -= incrementValue));
			}
		}
		setRerender(!rerender);
	};

	const handlePassLineOddsDecrease = (value) => {
		if (bets.passLineOdds < incrementValue) {
			setBankroll((bankroll += bets.passLineOdds));
			setBets(bets, (bets.passLineOdds = 0));
		} else {
			setBets(bets, (bets.passLineOdds -= incrementValue));

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
			<div className="passLine-odds">Odds</div>
			<div> ${bets.passLineOdds}</div>
			<div className="buttons">
				<div
					className="buttons-decrease"
					onClick={() => handlePassLineOddsDecrease()}
				>
					-
				</div>
				<div
					className="buttons-increase"
					onClick={() => handlePassLineOddsIncrease()}
				>
					+
				</div>
			</div>
		</StyledPassLine>
	);
};

export default PassLine;
