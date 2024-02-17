import {useState} from 'react';
import ToggleButton from "./ToggleButton";
import CoreConceptData from '../data';
import Section from './Section';
import Tabs from './Tabs';
export default function Examples() {

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
        <Section title='Examples' id='examples'>
        <Tabs 
            // Definding the button container here which will help wrap the buttons
            buttonsContainer="menu"
            // Apart from using `children` props the jsx can also be propagated using slots in this example buttons
            buttons={
            <>
                <ToggleButton 
                        isSelected={toggleState==='0'} onSelect={() => handleClick('0')}>Components
                </ToggleButton>
                <ToggleButton 
                    isSelected={toggleState==='1'} onSelect={() => handleClick('1')}>JSX
                </ToggleButton>
                <ToggleButton 
                    isSelected={toggleState==='2'} onSelect={() => handleClick('2')}>Props
                </ToggleButton>
                <ToggleButton 
                    isSelected={toggleState==='3'} onSelect={() => handleClick('3')}>States
                </ToggleButton>
            </>
            }>
            <div className="tab">
            {!toggleState && <p>Please select an option!</p>}
            {toggleState && renderTab()}
            </div>
        </Tabs>

        {/* <menu>
          <ToggleButton isSelected={toggleState==='0'} onSelect={() => handleClick('0')}>Components</ToggleButton>
          <ToggleButton isSelected={toggleState==='1'} onSelect={() => handleClick('1')}>JSX</ToggleButton>
          <ToggleButton isSelected={toggleState==='2'} onSelect={() => handleClick('2')}>Props</ToggleButton>
          <ToggleButton isSelected={toggleState==='3'} onSelect={() => handleClick('3')}>States</ToggleButton>
        </menu>
        <div className="tab">
          {!toggleState && <p>Please select an option!</p>}
          {toggleState && renderTab()}
        </div> */}
      </Section>
    )
}