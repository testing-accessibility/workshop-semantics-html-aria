import React from "react"
import { Router } from "@reach/router"
import "./global-styles/variables.scss"
import "./global-styles/styles.scss"
import Header from "components/header"
import HomePage from "components/page-home"
import AboutPage from "components/page-about"
import ListingsPage from "components/page-listings"
import Listing from "components/page-listing-detail"
import SemanticsExercise from "./exercise1-headings-landmarks/page-listing-detail"
import ARIAExercise from "./exercise2-what-is-aria/page-listing-detail"
import A11yNamingExercise from "./exercise3-accessible-names/page-listing-detail"
import A11yNamingExerciseListings from "./exercise3-accessible-names/page-listings"
import ProgrammaticA11yExercise from "./exercise4-programmatic-a11y-info/page-listing-detail"

import imgFooterLogo from "images/icons/footer-logo.svg"

export function App() {
	return <>
		<Header />
		<main id="main">
			<Router>
				<HomePage path="/" />
				<AboutPage path="/about" />
				<ListingsPage path="/listings" />
				<Listing path="/listing/:id" />
				<SemanticsExercise path="/exercise1/:id" />
				<ARIAExercise path="/exercise2/:id" />
				<A11yNamingExercise path="/exercise3/:id" />
				<A11yNamingExerciseListings path="/exercise3/listings" />
				<ProgrammaticA11yExercise path="/exercise4/:id" />
			</Router>
		</main>
		<footer id="footer">
			<div className="layout">
				<div id="footer-logo">
					<img src={imgFooterLogo} alt="CampSpots" />
				</div>
			</div>
		</footer>
	</>
}
