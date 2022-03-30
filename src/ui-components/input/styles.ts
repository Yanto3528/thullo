import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.gray5};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: 0.6em;
  height: 3.5rem;
  transition: all 0.4s;

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`

export const StyledInput = styled.input`
  outline: none;
  border: none;
  width: 100%;
  height: 100%;
  background-color: transparent;
  font-size: inherit;

  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: ${({ theme }) => theme.colors.gray4};
    font-weight: 500;
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    color: ${({ theme }) => theme.colors.gray4};
    font-weight: 500;
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    color: ${({ theme }) => theme.colors.gray4};
    font-weight: 500;
  }
  :-moz-placeholder {
    /* Firefox 18- */
    color: ${({ theme }) => theme.colors.gray4};
    font-weight: 500;
  }
`

export const ElementContainer = styled.div`
  cursor: pointer;
`
