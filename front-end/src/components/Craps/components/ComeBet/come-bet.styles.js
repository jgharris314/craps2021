import styled from "styled-components";

export const StyledComeBet = styled.div`
	background-color: rgba(255, 255, 255, 0.18);
	box-shadow: 0px 0px 5px black inset, 0px 0px 5px black;
	border: 1px solid black;
	border-radius: 5px;
	padding: 1%;
	width: 40%;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: white;
	font-size: 2.4rem;
	.buttons {
		height: 25px;
		margin: 10px auto;

		width: 50%;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		width: 10%;
		min-width: 80px;
		align-items: center;
		color: black;
		font-weight: bold;
		&-increase {
			text-align: center;
			margin: 0 auto;
			padding: 0.4%;
			background-color: lime;
			width: 45%;
			border-radius: 5px;
			box-shadow: 0px 0px 5px black inset, 0px 0px 5px black;
		}
		&-decrease {
			text-align: center;
			margin: 0 auto;
			padding: 0.4%;
			background-color: #ff7619;
			width: 45%;
			border-radius: 5px;
			box-shadow: 0px 0px 5px black inset, 0px 0px 5px black;
		}
	}
`;
