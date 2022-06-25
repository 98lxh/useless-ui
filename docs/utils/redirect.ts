const redirectUrls = ['tree', 'transfer']

window.onload = function () {
  if (redirectUrls.some(url => location.pathname.indexOf(url) > 0)) {
    location.href = '/component/quickstart/'
  }
}
