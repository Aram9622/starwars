import React from 'react'
import './404.css'
function Error404() {
    return (
        <div className="error404">
            <h1 className="error-title">This Page Not Found!</h1>
            <span className="or">Or</span>
            <span className="error-desc">Check Your Connection</span>
        </div>
    )
}

export default Error404
