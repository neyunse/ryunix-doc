import Alert from "../components/alert";
import Code from "../components/code";

const Main = () => {
  return (
    <>

      <h1>Introduction</h1>
      <p>
      Like React, NextJS, Preact, Vite. Ryunix allows you to build static websites from JavaScript in a similar way to the aforementioned frameworks. However, Ryunix is planned to be completely standalone, i.e. without including React internally. This way allowing it to be more manageable and moldable for each developer.
      </p>

      <p>The reactivity of Ryunix is similar to Preact, however, it does not pretend to follow any standard of React or any similar Framework, but to allow to generate an SPA in its own way.</p>

      <h2>What is the difference?</h2>
      <ul>
        <li>
          <p>
            <b>createRoot:</b> was not entered with the same name and usage
            form, instead it accepts a single string parameter which is the id
            of the main div of the index.html file.
          </p>
        </li>
        <li>
          <p>
            <b>useState:</b> was implemented with another called useStore to make sense
            when used as a data storage system (not a replacement for
            localStorage).
          </p>
        </li>
      </ul>

      <h2>Getting Started</h2>
      <p>To begin, use the CLI to create a template and start working.</p>
      <Code
        code={`npx @unsetsoft/cra my-page`}
        title="Bash|Shell|Powershell|CMD"
      />
      <Alert>RyunixJS works starting with node 18.16.x</Alert>
    </>
  );
};
export default Main;
