import React from "react";

const CheckoutBar = ({ totalPrice, selectedGifts, checkOut }) => {
    console.log(selectedGifts);
    return (
        <div className="fixed-bottom bg-primary p-4 d-flex justify-content-between">
            <div>
                {selectedGifts.map((selectGift) => (
                    // <div
                    //     key={selectGift.id}
                    //     style={{
                    //         overflow: "visible",
                    //         position: "relative",
                    //     }}
                    // >
                    //     <button
                    //         onClick={() => removeGift(selectGift.id)}
                    //         style={{
                    //             position: "absolute",
                    //             background: "gray",
                    //             color: "white",
                    //             top: "-10px",
                    //             borderRadius: "50%",
                    //             right: "5px",
                    //         }}
                    //     >
                    //         x
                    //     </button>
                    <img
                        key={selectGift.id}
                        style={{ width: "100px" }}
                        src={selectGift.url}
                        className="pr-3"
                        alt={selectGift.name}
                    ></img>
                    // </div>
                ))}
            </div>

            <button className="btn btn-dark btn-lg text-light " onClick={checkOut}>
                total price <br />
                 &#8377;{totalPrice}
            </button>
        </div>
    );
};

export default CheckoutBar;
