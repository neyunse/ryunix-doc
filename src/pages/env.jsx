const ENVS = () => {
  return (
    <div ryunix-class="flex flex-col gap-10">
      <div>
        <h1>Environment variables <span className="beta">Beta</span></h1>
        <p>
          Ryunix is able to read the .env file whenever it is available. To
          import a variable from the .env file it is necessary to use
          "ryunix.env.RYUNIX_APP_".
        </p>
      </div>
    </div>
  );
};

export default ENVS;
