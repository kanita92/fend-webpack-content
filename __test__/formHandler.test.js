// Import the callServer function
import { callServer } from "../src/client/js/formHandler";

// Mock the fetch function for testing purposes
global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve({ message: "API response" }) })
);

describe("callServer function", () => {
  test("should call the server with the correct URL", async () => {
    const formText = "https://www.udacity.com";

    // Call the callServer function
    const response = await callServer(formText);

    // Assertion 1
    expect(fetch).toHaveBeenCalledWith(
      `http://localhost:8081/test?url=${formText}`
    );
    // Assertion 2
    expect(response.message).toBe("API response");
  });
});
