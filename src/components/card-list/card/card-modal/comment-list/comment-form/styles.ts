import styled from 'styled-components'

export const FormWrapper = styled.form`
  margin-bottom: 2.5rem;
`

export const TextareaContainer = styled.div`
  position: relative;
  width: 100%;
`

export const StyledTextarea = styled.textarea`
  outline: none;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: 2rem 0;
  padding-left: 5rem;
  padding-right: 11rem;
  resize: none;
  transition: all 0.2s;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`

export const AvatarContainer = styled.div`
  position: absolute;
  top: 1.6rem;
  left: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 1.3rem;
  transform: translateY(-60%);
`
