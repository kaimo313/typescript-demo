console.log('kaimo');

function kaimo(a:number, b:number) {
    return a + b;
}

function kaimo2(this: Window) {
    alert(this)
}

let box = document.querySelector(".box");

box?.addEventListener('click', function() {
    alert("click")
})