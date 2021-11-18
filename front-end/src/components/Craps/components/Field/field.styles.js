import styled from "styled-components";

export const StyledField = styled.div`
	background-color: rgba(255, 255, 255, 0.18);
	box-shadow: 0px 0px 5px black;
	width: 95%;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: white;
	margin-top: 15px;
	justify-content: center;

	.buttons {
		height: 25px;
		margin: 5px;

		width: 50%;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		width: 10%;
		min-width: 80px;
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

	.field-numbers {
		display: flex;
		justify-content: space-evenly;
		flex-direction: row;
		width: 100%;
	}
`;
