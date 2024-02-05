import reactImg from '../assets/react-component.png';

function RandomReactAdj(){
    const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
    const randomIndex =  Math.floor(Math.random() * reactDescriptions.length);
    return reactDescriptions[randomIndex];
  }

export default function Header() {
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