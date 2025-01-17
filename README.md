# Unhandled TypeError in JavaScript Addition Function

This repository demonstrates a common JavaScript error: a TypeError that can occur during arithmetic operations if input types are not carefully validated. The `foo` function adds two values.  The existing code only handles `null` values. If either input is not a number (other than `null`), a TypeError is thrown. The solution demonstrates how to prevent this error by using `typeof` to check if the inputs are numbers before performing the addition.

## Bug

The provided JavaScript function `foo` does not handle cases where the inputs `a` and `b` are not numbers.  While `null` checks are in place, other non-numeric types will cause a runtime error.

## Solution

The improved version of `foo` explicitly checks if the inputs are numbers using `typeof`. If they aren't, it returns `NaN` (Not a Number), offering a more robust way to handle unexpected data types.
