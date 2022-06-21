import React from 'react'

export default function CardView({
    label,
    type,
    typeColor,
    tokenBalance,
    feesLabel,
    feesExtraLabel,
    work,
    client,
    creatorProfileClick,
    tokenTextClick,
    buyLQDA
}) {
    return (

        <div className="col-lg-3 col-md-4 order- order-md-1 mt-4 pt-2 mt-sm-0 pt-sm-0">
            <div className="card creators creator-primary rounded-md shadow overflow-hidden sticky-bar">
                <div
                    className="py-5"
                    style={{ background: `url(${work})` }}
                ></div>
                <div className="position-relative mt-n5">
                    <img
                        src={client}
                        className="avatar avatar-md-md rounded-pill shadow-sm bg-light img-thumbnail mx-auto d-block"
                        alt="" />
                    <div className="content text-center pt-2 p-4">
                        <h2 className="mb-0">{label}</h2>
                        <h4 className="mb-0"> <h4 style={{ color: typeColor }}>{type}</h4></h4>
                        <ul className="list-unstyled mb-0 mt-3" id="navmenu-nav">
                            <li className="px-0">
                                <a
                                    href="/creator-profile"
                                    onClick={e => { creatorProfileClick(e) }}
                                    className="d-flex align-items-center text-dark"
                                >
                                    <span className="fs-6 mb-0">
                                    </span>
                                </a>
                            </li>
                            <li className="px-0 mt-2">
                                <a
                                    href="/creator-profile-edit"
                                    onClick={e => { tokenTextClick(e) }}
                                    className="d-flex align-items-center text-dark"
                                >
                                    <span className="fs-6 mb-0">
                                    </span>
                                    <small className="d-block fw-semibold mb-0 ms-2">
                                        <h4 style={{ textAlign: "center" }}>{tokenBalance} LQDA Required</h4>
                                        {feesExtraLabel && <h5 style={{ textAlign: "center" }}>{feesExtraLabel}</h5>}
                                        <h5 style={{ textAlign: "center" }}>{feesLabel}</h5>
                                    </small>
                                </a>
                            </li>
                        </ul>
                        <div className="mt-4 pt-2">
                            <a
                                href="/aboutus"
                                onClick={e => { buyLQDA(e) }}
                                className="btn btn-pills btn-outline-light-white"
                            >
                                Buy LQDA
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}
