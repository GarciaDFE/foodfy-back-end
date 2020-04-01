const express = require("express")
const nunjucks = require("nunjucks")

const server = express()
const receitas = require("./data")

server.use(express.static("src"))

server.set("view engine", "njk")

nunjucks.configure("views", {
   express: server,
   autoescape: false,
   noCache: true
})

server.get("/", function(req, res) {
   const homeReceitas = receitas.filter(function(item, key, receitas) {
      return receitas.indexOf(item) <= 5
   })
   return res.render("index", { items: homeReceitas })
})

server.get("/sobre", function(req, res) {
   return res.render("sobre")
})

server.get("/receitas", function(req, res) {
   return res.render("receitas", { items: receitas })
})

server.get("/receita/:index", function(req, res) {
   const indexRecipe = req.params.index
   return res.render("receita", { item: receitas[indexRecipe] })
})

server.listen(process.env.PORT || 5000)