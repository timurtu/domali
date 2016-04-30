# Alias Library for the DOM API

The goal of domali is to provide a JavaScript DOM API that is less verbose and
more readable, while keeping the core functionality intact. You can use
all of the native JavaScript DOM functions and objects with domali.

### Read the [Documentation](docs/api.md)

## Problem Statement
- No matter how
[well documented](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
it is, many parts of the JavaScript DOM API are verbose, and will have you
writing the same code more than once.

- Using JavaScript DOM manipulation libraries like jQuery make your code
leaner, but also force you to conform to them, taking away your control
over the native DOM API.

## Features

- Using domali, you'll never need to call `elem.classList.contains('class-name')`
or `node.hasChildNode()` again because domali checks to see if
elements and properties exist before accessing and mutating them.
