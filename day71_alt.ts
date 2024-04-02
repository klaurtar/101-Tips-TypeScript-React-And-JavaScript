type ExecuteFunction = (orders: string[], ...args: any[]) => void;

class OrderManager {
  private orders: any[];

  constructor() {
    this.orders = [];
  }

  execute(command: Command, ...args: any[]) {
    return command.execute(this.orders, ...args);
  }
}

class Command {
  constructor(execute: ExecuteFunction) {
    this.execute = execute;
  }

  public execute(orders: string[], ...args: any[]): void {
    this.execute(orders, ...args);
  }
}

const placeOrderCommand = (order: string, id: string): Command => {
  return new Command((orders) => {
    orders.push(id); // Assuming orders is an array of strings for simplicity
    console.log(`You have successfully ordered ${order} with id: ${id}`);
  });
};

const cancelOrderCommand = (id: string): Command => {
  return new Command((orders) => {
    const index = orders.findIndex((order) => order === id);
    if (index > -1) {
      orders.splice(index, 1); // Remove the order by index
      console.log(`You have cancelled your order with id: ${id}`);
    } else {
      console.log(`Order with id: ${id} not found.`);
    }
  });
};

const trackOrderCommand = (id: string): Command => {
  return new Command(() => {
    console.log(`Your order ${id} will arrive in 20 minutes`);
  });
};

const manager = new OrderManager();

manager.execute(placeOrderCommand('Pad Thai', '1234')); // "You have successfully ordered Pad Thai with id: 1234"
manager.execute(trackOrderCommand('1234')); // "Your order 1234 will arrive in 20 minutes"
manager.execute(cancelOrderCommand('1234')); // "You have cancelled your order with id: 1234"