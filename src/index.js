import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: "en",
    detection: {
      order: [
        "htmlTag",
        "querystring",
        "cookie",
        "localStorage",
        "sessionStorage",
        "navigator",

        "path",
        "subdomain",
      ],
      caches: ["cookie"],
    },
    backend: { loadPath: "/locales/{{lng}}/translation.json" },
    react: {
      wait: true,
      useSuspense: false,
    },
  });

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
