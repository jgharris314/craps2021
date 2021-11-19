import styled from "styled-components";

export const StyledPlaceBets = styled.div`
	display: flex;
	flex-direction: row;
	width: 95%;
	.placebet {
		display: flex;
		flex-direction: column;
		width: 100%;
		text-align: center;
		/* padding: 1%; */
		margin: 5px;

		&-number {
			background-color: rgba(255, 255, 255, 0.18);
			display: flex;
			justify-content: center;
			height: 100px;
			border: 1px solid black;
			box-shadow: 0px 0px 5px black inset, 0px 0px 5px black;
			border-radius: 5px;
			align-items: center;
			margin-bottom: 5px;
			font-size: 7rem;
			color: white;
			width: 100%;
			padding: 1%;
		}
		&-value {
			background-color: rgba(255, 255, 255, 0.18);
			display: flex;
			flex-direction: column;
			width: 100%;
			justify-content: center;
			font-size: 2.4rem;
			border: 1px solid black;
			box-shadow: 0px 0px 5px black inset, 0px 0px 5px black;
			border-radius: 5px;
			align-items: center;
			color: white;
			margin: 5px auto;
			padding: 1%;
		}
	}

	.buttons {
		height: 25px;
		margin: 10px auto;

		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
		color: black;
		font-weight: bold;
		&-increase {
			margin: 0 auto;
			padding: 0.4%;
			background-color: lime;
			width: 45%;
			border-radius: 5px;
			box-shadow: 0px 0px 5px black inset, 0px 0px 5px black;
		}
		&-decrease {
			margin: 0 auto;
			padding: 0.4%;
			background-color: #ff7619;
			width: 45%;
			border-radius: 5px;
			box-shadow: 0px 0px 5px black inset, 0px 0px 5px black;
		}
	}

	.comebet {
		background-color: rgba(255, 255, 255, 0.18);
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 100%;
		border: 1px solid black;
		box-shadow: 0px 0px 5px black inset, 0px 0px 5px black;
		border-radius: 5px;
		align-items: center;
		color: white;
		margin: 5px auto;
		padding: 1%;
		font-size: 2.4rem;
	}
`;
