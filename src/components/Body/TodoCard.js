import React from "react";

function TodoCard(props) {

    function additionalHandler() {
        var temp = props.additional.map((item) => {
            let xyz = [];
            for (let obj in item) {
                if (obj != "key") {
                    xyz.push(
                        <div key={Date.now()}
                            className="d-flex flex-column flex-md-row flex-wrap align-items-center justify-content-center flex-container">
                            <h5 className="col-3 p-3">{obj}</h5>
                            <p className="col-8 p-3 align-self-center">{item[obj]}</p>
                        </div>)
                }
            }
            return xyz
        })
        return temp;
    }

    return (
        <div
            className=" px-5 col-8 col-md-5 border border-danger border-1 m-1 p-1 position-relative d-flex flex-column justify-content-between overflow-auto"
            style={{ height: "30rem" }}>
            <div>
                <h1
                    className="text text-center">
                    {props?.serial}. {props?.title}
                </h1>
                <p className="text text-start">
                    {props?.description}
                </p>
                {props?.additional && additionalHandler()}

            </div>
            <div style={{
                bottom: "5px",
                width: "100%"
            }}
                className="d-flex justify-content-center align-items-center">

                <button className="btn btn-danger col-8 col-md-7 mx-auto"
                    onClick={() => { props?.onDelete(props.serial) }}
                >
                    Mark as done
                </button>
            </div>

        </div>
    )
}
TodoCard.defaultProps = {
    serial: "N",
    title: "Title here",
    description: "Description here",
    additional: []
}

export default TodoCard;