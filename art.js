"use strict";

// function doStart() {
//     let baseShape = document.getElementById('box');
//     let artworkContainer = document.getElementById('artwork');
//     let count;
//
//     for(count = 100; count < 300; count += 20) {
//         let newDiv = document.createElement('div');
//         addShape.innerHTML = newDiv + count;
//         document.body.parentElement.parentElement.appendChild(addShape);
//     }
//
//
// }
//
// console.log(doStart());

function doArt() {
    object1();
    object2();
    object3();
    object4();
    object5();
    object6();
    object7();
    object8();
    object9();
}

function object1() {
    function doObject1(counter) {
        let newDiv = document.createElement('div');
        newDiv.className = 'box';

        newDiv.style.height = String(counter + 'px');
        newDiv.style.width = String(counter + 'px');

        document.getElementsByClassName('artwork')[0].appendChild(newDiv);
    }

    for(let i=100; i <= 300; i += 20) {
        doObject1(i);
    }
}

function object2() {
    function doObject2(counter) {
        let newDiv = document.createElement('div');
        newDiv.className = 'box';

        newDiv.style.transform = String( `rotate(${counter}deg)`);

        document.getElementsByClassName('artwork')[1].appendChild(newDiv);
    }

    for(let i=0; i <= 90; i += 10) {
        doObject2(i);
    }
}

function object3() {
    function doObject3(counter) {
        let newDiv = document.createElement('div');
        newDiv.className = 'circle';

        newDiv.style.height = String(counter + 'px');
        newDiv.style.width = String(counter + 'px');

        document.getElementsByClassName('artwork')[2].appendChild(newDiv);
    }

    for(let i=0; i <= 200; i += 10) {
        doObject3(i);
    }
}

function object4() {
    function doObject4(counter) {
        let newDiv = document.createElement('div');
        newDiv.className = 'box';

        newDiv.style.transform = String( `translate(${counter}px,${counter}px)`);

        document.getElementsByClassName('artwork')[3].appendChild(newDiv);
    }

    for(let i=-90; i <= 90; i += 20) {
        doObject4(i);
    }
}

function object5() {
    function doObject5(counter) {
        let newDiv = document.createElement('div');
        newDiv.className = 'circle';

        newDiv.style.height = String(counter/2 + 'px');
        newDiv.style.width = String(counter/2 + 'px');

        document.getElementsByClassName('artwork')[4].appendChild(newDiv);
    }

    for(let i=1; i <= 512; i *= 2) {
        doObject5(i);
    }
}

function object6() {
    function doObject6(counter) {
        let newDiv = document.createElement('div');
        newDiv.className = 'circle';
        newDiv.id = 'artwork6';

        newDiv.style.transform = String( `translate(${counter -50}px`);
        newDiv.style.transform = String( `rotate(${counter *4}deg)`);

        document.getElementsByClassName('artwork')[5].appendChild(newDiv);
    }

    for(let i=-20; i <= 45; i += 5) {
        doObject6(i);
    }
}

function object7() {
    function doObject7(counter) {
        let newDiv = document.createElement('div');
        newDiv.className = 'circle';
        newDiv.id = 'artwork6';

        newDiv.style.height = String(counter + 'px');
        newDiv.style.width = String(counter + 'px');
        newDiv.style.transform = String( `translate(${counter}px,${-counter /2}px)`);

        document.getElementsByClassName('artwork')[6].appendChild(newDiv);
    }

    for(let i=0; i <= 200; i += 10) {
        doObject7(i);
    }
}

function object8() {
    function doObject8(counter) {
        let newDiv = document.createElement('div');
        newDiv.className = 'box';

        newDiv.style.height = String(counter + 'px');
        newDiv.style.width = String(counter + 'px');
        newDiv.style.transform = String( `translate(${counter /2}px)`);
        newDiv.style.transform = String( `rotate(${counter}deg)`);

        document.getElementsByClassName('artwork')[7].appendChild(newDiv);
    }

    for(let i=0; i <= 200; i += 10) {
        doObject8(i);
    }
}

function object9() {
    function doObject9(counter) {
        let newDiv = document.createElement('div');
        let secondDiv = document.createElement('div');
        newDiv.className = 'box';
        secondDiv.className = 'circle';

        newDiv.style.height = String(counter + 'px');
        newDiv.style.width = String(counter + 'px');
        secondDiv.style.height = String(counter + 'px');
        secondDiv.style.width = String(counter + 'px');

        document.getElementsByClassName('artwork')[8].appendChild(newDiv);
        document.getElementsByClassName('artwork')[8].appendChild(secondDiv);
    }

    for(let i=50; i <= 200; i += 30) {
        doObject9(i);
    }
}