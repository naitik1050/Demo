import React from 'react'
import { Spinner } from 'react-bootstrap'

export function Button({
    loader,
    label,
    onClick
}) {
    return (
        <div className="col-lg-12">
            <button
                className="btn btn-primary rounded-md w-100"
                type="submit"
                onClick={(e) => onClick(e)}>
                {loader ?
                    <Spinner
                        animation="border"
                        size='sm'
                        style={{ margin: '3px' }} />
                    :
                    label
                }
            </button>
        </div>
    )
}
