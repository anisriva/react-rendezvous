import compImg from './assets/components.png';
import jsxImg from './assets/jsx-ui.png';
import propImg from './assets/config.png';
import stateImg from './assets/state-mgmt.png';

const CoreConceptData = [
    {
      key : '0',
      imgSrc : compImg,
      imgAlt : "react components",
      title : "Components",
      desc : "The core ui building block - compose the user interface by combining multiple components.",
      code: `
function Welcome() {
  return <h1>Hello, World!</h1>;
}`
    },
    {
      key : '1',
      imgSrc : jsxImg,
      imgAlt : "react jsx",
      title : "JSX",
      desc : "A dynamic HTML code to define an actual markup which will be rendered.",
      code: `
<div>
  <h1>Welcome {userName}</h1>
  <p>Time to learn React!</p>
</div>`
    },
    {
      key : '2',
      imgSrc : propImg,
      imgAlt : "react props",
      title : "Props",
      desc : "Allows components to get dynamic properties and makes it truly reusable.",
      code: `
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`
    },
    {
      key : '3',
      imgSrc : stateImg,
      imgAlt : "react state",
      title : "State",
      desc : "React managed data which when changed causes the components to re-render.",
      code: `
function Counter() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(true);
  }

  return (
    <div>
      <button onClick={handleClick}>Show Details</button>
      {isVisible && <p>Amazing details!</p>}
    </div>
  );
}`
    },
  ]

  export default CoreConceptData;