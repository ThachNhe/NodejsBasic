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
  const [user] = await pool.execute("select * from `users` where id =  ?", [
    userId,
  ]);
  console.log(">>>check userID : ", user);
  return res.send(JSON.stringify(user));
};

let createNewUser = async (req, res) => {
  //console.log("check post body : " , req.body);
  let { firstName, lastName, email, address } = req.body;
  await pool.execute(
    "INSERT INTO users(firstName, lastName, email, address) VALUES (?, ?, ? , ?)",
    [firstName, lastName, email, address]
  );
  return res.redirect('/');
};

let deleteUser  = async (req, res) => {
  let id = req.body.userId;
  await pool.execute("DELETE FROM users WHERE id =?", [id]);
  return res.redirect('/');
}

let editUser = async (req, res) => {
  let id = req.params.id;
  let [user] = await pool.execute("select * from users where id = ?", [id]);
  return res.render('update.ejs',{dataUser: user[0]});
}

let updateUser = async (req, res) => {
  let {firstName, lastName,email, address,id} = req.body;
  await pool.execute(
      "UPDATE users SET firstName =?, lastName =?, email =?, address =? WHERE id =?",
      [firstName, lastName, email, address, id]
    );
  return res.redirect('/');
}

module.exports = {
  getHomePage,
  getAboutPage,
  getDetailPage,
  createNewUser,
  deleteUser,
  editUser,
  updateUser
};
