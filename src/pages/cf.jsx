import Alert from "../components/alert";
const Cf = () => {
  return (
    <>
      <h1>Config File</h1>
      <p>
        Ryunix will search for "ryunix.config.js" or "ryunix.config.cjs" in the
        root of the project, if not found it will apply the default settings.
      </p>

      <ul>
        <li>
          <p>
            <b>webpack.output.buildDirectory</b>: if it exists, it is expected
            to be a string containing the name of the folder.
          </p>
        </li>
        <li>
          <p>
            <b>webpack.root</b>: if it exists, it is expected to be a string
            containing the name of the folder.
          </p>
        </li>
        <li>
          <p>
            <b>webpack.devServer.port</b>: if it exists, it is expected to be a
            number.
          </p>
        </li>
        <li>
          <p>
            <b>webpack.devServer.proxy</b>: if it exists, it is expected to be
            an object.
            <span>
              <a href="https://webpack.js.org/configuration/dev-server/#devserverproxy">
                (webpack.devServer.proxy)
              </a>
            </span>

          </p>
        </li>
        <li>
          <p>
            <b>webpack.resolve.alias</b>: if it exists, it is expected to be an
            object.
            <span>
              <a href="https://webpack.js.org/configuration/resolve/#resolvealias">
                (webpack.resolve.alias)
              </a>
            </span>

          </p>
        </li>
        <li>
          <p>
            <b>webpack.plugins</b>: if it exists, it is expected to be an array.
            <span>
              <a href="https://webpack.js.org/concepts/plugins/#configuration">
                (Plugin Configuration)
              </a>
            </span>
          </p>
        </li>
        <li>
          <p>
            <b>static.seo.meta</b>: if it exists, it is expected to be an object
            containing a list of meta tags
          </p>
        </li>
        <li>
          <p>
            <b>static.seo.title</b>: if it exists, it is expected to be a string
          </p>
        </li>
        <li>
          <p>
            <b>static.favicon</b>: if it exists, it is expected to be a boolean
          </p>
        </li>
      </ul>
      <Alert type="warning">
        <b>Note:</b> aliases does not need the path module, since it is already
        being used internally to create a path.
      </Alert>
      <Alert>
        Some configurations are not specified here, it is recommended to see {" "}

        <span>
          <a target="_blank" href="https://github.com/UnSetSoft/Ryunixjs/blob/dev/packages/ryunix-webpack/utils/config.cjs#L26">
            this file.
          </a>
        </span>
      </Alert>
    </>
  );
};

export default Cf;
