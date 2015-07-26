//Loads the document first
$(document).ready(function(){
  //Creates the container in which the grid lays
  $('body').prepend('<div class="container"></div>')
  //Creates button, when clicked creates new grid
  $('.container').prepend('<button onclick="newGrid(); return false"> Click Here to Start New Grid</button>')
  //Creates the columns for the grid
    .append('<ul></ul>')
    .append('<ul></ul>')
    .append('<ul></ul>')
    .append('<ul></ul>')
  //Creates the rows for the grid
  $('ul').append('<li></li>')
    .append('<li></li>')
    .append('<li></li>')
    .append('<li></li>')
//CSS for the rows, to create equal dimension squares and to turn blue upon hover
  $('li').css({
    display: 'inline-block',
    'list-style-type': 'none',
    height: '25px',
    width: '25px',
    border: '1px white solid',
    margin: '0 1px',
    'box-sizing': 'border-box'
  }).hover(function() {
    $(this).css('background-color','blue')
  });

  $('.container').css({
    margin: '0 auto'
  });

  $('ul').css({
    padding: '0',
    margin: '0'
  });

  $('button').css({
  margin: '50px 0px 50px 0px',
  width: '500px',
  height: '100px',
  background: '#3e9cbf',
  'font-size': '16px',
  padding: '8px 14px 10px', /*apply some padding inside the button*/
  border: '1px solid #3e9cbf', /*required or the default border for the browser will appear*/
  cursor: 'pointer', /*forces the cursor to change to a hand when the button is hovered*/
  /*style the text*/
  'font-size':'1.5em',
  'font-family':'Oswald, sans-serif', /*Oswald is available from http://www.google.com/webfonts/specimen/Oswald*/
  'letter-spacing':'.1em',
  'text-shadow': '0 -1px 0px rgba(0, 0, 0, 0.3', /*give the text a shadow - doesn't appear in Opera 12.02 or earlier*/
    color: '#fff',
  /*use box-shadow to give the button some depth */
  '-webkit-box-shadow': 'inset 0px 1px 0px #3e9cbf, 0px 5px 0px 0px #205c73, 0px 10px 5px #999',
  '-moz-box-shadow':'inset 0px 1px 0px #3e9cbf, 0px 5px 0px 0px #205c73, 0px 10px 5px #999',
  'box-shadow': 'inset 0px 1px 0px #3e9cbf, 0px 5px 0px 0px #205c73, 0px 10px 5px #999;',
  /*give the corners a small curve*/
  '-moz-border-radius': '10px',
  '-webkit-border-radius': '10px',
  'border-radius': '10px'

  });
  $('body').css({
    'background-color': 'black'
  })
    $('h1').css({
    color: 'white',
    position: 'absolute',
    top: '0',
    right: '0'
  })
});

function newGrid(){
//Removes previous grid to create new grid
  $('li').css('background-color','white');
  $('.container').remove()
  $('body').prepend('<div class="container"></div>')

//User Inputs new width for grid
  var width = prompt('Enter a new grid width');

  if(width > 50){
    var width = prompt('Grid width must be 50 or less');
  }
//User Inputs new Height for Grid
  var height = prompt('Enter new grid height');

  if(height > 50) {
    var height = prompt('Grid height must be 50 or less');
  }
//Loop creates the grid based on user Input
  for (var i=0; i<=height;i++){
    $('.container').append('<ul></ul>');
  }

  for (var i=0; i<=width;i++){
    $('ul').append('<li></li>');
  }

  $('.container').prepend('<button onclick="newGrid(); return false">Click Here to Start New Grid</button>')

    $('li').css({
    display: 'inline-block',
    'list-style-type': 'none',
    height: '25px',
    width: '25px',
    border: '1px white solid',
    margin: '0 1px',
    'box-sizing': 'border-box'
  }).hover(function() {
    $(this).css('background-color','blue')
  });

  $('.container').css({
    margin: '0 auto'
  });

  $('ul').css({
    padding: '0',
    margin: '0'
  });

  $('button').css({
  margin: '50px 0px 50px 0px',
  width: '500px',
  height: '100px',
  background: '#3e9cbf',
  'font-size': '16px',
  padding: '8px 14px 10px', /*apply some padding inside the button*/
  border: '1px solid #3e9cbf', /*required or the default border for the browser will appear*/
  cursor: 'pointer', /*forces the cursor to change to a hand when the button is hovered*/
  /*style the text*/
  'font-size':'1.5em',
  'font-family':'Oswald, sans-serif', /*Oswald is available from http://www.google.com/webfonts/specimen/Oswald*/
  'letter-spacing':'.1em',
  'text-shadow': '0 -1px 0px rgba(0, 0, 0, 0.3', /*give the text a shadow - doesn't appear in Opera 12.02 or earlier*/
    color: '#fff',
  /*use box-shadow to give the button some depth */
  '-webkit-box-shadow': 'inset 0px 1px 0px #3e9cbf, 0px 5px 0px 0px #205c73, 0px 10px 5px #999',
  '-moz-box-shadow':'inset 0px 1px 0px #3e9cbf, 0px 5px 0px 0px #205c73, 0px 10px 5px #999',
  'box-shadow': 'inset 0px 1px 0px #3e9cbf, 0px 5px 0px 0px #205c73, 0px 10px 5px #999;',
  /*give the corners a small curve*/
  '-moz-border-radius': '10px',
  '-webkit-border-radius': '10px',
  'border-radius': '10px'

  });
  $('body').css({
    'background-color':'black'
  });
};
