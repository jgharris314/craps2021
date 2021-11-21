import styled from "styled-components";

export const StyledNumberSection = styled.div`
	display: flex;
	flex-direction: row;
	width: 95%;
	.placebet {
		display: flex;
		flex-direction: column;
		width: 100%;
		text-align: center;
		margin: 5px;

		&-number {
			background-color: rgba(255, 255, 255, 0.18);
			background-image: linear-gradient(
				45deg,
				rgba(10, 10, 10, 0.3),
				rgba(255, 255, 255, 0.3),
				rgba(10, 10, 10, 0.3)
			);
			display: flex;
			justify-content: center;
			height: 40px;
			box-shadow: 0px 0px 5px black inset, 0px 0px 3px white;
			border-radius: 5px;
			align-items: center;
			margin: 5px auto;
			font-size: 3rem;
			color: white;
			width: 100%;
		}
		&-value {
			background-color: rgba(255, 255, 255, 0.18);
			background-image: linear-gradient(
				45deg,
				rgba(10, 10, 10, 0.3),
				rgba(255, 255, 255, 0.3),
				rgba(10, 10, 10, 0.3)
			);
			display: flex;
			flex-direction: column;
			width: 100%;
			justify-content: center;
			font-size: 1.6rem;

			box-shadow: 0px 0px 5px black inset, 0px 0px 3px white;
			border-radius: 5px;
			align-items: center;
			color: white;
			margin: 5px auto;
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

	.number-section {
		background-color: rgba(255, 255, 255, 0.18);
		background-image: linear-gradient(
			45deg,
			rgba(10, 10, 10, 0.3),
			rgba(255, 255, 255, 0.3),
			rgba(10, 10, 10, 0.3)
		);
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 100%;
		/* border: 1px solid black; */
		box-shadow: 0px 0px 5px black inset, 0px 0px 3px white;
		border-radius: 5px;
		align-items: center;
		color: white;
		margin: 5px auto;
		/* padding: 1%; */
		font-size: 1.6rem;
	}

	@media screen and (min-width: 720px) {
		/* .number-section {
			font-size: 2.2rem;
		} */

		.placebet-number {
			font-size: 5rem;
			height: 60px;
		}

		.number-section {
			font-size: 2.2rem;
		}

		.placebet-value {
			font-size: 2.2rem;
		}
	}
`;
