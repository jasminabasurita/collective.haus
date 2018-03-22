/* global describe beforeEach it */

const { expect } = require("chai")
const { db } = require("../../db/index")
const User = db.model("user")

describe("User model", () => {
  beforeEach(() => {
    return db.sync({ force: true })
  })
  describe("instanceMethods", () => {
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

    describe("setPassword", () => {
      it("does nothing if the password is unchanged", () => {
        expect(User.setPassword(mayita)).to.equal(undefined)
      })
      it("Updating a user returns a user with an encrypted password", () => {
        const oldPass = mayita.password
        return mayita.update({ password: "up-the-pups" }).then(user => {
          expect(user.password).not.to.equal("up-the-pups")
          expect(user.password).not.to.equal(oldPass)
        })
      })
    })

    describe("checkPassword", () => {
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
