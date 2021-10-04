import RequestForm from "./RequestForm";
import Home from "./Home";
import { Switch, Route } from 'react-router-dom'
import AboutApp from "./AboutApp";
import DataCatalog from "./DataCatalog";

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/form' component={RequestForm}/>
            <Route path='/about' component={AboutApp}/>
            <Route path='/catalog' component={DataCatalog}/>
        </Switch>
    </main>
)

export default Main