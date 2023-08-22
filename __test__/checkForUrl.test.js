// Import the js file to test
import { checkForUrl } from "../src/client/js/urlChecker";

// The describe() function takes two arguments - a string description, and a test suite as a callback function.
// A test suite may contain one or more related tests
describe("Testing the checkForUrl function", () => {
  // The test() function has two arguments - a string description, and an actual test as a callback function.
  test("Testing the checkForUrl() function", () => {
    // Define the input for the function
    const validUrl = "https://www.udacity.com";

    // Define the expected output
    const expectedValidResponse = "Thank you for the URL";

    // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
    expect(checkForUrl(validUrl)).toEqual(expectedValidResponse);
  });
});
