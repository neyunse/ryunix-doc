import Code from "../components/code";
import Alert from "../components/alert";

const nav = `import {
  useRouter
} from "@unsetsoft/ryunixjs"

function Home() {
  return (
    <>
    <h1>Home</h1>
    </>
  )
}

function Test() {
  return (
    <>
    <h1>Test</h1>
    </>
  )
}

const NotFound = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
    </div>
  );
};

const TestParams = ({params, query}) => {
  return (
    <div>
      <h1>ID: {params.id} | {query.test}</h1>
    </div>
  );
};

const App = () => {
  const routes = [
    { path: '/', component: Home },
    { path: '/test', component: Test},
    { path: '/test/:id', component: TestParams},
    { path: '*', NotFound: NotFound },  
  ];
  
  const { Children, NavLink } = useRouter(routes);

  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/test">Test</NavLink>
        <NavLink to="/this-not-exist">404</NavLink>
        <NavLink to="/test/abc?test=hello-world">404</NavLink>
      </nav>
      <div>
        <Children />
      </div>
    </div>
  );
};

export default App

`;

const Navigation = () => {
  return (
    <>
      <h1>
        Navigation <span className="beta">Beta</span>
      </h1>
      <h2>Children & Navigate</h2>

      <p>
        Try navigation{" "}
        <a href="https://demo-navigation-ryunixjs.vercel.app/">here</a>
      </p>

      <Code code={nav} title="App.jsx" />

      <Alert type="warning">
        Navigation only works in environments such as Vercel & needs
        @unsetsoft/ryunix-webpack or Rspack template.
      </Alert>
    </>
  );
};

export default Navigation;
