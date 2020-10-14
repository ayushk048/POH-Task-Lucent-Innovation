import React, { Component } from 'react'
import NavStepItem from './NavStepItem/NavStepItem'
import "./NavSteps.css"

class NavSteps extends Component {
    state = {
        steps: [{
            id: 123,
            stepNo: "STEP 1",
            stepName: "SELECT YOR PACKAGING",
            route: "/"
        }, {
            id: 124,
            stepNo: "STEP 2",
            stepName: "SELECT YOR GIFTS",
            route: "/select-gift"
        }, {
            id: 125,
            stepNo: "STEP 3",
            stepName: "PERSONALIZE IT",
            route: "/personalize"
        }, {
            id: 126,
            stepNo: "STEP 4",
            stepName: "REVIEW",
            route: "/review"
        }]
    }
    render() {
        return (
            <div className="NavStep">
                {this.state.steps.map(ele => (
                    <NavStepItem key={ele.id} route={ele.route} stepName={ele.stepName} stepNo={ele.stepNo} />
                ))}
            </div>
        )
    }
}

export default NavSteps
