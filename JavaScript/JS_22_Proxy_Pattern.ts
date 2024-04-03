interface Restaurant {
  name: string;
  address: string;
  menuLength: number;
}

const restaurant: Restaurant = {
  name: 'Galaxy Burgers',
  address: '123 Kafe St. New York, NY 11111',
  menuLength: 53,
};

const restaurantProxy = new Proxy(restaurant, {
  get: (obj, prop: string) => {
    console.log(`The value of ${prop} is ${Reflect.get(obj, prop)}`);
    return Reflect.get(obj, prop);
  },

  set: (obj, prop: keyof Restaurant, value) => {
    if (prop === 'address' && typeof value !== 'string') {
      console.log('Restaurant address must be a string!');
      return false;
    }

    if (prop === 'menuLength' && value < 0) {
      console.log('Menu length cannot be less than 0!');
      return false;
    }

    console.log(`Set ${prop} from ${obj[prop]} ${value}`);

    return Reflect.set(obj, prop, value);
  },
});

restaurantProxy.name; // The value of name is Galaxy Burgers

restaurantProxy.menuLength = restaurantProxy.menuLength - 54; // Menu length cannot be less than 0!

restaurantProxy.address = '127 Burger Rd. Burger, NY 12345';
// Set address from 123 Kafe St. New York, NY 11111 to 127 Burger Rd. Burger, NY 12345
