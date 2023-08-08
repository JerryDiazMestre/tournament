'use client';

import AddPlayer from "./component/AddPlayer";
import Players from "./component/Players";
import ReduxProvider from "./redux/ReduxProvider";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <ReduxProvider>
      <main>
        <Players />
        <AddPlayer />
      </main>
    </ReduxProvider>
  )
}
