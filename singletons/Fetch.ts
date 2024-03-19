import { Data } from "../types";

let instance: Fetch;

class Fetch {
  constructor() {
    if (instance) {
      throw new Error("You can only create one instance!");
    }
    instance! = this;
  }

  async comments(): Promise<Data[]> {
    return await fetch("https://jsonplaceholder.typicode.com/comments").then(
      (res) => res.json()
    );
  }

  async users(): Promise<Data[]> {
    return await fetch("https://jsonplaceholder.typicode.com/users/").then(
      (res) => res.json()
    );
  }
}

export const get = new Fetch();
