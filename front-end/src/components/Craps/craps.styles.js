import styled from "styled-components";

export const StyledCraps = styled.div`
	background-color: #5e0788;
	display: flex;
	flex-direction: column;
	align-items: center;

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
	}
`;
