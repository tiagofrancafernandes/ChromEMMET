//Criada por Tiago França (http:/tiagofranca.com)
//Baseada no tutorial em: https://robots.thoughtbot.com/how-to-make-a-chrome-extension

// content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      // var firstHref = $("a[href^='http']").eq(0).attr("href");
	  var mensagemExt = "Extensão desenvolvida pot Tiago França.\nPara ver outros produtos de Tiago França visite TiagoFranca.com";
	alert(mensagemExt);

      console.log(firstHref);

      // This line is new!
      chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
    }
  }
);