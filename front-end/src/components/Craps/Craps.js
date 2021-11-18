import React, { useState, useEffect } from "react";
import { StyledCraps } from "./craps.styles";
import PlaceBets from "./components/PlaceBets/PlaceBets";
import ComeBet from "./components/ComeBet/ComeBet";
import Field from "./components/Field/Field";
import PassLine from "./components/PassLine/PassLine";
//The main component. Renders individual layout components.
const Craps = () => {
	const defaultBets = {
		placeBets: { 4: 0, 5: 0, 6: 0, 8: 0, 9: 0, 10: 0 },
		comeBetFlats: { 4: 0, 5: 0, 6: 0, 8: 0, 9: 0, 10: 0 },
		comeBetOdds: { 4: 0, 5: 0, 6: 0, 8: 0, 9: 0, 10: 0 },
		comeBet: 0,
		fieldBet: 0,
		passLine: 0,
	};
	const [bets, setBets] = useState(defaultBets);
	const [rerender, setRerender] = useState(false);
	const [bankroll, setBankroll] = useState(10000);
	const bettingIncrements = [5, 25, 100, 500];
	const defaultIncrement = 5;
	const [incrementValue, setIncrementValue] = useState(defaultIncrement);
	useEffect(() => {
		// when bet value is changed, rerenders
	}, [rerender]);

	//State to handle dice and dice rolls and game state
	const [pointOnNumber, setPointOnNumber] = useState(0);

	//individual dice so if hardways are added, they can be handled.
	const [die1, setDie1] = useState(0);
	const [die2, setDie2] = useState(0);
	const [dieTotal, setDieTotal] = useState(die1 + die2);

	const rollDice = () => {
		if (bets.passLine > 0) {
			setDie1(1 + Math.floor(Math.random() * 6));
			setDie2(1 + Math.floor(Math.random() * 6));
		}
	};

	useEffect(() => {
		setDieTotal(die1 + die2);
	}, [die1, die2]);

	//main game logic will go here. any time die total changes, do the thing
	useEffect(() => {
		if (pointOnNumber === 0) {
			switch (dieTotal) {
				case 2:
					setBets(bets, (bets.passLine = 0));
					setBankroll(bankroll + bets.fieldBet * 2);
					return setRerender(!rerender);
				case 3:
					setBets(bets, (bets.passLine = 0));
					setBankroll(bankroll + bets.fieldBet);
					return setRerender(!rerender);
				case 4:
					setPointOnNumber(4);
					setBankroll(bankroll + bets.fieldBet);
					return setRerender(!rerender);
				case 5:
					setPointOnNumber(5);
					setBets(bets, (bets.fieldBet = 0));
					return setRerender(!rerender);
				case 6:
					setPointOnNumber(6);
					setBets(bets, (bets.fieldBet = 0));
					return setRerender(!rerender);
				case 7:
					setBankroll(bankroll + bets.passLine);
					setBets(bets, (bets.fieldBet = 0));
					return setRerender(!rerender);
				case 8:
					setPointOnNumber(8);
					setBets(bets, (bets.fieldBet = 0));
					return setRerender(!rerender);
				case 9:
					setPointOnNumber(9);
					setBankroll(bankroll + bets.fieldBet);
					return setRerender(!rerender);
				case 10:
					setPointOnNumber(10);
					setBankroll(bankroll + bets.fieldBet);
					return setRerender(!rerender);
				case 11:
					setBankroll(bankroll + bets.passLine);
					setBankroll(bankroll + bets.fieldBet);
					return setRerender(!rerender);
				case 12:
					setBets(bets, (bets.passLine = 0));
					setBankroll(bankroll + bets.fieldBet * 2);
					return setRerender(!rerender);
				default:
					return setRerender(!rerender);
			}
		} else {
			switch (dieTotal) {
				case 4:
					if (pointOnNumber === 4) {
						setBankroll(bankroll + bets.passLine);
						setPointOnNumber(0);
					} else {
						setBankroll(bankroll + bets.placeBets[4]);
					}
					return setRerender(!rerender);
				case 5:
					pointOnNumber === 5
						? setBankroll(bankroll + bets.passLine)
						: setBankroll(bankroll + bets.placeBets[5]);
					return setRerender(!rerender);
				case 6:
					pointOnNumber === 6
						? setBankroll(bankroll + bets.passLine)
						: setBankroll(bankroll + bets.placeBets[6]);
					return setRerender(!rerender);
				case 7:
					//simulate paying the come bet and taking it down
					setBankroll(bankroll + bets.comeBet * 2);
					setBets(defaultBets);
					setPointOnNumber(0);
					return setRerender(!rerender);
				case 8:
					pointOnNumber === 8
						? setBankroll(bankroll + bets.passLine)
						: setBankroll(bankroll + bets.placeBets[8]);
					return setRerender(!rerender);
				case 9:
					pointOnNumber === 9
						? setBankroll(bankroll + bets.passLine)
						: setBankroll(bankroll + bets.placeBets[9]);
					return setRerender(!rerender);
				case 10:
					pointOnNumber === 10
						? setBankroll(bankroll + bets.passLine)
						: setBankroll(bankroll + bets.placeBets[10]);
					return setRerender(!rerender);
				default:
					return setRerender(!rerender);
			}
		}
	}, [dieTotal]);
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
				rerender={rerender}
				setRerender={setRerender}
				pointOnNumber={pointOnNumber}
			/>
			<ComeBet
				bets={bets}
				setBets={setBets}
				bankroll={bankroll}
				setBankroll={setBankroll}
				incrementValue={incrementValue}
				rerender={rerender}
				setRerender={setRerender}
				pointOnNumber={pointOnNumber}
			/>
			<Field
				bets={bets}
				setBets={setBets}
				bankroll={bankroll}
				setBankroll={setBankroll}
				incrementValue={incrementValue}
				rerender={rerender}
				setRerender={setRerender}
			/>
			<PassLine
				bets={bets}
				setBets={setBets}
				bankroll={bankroll}
				setBankroll={setBankroll}
				incrementValue={incrementValue}
				rerender={rerender}
				setRerender={setRerender}
			/>
			Bankroll {bankroll}
			<br /> Denomination
			<select onChange={handleIncrementChange}>
				{bettingIncrements.map((e, index) => (
					<option value={e} key={index}>
						{e}
					</option>
				))}
			</select>
			<button onClick={() => rollDice()}>Roll em</button>
			{die1} {die2} {dieTotal} {pointOnNumber}
		</StyledCraps>
	);
};

export default Craps;
