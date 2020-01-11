import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shopPage.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./components/sign-in-and-sign-up/sign-in-and-sign-up.component";

import { setCurrentUser } from "./redux/user/user.action";

import { auth, createUsersProfileDocument } from "./firebase/firebase.utils";

import "./App.css";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUsersProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id, // у снимка (snapShot) базы по пути /users/'currUser' забираем необходимые поля
              ...snapShot.data() // метод позволяющий забрать вложенную информация о конкретном объекте из БД (в данном случае из  user)
            }
          });
        });
      }

      setCurrentUser(userAuth); // если user не залогинился, значит он не существует и выполниться установка null
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
