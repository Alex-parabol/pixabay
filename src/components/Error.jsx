import React from 'react'

export default function Error({mensaje}) {
    return (
        <p className="my-3 p-4 text-center alert alert-primary">{mensaje}</p>
    )
}
