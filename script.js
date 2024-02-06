//wishlist
function wishlist(){
    const wish = document.getElementById('btn-heart');
    wish.style.color='red'
    alert('There is no Item available')
}
//cart
function cart(){
    const c = document.getElementById('btn-cart')
    c.style.color='black'
    alert('There is no Item added to the cart')
}
//login
let login = document.querySelector('.signin');
document.querySelector('#login-btn').onclick=()=>{
    login.classList.toggle('active')
}
document.querySelector('#close-login').onclick=()=>{
    login.classList.remove('active')
}
//form validation
function validateForm(){
    var user=document.getElementById('emailid').value;
    var pass=document.getElementById('password').value;
    //reset error msgs
    document.getElementById('usererror').innerHTML="";
    document.getElementById('passworderror').innerHTML="";
    //regex patterns
    var userpattern=/^[a-zA-Z0-9_]{8,20}$/;
    var passwordpattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-z]).{8,}$/;
    //validate username 
    if(!userpattern.test(user)){
        document.getElementById('usererror').innerHTML='Invalid Username';
        return false;
    }
    //validate password
    if(!passwordpattern.test(pass)){
        document.getElementById('passworderror').innerHTML='Invalid Password';
        return false;
    }
    return true;
}

//like
function like() {
    const buttons = document.getElementById('btn-like');
    buttons.style.color = 'red';
    alert(`You liked these Products`);
}
function like1() {
    const buttons = document.getElementById('btn-like1');
    buttons.style.color = 'red';
    alert(`You liked these Products`);
}
function like2() {
    const buttons = document.getElementById('btn-like2');
    buttons.style.color = 'red';
    alert(`You liked these Products`);
}
function like3() {
    const buttons = document.getElementById('btn-like3');
    buttons.style.color = 'red';
    alert(`You liked these Products`);
}
function like4() {
    const buttons = document.getElementById('btn-like4');
    buttons.style.color = 'red';
    alert(`You liked these Products`);
}
function like5() {
    const buttons = document.getElementById('btn-like5');
    buttons.style.color = 'red';
    alert(`You liked these Products`);
}
function like6() {
    const buttons = document.getElementById('btn-like6');
    buttons.style.color = 'red';
    alert(`You liked these Products`);
}
function like7() {
    const buttons = document.getElementById('btn-like7');
    buttons.style.color = 'red';
    alert(`You liked these Products`);
}
function like8() {
    const buttons = document.getElementById('btn-like8');
    buttons.style.color = 'red';
    alert(`You liked these Products`);
}
function like9() {
    const buttons = document.getElementById('btn-like9');
    buttons.style.color = 'red';
    alert(`You liked these Products`);
}
function like10() {
    const buttons = document.getElementById('btn-like10');
    buttons.style.color = 'red';
    alert(`You liked these Products`);
}
function like11() {
    const buttons = document.getElementById('btn-like11');
    buttons.style.color = 'red';
    alert(`You liked these Products`);
}
function like12() {
    const buttons = document.getElementById('btn-like12');
    buttons.style.color = 'red';
    alert(`You liked these Products`);
}
function like13() {
    const buttons = document.getElementById('btn-like13');
    buttons.style.color = 'red';
    alert(`You liked these Products`);
}
function like14() {
    const buttons = document.getElementById('btn-like14');
    buttons.style.color = 'red';
    alert(`You liked these Products`);
}


