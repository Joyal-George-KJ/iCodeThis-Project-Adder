const cardContainer = document.querySelector('.card-container')
const sidebarProjectContainer = document.querySelector('.sidebar-projects-container')
const formContainer = document.querySelector('.form-section')
const mainSection = document.querySelector('.main-section')
const addCard = document.querySelector('.add-card')

const addProject = () => {

    const projectTitle = document.getElementById('project-title')
    const projectColor = document.getElementById('color')

    // sidebar contents
    const sidebarProject = document.createElement("div")
    const bullet = document.createElement("div")
    const sidebarProjectTitle = document.createElement("p")

    sidebarProjectTitle.textContent = projectTitle.value

    bullet.style.backgroundColor = projectColor.value
    bullet.style["--pink"] = projectColor.value

    sidebarProject.classList.add('sidebar-project')
    bullet.classList.add('bullet')
    sidebarProjectTitle.classList.add('title')

    sidebarProject.appendChild(bullet)
    sidebarProject.appendChild(sidebarProjectTitle)

    sidebarProjectContainer.appendChild(sidebarProject)

    // mainbar cards
    const newCard = document.createElement("div")
    const cardPic = document.createElement("div")
    const cardTitle = document.createElement("p")

    cardTitle.textContent = projectTitle.value

    let thumbnail

    if(projectTitle.value.includes(" ")) {
        thumbnail = projectTitle.value.split(' ').map(i => i[0])
        cardPic.textContent = `${thumbnail[0]}${thumbnail[1]}`
    } else {
        cardPic.textContent = `${projectTitle.value[0]}`
    }


    cardPic.style.backgroundColor = projectColor.value
    cardPic.style.boxShadow = ` 0px 4px 20px 0px ${projectColor.value}`

    cardTitle.classList.add('card-title')
    cardPic.classList.add('pic')
    newCard.classList.add('card')

    newCard.appendChild(cardPic)
    newCard.appendChild(cardTitle)

    cardContainer.insertBefore(newCard, addCard)

    toggleForm()
}

const toggleForm = () => {
    formContainer.classList.toggle('toggleDisplay')
    mainSection.classList.toggle('display-none')
}