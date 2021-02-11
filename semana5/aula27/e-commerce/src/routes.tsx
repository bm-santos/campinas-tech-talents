import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Produto from "./components/Produto";

function Rotas() {
    return(
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/produto/:slug" exact component={Produto}/>
        </Switch>
    )
}

export default Rotas