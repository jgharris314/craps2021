import React, { useState, useEffect, useCallback } from "react";
import { StyledCraps } from "./craps.styles";
import PlaceBets from "./components/PlaceBets/PlaceBets";
import ComeBet from "./components/ComeBet/ComeBet";
import Field from "./components/Field/Field";
import PassLine from "./components/PassLine/PassLine";
import DontBet from "./components/DontBet/DontBet";
//The main component. Renders individual layout components.
const Craps = () => {
	const maxOdds = 20;
	const defaultBets = {
		placeBets: { 4: 0, 5: 0, 6: 0, 8: 0, 9: 0, 10: 0 },
		comeBetFlats: { 4: 0, 5: 0, 6: 0, 8: 0, 9: 0, 10: 0 },
		comeBetOdds: { 4: 0, 5: 0, 6: 0, 8: 0, 9: 0, 10: 0 },
		comeBet: 0,
		fieldBet: 0,
		passLine: 0,
		passLineOdds: 0,
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
	const [dieOne, setdieOne] = useState(0);
	const [dieTwo, setdieTwo] = useState(0);
	const [dieTotal, setDieTotal] = useState(dieOne + dieTwo);
	let rollCount = 0;
	const rollDice = useCallback(() => {
		setDieTotal(0);
		setdieOne(0);
		setdieTwo(0);
		if (bets.passLine > 0) {
			setdieOne(1 + Math.floor(Math.random() * 6));
			setdieTwo(1 + Math.floor(Math.random() * 6));
		}
	});

	useEffect(() => {
		setDieTotal(dieOne + dieTwo);
	}, [dieOne, dieTwo, rollDice]);

	// Odds for paying numbers
	const placeBetFourTenOdds = 9 / 5;
	const placeBetFiveNineOdds = 7 / 5;
	const placeBetSixEightOdds = 7 / 6;
	const trueFourTenOdds = 2;
	const trueFiveNineOdds = 3 / 2;
	const trueSixEightOdds = 6 / 5;
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

					setBankroll(
						bankroll + bets.fieldBet + bets.comeBetFlats[4]
					);
					setBets(
						bets,
						(bets.comeBetOdds[4] = 0),
						(bets.comeBetFlats[4] = 0)
					);
					return setRerender(!rerender);
				case 5:
					setPointOnNumber(5);
					setBankroll(bankroll + bets.comeBetFlats[5]);
					setBets(
						bets,
						(bets.fieldBet = 0),
						(bets.comeBetOdds[5] = 0),
						(bets.comeBetFlats[5] = 0)
					);
					return setRerender(!rerender);
				case 6:
					setPointOnNumber(6);
					setBankroll(bankroll + bets.comeBetFlats[6]);
					setBets(
						bets,
						(bets.fieldBet = 0),
						(bets.comeBetOdds[6] = 0),
						(bets.comeBetFlats[6] = 0)
					);
					return setRerender(!rerender);
				case 7:
					let totalOdds = 0;
					for (let odds in bets.comeBetOdds) {
						totalOdds += bets.comeBetOdds[odds];
						setBets(
							bets,
							(bets.comeBetOdds[odds] = 0),
							(bets.comeBetFlats[odds] = 0)
						);
					}

					setBankroll(bankroll + bets.passLine + totalOdds);
					setBets(bets, (bets.fieldBet = 0));
					return setRerender(!rerender);
				case 8:
					setPointOnNumber(8);
					setBankroll(bankroll + bets.comeBetFlats[8]);
					setBets(
						bets,
						(bets.fieldBet = 0),
						(bets.comeBetOdds[8] = 0),
						(bets.comeBetFlats[8] = 0)
					);
					return setRerender(!rerender);
				case 9:
					setPointOnNumber(9);
					setBankroll(bankroll + bets.fieldBet);
					setBets(
						bets,
						(bets.comeBetOdds[9] = 0),
						(bets.comeBetFlats[9] = 0)
					);
					return setRerender(!rerender);
				case 10:
					setPointOnNumber(10);
					setBankroll(bankroll + bets.fieldBet);
					setBets(
						bets,
						(bets.comeBetOdds[10] = 0),
						(bets.comeBetFlats[10] = 0)
					);
					return setRerender(!rerender);
				case 11:
					setBankroll(bankroll + bets.passLine + bets.fieldBet);

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
				case 2:
					setBets(bets, (bets.comeBet = 0));
					setBankroll(bankroll + bets.fieldBet * 2);
					return setRerender(!rerender);
				case 3:
					setBets(bets, (bets.comeBet = 0));
					setBankroll(bankroll + bets.fieldBet * 3);
					return setRerender(!rerender);
				case 4:
					if (pointOnNumber === 4) {
						//add passLineOdds to payout since we are 'taking it down'
						setBankroll(
							bankroll +
								bets.passLine +
								bets.fieldBet +
								bets.passLineOdds +
								bets.passLineOdds * trueFourTenOdds
						);
						setBets(
							bets,
							(bets.passLineOdds = 0),
							(bets.comeBetFlats[4] = bets.comeBet),
							(bets.comeBet = 0)
						);
						setPointOnNumber(0);
					} else {
						setBankroll(
							bankroll +
								bets.fieldBet +
								bets.placeBets[4] * placeBetFourTenOdds +
								bets.comeBetFlats[4] +
								bets.comeBetOdds[4] +
								(bets.comeBetFlats[4] +
									bets.comeBetOdds[4] * trueFourTenOdds)
						);
						setBets(
							bets,
							(bets.comeBetOdds[4] = 0),
							(bets.comeBetFlats[4] = bets.comeBet),
							(bets.comeBet = 0)
						);
					}
					return setRerender(!rerender);
				case 5:
					if (pointOnNumber === 5) {
						//add passLineOdds to payout since we are 'taking it down'
						setBankroll(
							bankroll +
								bets.passLine +
								bets.passLineOdds +
								bets.passLineOdds * trueFiveNineOdds
						);
						setBets(
							bets,
							(bets.passLineOdds = 0),
							(bets.fieldBet = 0),
							(bets.comeBetFlats[5] = bets.comeBet),
							(bets.comeBet = 0)
						);
						setPointOnNumber(0);
					} else {
						setBankroll(
							bankroll +
								bets.comeBetFlats[5] +
								bets.comeBetOdds[5] +
								bets.placeBets[5] * placeBetFiveNineOdds +
								(bets.comeBetFlats[5] +
									bets.comeBetOdds[5] * trueFiveNineOdds)
						);
						setBets(
							bets,
							(bets.fieldBet = 0),
							(bets.comeBetOdds[5] = 0),
							(bets.comeBetFlats[5] = bets.comeBet),
							(bets.comeBet = 0)
						);
					}
					return setRerender(!rerender);
				case 6:
					if (pointOnNumber === 6) {
						//add passLineOdds to payout since we are 'taking it down'
						setBankroll(
							bankroll +
								bets.passLine +
								bets.passLineOdds +
								bets.passLineOdds * trueSixEightOdds
						);
						setBets(
							bets,
							(bets.passLineOdds = 0),
							(bets.fieldBet = 0),
							(bets.comeBetFlats[6] = bets.comeBet),
							(bets.comeBet = 0)
						);
						setPointOnNumber(0);
					} else {
						setBankroll(
							bankroll +
								bets.comeBetFlats[6] +
								bets.comeBetOdds[6] +
								bets.placeBets[6] * placeBetSixEightOdds +
								(bets.comeBetFlats[6] +
									bets.comeBetOdds[6] * trueSixEightOdds)
						);
						setBets(
							bets,
							(bets.fieldBet = 0),
							(bets.comeBetOdds[6] = 0),
							(bets.comeBetFlats[6] = bets.comeBet),
							(bets.comeBet = 0)
						);
					}
					return setRerender(!rerender);
				case 7:
					//simulate paying the come bet and taking it down
					setBankroll(bankroll + bets.comeBet * 2);
					setBets(defaultBets);
					setPointOnNumber(0);
					return setRerender(!rerender);
				case 8:
					if (pointOnNumber === 8) {
						//add passLineOdds to payout since we are 'taking it down'
						setBankroll(
							bankroll +
								bets.passLine +
								bets.passLineOdds +
								bets.passLineOdds * trueSixEightOdds
						);
						setBets(
							bets,
							(bets.passLineOdds = 0),
							(bets.fieldBet = 0),
							(bets.comeBetFlats[8] = bets.comeBet),
							(bets.comeBet = 0)
						);
						setPointOnNumber(0);
					} else {
						setBankroll(
							bankroll +
								bets.comeBetFlats[8] +
								bets.comeBetOdds[8] +
								bets.placeBets[8] * placeBetSixEightOdds +
								(bets.comeBetFlats[8] +
									bets.comeBetOdds[8] * trueSixEightOdds)
						);
						setBets(
							bets,
							(bets.fieldBet = 0),
							(bets.comeBetOdds[8] = 0),
							(bets.comeBetFlats[8] = bets.comeBet),
							(bets.comeBet = 0)
						);
					}
					return setRerender(!rerender);
				case 9:
					if (pointOnNumber === 9) {
						//add passLineOdds to payout since we are 'taking it down'
						setBankroll(
							bankroll +
								bets.passLine +
								bets.fieldBet +
								bets.passLineOdds +
								bets.passLineOdds * trueFiveNineOdds
						);
						setBets(
							bets,
							(bets.passLineOdds = 0),
							(bets.comeBetFlats[9] = bets.comeBet),
							(bets.comeBet = 0)
						);
						setPointOnNumber(0);
					} else {
						setBankroll(
							bankroll +
								bets.fieldBet +
								bets.placeBets[9] * placeBetFiveNineOdds +
								bets.comeBetFlats[9] +
								bets.comeBetOdds[9] +
								(bets.comeBetFlats[9] +
									bets.comeBetOdds[9] * trueFiveNineOdds)
						);
						setBets(
							bets,
							(bets.comeBetOdds[9] = 0),
							(bets.comeBetFlats[9] = bets.comeBet),
							(bets.comeBet = 0)
						);
					}
					return setRerender(!rerender);
				case 10:
					if (pointOnNumber === 10) {
						//add passLineOdds to payout since we are 'taking it down'
						setBankroll(
							bankroll +
								bets.passLine +
								bets.fieldBet +
								bets.passLineOdds +
								bets.passLineOdds * trueFourTenOdds
						);
						setBets(
							bets,
							(bets.passLineOdds = 0),
							(bets.comeBetFlats[10] = bets.comeBet),
							(bets.comeBet = 0)
						);
						setPointOnNumber(0);
					} else {
						setBankroll(
							bankroll +
								bets.fieldBet +
								bets.placeBets[10] * placeBetFourTenOdds +
								bets.comeBetFlats[10] +
								bets.comeBetOdds[10] +
								(bets.comeBetFlats[10] +
									bets.comeBetOdds[10] * trueFourTenOdds)
						);
						setBets(
							bets,
							(bets.comeBetOdds[10] = 0),
							(bets.comeBetFlats[10] = bets.comeBet),
							(bets.comeBet = 0)
						);
					}
					return setRerender(!rerender);
				case 11:
					setBankroll(bankroll + bets.fieldBet + bets.comeBet);
					return setRerender(!rerender);
				case 12:
					setBets(bets, (bets.comeBet = 0));
					setBankroll(bankroll + bets.fieldBet * 2);
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

	const nonNumberComponentList = [
		<ComeBet
			bets={bets}
			setBets={setBets}
			bankroll={bankroll}
			setBankroll={setBankroll}
			incrementValue={incrementValue}
			rerender={rerender}
			setRerender={setRerender}
			pointOnNumber={pointOnNumber}
			maxOdds={maxOdds}
		/>,
		<Field
			bets={bets}
			setBets={setBets}
			bankroll={bankroll}
			setBankroll={setBankroll}
			incrementValue={incrementValue}
			rerender={rerender}
			setRerender={setRerender}
			pointOnNumber={pointOnNumber}
			maxOdds={maxOdds}
		/>,
		<DontBet
			bets={bets}
			setBets={setBets}
			bankroll={bankroll}
			setBankroll={setBankroll}
			incrementValue={incrementValue}
			rerender={rerender}
			setRerender={setRerender}
			pointOnNumber={pointOnNumber}
			maxOdds={maxOdds}
		/>,
		<PassLine
			bets={bets}
			setBets={setBets}
			bankroll={bankroll}
			setBankroll={setBankroll}
			incrementValue={incrementValue}
			rerender={rerender}
			setRerender={setRerender}
			pointOnNumber={pointOnNumber}
			maxOdds={maxOdds}
		/>,
	];
	return (
		<StyledCraps>
			<PlaceBets
				bets={bets}
				setBets={setBets}
				bankroll={bankroll}
				setBankroll={setBankroll}
				incrementValue={incrementValue}
				rerender={rerender}
				setRerender={setRerender}
				pointOnNumber={pointOnNumber}
				maxOdds={maxOdds}
			/>
			<div className="control-row">
				<div className="control-column">
					{nonNumberComponentList.map((e, index) => {
						return (
							<div className="non-number-item" key={index}>
								{e}
							</div>
						);
					})}
				</div>
				<div className="control-column">
					Bankroll {bankroll}
					<br /> Denomination
					<select onChange={handleIncrementChange}>
						{bettingIncrements.map((e, index) => (
							<option value={e} key={index}>
								{e}
							</option>
						))}
					</select>
					<button className="roll-button" onClick={() => rollDice()}>
						Roll em
					</button>
					{dieOne} {dieTwo} {dieTotal} {pointOnNumber}
				</div>
			</div>
		</StyledCraps>
	);
};

export default Craps;
