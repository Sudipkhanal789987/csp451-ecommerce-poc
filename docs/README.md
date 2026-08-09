# CSP451 Serverless E-Commerce API Proof of Concept

## Project Overview

This project demonstrates a serverless e-commerce order processing solution built using Microsoft Azure services.

The proof of concept allows an order request to be submitted through an HTTP API and demonstrates how Azure services can be used for API management, order processing, product data storage, messaging, and customer notifications.

## Azure Services Used

- Azure Functions
- Azure API Management
- Azure Cosmos DB for NoSQL
- Azure Service Bus
- Azure Logic Apps
- Office 365 Outlook Connector

## Architecture

The solution uses the following components:

1. **Azure API Management** provides the API gateway.
2. **Azure Function – CreateOrder** processes incoming order requests.
3. **Azure Cosmos DB** provides storage for product information.
4. **Azure Service Bus** provides an `orders` queue for asynchronous messaging.
5. **Azure Logic Apps** provides the order confirmation workflow.
6. **Office 365 Outlook** is used to send the confirmation email.

## CreateOrder API

The CreateOrder function accepts order information such as:

- Product
- Quantity

The function validates the request, generates an Order ID, and returns the order information with a Processing status.

Example response:

{
  "message": "Order received successfully.",
  "orderId": "ORD-12345",
  "product": "Laptop",
  "quantity": 2,
  "status": "Processing"
}

## Testing

The proof of concept was tested using Azure Portal.

Testing confirmed:

- CreateOrder Function returns HTTP 200.
- API Management successfully exposes the CreateOrder operation.
- Cosmos DB contains the Products container.
- Service Bus accepts messages in the orders queue.
- Logic App workflow successfully executes.
- Order confirmation email is successfully delivered.

## Future Improvements

Future development could integrate all components into a fully automated end-to-end workflow, including direct Cosmos DB access from the Function, automatic Service Bus message creation, queue-triggered processing, monitoring, retries, managed identities, and CI/CD.
