//Калькулятор стоймости сайта
function calculateVizitka() {
	var sumViz = 0;
	$("[id^=input-v]:checked").each(function(){
		var papa = $(this).attr("data-price");
		sumViz += parseFloat(papa);
		
	});
	
	
	$('#vizitkaForm').find('.summ-result').text(sumViz.toString().replace(/(\d{1,3}(?=(\d{3})+(?:\.\d|\b)))/g,"\$1 ")+' тенге');
	$("#getFixed>.dannie").html("<label for='vizitka-summ'>Сайт-визитка</label><input data-role='none' name='vizitka-summ' id='vizitka-summ' value='" + sumViz+' тг.' +"' type='text' disabled=''>" );
	$("#getFixed").css({'display': 'block'});
	$("#getFixed").find('a').attr('href','#viz-contact');
	return sumViz;
}

function calculateCorp() {
	var sumCorp = 0;
	$("[id^=input-corp]:checked").each(function(){
		var papa = $(this).attr("data-price");
		sumCorp += parseFloat(papa);
		
	});	
	$('#сorporativeForm').find('.summ-result').text(sumCorp.toString().replace(/(\d{1,3}(?=(\d{3})+(?:\.\d|\b)))/g,"\$1 ")+' тенге'); 
	$("#getFixed>.dannie").html("<label for='corporative-summ'>Корпоративный сайт</label><input data-role='none' name='corporative-summ' id='corporative-summ' value='" + sumCorp+' тг.' +"' type='text' disabled=''>" );
	$("#getFixed").css({'display': 'block'});
	$("#getFixed").find('a').attr('href','#corp-contact');
	return sumCorp;
}
function calculateShop() {
	var sumShop = 0;
	$("[id^=input-shop]:checked").each(function(){
		var papa = $(this).attr("data-price");
		sumShop += parseFloat(papa);
		
	});
	$('#shopstoreForm').find('.summ-result').text(sumShop.toString().replace(/(\d{1,3}(?=(\d{3})+(?:\.\d|\b)))/g,"\$1 ")+' тенге'); 
	$("#getFixed>.dannie").html("<label for='shopstore-summ'>Интернет магазин</label><input data-role='none' name='shopstore-summ' id='shopstore-summ' value='" + sumShop +' тг.' +"' type='text' disabled=''>" );
	$("#getFixed").css({'display': 'block'});
	$("#getFixed").find('a').attr('href','#shop-contact');
	return sumShop;
}
function calculateCat() {
	var sumCat = 0;
	$("[id^=input-cat]:checked").each(function(){
		var papa = $(this).attr("data-price");
		sumCat += parseFloat(papa);
		
	});
		$('#catalogForm').find('.summ-result').text(sumCat.toString().replace(/(\d{1,3}(?=(\d{3})+(?:\.\d|\b)))/g,"\$1 ")+' тенге'); 
		$("#getFixed>.dannie").html("<label for='catalog-summ'>Каталог товаров</label><input data-role='none' name='catalog-summ' id='catalog-summ' value='" + sumCat+' тг.' +"' type='text' disabled=''>" );
		$("#getFixed").css({'display': 'block'});
	$("#getFixed").find('a').attr('href','#cat-contact');
	return sumCat;
}

/*Knopka reset*/
$("button.ui-icon-refresh").click(function(){
	if($(this).hasClass("vizitka")) calculateVizitka();
	if($(this).hasClass("corp")) calculateCorp();
	if($(this).hasClass("shop")) calculateShop();
	if($(this).hasClass("cat")) calculateCat();
});

/*ВЫЗОВ ФУНКЦИИ*/
$( document ).ready(function(){
	$('#vizitkaForm').change(function(){					
		calculateVizitka();
	})
	
	$('#сorporativeForm').change(function(){					
		calculateCorp();
	})
	
	$('#shopstoreForm').change(function(){					
		calculateShop();
	})
	
	$('#catalogForm').change(function(){					
		calculateCat();
	})
})




/*
$( document ).ready(function(){
	$('#vizitkaForm').change(function(){					
		var data = $('#vizitkaForm').serializeArray(),
			obj = {};

		for(var i = 0; i < data.length; i++){
		   obj[data[i].name] = obj[data[i].name] || [];
		   obj[data[i].name].push(data[i].value);
		}    

		// your JSON string
		console.log(JSON.stringify(obj));
		
	})
})

*/			


