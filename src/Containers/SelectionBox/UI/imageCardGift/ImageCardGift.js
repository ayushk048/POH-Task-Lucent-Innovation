import React from 'react'

const imageCardGift = (props) => {
    return (
        <div className="col-md-4 " style={{ border: "1px solid gray" }}>
            <img
                src={props.src}
                style={{ width: props.width }}
                alt={props.name}
                onClick={() => props.selected(props.id)}
            />
            {
                props.quantity > 0 ?

                    <div className="d-flex justify-content-between">
                        <button className="btn btn-sm" onClick={() => props.incrementGift(props.id)}>
                            +
                </button>
                        <p>{props.quantity} in Box</p>
                        <button className="btn btn-sm" onClick={() => props.decrementGift(props.id)}>
                            -
                </button>
                    </div> :
                    <button
                        className="btn btn-dark btn-block text-light"
                        onClick={() => props.selected(props.id)}
                    >
                        Add
            </button>
            }
            <p style={{ textAlign: "start", marginBottom: "0", fontWeight: "bold", color: "blue" }} onClick={() => props.selected(props.id)}>{props.name}</p>
            <p style={{ textAlign: "start", color: "red" }} onClick={() => props.selected(props.id)}>&#8377;    {props.price}</p>
        </div>
    );
}

export default imageCardGift
