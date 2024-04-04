import logo from './logo.svg';
import './App.css';
import HomePage from './component/HomePage';
import { Link, Route, Routes } from "react-router-dom"
import React, { Suspense } from 'react';
import ButtonAppBar from "./component/ButtonAppBar"
import { configureStore } from '@reduxjs/toolkit';
import TodoSlice from "./store/TodoSlice"
import PostsSlice from './store/PostsSlice';
import PhotosSlice from './store/PhotosSlice';
import UsersSlice from './store/UsersSlice';

import { Provider } from 'react-redux';

// import User from './component/User'
// import Todo from './component/Todo'
// import Photo from './component/Photo'
// import Post from './component/Post'

// 7689

const LazyUser = React.lazy(() => import("./component/User/Users"))
const LazyPhoto = React.lazy(() => import("./component/Photo/Photos"))
const LazyPost = React.lazy(() => import("./component/Post/Posts"))
const LazyTodo = React.lazy(() => import("./component/Todo/Todos"))
const LazyHomePage = React.lazy(() => import("./component/HomePage"))


function App() {
  const myStore = configureStore({
    reducer: {
      TodoSlice,
      PostsSlice,
      PhotosSlice,
      UsersSlice,
    }
  })
  
  return (
    <>
      <Provider store={myStore}>
        
        <ButtonAppBar />
        <Routes>

          <Route path="/User" element={<Suspense fallback={<h1>loading</h1>}><LazyUser /></Suspense>} />
          <Route path="/Photo" element={<Suspense fallback={<h1>loading</h1>}><LazyPhoto /></Suspense>} />
          <Route path="/Post" element={<Suspense fallback={<h1>loading</h1>}><LazyPost /></Suspense>} />
          <Route path="/Todo" element={<Suspense fallback={<h1>loading</h1>}><LazyTodo /></Suspense>} />
          <Route path="/" element={<Suspense fallback={<h1>loading</h1>}><LazyHomePage /></Suspense>} />
          <Route path="/HomePage" element={<Suspense fallback={<h1>loading</h1>}><LazyHomePage /></Suspense>} />
        </Routes>
      
 </Provider>
 


    </>

  );
}

export default App;
