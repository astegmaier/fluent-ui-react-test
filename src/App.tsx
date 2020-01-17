import React from "react";
import { Provider, themes, Button } from "@fluentui/react";

const App = () => (
  <Provider theme={themes.teams}>
    <Button content="Get started" icon="play" iconPosition="after" primary />
  </Provider>
);

export default App;
