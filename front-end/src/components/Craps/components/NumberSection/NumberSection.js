import React from "react";
import { StyledNumberSection } from "./number-section.styles";

const NumberSection = ({
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
	const bettableNums = [4, 5, 6, 8, 9, 10];

	//To simulate casino cheques

	//Add a spot to adjust increment value? probs but idk where yet

	const sixEightIncrement = incrementValue + incrementValue / 5;
	//increase bet based on increment value. if 6 or 8, the increment is divisible by 6
	const handlePlaceBetIncrease = (value) => {
		if (bankroll >= incrementValue) {
			if (value !== 6 && value !== 8) {
				setBets(bets, (bets.placeBets[value] += incrementValue));
				setBankroll((bankroll -= incrementValue));
			} else {
				// let tempIncrement = incrementValue / 5;
				setBets(bets, (bets.placeBets[value] += sixEightIncrement));
				setBankroll((bankroll -= sixEightIncrement));
			}
		}
		setRerender(!rerender);
	};
	//decrease bet based on increment value. if 6 or 8, the increment is divisible by 6

	const handlePlaceBetDecrease = (value) => {
		if (bets.placeBets[value] < incrementValue) {
			setBankroll((bankroll += bets.placeBets[value]));
			setBets(bets, (bets.placeBets[value] = 0));
		} else if (value !== 6 && value !== 8) {
			setBets(bets, (bets.placeBets[value] -= incrementValue));

			setBankroll((bankroll += incrementValue));
		} else {
			setBets(bets, (bets.placeBets[value] -= sixEightIncrement));
			setBankroll((bankroll += sixEightIncrement));
		}

		setRerender(!rerender);
	};

	//max odds = 20 times your come bet flat...

	const handleComeBetOddsIncrease = (value) => {
		//Check to see if at max odds
		const currentMax = bets.comeBetFlats[value] * maxOdds;
		if (bankroll >= incrementValue) {
			if (bets.comeBetOdds[value] === currentMax) return null;
			//If trying to press over max odds
			else if (bets.comeBetOdds[value] + incrementValue > currentMax) {
				const difference = currentMax - bets.comeBetOdds[value];
				setBets(bets, (bets.comeBetOdds[value] = currentMax));
				setBankroll((bankroll -= difference));
			} else {
				setBets(bets, (bets.comeBetOdds[value] += incrementValue));
				setBankroll((bankroll -= incrementValue));
			}
		}
		setRerender(!rerender);
	};

	const handleComeBetOddsDecrease = (value) => {
		if (bets.comeBetOdds[value] < incrementValue) {
			setBankroll((bankroll += bets.comeBetOdds[value]));
			setBets(bets, (bets.comeBetOdds[value] = 0));
		} else {
			setBets(bets, (bets.comeBetOdds[value] -= incrementValue));

			setBankroll((bankroll += incrementValue));
		}
	};

	return (
		<StyledNumberSection>
			{bettableNums.map((e, index) => (
				<div key={index} className="placebet">
					{/* Dont bets section */}
					<div className="number-section">
						<div className="number-section-title">
							Don't Odds <div>${bets.dontBetOdds[e]}</div>
						</div>
						<div className="comebet-value">
							Flat <div>${bets.dontBetFlats[e]}</div>
						</div>

						<div className="buttons">
							<div
								className="buttons-decrease"
								// onClick={() => handleComeBetOddsDecrease(e)}
							>
								-
							</div>
							<div
								// onClick={() => handleComeBetOddsIncrease(e)}
								className="buttons-increase"
							>
								+
							</div>
						</div>
					</div>
					{/* Number display */}
					<div
						className="placebet-number"
						style={
							pointOnNumber === e
								? { backgroundColor: "gold", color: "black" }
								: null
						}
					>
						{e !== 6 && e !== 9 ? e : e === 6 ? "Six" : "Nine"}
					</div>
					{/* Come bet section */}
					<div className="number-section">
						<div className="number-section-title">
							Come Odds <div>${bets.comeBetOdds[e]}</div>
						</div>
						<div className="number-section-value">
							Flat <div>${bets.comeBetFlats[e]}</div>
						</div>

						<div className="buttons">
							<div
								className="buttons-decrease"
								onClick={() => handleComeBetOddsDecrease(e)}
							>
								-
							</div>
							<div
								onClick={() => handleComeBetOddsIncrease(e)}
								className="buttons-increase"
							>
								+
							</div>
						</div>
					</div>
					{/* Place Bet Section */}
					<div className="placebet-value">
						<div>
							Place Bet <div>${bets.placeBets[e]}</div>
						</div>

						<div className="buttons">
							<div
								className="buttons-decrease"
								onClick={() => handlePlaceBetDecrease(e)}
							>
								-
							</div>
							<div
								className="buttons-increase"
								onClick={() => handlePlaceBetIncrease(e)}
							>
								+
							</div>
						</div>
					</div>
				</div>
			))}
		</StyledNumberSection>
	);
};

export default NumberSection;
