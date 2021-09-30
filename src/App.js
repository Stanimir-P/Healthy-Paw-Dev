import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import UserReg from './components/UserReg/UserReg';
import UserLog from './components/UserLog/UserLog';

import Body from './components/Body/Body';
import FindVet from './components/FindVet/FindVet';
import Gallery from './components/Gallery/Gallery';
import Blog from './components/Blog/Blog';
import MedicalRecord from './components/MedicalRecord/MedicalRecord';
import CreatePetRecord from './components/MedicalRecord/CreatePetRecord/CreatePetRecord';

import './App.css';

import { auth, logout } from './utils/firebase';
import AuthContext from './contexts/AuthContext';
import { scrollToTop } from './services/common';

const App = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged(setUser)
    }, []);

    const authInfo = {
        isAuthenticated: Boolean(user),
        userId: user?.uid,
        email: user?.email,
    }

    return (
        <div className="App" onLoad={scrollToTop}>
            <AuthContext.Provider value={authInfo}>
                <Header />

                <Switch>
                    <Route path="/" exact component={Body} />
                    <Route path="/register" component={UserReg} />
                    <Route path="/login" component={UserLog} />
                    <Route path="/logout" render={logout} />

                    <Route path="/find-vet" component={FindVet} />
                    <Route path="/medical-record" exact component={
                        authInfo.isAuthenticated
                            ? () => <MedicalRecord />
                            : () => <UserLog />
                    } />
                    <Route path="/medical-record/create-pet-record" component={CreatePetRecord} />
                    <Route path="/gallery" component={Gallery} />
                    <Route path="/blog" component={Blog} />
                </Switch>

                <Footer />
            </AuthContext.Provider>
        </div>
    );
}

export default App;
