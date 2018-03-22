/* global describe beforeEach it */

const { expect } = require("chai")
const { db } = require("../../db/index")
const User = db.model("user")

describe("User model", () => {
  beforeEach(() => {
    return db.sync({ force: true })
  })
  describe("instanceMethods", () => {
    describe("checkPassword", () => {
      let mayita

      beforeEach(() => {
        return User.create({
          username: "mayita",
          email: "mayita@pitty-palace.com",
          password: "snuggles4lyfe"
        }).then(user => {
          mayita = user
        })
      })

      it("returns true if the password is correct", () => {
        return mayita
          .checkPassword("snuggles4lyfe")
          .then(isValid => expect(isValid).to.be.equal(true))
      })

      it("returns false if the password is incorrect", () => {
        return mayita
          .checkPassword("snugglePunx")
          .then(isValid => expect(isValid).to.be.equal(false))
      })
    }) // end describe('checkPassword')
  }) // end describe('instanceMethods')
})
