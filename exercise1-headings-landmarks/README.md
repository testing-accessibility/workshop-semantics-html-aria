# Headings and Landmarks

Headings and semantic structure are a foundational part of accessible web pages.
By building an accessible structure into your pages from the start, you can bake
accessibility into your markup and even your stylesheets.

Use native HTML first, since it gives you more functionality for free. For example,
start with a native `<h1>`, `<main>`, or `<ul>` element to get the best baseline
of support in browsers and assistive technologies.

## Exercise: Update the listing detail page template with semantics and heading structure

Using the files in `exercise1-headings-landmarks`
as a reference, adjust the markup in the Listings Page and Listing Detail template
in `components` using semantic landmarks and headings.

The application has dynamic routing set up for each of the campgrounds listed in
`data/listings.json`. You can get to the campground listings from "Plan Your Trip >
Find a Camping Spot" in the main navigation, and the individual listing details from there.

Visit the before and after pages by URL:

- http://localhost:1234/listings
- http://localhost:1234/exercise1/listings
- http://localhost:1234/listing/listing-cranberry-lake
- http://localhost:1234/exercise1/listing-cranberry-lake

URL to view deployed versions for this exercise:

- https://workshop-semantics-html-aria.testingaccessibility.com/exercise1/listings
- https://workshop-semantics-html-aria.testingaccessibility.com/exercise1/listing-cranberry-lake
