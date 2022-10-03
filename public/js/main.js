//filter
let input = document.querySelector('#search')
input.addEventListener('keyup',filterCards)

function filterCards(){
  let section=document.querySelectorAll('.review-card')
  let txtValue;
  let filter = input.value.toUpperCase();
  let location = document.querySelectorAll('.template-info_location')

  console.log(filter,location)
  for (i = 0; i < location.length; i++) {
    txtValue=location[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      section[i].style.display = "";
    } else {
        section[i].style.display = "none";
    }
  }
}

