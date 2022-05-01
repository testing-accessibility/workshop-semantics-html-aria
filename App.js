import React from "react"
import { Router } from "@reach/router"
import "./global-styles/variables.scss"
import "./global-styles/styles.scss"
import Header from "components/header"
import HomePage from "components/page-home"
import AboutPage from "components/page-about"
import CareersPage from "components/page-careers"
import TripIdeasPage from "components/page-trip-ideas"
import ListingsPage from "components/page-listings"
import Listing from "components/page-listing-detail"
import EventsPage from "components/page-events"
import PassesPage from "components/page-passes"
import SubmitListingPage from "components/page-submit-listing"
import HikesPage from "components/page-adventures-hikes"
import Exercise1ListingsPage from "./exercise1-headings-landmarks/page-listings"
import Exercise1ListingPage from "./exercise1-headings-landmarks/page-listing-detail"
import Exercise2ARIAListingPage from "./exercise2-what-is-aria/page-listing-detail"
import Exercise3NamesListingPage from "./exercise3-accessible-names/page-listing-detail"
import Exercise3NamesListingsPage from "./exercise3-accessible-names/page-listings"
import Exercise4A11yInfoListingPage from "./exercise4-programmatic-a11y-info/page-listing-detail"

import imgFooterLogo from "images/icons/footer-logo.svg"

export function App() {
	return <>
		<Header />
		<div id="main">
			<Router>
				<HomePage path="/" />
				<AboutPage path="/about" />
				<CareersPage path="/careers" />
				<ListingsPage path="/listings" />
				<Listing path="/listing/:id" />
				<SubmitListingPage path="/submit-listing" />
				<EventsPage path="/events" />
				<PassesPage path="/passes" />
				<HikesPage path="/adventures-hikes" />
				<TripIdeasPage path="/trip-ideas" />
				<Exercise1ListingsPage path="/exercise1/listings" />
				<Exercise1ListingPage path="/exercise1/:id" />
				<Exercise2ARIAListingPage path="/exercise2/:id" />
				<Exercise3NamesListingPage path="/exercise3/:id" />
				<Exercise3NamesListingsPage path="/exercise3/listings" />
				<Exercise4A11yInfoListingPage path="/exercise4/:id" />
			</Router>
		</div>
		<div id="footer">
			<div className="layout">
				<div id="footer-logo">
					<img src={imgFooterLogo} alt="CampSpots" />
				</div>
			</div>
		</div>
	</>
}
