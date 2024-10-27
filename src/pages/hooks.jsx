import Alert from "../components/alert";
import Code from "../components/code";

import { useStore, useQuery } from "@unsetsoft/ryunixjs";

const states = `import { useStore } from "@unsetsoft/ryunixjs";

function App() {
  const [count, setCount] = useStore(0);

  const handleButtonClick = () => {
    setCount((c) => c + 1);
  };

  return (
    <div>
      <button> Click to increment: {count}</button>
    </div>
  );
}

export default App;
`;

const effect = `import { useEffect } from "@unsetsoft/ryunixjs";
function App() {
  useEffect(() => {
    //... Effect
  }, []);
  return (
    <div>
      <p>Hello World</p>
    </div>
  );
}

export default App;`;

const query = `import { useQuery } from "@unsetsoft/ryunixjs";
function App() {
  // /post?id=1
  const {id} = useQuery()

  return (
    <div>
      <p>post id: {id}</p>
    </div>
  );
}

export default App;`;

const Hooks = () => {


  return (
    <div ryunix-class="flex flex-col gap-10">
      <div>
        <h1>Hooks</h1>
        <p>
          RyunixJS brings with it an API similar to ReactJS, hooks can be used
          in any component and allow to create more robust applications.
        </p>
      </div>
      <div>
        <h2 id="store">useStore</h2>
        <Code code={states} title="App.jsx" />
 
      </div>
      <div>
        <h2 id="effect">useEffect</h2>
        <Code code={effect} title="App.jsx" />
      
      </div>
      <div>
        <h2 id="query">useQuery</h2>
        <Code code={query} title="App.jsx" />
      </div>

    </div>
  );
};

export default Hooks;
