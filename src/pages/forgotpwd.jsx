import { Helmet } from 'react-helmet-async';

import { ForgotpwdView } from 'src/sections/forgotpwd';

// ----------------------------------------------------------------------

export default function ForgotpwdPage() {
  return (
    <>
      <Helmet>
        <title> Forgot Password </title>
      </Helmet>

      <ForgotpwdView />
    </>
  );
}
