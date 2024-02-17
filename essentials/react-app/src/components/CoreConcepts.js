import CoreConcept from "./CoreConcept";
import CoreConceptData from "../data";

export default function CoreConcepts(){
    return (<section id='core-concepts'>
    <h2>Core Concepts</h2>
    <ul>
      {CoreConceptData.map((val) => {
        return <CoreConcept 
                    {...val}
                    />
      })}
    </ul>
    </section>);
}
