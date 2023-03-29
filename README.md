# serverlessFunctions
This project to solely to host serverless functions via netlify's free hosting built on the AWS Lambda serverless functions.

## Mortgage Calculator
The first serverless function is the mortgage calculator function. It takes in numerous parameters including the cost of the house, the loan percentage of house cost, the loan interest rate, property tax percentage, and some other smaller possible expenses. It then uses the mortgage calculation formula to find the monthly payments accounting for all input parameters for a ten year, fifteen year, and thirty year mortgage and returns it to the front end to see if any of the mortgages match the input criteria on the front end.
