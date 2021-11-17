import styled from "styled-components";

export const StyledPlaceBets = styled.div`
	padding: 1%;

	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	width: 95%;

	.placebet {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 100%;
		text-align: center;

		box-shadow: 0px 0px 5px black;

		padding: 1%;

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
			font-size: 36px;
			color: white;
			width: 100%;
		}
		&-value {
			background-color: rgba(255, 255, 255, 0.18);
			display: flex;
			flex-direction: column;
			width: 100%;
			justify-content: center;

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
		margin: 5px;

		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;

		&-increase {
			margin: 0 auto;
			padding: 0.4%;
			background-color: blue;
			width: 45%;
			border-radius: 5px;
			box-shadow: 0px 0px 5px black inset, 0px 0px 5px black;
			color: white;
		}
		&-decrease {
			margin: 0 auto;
			padding: 0.4%;
			background-color: orange;
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
		padding: 2%;
	}
`;
