import React, { Component, createContext } from 'react';
import { auth } from '../../firebase';
import { createOrGetUserProfileDocument } from '../../firebase';

const initialUserState = {
  user: null,
  loading: true,
};
export const UserContext = createContext(initialUserState);

class UserProvider extends Component {
  state = initialUserState;

  componentDidMount = async () => {
    // will be fired whenever a user goes from logged in to logged out state or vice-versa
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createOrGetUserProfileDocument(userAuth);

        // whenever something changes inside user document, this function will be fired cause say if user changes their name, then we will want to quickly change the data in the state (this below is just like a socket so if anything chamges it'll trigger this from firebase to update it)

        userRef.onSnapshot((snapshot) => {
          this.setState({
            user: { uid: snapshot.id, ...snapshot.data() },
            loading: false,
          });
        });
      }
      this.setState({ user: userAuth, loading: false });
    });
  };

  render() {
    const { user, loading } = this.state;
    const { children } = this.props;
    return (
      <UserContext.Provider value={{ user, loading }}>
        {children}
      </UserContext.Provider>
    );
  }
}
export default UserProvider;
