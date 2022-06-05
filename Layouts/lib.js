class HtmlSelector {
  selectHtml(element, eventListner, eventHandler){
    if(element){
      element.addEventListener(eventListner, (e) => {
        eventHandler(e)
      })
    }
  }
}
