import compImg from './assets/components.png';
import jsxImg from './assets/jsx-ui.png';
import propImg from './assets/config.png';
import stateImg from './assets/state-mgmt.png';

const CoreConceptData = [
    {
      imgSrc : compImg,
      imgAlt : "react components",
      title : "Components",
      desc : "The core ui building block - compose the user interface by combining multiple components.",
    },
    {
      imgSrc : jsxImg,
      imgAlt : "react jsx",
      title : "JSX",
      desc : "A dynamic HTML code to define an actual markup which will be rendered.",
    },
    {
      imgSrc : propImg,
      imgAlt : "react props",
      title : "Props",
      desc : "Allows components to get dynamic properties and makes it truly reusable.",
    },
    {
      imgSrc : stateImg,
      imgAlt : "react state",
      title : "State",
      desc : "React managed data which when changed causes the components to re-render.",
    },
  ]

  export default CoreConceptData;