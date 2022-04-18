const positionContainer = document.createElement('div')
positionContainer.style.position = 'absolute';
positionContainer.style.top = '0px'
positionContainer.style.left = '0px'
positionContainer.style.width = '100%'
positionContainer.id = 'position-target'
document.body.appendChild(positionContainer)

export default positionContainer
