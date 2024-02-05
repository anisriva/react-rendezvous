import {useState} from 'react';

import Header from './components/Header';
import CoreConcepts from './components/CoreConcepts';
import ToggleButton from './components/ToggleButton';

import CoreConceptData from './data';

function App(){

  console.log('APP LOADED');

  const [toggleState, setToggleState] = useState(null);

  const renderTab = () => {
    const filterData = CoreConceptData.filter((ele) => ele.key===toggleState);
    const content = filterData.length > 0 ? filterData[0] : null;
    return (
      <>
        <h3>{content.title}</h3>
        <pre>
          <code>
            {content.code}
          </code>
        </pre>
      </>
    )
  }

  const handleClick = (val) => {
    setToggleState(val);
  }

  return (
    <>
      <Header/>
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {CoreConceptData.map((val) => {
              return <CoreConcepts 
                          {...val}
                          />
            })}
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <ToggleButton onSelect={() => handleClick('0')}>Components</ToggleButton>
            <ToggleButton onSelect={() => handleClick('1')}>JSX</ToggleButton>
            <ToggleButton onSelect={() => handleClick('2')}>Props</ToggleButton>
            <ToggleButton onSelect={() => handleClick('3')}>States</ToggleButton>
          </menu>
          <div className="tab">
            {!toggleState && <p>Please select an option!</p>}
            {toggleState && renderTab()}
          </div>
        </section>
      </main>
    </>
  )
}

export default App;