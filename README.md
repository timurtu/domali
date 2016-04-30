# Alias Library for the DOM API

Domali's goal is to provide a JavaScript DOM API that is less verbose and
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

- Domali checks if elements and properties exist before accessing and mutating
them. This means that using domali, you'll never need to call `hasChildNode()`
or `elem.classList.contains('class-name')` again.
