// const btn= document.querySelectorAll("button[id]")  // btn: array of buttons having an id
// console.log(btn)

function _$(elt) {
    return document.querySelector(elt)
}

let btn
let selected
let turn= 1

/*for (let i=0; i < 8; i++) {
    btn.push(_$(`button[id]`)) // "button[id=" + i + "]"
}*/

btn= document.querySelectorAll('button[id]')

// IIFE
/*let increment= function bonjour() {
    let count= 0;
    return function () {
        console.log(count)
        return count++;
    }
}();*/

function hello() {
    alert('hello world')
}

btn.forEach(element => element.addEventListener('click',
        function() {
            if (element.id[0] == turn) {
                let index= parseInt(element.id.slice(-1))  // The index of the element
                // If we have the same char as turn
                if (selected == element) {
                    // Deselect
                    // Remove previously colored thing
                    document.querySelectorAll('.choice').forEach(btn => {
                        btn.classList.remove("choice")
                    })
                    selected?.classList.remove('selected')
                    selected= undefined
                    return   // End the execution
                }
                if (!element.classList.contains('choice') && element.innerHTML != 0) {
                    // If the clicked element has no choice attribute, reset the actually selected piece          
                    // Remove previously colored thing
                    document.querySelectorAll('.choice').forEach(btn => {
                        btn.classList.remove("choice")
                    })
                    // Remove the previous selected thing
                    selected?.classList.remove('selected')
                    // Color adjacent thing
                    let prev= (index + 7) % 8, next= (parseInt(index) + 1) % 8
                    //  User interface
                    _$(`button[id="${turn + '-' + prev}"]`).classList.add("choice")
                    _$(`button[id="${turn + '-' + next}"]`).classList.add("choice")
                    selected= element;   // The node of the selected element
                    selected.classList.add('selected')
                }
                else if (selected) {    // If we selected a thing
                    // Second choice and move
                    // Remove previously colored thing
                    document.querySelectorAll('.choice').forEach(btn => {
                        btn.classList.remove("choice")
                    })

                    let actual= selected.id.slice(-1)   // Get the index of the actually selected thing
                    // let index= parseInt(element.id);    // Initialization
                    if (((actual - 1) + 8) % 8 == index) {
                        // Operation with negative 1
                        while (parseInt(selected.innerHTML) != 0) {
                            let next= document.getElementById(turn + "-" + index);
                            next.innerHTML=  parseInt(next.innerHTML) + 1    // Add 
                            selected.innerHTML= parseInt(selected.innerHTML) - 1    // Remove one from selected item
                            index=((index - 1) + 8) % 8
                            // sleep
                        }
                    }
                    else {
                        // Operation with positive 1
                        while (parseInt(selected.innerHTML) != 0) {
                            let next= document.getElementById(turn + "-" + index);
                            next.innerHTML=  parseInt(next.innerHTML) + 1    // Add 
                            selected.innerHTML= parseInt(selected.innerHTML) - 1    // Remove one from selected item
                            index= (index + 1) % 8
                            // sleep
                        }
                    }
                    // Change turn
                    selected.classList.remove('selected')
                    selected= undefined // Reinitialize
                    if (element.innerHTML != 0)
                        turn= turn == 1? 2: 1
                }
            }
        }
    )
)





