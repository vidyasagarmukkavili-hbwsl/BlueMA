// Here we are creating an alias for the Magento_Ui form element path
// 'DataMage': 'js/requirejs-datamage'

var config = {

    paths: {
        
        'DataMage': 'Vidya_sagar_mukkavili_MageJsScript/js/requirejs-datamage',
        'jsScript': 'Vidya_sagar_mukkavili_MageJsScript/js/requirejs-someJavascript'
    
    },
    mixins: {
        'Magento_Checkout/js/checkout-data': {
            'Vidya_sagar_mukkavili_MageJsScript/js/mixin-checkout-data':true
        }
    },
    deps: ['Vidya_sagar_mukkavili_MageJsScript/js/log-when-loaded']
};