const db = require('../util/database');
const bcrypt = require('bcrypt');

module.exports = class userData {
    constructor(firstname, lastname, email, password) {
        this.Fname = firstname;
        this.Lname = lastname;
        this.Email = email;
        this.Password = password;
    }
''
    Insert() {
      return bcrypt.hash(this.Password, 10)
      .then((hash) => {
       db.execute('INSERT INTO regLog(FIRSTNAME, LASTNAME, EMAIL, PASSWORD) VALUES (?, ?, ?, ?)', [this.Fname, this.Lname, this.Email, hash]);
      });
    }

    static checkDetails(x, y) {
        var dobj = db.execute('SELECT FIRSTNAME, PASSWORD FROM regLog WHERE FIRSTNAME=?', [x]);
        var password = dobj
        .then(rows => {
          var pw;
          rows[0].map(data => {pw = data.PASSWORD});
          return pw;  
        });
       return password
        .then((pw) => {
          return bcrypt.compare(y, pw);
        }); 
    }
}