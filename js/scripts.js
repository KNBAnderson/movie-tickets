// Business Logic for Ticket Prices ---------
function Ticket(movie, time, age) {
  this.movie = movie,
  this.time = time,
  this.age = age
}

Ticket.prototype.getPrice = function () {
  var ticketPrice = 5;
  if(this.age >18 && this.age <65) {
    ticketPrice += 5;
  }
  if(this.time === "regular") {
    ticketPrice +=2;
  }
  return this.price = ticketPrice;
};
