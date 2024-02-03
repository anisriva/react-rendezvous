import reactImg from './assets/react-component.png';
import CoreConceptData from './data';


function RandomReactAdj(){
  const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
  const randomIndex =  Math.floor(Math.random() * reactDescriptions.length);
  console.log(randomIndex);
  return reactDescriptions[randomIndex];
}
function CoreConcepts({imgSrc, imgAlt, title, desc}){
  return (
    <li>
      <img src={imgSrc} alt={imgAlt} />
      <h3>{title}</h3>
      <p>{desc}</p>
    </li>
  );
}
function Header() {
  return (
      <header>
        <img src={reactImg} alt="stylish-logo" />
        <h1>React Essentials</h1>
        <p>
          {RandomReactAdj()} React concepts you will need for almost any app your are going to build!
        </p>
      </header>
  );
}

function App(){
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
      </main>
    </>
  )
}
export default App;
