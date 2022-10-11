define(
[],
function(){
'use strict'

    return function (checkoutData){
        const orig = checkoutData.getSelectedShippingAddress;


        checkoutData.getSelectedShippingAddress = function(){
            // return getData().selectedShippingAddress;
            const address = orig.bind(checkoutData)();
            console.log('Mixin is now working and overriding the functionality of getSelectedShippingAddress', address);
            return address;
        };
            // ^ Here the overriding of the getSelectedShippingAddress is happening for the checkoutData object instance


        return checkoutData;
    }

}

);




// getSelectedShippingAddress: function () {
//     return getData().selectedShippingAddress;
// },