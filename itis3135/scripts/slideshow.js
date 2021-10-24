$(document).ready(_ => {
  const images = ["homepage.png", "parsnip.jpg", "sitemap.png", "thedollar.jpg", "yourecringe.jpg", "pic.jpg"]
  let index = 0

  $("#left-arrow").click(e => {
    index = (index - 1) % images.length
    $("#slide").attr("src", `images/${images[index]}`)
  })

  $("#right-arrow").click(e => {
    index = (index + 1) % images.length
    $("#slide").attr("src", `images/${images[index]}`)
  })

  images.map((image, i) => {
     const element = $("<img>").attr("src", `images/${image}`)
     element.css("width", "100px")
     element.click(e => {
       $("#slide").attr("src", `images/${image}`)
       index = i
     })
     $("#gallery").append(element)
  })
})
