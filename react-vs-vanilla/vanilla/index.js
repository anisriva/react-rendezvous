const content = [
    [
      "React is extremely popular",
      "It makes building complex, interactive UIs a breeze",
      "It's powerful & flexible",
      "It has a very active and versatile ecosystem"
    ],
    [
      "Components, JSX & Props",
      "State",
      "Hooks (e.g., useEffect())",
      "Dynamic rendering"
    ],
    [
      "Official web page (react.dev)",
      "Next.js (Fullstack framework)",
      "React Native (build native mobile apps with React)"
    ]
  ];

  const btnWhyReact = document.getElementById("btn-why-react");
  const btnCoreFeature = document.getElementById("btn-core-features");
  const btnResources = document.getElementById("btn-resources");
  const tabContent = document.getElementById("tab-content");

  function displayContent(items) {
    let listContent = "";
    for (const item of items){
        listContent += `<li>${item}</li>`;
    }
    const list = document.createElement("ul");
    tabContent.innerHTML = "";
    list.innerHTML = listContent;
    tabContent.append(list)    
  }

  function highlightButton(btn) {
    btnWhyReact.className = "";
    btnCoreFeature.className = "";
    btnResources.className = "";
    btn.className = "active";
  }

  function handleClick(event) {
    const btnId = event.target.id;
    highlightButton(event.target);
    if (btnId === "btn-why-react") {
        displayContent(content[0]);
    } else if (btnId === "btn-core-features") {
        displayContent(content[1]);
    } else if (btnId === "btn-resources") {
        displayContent(content[2])
    } else displayContent(["Coming Soon..."]);
  }

  displayContent(content[0]);

  btnWhyReact.addEventListener("click", handleClick);
  btnResources.addEventListener("click", handleClick);
  btnCoreFeature.addEventListener("click", handleClick);