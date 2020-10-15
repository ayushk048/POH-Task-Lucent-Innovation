import React, { Component } from "react";
import { connect } from "react-redux";
import SelectionBoxHeader from "../../Containers/SelectionBox/SelectionBoxHeader";

import ImageCardGift from "../../Containers/SelectionBox/UI/imageCardGift/ImageCardGift";
import Select from "../../Containers/SelectionBox/UI/Select/Select";
import CheckoutBar from "../../Containers/SelectionBox/UI/Checkoutbar/CheckoutBar";
import { SUBMIT_GIFTS } from "../../Store/actionsTypes";
import gifts from "../../JSON/gifts";

class Step2 extends Component {
    state = {
        Gifts: [],
        selectOpt: [
            {
                name: "A-Z",
                value: "A-Z",
            },
            {
                name: "Z-A",
                value: "Z-A",
            },
            {
                name: "Low - High Price",
                value: "lowToHigh",
            },
            {
                name: "High - Low Price",
                value: "highToLow",
            },
        ],
        totalPrice: 0,
        selectedGifts: [],
    };

    componentDidMount() {
        this.setState(
            state => {
                return {
                    Gifts: gifts,
                    totalPrice: this.props?.totalPrice,
                    selectedGifts: this.props?.selectedGifts
                }
            }
        )
    }

    selectOptHandler = (e) => {

        const opt = e.target.value;
        switch (opt) {
            case "A-Z":
                const imagesSortedAZ = this.state.Gifts;
                imagesSortedAZ.sort((a, b) => {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (b.name > a.name) {
                        return -1;
                    }
                    return 0;
                });
                this.setState({
                    ...this.state,
                    images: imagesSortedAZ,
                });
                break;
            case "Z-A":
                const imagesSortedZA = this.state.Gifts;
                imagesSortedZA.sort((a, b) => {
                    if (a.name > b.name) {
                        return -1;
                    }
                    if (b.name > a.name) {
                        return 1;
                    }
                    return 0;
                });
                this.setState({
                    ...this.state,
                    images: imagesSortedZA,
                });
                break;
            case "lowToHigh":
                const imagesSortedLH = this.state.Gifts;
                imagesSortedLH.sort((a, b) => {
                    if (a.price > b.price) {
                        return 1;
                    }
                    if (b.price > a.price) {
                        return -1;
                    }
                    return 0;
                });
                this.setState({
                    ...this.state,
                    images: imagesSortedLH,
                });
                break;
            case "highToLow":
                const imagesSortedHL = this.state.Gifts;
                imagesSortedHL.sort((a, b) => {
                    if (a.price > b.price) {
                        return -1;
                    }
                    if (b.price > a.price) {
                        return 1;
                    }
                    return 0;
                });
                this.setState({
                    ...this.state,
                    images: imagesSortedHL,
                });
                break;

            default:
                break;
        }
    };

    onSelectHandler = (id) => {
        const selectedGift = this.state.Gifts.find((image) => image.id === id);


        selectedGift.quantity += 1;

        this.setState((state) => {
            return {
                selectedGifts: state.selectedGifts.concat(selectedGift),
                totalPrice: state.totalPrice + selectedGift.price,
            };
        });
    };

    onAddGiftHandler = (id) => {
        const selectedGiftIndex = this.state.selectedGifts.findIndex(
            (image) => image.id === id
        );
        const selectedGift = this.state.selectedGifts.find(
            (image) => image.id === id
        );


        selectedGift.quantity += 1;

        this.setState((state) => {
            const cloneState = state.selectedGifts;
            cloneState.splice(selectedGiftIndex, 1, selectedGift);

            return {
                selectedGifts: cloneState,
                totalPrice: state.totalPrice + selectedGift.price,
            };
        });
    };

    onRemoveGiftHandler = (id) => {
        const selectedGiftIndex = this.state.Gifts.findIndex(
            (image) => image.id === id
        );
        const selectedGift = this.state.Gifts.find((image) => image.id === id);


        if (selectedGift.quantity === 1) {
            selectedGift.quantity -= 1;
            this.setState((state) => {
                const cloneState = state.selectedGifts;
                cloneState.splice(selectedGiftIndex, 1);
                return {
                    selectedGifts: cloneState,
                    totalPrice: state.totalPrice - selectedGift.price,
                };
            });
        } else {
            selectedGift.quantity -= 1;
            this.setState((state) => {
                const cloneState = state.selectedGifts;
                cloneState.splice(selectedGiftIndex, 1, selectedGift);
                return {
                    selectedGifts: cloneState,
                    totalPrice: state.totalPrice - selectedGift.price,
                };
            });
        }
    };

    // removeGift = (id) =>{
    //     console.log(id);
    //     const gift = this.state.selectedGifts.find((gift) => gift.id === id);
    //     const giftIndex = this.state.selectedGifts.findIndex(
    //         (gift) => gift.id === id
    //     );

    //     this.setState(state =>{
    //         debugger;
    //          const cloneState = state.selectedGifts;
    //          cloneState.splice(giftIndex, 1);
    //         return {
    //             selectedGifts: cloneState,
    //             totalPrice: state.totalPrice - (gift.price * gift.quantity),
    //         };
    //     })

    // }

    submitHandler = () => {

        this.props.onsubmit(this.state.totalPrice, this.state.selectedGifts);
        this.props.history.push('/personalize');
    }

    render() {
        return (
            <div className="container">
                <SelectionBoxHeader
                    stepSummury="step 2 of 4"
                    head="CHOOSE YOUR GIFT"
                    body="Choose a Packaging that speaks to your loved one's style!"
                />

                <Select
                    selected={this.selectOptHandler}
                    selectOpt={this.state.selectOpt}
                />
                <div className="row">
                    {this.state.Gifts.map((ele) => (
                        <ImageCardGift
                            width="70%"
                            name={ele.name}
                            id={ele.id}
                            key={ele.id}
                            src={ele.url}
                            price={ele.price}
                            quantity={ele.quantity}
                            selected={this.onSelectHandler}
                            incrementGift={this.onAddGiftHandler}
                            decrementGift={this.onRemoveGiftHandler}
                        />
                    ))}
                </div>
                {this.state.selectedGifts.length > 0 && (
                    <CheckoutBar
                        selectedGifts={this.state.selectedGifts}
                        totalPrice={this.state.totalPrice}
                        checkOut={this.submitHandler}
                    />
                )}
            </div>
        );
    }
}

const stateToProps = (state) => {
    return {
        selectedGifts: state.selectedGifts,
        selected: state.selectedBox,
        totalPrice: state.totalPrice
    };
};

const dispatchToprops = dispatch => {
    return {
        onsubmit: (totalPrice, selectedGifts) =>
            dispatch({ type: SUBMIT_GIFTS, selectedGifts: selectedGifts, totalPrice: totalPrice }),
    };
}

export default connect(stateToProps, dispatchToprops)(Step2);
