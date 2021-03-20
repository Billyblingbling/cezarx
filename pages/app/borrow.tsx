import React from 'react'
import styled from 'styled-components';
import { ButtonWrapper, InputWrapper, SecondaryButton, StyledInput, Wrapper } from '../../utils/theme';

const Tile = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  font-size: var(--font-size-l);
  color: var(--grey-darkest);
  background: white;
  padding: var(--space-l) var(--space-xl);
  margin: var(--space-l);
  border-radius: 12px;
  box-shadow: var(--box-shadow);

  input {
    max-width: 80%;
  }

  p {
    margin-bottom: var(--space-m);
  }
`

export default function Borrow() {
  const hasNFTCollateral = true;
  return (
    <Wrapper>
      <Tile>
        <h3>Borrow WETH</h3>
        <p>
          Borrowing Power: Ξ3.62<br/>
          Interest Rate: 20% APR
        </p>
        <InputWrapper>
          <StyledInput
            title="Token Amount"
            inputMode="decimal"
            type="number"
            placeholder="0.0"
            minLength={1}
            maxLength={20}
          />
          WETH
        </InputWrapper>
        <ButtonWrapper>
          <SecondaryButton>Borrow</SecondaryButton>
        </ButtonWrapper>
      </Tile>
    </Wrapper>
  )
}