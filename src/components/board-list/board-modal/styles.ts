import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const ImagePlaceholder = styled.img`
  border-radius: ${({ theme }) => theme.radius.md};
  width: 100%;
  height: 8rem;
  object-fit: cover;
`

export const CoverUploadLabel = styled.label`
  position: relative;
  background-color: ${({ theme }) => theme.colors.lightGray};
  padding: 0.8rem;
  padding-left: 3.9rem;
  color: ${({ theme }) => theme.colors.gray3};
  width: 100%;
  outline: none;
  border: none;
  border-radius: ${({ theme }) => theme.radius.md};
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  align-items: center;

  input[type='file'] {
    width: 0;
    height: 0;
    opacity: 0;
  }
`

export const UploadIconContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 1.75rem;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
`
