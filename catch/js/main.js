function Catch() {
    let buton = document.getElementById('btn')
    let x = Math.floor(Math.random() * 75);
    buton.style.left = `${x}%`
}

function Hidden(){
    let icon = document.getElementById('icon')
    var inp = document.getElementById('inp')
    if(inp.type ==="password"){
        inp.type ="text"
        icon.className='fa-regular fa-eye-slash'
    }

    else{
        inp.type="password"
        icon.className='fa-regular fa-eye'
    }
}