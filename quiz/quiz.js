

$("h1").hide("slow");
$("h1").show("slow");
$("h1").fadeOut(1000);
$("h1").fadeIn(1000);
$("h1").fadeToggle(1000);
$("h1").fadeToggle(1000);
$("h1").fadeTo(1000,.8);
window.setInterval(setanime,1000);
function setanime(){
	$("button").animate( {opacity:0.25}, 1000,
	 function(){
		$(this).css('opacity',1)
	});
}


window.setInterval(set_h2,1000);
function set_h2(){
	$("h2").fadeOut(1000);
	$("h2").fadeIn(1000);
}


window.setInterval(setanime,1000);
function setanime(){
	$("button").animate( {opacity:0.25}, 1000,
	 function(){
		$(this).css('opacity',1)
	});
}

function sub(){

	var n=$("input[name=uname]").val();
	var p=$("input[name=pass]").val();
	var c=$("input[name=con]").val();
	var a=$("input[name=age]").val();
	if(n==null || n=="")
	{
	alert(" ENTER USER NAME ");
	$("input[name=uname]").focus();
	}
	else
	if(p==null || p=="")
	{
	alert(" ENTER PASSWORD ");
	$("input[name=pass]").focus();
	}
	else
	if(c==null || c=="")
	{
	alert(" ENTER CONFIRM PASSWORD ");
	$("input[name=con]").focus();
	}
	else
	if(p!=c)
	{
	alert("PASSWORD MISMATCH");
	}
	else
	if(isNaN(a))
	{
	alert(" NOT A VALID NUMBER ");
	$("input[name=age]").focus();
	}
	else{






	var s=0

	var a=[9,30,1,300,0,5]
	for (var i=0;i<6;i++){
		var z= "input[name=\'"+"ans"+(i+1)+"\']:checked";
		var x= $(z).val();
		if (x==a[i]){
			s=s+50
			$(z).next().css('background-color','green')
		}
		else{
			$(z).next().css('background-color','red')
		}
	}
	alert(s+" Out of 300")
}}