//wishlist-heart
function heart(){
    const h = document.getElementsByClassName('btn-hearts')
   for(let i=0;i<h.length;i++){
    h[i].style.color='red'
   }
   var wish;
    if (confirm("Do you want to added it in Wishlist?") == true) {
        wish = "Product added successfully!";
        window.alert(wish)  
    } else {
        wish = "Cancelled!";
        window.alert(wish)
    }
}
function heart1(){
    const h = document.getElementsByClassName('btn-hearts1')
   for(let i=0;i<h.length;i++){
    h[i].style.color='red'
   }
   var wish;
    if (confirm("Do you want to added it in Wishlist?") == true) {
        wish = "Product added successfully!";
        window.alert(wish)  
    } else {
        wish = "Cancelled!";
        window.alert(wish)
    }
}
function heart2(){
    const h = document.getElementsByClassName('btn-hearts2')
   for(let i=0;i<h.length;i++){
    h[i].style.color='red'
   }
   var wish;
    if (confirm("Do you want to added it in Wishlist?") == true) {
        wish = "Product added successfully!";
        window.alert(wish)  
    } else {
        wish = "Cancelled!";
        window.alert(wish)
    }
}
function heart3(){
    const h = document.getElementsByClassName('btn-hearts3')
   for(let i=0;i<h.length;i++){
    h[i].style.color='red'
   }
   var wish;
    if (confirm("Do you want to added it in Wishlist?") == true) {
        wish = "Product added successfully!";
        window.alert(wish)  
    } else {
        wish = "Cancelled!";
        window.alert(wish)
    }
}
function heart4(){
    const h = document.getElementsByClassName('btn-hearts4')
   for(let i=0;i<h.length;i++){
    h[i].style.color='red'
   }
   var wish;
    if (confirm("Do you want to added it in Wishlist?") == true) {
        wish = "Product added successfully!";
        window.alert(wish)  
    } else {
        wish = "Cancelled!";
        window.alert(wish)
    }
}
function heart5(){
    const h = document.getElementsByClassName('btn-hearts5')
   for(let i=0;i<h.length;i++){
    h[i].style.color='red'
   }
   var wish;
    if (confirm("Do you want to added it in Wishlist?") == true) {
        wish = "Product added successfully!";
        window.alert(wish)  
    } else {
        wish = "Cancelled!";
        window.alert(wish)
    }
}
function heart6(){
    const h = document.getElementsByClassName('btn-hearts6')
   for(let i=0;i<h.length;i++){
    h[i].style.color='red'
   }
   var wish;
    if (confirm("Do you want to added it in Wishlist?") == true) {
        wish = "Product added successfully!";
        window.alert(wish)  
    } else {
        wish = "Cancelled!";
        window.alert(wish)
    }
}
function heart7(){
    const h = document.getElementsByClassName('btn-hearts7')
   for(let i=0;i<h.length;i++){
    h[i].style.color='red'
   }
   var wish;
    if (confirm("Do you want to added it in Wishlist?") == true) {
        wish = "Product added successfully!";
        window.alert(wish)  
    } else {
        wish = "Cancelled!";
        window.alert(wish)
    }
}
function heart8(){
    const h = document.getElementsByClassName('btn-hearts8')
   for(let i=0;i<h.length;i++){
    h[i].style.color='red'
   }
   var wish;
    if (confirm("Do you want to added it in Wishlist?") == true) {
        wish = "Product added successfully!";
        window.alert(wish)  
    } else {
        wish = "Cancelled!";
        window.alert(wish)
    }
}
function heart9(){
    const h = document.getElementsByClassName('btn-hearts9')
   for(let i=0;i<h.length;i++){
    h[i].style.color='red'
   }
   var wish;
    if (confirm("Do you want to added it in Wishlist?") == true) {
        wish = "Product added successfully!";
        window.alert(wish)  
    } else {
        wish = "Cancelled!";
        window.alert(wish)
    }
}
function heart10(){
    const h = document.getElementsByClassName('btn-hearts10')
   for(let i=0;i<h.length;i++){
    h[i].style.color='red'
   }
   var wish;
    if (confirm("Do you want to added it in Wishlist?") == true) {
        wish = "Product added successfully!";
        window.alert(wish)  
    } else {
        wish = "Cancelled!";
        window.alert(wish)
    }
}
function heart11(){
    const h = document.getElementsByClassName('btn-hearts11')
   for(let i=0;i<h.length;i++){
    h[i].style.color='red'
   }
   var wish;
    if (confirm("Do you want to added it in Wishlist?") == true) {
        wish = "Product added successfully!";
        window.alert(wish)  
    } else {
        wish = "Cancelled!";
        window.alert(wish)
    }
}
function heart12(){
    const h = document.getElementsByClassName('btn-hearts12')
   for(let i=0;i<h.length;i++){
    h[i].style.color='red'
   }
   var wish;
    if (confirm("Do you want to added it in Wishlist?") == true) {
        wish = "Product added successfully!";
        window.alert(wish)  
    } else {
        wish = "Cancelled!";
        window.alert(wish)
    }
}
function heart13(){
    const h = document.getElementsByClassName('btn-hearts13')
   for(let i=0;i<h.length;i++){
    h[i].style.color='red'
   }
   var wish;
    if (confirm("Do you want to added it in Wishlist?") == true) {
        wish = "Product added successfully!";
        window.alert(wish)  
    } else {
        wish = "Cancelled!";
        window.alert(wish)
    }
}
function heart14(){
    const h = document.getElementsByClassName('btn-hearts14')
   for(let i=0;i<h.length;i++){
    h[i].style.color='red'
   }
   var wish;
    if (confirm("Do you want to added it in Wishlist?") == true) {
        wish = "Product added successfully!";
        window.alert(wish)  
    } else {
        wish = "Cancelled!";
        window.alert(wish)
    }
}

