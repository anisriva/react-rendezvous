import Header from './components/Header';
import CoreConcepts from './components/CoreConcepts';
import Examples from './components/Examples';

function App(){

  console.log('APP LOADED');

  return (
    <>
      <Header/>
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  )
}

export default App;