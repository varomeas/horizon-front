import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/style.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/layout";
import CategoryPage from "./pages/categories/categories";
import Article from "./pages/article/article";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Admin from "./pages/admin/admin";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/" element={<App />}></Route>
                    <Route path="/categorie/:category" element={<CategoryPage />}></Route>
                    <Route path={"/categorie/:category/article/:id"} element={<Article/>}></Route>
                    <Route path={"/admin"} element={<Admin/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
