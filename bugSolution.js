function foo(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Handle non-numeric values
  }
  if (a === null || b === null) {
    return null; // Handle null values
  }
  return a + b; // Perform addition only if both inputs are numbers
}
