import connection from "../configs/connectDB";

let getHomePage = (req, res) => {
  //logic
  let data = [];
  connection.query("SELECT * FROM `users` ", function (err, results, fields) {
    console.log("checking mysql");
    //console.log(results);
    results.map((row) => {
      data.push({
        id: row.id,
        email: row.email,
        firstName: row.firstName,
        lastName: row.lastName,
        address: row.address,
      });
    });
    console.log(">> check : ", data);
    return res.render("index.ejs", { dataUser: data, test: 'abc string test' });
  });
};


let getAboutPage = (req, res) => {
  return res.send("I'm Thach Nhe");
};

module.exports = {
  getHomePage,
  getAboutPage,
};
