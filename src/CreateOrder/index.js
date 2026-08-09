module.exports = async function (context, req) {
    const order = req.body;

    if (!order || !order.product || !order.quantity) {
        context.res = {
            status: 400,
            body: {
                message: "Please provide product and quantity."
            }
        };
        return;
    }

    const orderId = "ORD-" + Date.now();

    context.res = {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        },
        body: {
            message: "Order received successfully.",
            orderId: orderId,
            product: order.product,
            quantity: order.quantity,
            status: "Processing"
        }
    };
};
