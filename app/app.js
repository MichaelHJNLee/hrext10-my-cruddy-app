/*

 ### Basic Reqs
- [ ] Where to store data? (localstorage)
- [ ] How to modify data? (update action, delete action)

*/
var createPlayer = function(name, object){
	return window.localStorage.setItem(name,object);
}
var deletePlayer = function(key){
	return window.localStorage.removeItem(key);
}
var clearAll = function(){
	return window.localStorage.clear();
}
var alertName = function(){
	alert("Please enter your player's name.");
}
var nameExists = function(key) {
  return window.localStorage.getItem(key) !== null;
}
var clearDatabase = function() {
  return window.localStorage.clear();
}
var showDatabase = function() {
  $('tbody').html('');
  for (var i = 0; i < window.localStorage.length; i++) {
    var name = window.localStorage.key(i);
    var obj = JSON.parse(window.localStorage.getItem(window.localStorage.key(i)));
    var num = obj['num']
    var pos = obj['pos']
    var arc = obj['arc']
    $('tbody').append(`<tr id=${name}><td>${name}</td><td>${num}</td><td>${pos}</td><td>${arc}</td><td id='${name}' class='x' onmouseover=""style="cursor: pointer;">x</td></tr>`)
  }
}
$(document).ready(function() {
  showDatabase();
  $(function(){
    for (i = 0; i <= 99; i++){
        $('.select-numbers').append($('<option></option>').val(i).html(i));
    }
  });
  $('.submit').on('click', function(){
  	var object = {};
  	var name = document.getElementById('name').value;
  	object['num'] = document.getElementById('numbers').value;
  	object['pos'] = document.getElementById('pos').value;
  	object['arc'] = document.getElementById('arc').value;
  	var stringed = JSON.stringify(object);
  	if (name === ''){
  		alertName();
  	} else if(nameExists(name)){
  		if (confirm('This player already exists. Do you want to update this player instead?')){
  			createPlayer(name,stringed);
  			window.location.reload()
  		}
  	} else {
  	  	createPlayer(name, stringed);	
  	  	window.location.reload()
  	  }
  })
  $('.clear').on('click', function(){
  	if (confirm('Are you sure you want to delete all your existing players?')){
  		clearDatabase();
  		showDatabase();
  	}
  })
  $('.x').on('click', function(){
  	if(confirm('Are you sure you want to delete this player?')){
  		deletePlayer(event.target.id);
  		window.location.reload();
  	}
  })
  $('tr').on('click', function(){
  	console.log(event.target)
  	// document.getElementById('name').value = 
  	// document.getElementById('numbers').value = 
  })
})

//DAVID'S DEMO
//localStorage functions
// var createItem = function(key, value) {
//   return window.localStorage.setItem(key, value);
// }

// var updateItem = function(key, value) {
//   return window.localStorage.setItem(key, value);
// }

// var deleteItem = function(key) {
//   return window.localStorage.removeItem(key);
// }

// var clearDatabase = function() {
//   return window.localStorage.clear();
// }

// var showDatabaseContents = function() {
//   $('tbody').html('');

//   for (var i = 0; i < window.localStorage.length; i++) {
//     var key = window.localStorage.key(i);
//     $('tbody').append(`<tr><td>${key}</td><td>${window.localStorage.getItem(key)}</td></tr>`)
//   }
// }

// var keyExists = function(key) {
//   return window.localStorage.getItem(key) !== null
// }

// var getKeyInput = function() {
//   return $('.key').val();
// }

// var getValueInput = function() {
//   return $('.value').val();
// }

// var resetInputs = function() {
//   $('.key').val('');
//   $('.value').val('');
// }

// $(document).ready(function() {
//   showDatabaseContents();

//   $('.create').click(function() {
//     if (getKeyInput() !== '' && getValueInput() !== '') {
//       if (keyExists(getKeyInput())) {
//         if(confirm('key already exists in database, do you want to update instead?')) {
//           updateItem(getKeyInput(), getValueInput());
//           showDatabaseContents();
//         }
//       } else {
//         createItem(getKeyInput(), getValueInput());
//         showDatabaseContents();
//         resetInputs();
//       }
//     } else  {
//       alert('key and value must not be blank');
//     }
//   });

//   $('.update').click(function() {
//     if (getKeyInput() !== '' && getValueInput() !== '') {
//       if (keyExists(getKeyInput())) {
//         updateItem(getKeyInput(), getValueInput());
//         showDatabaseContents();
//         resetInputs();
//       } else {
//         alert('key does not exist in database');
//       }
//     } else {
//       alert('key and value must not be blank');
//     }
//   });

//   $('.delete').click(function() {
//      if (getKeyInput() !== '') {
//       if (keyExists(getKeyInput())) {
//         deleteItem(getKeyInput());
//         showDatabaseContents();
//         resetInputs();
//       } else {
//         alert('key does not exist in database');
//       }
//     } else {
//       alert('key must not be blank');
//     }
//   });

//   $('.reset').click(function() {
//     resetInputs();
//   })

//   $('.clear').click(function() {
//     if (confirm('WARNING: Are you sure you want to clear the database? \n                THIS ACTION CANNOT BE UNDONE')) {
//       clearDatabase();
//       showDatabaseContents();
//     }
//   })
// })