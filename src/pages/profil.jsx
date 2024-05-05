import { Helmet } from 'react-helmet-async';

import { ProfilView } from 'src/sections/profil';

// ----------------------------------------------------------------------

export default function ProfilPage() {
  return (
    <>
      <Helmet>
        <title> Profil </title>
      </Helmet>

      <ProfilView />
    </>
  );
}
