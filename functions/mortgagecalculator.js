exports.handler = async function(event, context) {
    const {amount, percentage, interest, propertyTax, homeAssoc, PMI, homeIns} = event.queryStringParameters;
    const P = amount - amount * (percentage / 100);
    const i = interest / 1200;
    const tax = propertyTax || 0.01;
    const hoa = homeAssoc || 0;
    const pmi = PMI || 0;
    const insurance = homeIns || 1500;
    // I will validate that these values exist on the form on the front end so no validation is necessary on the backend
    const m10 = P * (i * (1 + i) ** 120) / ((1 + i) ** 120 - 1) + (amount * tax + hoa + pmi + insurance) / 12;
    const m15 = P * (i * (1 + i) ** 180) / ((1 + i) ** 180 - 1) + (amount * tax + hoa + pmi + insurance) / 12;
    const m30 = P * (i * (1 + i) ** 360) / ((1 + i) ** 360 - 1) + (amount * tax + hoa + pmi + insurance) / 12;
    return {
        statusCode: 200,
        body: JSON.stringify({ tenYear: Math.round(m10), fifteenYear: Math.round(m15), thirtyYear: Math.round(m30), }),
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Authorization, Content-Type"
        }
    }
}
