function GenerateRandomColors() {
  const hex = 0xffffff

  let number = Math.random() * hex

  number = Math.floor(number)

  number = number.toString(16)

  const color = number.padStart(6, 0)

  return `#${color}`
}

function ChangeBorderColor() {
  const borderColor = GenerateRandomColors()

  const card = (document.querySelector('div#card').style.borderColor =
    borderColor)
}

const url = 'https://api.github.com/users/LucasReisV1337'
const token = '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'

function GetGitHubApi(url, token) {
  axios
    .get(url, {
      Authorization: `token ${token}`
    })
    .then(response => {
      const location = response.data.location
      const company = response.data.company
      const login = response.data.login
      const followers = response.data.followers
      const following = response.data.following
      const repos = response.data.public_repos

      document.querySelector('p#location').textContent = location.substring(
        0,
        8
      ) //tamanho letras
      document.querySelector('p#company').textContent = `${company}`
      document.querySelector('a#user-github').textContent = login
      document.querySelector(
        'p#followers'
      ).textContent = `${followers} Seguidores`
      document.querySelector(
        'p#following'
      ).textContent = `${following} Seguindo`
      document.querySelector('p#repos').textContent = `${repos} Repositórios`
    })
    .catch(error => alert(`Error: ${error}`))
}

GetGitHubApi(url, token)

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '32px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(`main, .stats, .right-content`, { interval: 100 })
