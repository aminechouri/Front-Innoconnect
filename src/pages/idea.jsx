import { Helmet } from 'react-helmet-async';

import { IdeaView } from 'src/sections/idea';

// ----------------------------------------------------------------------

export default function IdeaPage() {
  return (
    <>
      <Helmet>
        <title> Idea </title>
      </Helmet>

      <IdeaView />
    </>
  );
}
