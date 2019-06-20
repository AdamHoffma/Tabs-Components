
class TabLink {
  constructor(element) {
    this.element = element
    const tabNumber = element.dataset
    this.itemElement = document.querySelectorAll(`.tabs-item[data-tab="${tabNumber}"]`)
    this.tabItem = new TabItem(this.itemElement)
    this.element.addEventListener('click', () =>
        this.select())
  };

  select() {
    const links = document.querySelectorAll(`.tabs-link[data-tab="${tabNumber}"]`)
    links.forEach((link, index) => {
      const tablink = new TabLink(link)
      if (index == defaultTab - 1) tablink.Select()
    })
    this.element = document.querySelector('.tabs-link-selected')
    links.select()
    this.itemElement.classList.toggle('.tabs-item')
  }
}
class TabItem {
  constructor(element) {
    this.element = element
  }
  select() {
    const items = document.querySelectorAll('.tabs-item')
    .tabs-items.select()
    this.element = document.querySelector('tabs-item-selected')
  }
}
links = document.querySelectorAll('.tabs-link')
  links.forEach(() => { 
    return new TabLink(links)

  })

 const defaultTab = tabNumber.dataset.defaultTab



