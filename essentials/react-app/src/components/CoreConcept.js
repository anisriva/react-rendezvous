export default function CoreConcept({imgSrc, imgAlt, title, desc}){
    return (
      <li>
        <img src={imgSrc} alt={imgAlt} />
        <h3>{title}</h3>
        <p>{desc}</p>
      </li>
    );
  }