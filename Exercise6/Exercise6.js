// Question 1

$(document).ready(function(){
	console.log("Hello Word");
});

// Question 2
$('#test').addClass('load');

// Question 3
$('[class$=new]').css('color', 'red');

//Question 4
$('.button').attr('disabled',true);

//Question 5
$('#main > .target').css('font-size','25px')

//Question 6
$('#ques6').replaceWith("<p>" + $('#ques6').html());

//Question 7
$('#clik').click(function(){
	$('div > .clk').append("<br><b>Append Next</b>");
});

//Question 8
$('#on').on('click','li',function(){
	$(this).parent().append($('<li>Item</li>'));
});

//Question 9
$('select').on('change',function(){
	$('select :selected').clone().appendTo('#divid');
});

//Question 10


// Question 11
$("#link").click(function(e){
	e.preventDefault();
});


// Question 12

$('#q12').click(function(event){
	event.preventDefault();
})


// Question 13
$('#but').click(function(){
	var max=-1;
	$('ul').each(function(){
		var h = $(this).height();
		max =h>max?h:max;
		alert("Height is : " + max)
	});
});



// Question 14
$('.buttonColor').click(function(){
	$('td').each(function(index, element){
		var value1 = Number($(this).html());
		if (value1>10){
			$(element).css('background-color','hotpink');
		};
	});
});



// Question 15
$('#button1').on('click', function(){
	$.ajax({
		url: "demo.json", dataType:'json', success:function(result){
			console.log(result)
		}
	})
});
// Question 16
// Question 17
$('#animate').on('click', function(){
	$('div .c17').animate({left:"200px"})
})


