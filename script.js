new Vue({
  el:'#myapp-bg',
  data:{
    isActive:true
  },
  methods:{
    toggleClass:function(event){
      this.isActive = !this.isActive;
    },
    changeFont:function(event){
      var titulo = document.querySelector(".titulo-1");
      var paragrafo = document.querySelector("textarea");
      //document.querySelectorAll(.paragrafo-1) estava dando erro de objeto
      //aqui o query selector all não estava funcionando
      //testar mais tarde com o arquivo baixado na minha maquina
      titulo.classList.toggle("titulo-2");
      paragrafo.classList.toggle("paragrafo-2");
    },
    AumentaFont:function(event){
      var wrapper = document.querySelector(".wrapper");
      //window.getComputedStyle retorna um objeto contendo o valor do método dda propriedade css
      var style = window.getComputedStyle(wrapper, null).getPropertyValue('font-size');
      // tornando o valor em númerico
      var fontSize = parseFloat(style);
      // a cada clique o font-size será somado com mais 4px
      wrapper.style.fontSize = (fontSize + 1) + "px";
    },
    DecreaseFont:function(event){
      var wrapper = document.querySelector(".wrapper");
      var style = window.getComputedStyle(wrapper, null).getPropertyValue('font-size');
      var fontSize = parseFloat(style);
      wrapper.style.fontSize = (fontSize - 1) + "px";
    },
    changeFontStyle:function(event){
    //pega a classe que envolve todos os P
     var paragrafo = document.querySelector("textarea");

     //aqui é a parte embolada
     //aqui nos verificamos se A div WrapperP não tem a classe Jsutify se não tiver então
     // a gente adiciona
     if(!paragrafo.classList.contains("justify")){
        paragrafo.classList.toggle("justify")
     }//mais bagunça agora kk
     // aqui verificamos se a WrapperP contem a classe justify E se ela não tem a classe align-right
     // se a wrapperP tiver a classe justify e não tiver a align-right então adicionamos ela
     else if (paragrafo.classList.contains("justify") && !paragrafo.classList.contains("align-right")) {
         paragrafo.classList.toggle("align-right")
     }
     // mas agora vem o problema, nos já adicionamos duas classes para o elemento
     //que é a align-right e justify, então verificamos se a wrapperP tem esses elementos
     //se tiver nos removemos essas duas e adicionamos a align-left
     // MAAASSSS eu tive que adicionar a justify também porque se não quando a pesssoa
     //cliclar no botão ele vai apenas adicionar a clase justify para só depois fazer o toggle
     else if (paragrafo.classList.contains("align-right") && paragrafo.classList.contains("justify")) {
        paragrafo.classList.remove("justify","align-right");
         paragrafo.classList.toggle("align-left")
         paragrafo.classList.add("justify")
     }
   }
  }
})
/****************************************************
Function que vai aumentando o height do text area conforme vai tendo mais texto
*************************************/
function autoHeight(elem){
  elem.style.height = "1px";
  elem.style.height = (elem.scrollHeight)+"px";
}
