import pool from "../configs/connectDB";

let getHomePage = async (req, res) => {
  let data = [];
  const [rows, fields] = await pool.execute("SELECT * FROM `users` ");
  return res.render("index.ejs", { dataUser: rows, test: "abc string test" });
};

let getAboutPage = (req, res) => {
  return res.send("I'm Thatch Nhe");
};

let getDetailPage = async (req, res) => {
  let userId = req.params.userId;
  const [user] = await pool.execute("select * from `users` where id =  ?", [userId]);
  console.log(">>>check userID : ", user );
  return res.send(JSON.stringify(user));
};


module.exports = {
  getHomePage,
  getAboutPage,
  getDetailPage
};
