// create a command class with the execute method

class OrderManager {
  constructor() {
    this.orders = [];
  }

  execute(command, ...args) {
    return command.execute(this.orders, ...args);
  }
}

class Command {
  constructor(execute) {
    this.execute = execute;
  }
}

// create different actions that implement the command class

function PlaceOrderCommand(order, id) {
  return new Command((orders) => {
    orders.push(id);
    return console.log(
      `You have successfully ordered ${order} (order id: ${id})`
    );
  });
}

const button = document.getElementById("placeOrderButton");

const manager = new OrderManager();

button.addEventListener("click", () => {
  manager.execute(new PlaceOrderCommand("Churros", "1"));
});
