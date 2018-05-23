// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!

let table = $("#pixelCanvas");
  const colorPicker = $("#colorPicker");
  let cols = $("#inputWidth").val();
  let rows = $("#inputHeight").val();

//clear any prior existing table cells
  table.children().remove();

// To build table rows and columns
  for (let i = 0; i < rows; i++) {
    table.append("<tr></tr>");

    for (let j = 0; j < cols; j++)
      table
        .children().last().append("<td></td>");
  }

  //Event listener, using jQuery event delegation

  table.on("click", "td", function() {
    let color = $("input[type='color']#colorPicker").val();

    $(this).attr("bgcolor", color);
  });
}

const submitButton = $("input[type='submit']");

//when size is submitted, call makerGrid()
submitButton.click(function(event) {
  event.preventDefault(); //prevents the default action from submitting
  makeGrid();
});
