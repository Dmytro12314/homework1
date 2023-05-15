//стоврити функцию яка будет приймати імя фільма ціну квитка та обраховувати скидку та вертати обєкт с цими данимми

const cinem = (movieName, ticketCost) => {
    const movie = {
      name: movieName,
  
      price: ticketCost,
  
      discount: function (discount) {
        this.price = this.price * discount;
      },
    };
    return movie;
  };
  
  const harryPotter = cinem("harryPotter", 25);
  
  console.log(harryPotter);
  
  harryPotter.discount(0.5);
  
  console.log(harryPotter);
  