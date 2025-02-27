// lexcal function 
// Accesing outer functions things  in inside function is lexi function 
function outer(){
    let name = "jello"

    function inner(){
        console.log(name);
    }

    inner()
}

// outer()

            // closure
// in lexi function when we return a function inside the function 
// when it returns the function it not only return that function only but all the scope
// in side all of them will retrun throught that retun function

function outside(){
    let song = "faded"

    function inside(){
        console.log("I am listinig to " , song);
        
    }

    return inside();
}

const music = outside()
