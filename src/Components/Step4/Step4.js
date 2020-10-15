import React, { Component } from 'react'
import { connect } from 'react-redux'
import SelectionBoxHeader from '../../Containers/SelectionBox/SelectionBoxHeader'

class Step4 extends Component {

    render() {

        return (
            <div className="container" >
                <SelectionBoxHeader
                    head="Your Gift Box" />
                <div className="row">
                    <div className="col-md-6">
                        <img width="80%" src={this.props.selectedBox?.url} alt={this.props.selectedBox?.name} />
                    </div>
                    <div className="col-md-6 " style={{ textAlign: "start" }}>
                        <h5 style={{ fontWeight: "bold" }}>YOUR GIFT BOX:</h5>
                        <p style={{ margin: "0" }}>Box Color : {this.props.selectedBox?.name}</p>
                        <p style={{ marginTop: "0" }}>price : &#8377;{this.props.selectedBox?.price} </p>

                        <h5 style={{ fontWeight: "bold" }}>YOUR ITEMS:</h5>
                        {this.props.selectedGifts?.map(gift => (
                            <p style={{ margin: "0" }} key={gift.id}>{gift.quantity} - {gift.name} <strong>&#8377;{gift.price}</strong> </p>
                        ))}
                        <br></br>

                        <h5 style={{ fontWeight: "bold" }}>YOUR MESSAGE:</h5>
                        <p>{this.props.selectedCard?.message}</p>
                        <h5 style={{ fontWeight: "bold" }}>YOUR CARD:</h5>
                        <img
                            style={{ width: "100px" }}
                            src={this.props.selectedCard?.url}
                            className="pr-3"
                            alt={this.props.selectedCard?.name} />
                        <p>TOTAL PRICE : <strong>&#8377;{this.props.totalPrice}</strong></p>
                        <button className="btn  btn-primary">Add To Cart</button>
                    </div>
                </div>
            </div >
        )
    }
}

const stateToProps = state => {
    return {
        selectedBox: state.selectedBox,
        selectedGifts: state.selectedGifts,
        selectedCard: state.selectedCard,
        totalPrice: state.totalPrice
    }
}


export default connect(stateToProps)(Step4)
