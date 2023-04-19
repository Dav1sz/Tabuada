const toggleBtn = document.getElementById('toggle-fun');
const body = document.body;

toggleBtn.addEventListener('click', function(){
    body.classList.toggle('dark-mode')
})