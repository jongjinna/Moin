import styled from 'styled-components';

interface ButtonProps {
  width?: number;
  block?: boolean;
  status: 'normal' | 'active' | 'disabled';
  margin?: string;
}

export const DefaultButton = styled.button`
  height: 50px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 185ms ease-in-out;
  width: ${(p: ButtonProps) => (p.width && p.width > 50 ? p.width + 'px' : p.block ? '100%' : '133px')};
  background-color: ${(p: ButtonProps) => (p.status === 'active' || p.status === 'normal' ? '#fff' : 'var(--navy-30)')};
  color: ${(p: ButtonProps) => (p.status === 'disabled' ? 'var(--typography-3)' : 'var(--typography-2)')};
  user-select: none;
  font-size: 16px !important;
  letter-spacing: -0.13px;
  margin: ${p => (p.margin ? p.margin : 'none')};
  border: ${(p: ButtonProps) =>
    p.status === 'normal' ? '1px solid var(--cool-grey-4)' : p.status === 'active' ? '1px solid var(--cool-grey-3)' : 'none'};
  box-shadow: ${(p: ButtonProps) => (p.status === 'normal' ? '0 2px 4px 0 var(--navy-10)' : 'none')};
  ${(p: ButtonProps) =>
    p.status !== 'normal'
      ? `&:hover {}`
      : `&:hover {
    box-shadow: 0 2px 4px 0 var(--navy-30);
    border: solid 1px var(--cool-grey-4);
    background-color: rgba(234, 240, 244, 0.5);
  }`}

  &:disabled {
    cursor: not-allowed !important;
  }
`;

export const PrimarySolidButton = styled(DefaultButton)`
  color: ${(p: ButtonProps) => (p.status === 'disabled' ? 'var(--typography-4)' : '#fff')};
  background-color: ${(p: ButtonProps) => (p.status === 'active' || p.status === 'normal' ? 'var(--primary-100)' : 'var(--navy-30)')};
  border: none;
  ${(p: ButtonProps) =>
    p.status !== 'normal'
      ? `&:hover {}`
      : `&:hover {
    box-shadow: 0 2px 4px 0 var(--navy-30);
    border: solid 1px var(--cool-grey-4);
    background-color: #006ad1;
  }`}
`;

export const PrimaryBorderButton = styled(DefaultButton)`
  color: ${(p: ButtonProps) => (p.status === 'disabled' ? 'var(--typography-3)' : 'var(--primary-100)')};
  background-color: ${(p: ButtonProps) => (p.status === 'active' || p.status === 'normal' ? '#fff' : 'var(--navy-30)')};
  border: ${(p: ButtonProps) => (p.status === 'disabled' ? '1px solid var(--cool-grey-3)' : '1px solid var(--primary-100)')};
  ${(p: ButtonProps) =>
    p.status !== 'normal'
      ? `&:hover {}`
      : `&:hover {
    box-shadow: 0 2px 4px 0 var(--navy-30);
    border: solid 1px var(--cool-grey-4);
    background-color: var(--primary-10);
  }`}
`;
