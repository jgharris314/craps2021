import React from "react";
import { StyledComeBet } from "../ComeBet/come-bet.styles";
import { StyledDontBet } from "./dont-bet.styles";

const DontBet = () => {
	return (
		<StyledDontBet>
			<div>Don't Pass/Don't Come $0</div>
			<div className="buttons">
				<div
					className="buttons-decrease"
					// onClick={() => handlePassLineDecrease()}
				>
					-
				</div>
				<div
					className="buttons-increase"
					// onClick={() => handlePassLineIncrease()}
				>
					+
				</div>
			</div>
			<div className="passLine-odds">Odds $0</div>
			<div className="buttons">
				<div
					className="buttons-decrease"
					// onClick={() => handlePassLineOddsDecrease()}
				>
					-
				</div>
				<div
					className="buttons-increase"
					// onClick={() => handlePassLineOddsIncrease()}
				>
					+
				</div>
			</div>
		</StyledDontBet>
	);
};

export default DontBet;
