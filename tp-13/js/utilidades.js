var myPhone = (function(){

	$("button").click(function(){
	    var clicked = $(this).val();
	    var animated = document.createElement("span");

	    animated.append(clicked);

	    $("#display").append(animated);

	    $(animated).fadeOut(8000,function(){
	    	$(animated).delay(800).detach();;
	    });   
	});

	$(".llamar").click(function(){
		$(".llamar").css("background-color", "green");

	});
	$(".colgar").click(function(){
		$(".colgar").css("background-color", "red");
	});
	$(".guardarNro").click(function(){
		if($(".guardarNro").css("background-color", "blue")){
			$(".modal").show(function(){
				$("#mymodal").empty();
				$("#mymodal").append($("#modalcito"));
				$(".modal").slideUp("slow").css("display", "block");
			});
		}else{
			$(".modal").hide();
		}
	});

})();