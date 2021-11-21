import styled from "styled-components";
// #5e0788 purple
//#493267
export const StyledCraps = styled.div`
	background-color: black;
	color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 100vh;
	font-size: 1.6rem;
	.control-row {
		display: flex;
		width: 95%;
		flex-direction: row;
		/* justify-content: space-between; */
		/* align-items: center; */
		justify-content: space-between;
	}
	.non-number-section {
		display: flex;
		width: 100%;
		justify-content: center;
	}

	.control-column {
		display: flex;
		flex-direction: column;
		width: 45%;

		select {
			width: 50px;
		}
	}
	.roll-button {
		margin-top: 25px;
		width: 150px;
		height: 150px;
		font-size: 4.6rem;
		background-color: gold;
		border: none;
		border-radius: 5px;
		background-image: linear-gradient(
			45deg,
			rgba(10, 10, 10, 0.3),
			rgba(255, 255, 255, 0.3),
			rgba(10, 10, 10, 0.3)
		);
	}

	.non-number-item {
		margin: 5px;
		background-color: rgba(255, 255, 255, 0.18);
		background-image: linear-gradient(
			45deg,
			rgba(10, 10, 10, 0.3),
			rgba(255, 255, 255, 0.3),
			rgba(10, 10, 10, 0.3)
		);
		box-shadow: 0px 0px 5px black inset, 0px 0px 3px white;
		border-radius: 5px;
		width: 95%;
		display: flex;
		flex-direction: column;
		align-items: center;
		color: white;
		margin-top: 5px;
		justify-content: center;
		font-size: 1.6rem;
		text-align: center;

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
				background-color: #f37735;
				width: 45%;
				border-radius: 5px;
				box-shadow: 0px 0px 5px black inset, 0px 0px 5px black;
				background-image: linear-gradient(
					45deg,
					rgba(10, 10, 10, 0.3),
					rgba(255, 255, 255, 0.3),
					rgba(10, 10, 10, 0.3)
				);
			}
			&-decrease {
				text-align: center;
				margin: 0 auto;
				padding: 0.4%;
				//#ff7619
				background-color: cyan;
				width: 45%;
				border-radius: 5px;
				box-shadow: 0px 0px 5px black inset, 0px 0px 5px black;
				background-image: linear-gradient(
					45deg,
					rgba(10, 10, 10, 0.3),
					rgba(255, 255, 255, 0.3),
					rgba(10, 10, 10, 0.3)
				);
			}
		}
	}

	@media screen and (min-width: 720px) {
		font-size: 2.2rem;
		.non-number-item {
			font-size: 2.2rem;
			width: 100%;
		}

		.roll-button {
			width: 250px;
		}
	}
`;