///////////////////////////////////////////////////
// send json via ajax - Vizitka
$( document ).ready(function(){
	$(function() {
		$("#vizitkaForm").submit(function() {
			var data = $('#vizitkaForm').serializeArray(),vizitkaData = {}; 
				var summmViz=calculateVizitka();
				for(var i = 0; i < data.length-1; i++){
				vizitkaData[data[i].name] = vizitkaData[data[i].name] || [];
				vizitkaData[data[i].name].push(data[i].value);

				}
				//console.log($("#vizitka-summ").val());
				vizitkaData[data[data.length-1].name]=vizitkaData[data[data.length-1].name]|| [];
				vizitkaData[data[data.length-1].name].push(String(summmViz));
			
				$button=$(this).find("button[type='submit']");
				$button.addClass('ui-disabled');
			   
					$.ajax({
						url:'objposter.php'
						, type:'POST'
						, data:'vizitkaPhpData=' + $.toJSON(vizitkaData)
						, success: function(res) {
							$button.removeClass('ui-disabled');
							alert(res);
						}
					});
					console.log(JSON.stringify(vizitkaData));
					return false;
		});
	});

	// send json via ajax - Corporative
	$(function() {
		$("#сorporativeForm").submit(function() {
			var data = $('#сorporativeForm').serializeArray(),corporativeData = {}; 
				var summmCorp = calculateCorp();
				for(var i = 0; i < data.length-1; i++){
				corporativeData[data[i].name] = corporativeData[data[i].name] || [];
				corporativeData[data[i].name].push(data[i].value);

				}
				corporativeData[data[data.length-1].name]=corporativeData[data[data.length-1].name]|| [];
				corporativeData[data[data.length-1].name].push(String(summmCorp));
				
				$button=$(this).find("button[type='submit']");
				$button.addClass('ui-disabled');
				
					$.ajax({
						url:'objposter.php'
						, type:'POST'
						, data:'corpPhpData=' + $.toJSON(corporativeData)
						, success: function(res) {
							$button.removeClass('ui-disabled');
							alert(res);
						}
					});
					return false;
		});
	});

	$(function() {
		$("#shopstoreForm").submit(function() {
			var data = $('#shopstoreForm').serializeArray(),shopData = {}; 
				var summmShop = calculateShop();
				for(var i = 0; i < data.length-1; i++){
				shopData[data[i].name] = shopData[data[i].name] || [];
				shopData[data[i].name].push(data[i].value);

				}
				shopData[data[data.length-1].name]=shopData[data[data.length-1].name]|| [];
				shopData[data[data.length-1].name].push(String(summmShop));
				
				$button=$(this).find("button[type='submit']");
				$button.addClass('ui-disabled');
				
					$.ajax({
						url:'objposter.php'
						, type:'POST'
						, data:'shopPhpData=' + $.toJSON(shopData)
						, success: function(res) {
							$button.removeClass('ui-disabled');
							alert(res);
						}
					});
					return false;
		});
	});


	$(function() {
		$("#catalogForm").submit(function() {
			var data = $('#catalogForm').serializeArray(),catData = {}; 
				var summmCat = calculateCat();
				for(var i = 0; i < data.length-1; i++){
				catData[data[i].name] = catData[data[i].name] || [];
				catData[data[i].name].push(data[i].value);
				}
				catData[data[data.length-1].name]=catData[data[data.length-1].name]|| [];
				catData[data[data.length-1].name].push(String(summmCat));
				
				$button=$(this).find("button[type='submit']");
				$button.addClass('ui-disabled');
				
					$.ajax({
						url:'objposter.php'
						, type:'POST'
						, data:'catPhpData=' + $.toJSON(catData)
						, success: function(res) {
							$button.removeClass('ui-disabled');
							alert(res);
						}
					});
					return false;
		});
	});

	$(function() {
		$("#uniqeForm").submit(function() {
			var data = $('#uniqeForm').serializeArray(),uniqData = {}; 
				
				for(var i = 0; i < data.length-1; i++){
				uniqData[data[i].name] = uniqData[data[i].name] || [];
				uniqData[data[i].name].push(data[i].value);

				}
				$button=$(this).find("button[type='submit']");
				$button.addClass('ui-disabled');
				
					$.ajax({
						url:'objposter.php'
						, type:'POST'
						, data:'uniquePhpData=' + $.toJSON(uniqData)
						, success: function(res) {
							$button.removeClass('ui-disabled');
							alert(res);
						}
					});
					return false;
		});
	});


	//Order Call json compiler
	$(function() {
		$("#WebSiteCallOrderForm").submit(function() {
			var data = $('#WebSiteCallOrderForm').serializeArray(),siteCallOrderData = {}; 
				
				for(var i = 0; i < data.length; i++){
				siteCallOrderData[data[i].name] = siteCallOrderData[data[i].name] || [];
				siteCallOrderData[data[i].name].push(data[i].value);

				}
				
				$button=$(this).find("button[type='submit']");
				$button.addClass('ui-disabled');
				
					$.ajax({
						url:'objposter.php'
						, type:'POST'
						, data:'siteCallOrderDataPhpData=' + $.toJSON(siteCallOrderData)
						, success: function(res) {
							$button.removeClass('ui-disabled');
							alert(res);
						}
					});
					return false;
		});
	});

});








