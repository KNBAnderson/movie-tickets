// Business Logic for Ticket Prices ---------
function Ticket(movie, time, age) {
  this.movie = movie,
  this.time = time,
  this.age = age
}

Ticket.prototype.getPrice = function () {
  var ticketPrice = 5;
  if(this.age > 18 && this.age < 65) {
    ticketPrice += 5;
  }
  if(this.time === "regular") {
    ticketPrice +=2;
  }
  return this.price = ticketPrice;
};


$(function() {
var movie = '';
  $('.btn-dark').click(function() {
    $('#results').show();
    movie = $(this).val();
  });

  $('form').submit(function(e) {
    e.preventDefault();
    var time = $('input:radio[name=time]:checked').val()
    var age = $('input#age').val();
    var ticket = new Ticket(movie, time, age);
    ticket.getPrice();
    console.log(ticket);
    //need to show price div and put price into span there
  })

})
