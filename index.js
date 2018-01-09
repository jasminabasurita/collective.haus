const app = require("./server")
const PORT = process.env.PORT || 3000
const { db } = require("./server/db")

db
  .sync({ })
  .then(() => {
    console.log("db up and running")
    app.listen(PORT, err => {
      if (err) throw err
      console.log(`

      =================================================
      Pay Yo Billz listening at http://localhost:${PORT}
      =================================================

      `)
    })
  })
  .catch(console.error)
