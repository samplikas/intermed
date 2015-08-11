var regTotalDoc = 0;

if (location.pathname === '/registro') $(document).ready(getAllDoctors());


function regDoctor(){

  if (regValid() == true){
      var objectData = {
        nombreMed : document.getElementById('nombreMed').value,
        apellidoMed : document.getElementById('apellidoMed').value,
        correoMed : document.getElementById('correoMed').value,
        telefonoMed : document.getElementById('telefonoMed').value,
        especialidadMed : document.getElementById('especialidadMed').value,
        calleMed : document.getElementById('calleMed').value,
        numeroMed : document.getElementById('numeroMed').value,
        coloniaMed : document.getElementById('coloniaMed').value,
        cpMed : document.getElementById('cpMed').value,
        calle1Med : document.getElementById('calle1Med').value,
        calle2Med : document.getElementById('calle2Med').value,
        ciudadMed : document.getElementById('ciudadMed').value,
        estadoMed : document.getElementById('estadoMed').value,
      };
      var i = 0, medicosRegistrados = '';
      $.ajax({ 
         url: '/registro',
         type: 'POST',
         dataType: "json",
         cache: false,
         data: objectData,
         type: 'POST',
         success: function(data){
            clearInput();
            data.forEach(function(record) {
              var entreCalles = '';
              if (record.calle1 && record.calle2){
                var conjucion = 'y';
                if (record.calle2.length > 0 && record.calle2.toLowerCase().substring(0, 1) === 'i') conjucion = 'e';
                entreCalles = 'Entre ' + record.calle1 + ' ' + conjucion +' ' + record.calle2 + '<br/>';
              }
              try{
                medicosRegistrados += '<tr><th scope="row">' + (++regTotalDoc) + '</th><td>' + record.nombre + ' ' + record.apellido + '</td><td>' + record.correo + '</td><td>' + record.telefono + '</td><td><address><strong>' + record.calle + ' #' + record.numero + '</strong><br>' + entreCalles + record.colonia + ', CP:' + record.CP + '<br>' + record.ciudad + ', ' + record.estado + '<br></address></td><td>' + record.especialidad + '</td><td><button class="btn btn-info"><span class="glyphicon glyphicon-pencil"></span></button></td></tr>';
              } catch (ex) {
                console.log('PARSE ERROR (Registro 190) : ' + ex);
              }

            });
            document.getElementById('tbmedReg').innerHTML += medicosRegistrados;
         }
         , error: function(jqXHR, textStatus, err){
             console.error('AJAX ERROR: (registro 166) : ' + err );
         }
      });
  } else {
    alert("Faltan llenar unos datos.");
    document.getElementById(id).value = 'asfdasdfa';
  }
}

function regValid(){
  if (document.getElementById('nombreMed').value.length <= 0 ) return false;
  if (document.getElementById('apellidoMed').value.length <= 0 ) return false;
  if (document.getElementById('correoMed').value.length <= 0 ) return false;
  if (document.getElementById('telefonoMed').value.length <= 0 ) return false;
  if (document.getElementById('especialidadMed').value.length <= 0 ) return false;
  if (document.getElementById('calleMed').value.length <= 0 ) return false;
  if (document.getElementById('numeroMed').value.length <= 0 ) return false;
  if (document.getElementById('coloniaMed').value.length <= 0 ) return false;
  if (document.getElementById('cpMed').value.length <= 0 ) return false;
  if (document.getElementById('calle1Med').value.length <= 0 ) return false;
  if (document.getElementById('calle2Med').value.length <= 0 ) return false;
  if (document.getElementById('ciudadMed').value.length <= 0 ) return false;
  if (document.getElementById('estadoMed').value.length <= 0 ) return false;
  return true;
}

function getAllDoctors(){
  regTotalDoc = 0;
  var medicosRegistrados = '';
  $.ajax({ 
    url: '/registro',
    type: 'POST',
    dataType: "json",
    cache: false,
    data: {getAll : '1'},
    type: 'POST',
    success: function(data){
      data.forEach(function(record) {
            var entreCalles = '';
            if (record.calle1 && record.calle2){
              var conjucion = 'y';
              if (record.calle2.length > 0 && record.calle2.toLowerCase().substring(0, 1) === 'i') conjucion = 'e';
              entreCalles = 'Entre ' + record.calle1 + ' ' + conjucion +' ' + record.calle2 + '<br/>';
            }
            try{
              medicosRegistrados += '<tr><th scope="row">' + (++regTotalDoc) + '</th><td>' + record.nombre + ' ' + record.apellido + '</td><td>' + record.correo + '</td><td>' + record.telefono + '</td><td><address><strong>' + record.calle + ' #' + record.numero + '</strong><br>' + entreCalles + ' <br>' + record.colonia + ', CP:' + record.CP + '<br>' + record.ciudad + ', ' + record.estado + '<br></address></td><td>' + record.especialidad + '</td><td><button class="btn btn-info"><span class="glyphicon glyphicon-pencil"></span></button></td></tr>';
            } catch (ex) {
              console.error('PARSE ERROR (Registro 190) : ' + ex);
            }

      });
      document.getElementById('tbmedReg').innerHTML = medicosRegistrados;
    }
    , error: function(jqXHR, textStatus, err){
           console.error('AJAX ERROR: (registro 196) : ' + err );
    }
  });
}

function clearInput(){
    document.getElementById('nombreMed').value = '';
    document.getElementById('apellidoMed').value = '';
    document.getElementById('correoMed').value = '';
    document.getElementById('telefonoMed').value = '';
    document.getElementById('especialidadMed').value = '';
    document.getElementById('calleMed').value = '';
    document.getElementById('numeroMed').value = '';
    document.getElementById('coloniaMed').value = '';
    document.getElementById('cpMed').value = '';
    document.getElementById('calle1Med').value = '';
    document.getElementById('calle2Med').value = '';
    document.getElementById('ciudadMed').value = '';
    document.getElementById('estadoMed').value = '';
}