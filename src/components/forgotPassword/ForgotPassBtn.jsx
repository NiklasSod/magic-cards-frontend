/* eslint-disable no-unused-vars */

import { Center, ButtonReset, Text } from "./forgotPassBtn.style";

// eslint-disable-next-line react/prop-types
export default function ForgotPassBtn({ passwordResetForm }) {
  return (
    <Center>
      <ButtonReset onClick={(e) => passwordResetForm()}>
        <Text>Forgot password?</Text>
      </ButtonReset>
    </Center>
  );
}
