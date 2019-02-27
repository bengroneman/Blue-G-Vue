/**
 * Headless client-server processing
 */

const _front_page_content = {}

export default {
  getContent (cb) {
    setTimeout(() => cb(_front_page_content), 100)
  },

  fetchAndStoreContent () {
    fetch("http://localhost/cockpit-master/api/singletons/get/front_page_content?token=aa4454269b8b5840189731bfbea295")
    .then((response) => {
      response = response.json()
    })
    .then((data) => {
      _front_page_content = data
    })
    .catch((err) => {
      console.error(err)
    })
  }
}