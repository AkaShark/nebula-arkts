import Connection from './Connection';


class Client {
  constructor() {

  }
  // http://39.107.119.113:7002
  // username: root, password: nebula,
  connect() {
    let con = new Connection({
      host: '39.107.119.113',
      prot: 7002,
      userName: 'root',
      password: 'nebula',
      space: ''
    });

    con.connect()
  }
}

export {
  Client
}