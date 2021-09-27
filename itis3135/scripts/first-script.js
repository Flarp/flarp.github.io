const name = prompt("What is your name?")
const mood = prompt("What are you up to today?")

const areWeLive = () => {
  alert("Yes")
}

const ssnInput = () => {
  prompt("Please input your SSN to continue")
  alert("Thanks!")
}

const debtPayOff = () => {
  prompt("Enter current student debt")
  prompt("Enter years left to pay off")
  alert("Our calculator indicates: Never")
}

const provideFeedback = () => {
  prompt("Please provide feedback about the website here")
  alert("Your feedback has been successfully ignored")
}

const haveAConversation = () => {
  ["Hi! I'm glad you are enjoying my website!",
  "I see you have clicked on the conversation button.",
  "This button indicates that a conversation is to be had.",
  "I, however, am just a script file and cannot converse.",
  "Goodbye."].map(alert)
}

const leftpad = num => num > 9 ? num : "0" + num

const date = new Date()
const currentDate = `${date.getFullYear()}-${leftpad(date.getMonth())}-${leftpad(date.getDay())}`

const currentTime = `${leftpad(date.getHours())}:${leftpad(date.getMinutes())}`

const ele = document.getElementById("manipulate")

ele.innerHTML += `<img src="images/noun.svg" style="width: 64px; height: 64px;">Today is ${currentDate}, and the time is: ${currentTime}.

  Earsplitting Dove Designs welcomes you, ${name}! We're glad you are ${mood}!`

ele.innerHTML += `
  <br><button onclick="areWeLive()">Are We Live</button>
  <br><button onclick="ssnInput()">Enter A Free Giveaway!</button>
  <br><button onclick="debtPayOff()">Student Debt Calculator</button>
  <br><button onclick="provideFeedback()">Provide Feedback</button>
  <br><button onclick="haveAConversation()">Have A Conversation</button>`
