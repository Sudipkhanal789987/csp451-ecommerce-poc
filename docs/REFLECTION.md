# CSP451 Project Reflection

## What I Learned

This project helped me understand how multiple Microsoft Azure services can work together to support a serverless application.

I learned how Azure Functions can be used to process HTTP requests without managing a traditional server. I also learned how API Management can expose and manage an Azure Function as an API.

Using Azure Cosmos DB helped me understand how a NoSQL database can store application data such as product information. Azure Service Bus demonstrated how queues can be used for asynchronous communication between different parts of an application.

I also learned how Azure Logic Apps can automate workflows. In this project, I created a workflow that receives an HTTP request and sends an order confirmation email using the Office 365 Outlook connector.

## Challenges

One challenge was configuring and connecting several Azure services correctly. Each Azure service has different settings, and understanding which options were appropriate for the proof of concept required careful testing.

Another challenge was testing the dynamic values in the Logic App. I had to make sure that values such as order ID, product, and quantity were correctly passed from the HTTP request.

I also experienced restrictions with Cost Management because the Azure subscription is managed by the college. Because of this, I could not access the complete billing information directly and used estimated costs for the cost analysis.

## What Worked Well

The CreateOrder Azure Function successfully processed test requests and returned an HTTP 200 response.

API Management successfully exposed the CreateOrder operation, and the API test returned the expected order information.

The Service Bus orders queue successfully accepted a test order message.

The Logic App also ran successfully and sent an order confirmation email.

## Future Improvements

If I continued developing this project, I would connect the Azure Function directly to Cosmos DB and Service Bus so that product validation and message creation happen automatically.

I would also configure the Logic App or another Function to process Service Bus messages automatically. Other improvements would include managed identities, stronger security, application monitoring, retry handling, automated deployment using CI/CD, and cost alerts.

## Conclusion

This project gave me practical experience with serverless architecture and cloud integration in Microsoft Azure. It helped me understand how Functions, API Management, Cosmos DB, Service Bus, and Logic Apps can be combined to create a scalable e-commerce solution.
