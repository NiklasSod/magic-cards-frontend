import styled from "styled-components";
// import tw from "tailwind-styled-components";

export const RegisterContainer = styled.div`
  flex: none;
  position: relative;
  flex-direction: column;
  justify-content: center;
  margin-top: 12px;
  overflow: hidden;
  margin: 8px;
`;

export const RegisterInnerContainer = styled.div`
  width: full;
  padding: 6px;
  margin: auto;
  background: white;
  border-radius: 0.375rem;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
  --tw-ring-color: rgb(225 29 72);
  box-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width))
    var(--tw-ring-color);
  box-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width))
    var(--tw-ring-color);
  --tw-ring-color: rgb(147 51 234);
  /* lg:max-w-xl */
  max-width: 36rem;
`;

export const RegisterLabel = styled.div`
  display: block;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  color: rgb(31 41 55);
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin-top: 2px;
  color: rgb(126 34 206);
  background: white;
  border-width: 1px;
  border-radius: 0.375rem;
  &:focus {
    border-color: rgb(192 132 252);
    --tw-ring-color: rgb(216 180 254);
    outline: none;
    box-shadow: var(--tw-ring-inset) 0 0 0
      calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    --tw-ring-opacity: 0.4;
  }
`;
