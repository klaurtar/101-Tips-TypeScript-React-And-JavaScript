interface User {
  name: string;
  id: `ID_${string}`;
}

type ObserverFunction = (data: any) => void;

class Observable {
  private observers: ObserverFunction[] = [];

  constructor() {
    this.observers = [];
  }

  subscribe(func: ObserverFunction) {
    this.observers.push(func);
  }

  unsubscribe(func: ObserverFunction) {
    this.observers = this.observers.filter((observer) => observer !== func);
  }

  notify(data: any): void {
    this.observers.forEach((observer) => observer(data));
  }
}

// ================= Implementation =================

const userLogInObserver = new Observable();

const logEvent = (data: any) => {
  console.log(`Logging Event: ${JSON.stringify(data)}`)
}

const signUserIn = (data: User) => {
  // Sign's user in
  console.log(`User signed in: ${data.name}`)
}

const updateUI = (data: User) => {
  // Update's UI for application
  console.log(`UI Updating...`)
}

userLogInObserver.subscribe(logEvent);
userLogInObserver.subscribe(signUserIn);
userLogInObserver.subscribe(updateUI)

const newUser = {
  name: 'Ryan',
  id: "ID_324",
}

userLogInObserver.notify(newUser)
// "Logging Event: {"name":"Ryan","id":"ID_324"}"
// "User signed in: Ryan"
// "UI Updating..." 