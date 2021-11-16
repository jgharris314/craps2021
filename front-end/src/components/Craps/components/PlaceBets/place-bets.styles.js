import styled from "styled-components";

export const StyledPlaceBets = styled.div`
	padding: 1%;
	/* background-color: rgba(255, 255, 255, 0.18); */
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	width: 80%;
	box-shadow: 0px 0px 5px black;
	.placebet {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 100%;
		text-align: center;
		/* border: 1px solid black; */
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
			margin-bottom: 15px;
			font-size: 36px;
			color: white;
		}
		&-value {
			background-color: rgba(255, 255, 255, 0.18);
			display: flex;
			justify-content: center;
			height: 50px;
			border: 1px solid black;
			box-shadow: 0px 0px 5px black inset, 0px 0px 5px black;
			border-radius: 5px;
			align-items: center;
			color: white;
			margin-bottom: 5px;
		}
		&-buttons {
			height: 25px;
			margin: 5px auto;

			width: 95%;
			display: flex;
			flex-direction: row;
			justify-content: space-evenly;

			&-increase {
				padding: 0.4%;
				background-color: green;
				width: 50%;
				border-radius: 5px;
				box-shadow: 0px 0px 5px black inset, 0px 0px 5px black;
			}
			&-decrease {
				padding: 0.4%;
				background-color: orange;
				width: 50%;
				border-radius: 5px;
				box-shadow: 0px 0px 5px black inset, 0px 0px 5px black;
			}
		}
	}
`;
