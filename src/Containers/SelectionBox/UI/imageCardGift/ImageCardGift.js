import React from 'react'

const imageCardGift = (props) => {
    return (




        <div className="card col-md-4    " style={{ width: '5rem' }} >
            <img className="card-img-top" src={props.src} alt={props.name} />
            <div class="card-img-overlay ">

                {
                    props.quantity > 0 ?

                        <div className="d-flex justify-content-between ">
                            <button className="btn btn-sm" onClick={() => props.incrementGift(props.id)}>
                                +
                </button>
                            <p>{props.quantity} in Box</p>
                            <button className="btn btn-sm" onClick={() => props.decrementGift(props.id)}>
                                -
                </button>
                        </div> :
                        <button
                            className="btn btn-dark btn-block text-light  "
                            onClick={() => props.selected(props.id)}
                        >
                            Add
            </button>
                }
            </div>
            <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted">{props.name}</h6>
                <p className="card-text">&#8377; {props.price}</p>
            </div>

        </div>






    );
}

export default imageCardGift

