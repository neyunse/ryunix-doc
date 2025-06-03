import Alert from "../components/alert";
import Code from "../components/code";

const CSS = () => {
  const style = `function App(){
  return (
    <div ryunix-class="red"></div>
  )
}

function App(){
  return (
    <div ryunix-style={{
      color:"red"
    }}></div>
  )
}
`;

  return (
    <>
      <h1>Styles</h1>
      <p>
        Ryunix supports className and style, however, it also comes with its own
        way to integrate styles.
      </p>
      <Code code={style} title="App.jsx" />
    </>
  );
};
export default CSS;
