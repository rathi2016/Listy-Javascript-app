document.getElementById('addItem').addEventListener('click', buttonClick);

document.getElementById('item').addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode == 13) {
    document.getElementById('addItem').click();
  }
});

function buttonClick(){
  var value = document.getElementById('item').value;
  if(value) {
    addItemToList(value)
    value = document.getElementById('item').value = '' ;
  }
}

function removeItem(){
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;
  parent.removeChild(item)
}

function completeItem(){
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;
  var id = parent.id;

  var target = (id ==='list') ? document.getElementById("completed") : document.getElementById('list')

  parent.removeChild(item)
  target.insertBefore(item, target.childNodes[0]);
   target.removeEventListener('click',edit, false);
}

function edit(){
  var item = this.parentNode.parentNode;
  var id = item.id;
  if (id == 'list'){
    var span = this;
    span.setAttribute('contenteditable', true);
    span.focus();
  } else {
    alert("You cannot edit any item under completed list ")
  }
}


function addItemToList(item){
  var lis = document.getElementById('list');

  var el = document.createElement('li');
  var text = document.createElement('div');

  text.innerText = item ;
  el.appendChild(text);

  text.classList.add('edit')
  text.addEventListener('click', edit, true);


  var buttons = document.createElement('div');
  buttons.classList.add('buttons');

  var remove = document.createElement('button');
  remove.classList.add('remove')
  remove.innerHTML = "delete"
  remove.addEventListener('click', removeItem);

  var complete = document.createElement('button');
  complete.classList.add('complete')
  complete.innerHTML = "done"
  complete.addEventListener('click', completeItem);

  buttons.appendChild(remove);
  buttons.appendChild(complete);
  el.appendChild(buttons);
  lis.insertBefore(el, list.childNodes[0]);
}
