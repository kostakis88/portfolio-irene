exports.handler = async (event) => {
    // Only allow POST requests
    if (event.httpMethod !== "POST") {
      return {
        statusCode: 405, // Method Not Allowed
        body: JSON.stringify({ message: "Method Not Allowed" }),
      };
    }
  
    try {
      // Parse the password from the request body
      const { password } = JSON.parse(event.body);
  
      // Retrieve the valid password from environment variables
      const VALID_PASSWORD = process.env.PASSWORD;
  
      // Validate the password
      if (password === VALID_PASSWORD) {
        return {
          statusCode: 200, // OK
          body: JSON.stringify({ authenticated: true }),
        };
      } else {
        return {
          statusCode: 401, // Unauthorized
          body: JSON.stringify({ authenticated: false }),
        };
      }
    } catch (error) {
      console.error("Error processing the request:", error);
  
      // Return a server error response
      return {
        statusCode: 500, // Internal Server Error
        body: JSON.stringify({ message: "Internal Server Error" }),
      };
    }
  };
  