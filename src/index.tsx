import ReactDOM from "react-dom/client";

import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import { ContainerProvider } from "brandi-react";
import { di } from "./di/container";

const container = di.Register();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <ContainerProvider container={container}>
      <App />
    </ContainerProvider>
  </Provider>
);
