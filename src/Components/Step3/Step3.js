import React, { Component } from 'react'
import { connect } from 'react-redux'
import SelectionBoxHeader from '../../Containers/SelectionBox/SelectionBoxHeader'
import ImageSelect from '../../Containers/SelectionBox/UI/ImageSelect/ImageSelect'
import cards from '../../JSON/Cards'
import { SUBMIT_CARD } from '../../Store/actionsTypes'

class Step3 extends Component {
    state = {
        cards: [],
        selectedCard: null,
        selected: null,
        message: "",
        totalPrice: 0
    }

    componentDidMount() {
        this.setState(state => {
            return {
                cards: cards,
                selcted: this.props.selectedCard,
                totalPrice: this.props.totalPrice
            }
        })
    }

    onCardSelectHandler = (id) => {
        this.setState(state => {
            const card = this.state.cards.find(card => card.id = id);
            console.log(card);
            return {
                selectedCard: card,
                totalPrice: state.totalPrice + card.price,
                selected: card
            }
        })

    }

    messageCheck = (e) => {
        const cloneCard = this.state.selectedCard;
        cloneCard.message = e.target.value;


        this.setState({
            ...this.state,
            message: e.target.value,
            selectedCard: cloneCard

        })

    }

    selectCard = (id) => {


        this.setState(state => {
            return {
                selected: false,
            }
        })
    }

    onCardSubmit = () => {

        this.props.onCardSubmit(this.state.selectedCard, this.state.totalPrice);
        this.props.history.push('/review');

    }

    render() {
        return (
            <>

                <SelectionBoxHeader
                    stepSummury="step 3 of 4"
                    head="CREATE YOUR PIECE OF HEAVEN"
                    body="Choose the perfact card from our selection of exclusive designs and upload two of your favorite photos" />
                <p>{this.state.totalPrice}</p>
                {!this.state.selected &&
                    <div className="container" >
                        <div className="row">
                            {cards.map(card => (
                                <ImageSelect classes="col-md-4" width="80%" name={card.name} id={card.id} key={card.id} src={card.url} selected={this.onCardSelectHandler} />
                            )
                            )}
                        </div>
                    </div>
                }
                {
                    this.state.selected &&
                    <div className="container row"  >
                        <div className="col-md-6" >
                            <img width="80%" src={this.state.selectedCard?.url} alt={this.state.selectedCard?.name} />
                            <p style={{ pointer: "cursur" }} onClick={this.selectCard}>(select card)</p>
                        </div>
                        <div className="col-md-6">
                            <p style={{ textAlign: "start", fontWeight: "bold" }} >Message on Card : {this.state.sele} </p>
                            <p style={{ textAlign: "start", color: "gray" }} >{350 - this.state.message.length} Character(s) remaining.</p>
                            <textarea className="form-control" maxLength="350" value={this.state.message} onChange={this.messageCheck}>

                            </textarea>
                            <p style={{ textAlign: "start", color: "gray" }} >350 Character max limit.</p>
                            <button className="btn btn-block btn-primary" onClick={this.onCardSubmit}> Save Message and Card </button>
                        </div>
                    </div>
                }

            </>

        )
    }
}

const stateToProps = state => {
    return {
        totalPrice: state.totalPrice,
        selectedCard: state.selectedCard
    }
}

const dispatchState = dispatch => {
    return {
        onCardSubmit: (card, totalPrice) => dispatch({ type: SUBMIT_CARD, card: card, totalPrice: totalPrice })
    }
}

export default connect(stateToProps, dispatchState)(Step3)
