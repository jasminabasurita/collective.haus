import React from "react"

export default function(props) {
  const uInt = new Uint8Array(props.photo.data)
  console.log(uInt)
  const blob = new Blob([uInt], { type: "image/jpeg" })
  console.log(blob)
  const url = URL.createObjectURL(blob)
  return <img src={url} />
}
