import styled from "styled-components";
// #5e0788 purple
export const StyledCraps = styled.div`
	background-color: #5e0788;

	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100vh;

	.control-row {
		display: flex;
		width: 100%;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	.non-number-section {
		display: flex;
		width: 100%;
		justify-content: center;
	}

	.control-column {
		display: flex;
		flex-direction: column;
		width: 50%;

		select {
			width: 50px;
		}
	}
	.roll-button {
		margin-top: 25px;
		width: 250px;
		height: 150px;
		font-size: 4.6rem;
		background-color: lime;
		border: none;
		border-radius: 5px;
		background-image: linear-gradient(
			45deg,
			rgba(10, 10, 10, 0.3),
			rgba(255, 255, 255, 0.3),
			rgba(10, 10, 10, 0.3)
		);
	}
`;
