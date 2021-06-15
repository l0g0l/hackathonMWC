import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// import Route from './Route'
import Layout from '../../Components/Layout/Layout'
import Home from '../../Pages/Home/Home'
import SignUp from '../../Pages/SignUp/SignUp'
import Profile from '../../Pages/Profile/Profile'
import VerifyProfile from '../../Pages/VerifyProfile/VerifyProfile'


const Routes = () => {
    return (
        <Router>
            <Route exact path="/" component={Home}></Route>

            <Layout>
                <Switch>

                    <Route path="/signup" component={SignUp}></Route>
                    <Route path="/profile" component={Profile}></Route>
                    <Route path="/verifyprofile" component={VerifyProfile}></Route>

                </Switch>
            </Layout>
        </Router>

    );
}
export default Routes
