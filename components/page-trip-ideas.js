import React, { useRef, useState } from "react"
import BodyClassName from "react-body-classname"
import {Helmet} from "react-helmet"

import HeaderPortal from "components/header-portal"
import { useMainHeading } from "./main-heading-context"

const TripIdeasPage = () => {
    useMainHeading('Trip Ideas')
    return (
        <BodyClassName className="page-plans">
            <section>
                <header className="page-header">
                    <div className="page-header-content layout">
                        <h2 className="primary-heading h1-style">Trip Ideas</h2>
                    </div>
                </header>
                <article className="layout">
                    
                </article>
            </section>
        </BodyClassName>
    )
}

export default TripIdeasPage