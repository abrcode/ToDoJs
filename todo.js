
// var h = document.createElement('h1')
//
// var myvalue = document.createTextNode('Hello World')
// h.appendChild(myvalue);
//
// document.querySelector('h1').appendChild(h);


//until and  unlese the condition going to be true it gonna keep repeating this loop
// var value = 5
//
// while (value > 0) {
//   console.log(value);
//   value--;
// }

var addButton =document.getElementById('add');
addButton.addEventListener('click',addItem);

var removeButton=document.getElementById('remove');
removeButton.addEventListener('click',removeItem);

var resetButton = document.getElementById('reset');
resetButton.addEventListener('click',resetToDo);

var ul = document.getElementById('list');
var li

function addItem() {
   var input = document.getElementById('input');
   //to get the value of it
   var item = input.value
   console.log(item);
   ul = document.getElementById('list');
   // the input value will will be putting here
    var textNode = document.createTextNode(item)
    // console.log(textNode);

    if (item === '') {
      return false;
      // add a p tag and assign a value of "ENter  your todo"
      // window.alert("Please enter to-do ");
    }else {
       //create li
        var li = document.createElement('li')
       //create chechbox
       var checkbox =document.createElement('input');

          // chech type of it
       checkbox.type = 'checkbox';
       //set atttr take two parameter like key value pair
       checkbox.setAttribute('id','check');

     //create label
      var label = document.createElement('label');
      // console.log(label);
      label.setAttribute('for','item') // optional

      //add these elements on the web page
      ul.appendChild(label);
      li.appendChild(checkbox);
      label.appendChild(textNode);
      li.appendChild(label);
      ul.insertBefore(li , ul.childNodes[0]);


      setTimeout(()=>{
        li.className  = 'visual';
      },1);


      input.value = '';
    }
}

function removeItem() {
  // console.log('Delete Button clicked');
  li = ul.children
  // console.log(li);
  for (var i = 0; i < li.length; i++) {
    // const element = li[i];
    // console.log(element);
    while (li[i] && li[i].children[0].checked) {
         ul.removeChild(li[i])
    }
  }
}


// assignment done for reset to-do
function resetToDo() {
  li = ul.children

for (var i = 0; i < li.length; i++) {
   ul.remove(li[i])

}
  console.log('Reset Button Pressed');
}
