// DARK-MODE:
const toggleButton = document.querySelector('.dark');
let isDarkMode = true;
toggleButton.addEventListener('click',function(){
    if(isDarkMode){
        document.body.style.backgroundColor = '#FFF';
        document.body.style.color = '#212121';
        toggleButton.innerHTML = 'Dark Mode';
    }
    else{
        document.body.style.backgroundColor = '#212121';
        document.body.style.color = '#FFF';
        toggleButton.innerHTML = 'Light Mode';
    }
    isDarkMode = !isDarkMode;
})

// function which open nav bar
function openNav() {
    document.getElementById("mySidenav").style.width = "10em";
  }

// function which close nav bar
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

// function to create space button
const spaceContainer = document.querySelector('.spaceContainer');
const spaceCreationButton = document.querySelector('.addNote');

spaceCreationButton.addEventListener('click', function(){
    const space = document.createElement('div');
    space.classList.add('space');

    const textArea = document.createElement('textarea');
    textArea.placeholder = 'Write something here';
    space.appendChild(textArea);

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove Task';
    space.appendChild(removeButton);

    removeButton.addEventListener('click',function(){
        space.remove();
    });

    spaceContainer.appendChild(space);
});

// logIn button alert
const logIn = document.querySelector('.login');
logIn.addEventListener('click', function(){
    // alert('logIn feature is coming soon...');
    window.location.assign('logIn.html');
})

// signUp button alert
const signUp = document.querySelector('.signup');
signUp.addEventListener('click', function(){
    // alert('signUp feature is coming soon...');
    window.location.assign('signUp.html');
})

// menu options alert
function showAlert(event){
    const buttonId = event.target.id;
    let message = '';
    switch(buttonId){
        case 'home':
            message = 'This is a small note-making website built by Parth Patidar';
            break;
        case 'profile':
            message = 'Profile section is coming soon...';
            break;
        case 'setting':
            message = 'Setting section is coming soon...';
            break;
        case 'contact':
            message = 'You can contact us through www.notify@apk.wow';
            break;    
    }
    alert(message);
}
const menuButton = document.querySelectorAll('.menu-btn');
menuButton.forEach(menuButton => {
    menuButton.addEventListener('click', showAlert);
});