// Verify email alert
// alert("Thank you for signing up!  Please check your email to activate your account.");
//mobile DOM loader ($) mobile method
var parseSignupForm = function (data) {
	// uses form data here;
	console.log(data); 
};

$('#info').live('pageinit', function(){
	var rbform = $('#regform');
	var	rberrorslink = $('#rberrorslink');
	rbform.validate({
		invalidHandler: function(form, validator){
			rberrorslink.click();
			var html = '';
			for(var key in validator.submitted){
				var label = $('label[for^="' + key +'"]').not('[generated]');
				var legend = label.closest('fieldset').find('.ui-controlgroup-label');
				var fieldname = legend.length ? legend.text() : label.text();
				html += '<li>' + fieldname + '</li>';
			};
			$("#signuperrors ul").html(html);
		},
		submitHandler: function(){
			var data = rbform.serializeArray();
			console.log(data);
			storeData(data);
			$.mobile.changePage($('#account'));
		}
	});
	
	var storeData = function (myData) {
		localStorage.setItem('signup_data', myData);
		alert("Data has been saved!");
	];

});