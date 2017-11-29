jQuery(document).ready(function () {
	$('#save_btn').click(function(){
		if(!$('#url_field').val()){
			$('#url_field').focus();
			return false;
		}
		if(!$('#id_field').val()){
			$('#id_field').focus();
			return false;
		}
	});	
});
 
