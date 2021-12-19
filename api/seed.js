// run seed
const db = require('./controllers/db')
const { Users } = require('./models')

const users = [{name: "martin", lastName: "paladino", email: "mc@mc.com", password:"dsdsdeffsfd", salt:"dsfergvsdvs"},{name: "luna", lastName: "frodi", email: "dsc@mc.com", password:"dsdsdfffsfd", salt:"derbsdvs"}]

db.sync()
.then(Users.bulkCreate(users))
.then(() => process.exit(0))
.catch((err) => {
    console.log("Somethin went wrong on the seed process", err.message);
    process.exit(1);
  });

// cerra el proceso una vez completado con:
// process.exit();
