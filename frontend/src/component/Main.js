import RequestForm from "./RequestForm";
import Home from "./Home";
import { Switch, Route } from 'react-router-dom'

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/form' component={RequestForm}/>
        </Switch>
    </main>
)

export default Main