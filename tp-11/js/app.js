var moduleNoticias = (function () {
  var allnoticias = [];

  function Noti() {
    this.id = 0;
    this.categoria = '';
    this.nombre = '';
    this.descripcion = '';
  }

  function agregarNoti(){
    var noticia = new Noti();
    noticia.id = $("#id-noti").val();
    console.log(noticia);
   
    validarDuplicidad(noticia);
    if(noticia.id == null || validarDuplicidad(noticia.id)!== false){
      alert('Disculpe, el ID de la noticia que esta tratando de ingresar, ya existe.');
    }
    else{
    	noticia.categoria = $("#categoria").val();
		noticia.nombre = $("#titulo").val();
		noticia.descripcion = $("#descripcion").val();
		allnoticias.push(noticia);

		localStorage.setItem("notis", JSON.stringify(allnoticias));
		
	  $("#id-noti").val("");
    $("#titulo").val("");
    $("#descripcion").val("");
    $("#categoria").val("Deporte");
    }
  }

  function validarDuplicidad(noticia){
    for(var i = 0; i < allnoticias.length; i++){
      if (noticia == allnoticias[i].id){
        return i;
      }
    }
    return false;
  }

  function ordenarNotis(){
    var tipo = $("#ordenar").val();
    allnoticias.sort(function(a, b){
      switch(tipo){
        case "az":
          if (a.nombre < b.nombre)
            return -1;
          if (a.nombre > b.nombre)
            return 1;
          return 0;
        break;

        case "za":
          if (a.nombre > b.nombre)
            return -1;
          if (a.nombre < b.nombre)
            return 1;
          return 0;
        break;

        case "id-asc":
          if (parseInt(a.id) < parseInt(b.id))
            return -1;
          if (parseInt(a.id) > parseInt(b.id))
            return 1;
          return 0;
        break;

        default "error":
          return console.log("Seleccione alguna opción válida");
        break;
      }    
    });
    mostrarNotis();
  }

  function mostrarNotis(){
  	$("#noticias").html("");
	for (var i = 0; allnoticias.length > i; i++) {
		var n = allnoticias[i];

		var un_div = document.createElement('div');
		var un_h1 = document.createElement('h1');
		var un_p = document.createElement('p');

		$(un_div).attr("id",'noti-'+ n.id);
		$(un_div).addClass(obtenClaseCategoria(n.categoria));
		$(un_h1).append(n.nombre);
		$(un_p).append(n.descripcion);
		$(un_div).append(un_h1);
		$(un_div).append(un_p);

		$("#noticias").append(un_div);	
    }
  }

  function obtenClaseCategoria(categoria){
  	var group_category = {
  		"Deporte":"articulo1",
  		"Economía":"articulo2",
  		"Farándula":"articulo3"
  	};
  	console.log(group_category[categoria]);
  	return group_category[categoria];
  }

  return {
  	 iniciarPrograma: function (){
        if(localStorage.getItem("notis")){
          allnoticias = JSON.parse(localStorage.getItem("notis"));
        }
        else{
        	allnoticias = [];
        }
        console.log('Agregando Noticias...');
        
        $('#agregar').on("click", function(){
        	console.log("agregar");
        	agregarNoti();
        });
        $('#ordenar').on("click", function(){
        	console.log("ordenar");
        	ordenarNotis();
        });
        $('#mostrar').on("click", function(){
        	console.log("mostrar");
        	mostrarNotis();
        });
      }
    };
})();
moduleNoticias.iniciarPrograma();