let btns = document.querySelectorAll('button');
let toastbox = document.querySelector('.toastbox');

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        let toast = document.createElement('div');
        toast.classList.add('toast');
        
        if (btn.innerHTML == "Success") {
            toast.innerHTML = "<img src='./check.png'> SuccessFully";
            toast.classList.add('success');
        }
        else if (btn.innerHTML == "Error") {
            toast.innerHTML = "<img src='./cross.png'> Error";
            toast.classList.add('error');
        }
        else if (btn.innerHTML == "Invalid") {
            toast.innerHTML = "<img src='./exclamation.png'> Invalid";
            toast.classList.add('invalid');
        }
        else if (btn.innerHTML == "Info") {
            toast.innerHTML = "<img src='./information.png'> Info";
            toast.classList.add('info');
        }
        else{
            toast.innerHTML = "";
            toast.classList.remove('toast');
        }
        
        toastbox.appendChild(toast);

        setTimeout(() => {
            toast.remove();
        }, 5000);
    })
})
