// Create a "close" button and append it to each list item
let myNodelist = document.getElementsByTagName('li');
for (let i = 0; i < myNodelist.length; i++) {
  let span = document.createElement('span');
  let txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
let closes: any = document.getElementsByClassName('close')!;
for (let i = 0; i < closes.length; i++) {
  closes[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = 'none';
  }
}

// Add a "checked" symbol when clicking on a list item
let list: any = document.querySelector('ul');
list.addEventListener('click', (ev: any) => {
  if (ev.target.tagName === 'li') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  let li = document.createElement('li');
  let inputValue = (<HTMLInputElement>document.getElementById('myInput')).value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert('You must write something!');
  } else {
    (document.getElementById('myUL') as HTMLElement).appendChild(li);
  }
  
  (<HTMLInputElement>document.getElementById('myInput')).value = "";

  let span = document.createElement('span');
  let txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  li.appendChild(span);

  for (let i = 0; i < closes.length; i++) {
    closes[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = 'none';
    }
  }
}