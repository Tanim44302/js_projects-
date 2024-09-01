const sidebarBtn = document.querySelector(`nav .sidebarBtn`)
const sidebar = document.querySelector(`.sidebar`)
const cancelBtn = document.querySelector(`.cancel`)


const openSidebar = () => {
    sidebar.classList.add(`active`)

}


sidebarBtn.addEventListener('click', openSidebar)


const closeSidebar = (event) => {

    const {target} = event
    if((target.classList.contains(`sidebar`) || target.classList.contains(`cancel`)) ){

        sidebar.classList.remove(`active`)
    }

}



cancelBtn.addEventListener(`click`, closeSidebar)

sidebar.addEventListener(`click`, closeSidebar)