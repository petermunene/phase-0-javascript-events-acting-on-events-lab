function moveDodgerLeft() {
    const dodger = document.getElementById('dodger'); 
    let left = parseInt(dodger.style.left) || 0;

    if (left > 0) { 
        dodger.style.left = `${left - 10}px`; 
    }
}

function moveDodgerRight() {
    const dodger = document.getElementById('dodger'); 
    let left = parseInt(dodger.style.left) || 0; 
    const rightBoundary = 360; 

    if (left < rightBoundary) { 
        dodger.style.left = `${left + 10}px`; 
    }
}