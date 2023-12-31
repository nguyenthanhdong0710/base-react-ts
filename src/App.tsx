import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "reduxx/store";
import Router from "route/Router";
import { I18nextProvider } from "react-i18next";
import i18n from "i18n";

import "App.css";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <I18nextProvider i18n={i18n}>
          <Router />
        </I18nextProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
