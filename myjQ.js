btnExist = true;

// $('*').keypress(function(){

// })

table = document.getElementById("myTable");
$('#btn1').click(function(){
	if(btnExist===true){
	
   // var row = table.insertRow(1);	
   // var cell1 = row.insertCell(0);

var rowAdd = '<tr><td><form><input type="text" id="input1" onkeypress="myFunction(event)"></form></td></tr>'
$(rowAdd).appendTo('thead');
  // cell1.innerHTML = '<form><input type="text" name="" id="input1" onkeypress="myFunction(event)"></form>';

btnExist=false;
}
else{
	  table.deleteRow(1);
	btnExist=true;
}
})

function myFunction(event) {
  var x =event.keyCode;
  if(x==13){
  	var xxx = $('#input1').val();
  	var toBeAdded = '<tr><td>' + xxx + '</td><td id="noBorder"><center><i class="fas fa-times"></i></center></td></tr>'
  	$('#myTable').append(toBeAdded);

    $('.fa-times').click(function(){
  console.log('clicked');
console.log($(this).parent().parent());
$(this).parent().parent().parent().remove();
})

$('td').click(function(){
  $(this).css("text-decoration","line-through");
})

btnExist=true;
table.deleteRow(1);
 	
  	  	      event.preventDefault();
      return false;

  }
}

$('td').click(function(){
	$(this).css("text-decoration","line-through");
})

tdpd = $('td')
trpr = $('tr')

$('.fa-times').click(function(){
	console.log('clicked');
console.log($(this).parent().parent().parent());
$(this).parent().parent().parent().remove();
})

// function myDeleteRow(event){
// 	table.deleteRow(this);
// }



