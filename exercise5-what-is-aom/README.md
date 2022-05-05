# What is the Accessibility Object Model (aom)?

Just as we have the Document Object Model (DOM) and CSS Object Model (CSSOM), we also have the experimental Accessibility Object Model. Learn how to inspect a component and when the AOM will come in handy.

The AOM is a potential set of APIs in development in the Web Incubator Community Group (WICG). The
intent is to standardize approaches for getting and setting accessibility information with JavaScript
as opposed to the current approach of applying accessibility information with HTML and ARIA. Browser
makers use these community-grown standards approaches to inform what they build into their technologies. The AOM repo can be found here: https://github.com/WICG/aom

As developers and technologists, it's helpful to know what is being discussed and on the horizon.
It should also be understood that AOM is an experimental, future technology currently with limited use.

View what can currently be used in Chrome, Firefox, or Safari:
https://github.com/WICG/aom/blob/gh-pages/caniuse.md

Some proposals are blocked by questions surrounding architectural features that allow detectability of Assistive Tech, such as virtual nodes for custom `<canvas>` accessibility and a cross-browser accessibility tree and associated JavaScript APIs. Here's an open issue to follow: https://github.com/w3ctag/design-principles/issues/293

## Enabling AOM in Chrome

For web platform related features: Browse to `chrome://flags`, enable `enable-experimental-web-platform-features`.

## Enabling AOM in Firefox

`about:config accessibility.AOM.enabled = true`
`about:config accessibility.ARIAReflection.enabled = true`

## Usage

In a supporting browser, inspect accessibility information using the JavaScript console:

```javascript
const element = document.querySelector('.some-icon-button')
element.role
element.ariaLabel
```

Set attributes to override the page markup and see how it is reflected in the DOM:

```javascript
element.role = 'button'
console.log(element.role)
```

## Exercise: Play with ariaCurrent property vs. attribute for site navigation

In the `header.js` and `meganav/subnav-link-group.js` components, experiment with adding aria-current
in two ways using `document.location.pathname`.

- Add the `ariaCurrent` property to mark the logo link as current when matching. This will require
using a React ref and React.useEffect.
- Add the `aria-current` attribute to subnav links when they match

You can compare the "before" versions of `header.js` and `meganav/subnav-link-group.js` with the
versions in this directory.
