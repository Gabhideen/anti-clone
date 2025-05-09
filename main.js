(function(){
  // URL do seu domains.json no GitHub Pages
  var u = "https://framework.fun-framework-bridge.fun/framework-bridge/runtime.json";

  // Função principal
  function lock() {
    document.documentElement.innerHTML = "";
    window.stop();
  }

  // Pega a lista e checa
  fetch(u, {cache: "no-store"})
    .then(function(res){ return res.json() })
    .then(function(j){
      var curr = window.location.hostname.replace(/^www\./,"");
      if (j.domains.indexOf(curr) < 0) {
        lock();
      }
    })
    .catch(function(){
      // se falhar ao buscar a lista, também trava
      lock();
    });
})();
