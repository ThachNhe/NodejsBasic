let getHomePage = (req, res) => {
    //logic
    return res.render("index.ejs");
}

let getAboutPage = (req, res) => {
    return res.send("I'm Thach Nhe");
}

module.exports = {
    getHomePage,
    getAboutPage
}