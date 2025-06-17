let toastbox = document.querySelector('.toastbox');

function success() {
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.classList.add('success');
    toast.innerHTML = "<img src='./check.png'> SuccessFully";
    toastbox.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 5000);
};

function error() {
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.classList.add('error');
    toast.innerHTML = "<img src='./cross.png'> Error";
    toastbox.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 5000);
};

function invalid() {
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.classList.add('invalid');
    toast.innerHTML = "<img src='./exclamation.png'> Invalid";
    toastbox.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 5000);
};

function info() {
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.classList.add('info');
    toast.innerHTML = "<img src='./information.png'> Info";
    toastbox.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 5000);
};
