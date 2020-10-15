import React, { Component } from 'react'
import ImageSelect from '../../Containers/SelectionBox/UI/ImageSelect/ImageSelect'
import SelectionBoxHeader from '../../Containers/SelectionBox/SelectionBoxHeader'
import './SelectBox.css'
import { SELECT_BOX } from '../../Store/actionsTypes'
import { connect } from 'react-redux'
import Boxs from '../../JSON/Boxs'

class SelectBox extends Component {
    state = {
        Boxs: [],
        selected: null,
        totalPrice: 0
    }

    componentDidMount() {
        this.setState(
            state => {
                return {
                    Boxs: Boxs,
                    totalPrice: state.selected?.price
                }
            }
        )
    }

    onSelectHandler = (id) => {
        this.setState(state => {
            return {
                totalPrice: state.totalPrice + this.state.Boxs.find(ele => ele.id === id)?.price
            }
        })
        this.props.onSelect(this.state.Boxs.find(ele => ele.id === id), this.state.totalPrice);
        this.props.history.push("/select-gift")
    }


    render() {

        return (
            <div className="container" >
                <SelectionBoxHeader
                    head="SELECT BOX"
                    body="Choose a Packaging that speaks to your loved one's style!" />
                <div className="row">
                    {this.state.Boxs.map(ele => (
                        <ImageSelect width="80%" classes="col-md-6" name={ele.name} id={ele.id} key={ele.id} src={ele.url} selected={this.onSelectHandler} />
                    ))}
                </div>
            </div>
        )
    }
}

const stateToProps = (state) => {
    return {
        selectedBox: state.selectedBox,
        totalPrice: state.totalPrice
    }
}

const dispatchToProps = dispatch => {
    return {
        onSelect: (selected, totalPrice) => dispatch({ type: SELECT_BOX, selectedBox: selected, totalPrice: totalPrice })
    }
}


export default connect(stateToProps, dispatchToProps)(SelectBox)
