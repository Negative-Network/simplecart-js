$(document).ready(function(){
    var setdiscount = function(data) {

	if (data=="0" || data=='') {
	    console.log("Wrong Code");
	}
	else {
	    var val = JSON.parse(data);

	    if (val.type=='') {
		console.log("Wrong Code");
	    }
	    else {
		if (val.type == 'percentage'){
		    simpleCart.discountType('percentage');
		}
		else{
		    simpleCart.discountType('amount');
		}
		simpleCart.discount(val.value);
	    }

	}
	console.log("Total discount is " + simpleCart.discountTotal()); //use the data to manipulate the page or other variables
	return data; //the return here won't be utilized
    }

    function getdiscount(code){
	simpleCart.custom(code);
	jQuery.post("discount.php", { code: code } , setdiscount);
    }

    $("#promoSub").click(function Discount() {
	getdiscount(jQuery('#code').val());
    });

    simpleCart.bind( 'update' , function(){
	if (simpleCart.discount() != '' && simpleCart.discount() != 0){
	    if (simpleCart.discountType() == 'percentage'){
		discount = simpleCart.discount()+'%';
	    }
	    else{
		discount = simpleCart.discount()+'€';
	    }
	    $('#discount').html("<div class='discount_sum'>Discount: "+discount+"</div>"+"<div class='discount_total'>Discount Total: -"+simpleCart.discountTotal()+'€</div>');
	}
    });
});
