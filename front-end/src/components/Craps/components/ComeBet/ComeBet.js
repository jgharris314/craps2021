import React from "react";
import { StyledComeBet } from "./come-bet.styles";

const ComeBet = ({ bets, setBets, bankroll, setBankroll, incrementValue }) => {
	return (
		<StyledComeBet>
			COME ${bets.comeBet}
			<div className="buttons">
				<div
					className="buttons-decrease"
					// onClick={() => ()}
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
		</StyledComeBet>
	);
};

export default ComeBet;
