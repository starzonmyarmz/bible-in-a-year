let data
let input = document.querySelector('[type="date"]')
let today = new Date()

input.valueAsDate = today

function formatDate(date) {
  return date.toLocaleDateString('en-US', {
    month: 'numeric',
    day: 'numeric'
  })
}

function generatePlan() {
  let html = ''
  let nextDay = input.valueAsDate

  data.map(({ passage }) => {
    nextDay.setDate(nextDay.getDate() + 1)
    html += `<li>${formatDate(nextDay)} - ${passage}</li>`
  })

  document.querySelector('ul').innerHTML = html
}

async function getVerses() {
  const response = await fetch("./verses.json")
  data = await response.json()

  generatePlan()
}

getVerses()

input.addEventListener('change', generatePlan)
