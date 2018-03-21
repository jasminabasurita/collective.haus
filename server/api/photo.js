const router = require("express").Router()
const multer = require("multer")
const sharp = require("sharp")

const storage = multer.memoryStorage(),
  upload = multer({ storage })

router.post(
  "/",
  // Expecting A crop Object and a Photo
  upload.fields([
    { name: "crop", maxCount: 1 },
    { name: "photo", maxCount: 1 }
  ]),
  (req, res, next) => {
    // Extract Photo Buffer and Crop Object
    const photo = req.files.photo[0].buffer,
      crop = JSON.parse(req.body.crop)
    // Crop Image and Resize to 200x200, update user and send user
    sharp(photo)
      .extract(crop)
      .resize(200, 200)
      .toBuffer()
      .then(photo => req.user.update({ photo }))
      .then(user => res.json(user))
  }
)

module.exports = router
