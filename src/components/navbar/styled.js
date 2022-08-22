import styled from 'styled-components';
import tw from 'twin.macro';

const StyledNavbar = styled.nav`
    ${tw`relative
w-full
flex flex-wrap
items-center
justify-between
py-4
bg-gray-100
text-gray-500
hover:text-gray-700
focus:text-gray-700
shadow-lg`};
`;

export default StyledNavbar;