//share
function shares(){
    if (navigator.share) {
        const shareButton = document.getElementById('btn-share');
        shareButton.style.color='red'
        shareButton.addEventListener('click', () => {
            navigator.share({
                text: 'Check out this amazing product!',
                url: 'http://127.0.0.1:5500/index.html#'
            })
            .then(() => console.log('Shared successfully'))
            .catch((error) => console.error('Error sharing:', error));
        });
    } else {
        console.log('It is not supported on this device.');
    }
}
function shares1(){
    if (navigator.share) {
        const shareButton = document.getElementById('btn-share1');
        shareButton.style.color='red'
        shareButton.addEventListener('click', () => {
            navigator.share({
                text: 'Check out this amazing product!',
                url: 'http://127.0.0.1:5500/index.html#'
            })
            .then(() => console.log('Shared successfully'))
            .catch((error) => console.error('Error sharing:', error));
        });
    } else {
        console.log('It is not supported on this device.');
    }
}
function shares2(){
    if (navigator.share) {
        const shareButton = document.getElementById('btn-share2');
        shareButton.style.color='red'
        shareButton.addEventListener('click', () => {
            navigator.share({
                text: 'Check out this amazing product!',
                url: 'http://127.0.0.1:5500/index.html#'
            })
            .then(() => console.log('Shared successfully'))
            .catch((error) => console.error('Error sharing:', error));
        });
    } else {
        console.log('It is not supported on this device.');
    }
}
function shares3(){
    if (navigator.share) {
        const shareButton = document.getElementById('btn-share3');
        shareButton.style.color='red'
        shareButton.addEventListener('click', () => {
            navigator.share({
                text: 'Check out this amazing product!',
                url: 'http://127.0.0.1:5500/index.html#'
            })
            .then(() => console.log('Shared successfully'))
            .catch((error) => console.error('Error sharing:', error));
        });
    } else {
        console.log('It is not supported on this device.');
    }
}
function shares4(){
    if (navigator.share) {
        const shareButton = document.getElementById('btn-share4');
        shareButton.style.color='red'
        shareButton.addEventListener('click', () => {
            navigator.share({
                text: 'Check out this amazing product!',
                url: 'http://127.0.0.1:5500/index.html#'
            })
            .then(() => console.log('Shared successfully'))
            .catch((error) => console.error('Error sharing:', error));
        });
    } else {
        console.log('It is not supported on this device.');
    }
}
function shares5(){
    if (navigator.share) {
        const shareButton = document.getElementById('btn-share5');
        shareButton.style.color='red'
        shareButton.addEventListener('click', () => {
            navigator.share({
                text: 'Check out this amazing product!',
                url: 'http://127.0.0.1:5500/index.html#'
            })
            .then(() => console.log('Shared successfully'))
            .catch((error) => console.error('Error sharing:', error));
        });
    } else {
        console.log('It is not supported on this device.');
    }
}
function shares6(){
    if (navigator.share) {
        const shareButton = document.getElementById('btn-share6');
        shareButton.style.color='red'
        shareButton.addEventListener('click', () => {
            navigator.share({
                text: 'Check out this amazing product!',
                url: 'http://127.0.0.1:5500/index.html#'
            })
            .then(() => console.log('Shared successfully'))
            .catch((error) => console.error('Error sharing:', error));
        });
    } else {
        console.log('It is not supported on this device.');
    }
}
function shares7(){
    if (navigator.share) {
        const shareButton = document.getElementById('btn-share7');
        shareButton.style.color='red'
        shareButton.addEventListener('click', () => {
            navigator.share({
                text: 'Check out this amazing product!',
                url: 'http://127.0.0.1:5500/index.html#'
            })
            .then(() => console.log('Shared successfully'))
            .catch((error) => console.error('Error sharing:', error));
        });
    } else {
        console.log('It is not supported on this device.');
    }
}
function shares8(){
    if (navigator.share) {
        const shareButton = document.getElementById('btn-share8');
        shareButton.style.color='red'
        shareButton.addEventListener('click', () => {
            navigator.share({
                text: 'Check out this amazing product!',
                url: 'http://127.0.0.1:5500/index.html#'
            })
            .then(() => console.log('Shared successfully'))
            .catch((error) => console.error('Error sharing:', error));
        });
    } else {
        console.log('It is not supported on this device.');
    }
}
function shares9(){
    if (navigator.share) {
        const shareButton = document.getElementById('btn-share9');
        shareButton.style.color='red'
        shareButton.addEventListener('click', () => {
            navigator.share({
                text: 'Check out this amazing product!',
                url: 'http://127.0.0.1:5500/index.html#'
            })
            .then(() => console.log('Shared successfully'))
            .catch((error) => console.error('Error sharing:', error));
        });
    } else {
        console.log('It is not supported on this device.');
    }
}
function shares10(){
    if (navigator.share) {
        const shareButton = document.getElementById('btn-share10');
        shareButton.style.color='red'
        shareButton.addEventListener('click', () => {
            navigator.share({
                text: 'Check out this amazing product!',
                url: 'http://127.0.0.1:5500/index.html#'
            })
            .then(() => console.log('Shared successfully'))
            .catch((error) => console.error('Error sharing:', error));
        });
    } else {
        console.log('It is not supported on this device.');
    }
}
function shares11(){
    if (navigator.share) {
        const shareButton = document.getElementById('btn-share11');
        shareButton.style.color='red'
        shareButton.addEventListener('click', () => {
            navigator.share({
                text: 'Check out this amazing product!',
                url: 'http://127.0.0.1:5500/index.html#'
            })
            .then(() => console.log('Shared successfully'))
            .catch((error) => console.error('Error sharing:', error));
        });
    } else {
        console.log('It is not supported on this device.');
    }
}
function shares12(){
    if (navigator.share) {
        const shareButton = document.getElementById('btn-share12');
        shareButton.style.color='red'
        shareButton.addEventListener('click', () => {
            navigator.share({
                text: 'Check out this amazing product!',
                url: 'http://127.0.0.1:5500/index.html#'
            })
            .then(() => console.log('Shared successfully'))
            .catch((error) => console.error('Error sharing:', error));
        });
    } else {
        console.log('It is not supported on this device.');
    }
}
function shares13(){
    if (navigator.share) {
        const shareButton = document.getElementById('btn-share13');
        shareButton.style.color='red'
        shareButton.addEventListener('click', () => {
            navigator.share({
                text: 'Check out this amazing product!',
                url: 'http://127.0.0.1:5500/index.html#'
            })
            .then(() => console.log('Shared successfully'))
            .catch((error) => console.error('Error sharing:', error));
        });
    } else {
        console.log('It is not supported on this device.');
    }
}
function shares14(){
    if (navigator.share) {
        const shareButton = document.getElementById('btn-share14');
        shareButton.style.color='red'
        shareButton.addEventListener('click', () => {
            navigator.share({
                text: 'Check out this amazing product!',
                url: 'http://127.0.0.1:5500/index.html#'
            })
            .then(() => console.log('Shared successfully'))
            .catch((error) => console.error('Error sharing:', error));
        });
    } else {
        console.log('It is not supported on this device.');
    }
}
    


//addtocart
function addtocart(){
    document.getElementById('btn-addtocart')
    alert(`You want to add the item in cart`)
}

//subcribe
function subscribe(){
    document.getElementById('btn-subscribe')
    alert(`You Subscribed!`)
}
