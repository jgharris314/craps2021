import styled from "styled-components";

export const StyledComeBet = styled.div`
	background-color: rgba(255, 255, 255, 0.18);
	box-shadow: 0px 0px 5px black;
	/* border-radius: 5px; */
	width: 95%;
	display: flex;
	flex-direction: column;
	/* justify-content: center; */
	align-items: center;
	.buttons {
		height: 25px;
		margin: 5px;

		width: 50%;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;

		&-increase {
			text-align: center;
			margin: 0 auto;
			padding: 0.4%;
			background-color: blue;
			width: 45%;
			border-radius: 5px;
			box-shadow: 0px 0px 5px black inset, 0px 0px 5px black;
			color: white;
		}
		&-decrease {
			text-align: center;
			margin: 0 auto;
			padding: 0.4%;
			background-color: orange;
			width: 45%;
			border-radius: 5px;
			box-shadow: 0px 0px 5px black inset, 0px 0px 5px black;
		}
	}
`;
