import {Switch, Route} from 'react-router-dom'
import React from 'react'

import SignIn from "./components/sign-in/SignIn";
import SignUp from "./components/sign-up/SignUp";
import Home from "./components/home/Home";
import PostFull from "./components/post-full/PostFull";
import UserProfile from "./components/user-profile/UserProfile";
import Settings from "./components/settings/Settings";
import NewArticle from "./components/new-article/NewArticle";


export default () => {

  return (
      <Switch>
        <Route path={`/profile/:username`} component={UserProfile}/>
        <Route path={`/settings`} component={Settings}/>
        <Route path={`/editor`} component={NewArticle}/>

        <Route path={`/article/:linkToFullPost`} component={PostFull}/>
        <Route path={`/page/:numberPage`} component={Home}/>
        <Route path={'/login'} component={SignIn}/>
        <Route path={'/register'} component={SignUp}/>
        <Route path={'/'} component={Home}/>
      </Switch>
  )
}
