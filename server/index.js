const app = require("./app")
const PORT = process.env.PORT || 3000
const { db } = require("./db")

db
  .sync({})
  .then(() => {
    console.log("db up and running")
    app.listen(PORT, err => {
      if (err) throw err
      console.log(`

      =================================================
      Collective Haus listening at http://localhost:${PORT}
      =================================================

      `)
    })
  })
  .catch(console.error)
