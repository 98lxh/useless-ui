export function createPositionTarget() {
  let positionTarget = document.getElementById('position-target');
  if (positionTarget) return positionTarget
  positionTarget = document.createElement('div')
  positionTarget.id = 'position-target'
  positionTarget.style.position = 'absolute';
  positionTarget.style.top = '0px';
  positionTarget.style.left = '0px';
  positionTarget.style.width = '100%';
  document.body.appendChild(positionTarget)
  return positionTarget
}
