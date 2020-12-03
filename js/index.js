$(function () {
  			$('[data-toggle="tooltip"]').tooltip();
  			$('[data-toggle="popover"]').popover();
  			$('.carousel').carousel({
  				interval: 2000
  			});
  			$('#contacto').on('show.bs.modal', function (e){
  					console.log('El modal se esta mostrando');
  					$('#ContactoBtn').removeClass('btn-outline-succes');
  					$('#ContactoBtn').addClass('btn-success');
  					$('#ContactoBtn').prop('disabled', true);
  			});
  			$('#contacto').on('shown.bs.modal', function (e){
  					console.log('El modal se mostró');
  			});
  			$('#contacto').on('hide.bs.modal', function (e){
  					console.log('El modal se oculta');
  			});
  			$('#contacto').on('hidden.bs.modal', function (e){
  					console.log('El modal se ocultó');
  					$('#ContactoBtn').prop('disabled', false);
  			});
		});