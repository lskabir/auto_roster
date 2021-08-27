import React from 'react'
import { Switch, Route } from 'react-router-dom'


import CarsContainer from '../containers/CarsContainer'
import CarsForm from './CarsForm'
import Home from './Home'

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/new' component={CarsForm} />
            <Route exact path='/cars' component={CarsContainer} />
        </Switch>
    )
}

export default Router
