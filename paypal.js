paypal.Buttons({
    createOrder: function(data, actions){
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: '10.0'
                }
            }]
        });
    },
    onApprove: function(data, actions){
        return action.error.capture().then(function(details){
         alert('transaction complete by ' + details.payer.name.given_name);   
        });
    }
}).render('#paypal-button-container');