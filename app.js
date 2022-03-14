let usersWord = ""
let oddList = document.getElementById("odd")
let evenList = document.getElementById("even")


// Now create function that will create a new element (<li>), put the input as its innerText and append it to the Odd List:
 
function handleSubmit() {
    // this line creates a new LI Element. We'll do this every time a word is submitted so this should stay the same
    let newListItem = document.createElement('LI')

    // this line sticks the user's word into the newly create LI Element so we'll keep this the same, as well.
    newListItem.innerText = usersWord

    // this line attaches/appends the element to the Odd List !!!THIS IS WHERE THE PROGRAM SHOULD DECIDE IF IT'S EVEN OR ODD!!!
    oddList.appendChild(newListItem)

    // these two lines will be the same
    usersWord = ""
    document.getElementById("even-odd-form").reset()
}


  // if( 1 === 1) {
  //   return true
  // } else {
  //   return false
  // }




  // ...more code here...updateWord()

  function handleSubmit() {
    let newListItem = document.createElement('LI')
    newListItem.innerText = usersWord

    /* compare remainder to 0 to see if even or not */
    if(usersWord.length % 2 === 0) {
        /*put word in even lists*/
        console.log
        evenList.appendChild(newListItem)
      } else {
        /*put word in odd list*/
        oddList.appendChild(newListItem)
        }

    usersWord = ""
    document.getElementById("even-odd-form").reset()
  }