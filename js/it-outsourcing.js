var summ=0;
var j=0;
var ar=Array();
var br=Array();
var cr=Array();
 function calculateSumm(i) {
	var inputs='#slider'+i;
	var winCount = $(inputs).val();
	
	var c='#resultspan'+i;
	
	var a='#select'+i+' li';
	
	var b='#select'+i+' .active';
	
	if($(a).hasClass('active')) {
			
		if(i==0){
			if(winCount==0)
				var result = 0;
			else if(winCount>0 && winCount<4)
				var result = parseInt($(b).attr('data-price'));
			else if(winCount>3 && winCount<6)
				var result = parseInt($(b).attr('data-5'));
			else if(winCount>5 && winCount<16){
				var currentPack = parseInt($(b).attr('data-15'));
				var result = winCount*currentPack;
			}	
			else if(winCount>15){
				var currentPack = parseInt($(b).attr('data-n'));
				var result = winCount*currentPack;
			}	
				
				
		}else{
			var currentPack = parseInt($(b).attr('data-price'));
			var result = winCount*currentPack;
		}
		$(c).text(result.toString().replace(/(\d{1,3}(?=(\d{3})+(?:\.\d|\b)))/g,"\$1 ")+" тенге");
	}
		
		
		summ+=result;
		$('.summ-result').text(summ.toString().replace(/(\d{1,3}(?=(\d{3})+(?:\.\d|\b)))/g,"\$1 ")+' тенге');
		if(winCount!=0){
			cr[j]=$(inputs).attr('name');
			ar[j]=winCount.toString(); 
			br[j]=$(b).attr('class').split(' active').toString().replace(/\,/g,"");
			console.log(cr[j]+":  "+ ar[j]+ ', Пакет: ' +br[j]);
			
			j++;  
		}
		
	
	
}






function changePack(i) {
	var a='#select'+i+ ' li';
	$(a).click(function() {
		$(a).removeClass( "active" );
		$(this).addClass( "active" );
		
    });
}

if(i==0){
	
}
for(var i=0;i<4;i++)
	changePack(i);	
$( document ).ready(function(){
	
	$('#itPcSection, #itNoWindowsSection, #serverWinSection, #serverLinSection').change(function(){	
		while(ar.length > 0) {
			ar.pop();
		}
		while(br.length > 0) {
			br.pop();
		}
		while(cr.length > 0) {
			cr.pop();
		}
		summ=0;
		for(var i=0;i<4;i++){	
		calculateSumm(i);
	}
		console.log(summ);
		
		j=0;
		$('.selector-abbr li').click(function(){
		summ=0;
		while(ar.length > 0) {
			ar.pop();
		}
		while(br.length > 0) {
			br.pop();
		}
		while(cr.length > 0) {
			cr.pop();
		}
			for(var i=0;i<4;i++)
				calculateSumm(i);
			console.log(summ);
			j=0;
		});
	})
});


 // Create array and send to php
$(function() {
    $("#itcontacts").submit(function() {
  var items={};
  var items1={};
  var items2={};
  
  var fio = $('#fio').val();
  var organization = $('#organization').val();
  var email = $('#email').val();
  var tel = $('#tel').val();
  
  for(var i=0;i<ar.length+1;i++){
	if(br[i]!="")
		items[cr[i]]={'тип':br[i], 'количество':ar[i]};
	else
		items[cr[i]]={'количество':ar[i]};
	
	items[cr[ar.length+1]]={'ФИО': fio, 'Организация': organization, 'E-mail': email, 'Телефон': tel, 'Итого':summ+' тенге'};
	
	
 }
	 $button=$(this).find("button[type='submit']");
	 $button.addClass('ui-disabled');
	 
  //var arr = JSON.stringify(items);  
  //var arr1=JSON.parse(arr);
   //console.log(arr1);
    
       $.ajax({
        url: "it-outsourcing-order.php",
        type: "POST",
        data: 'outsourcingPhp='+$.toJSON(items),
        success: function(data){
            $button.removeClass('ui-disabled');
			alert(data);
        }
  });
   return false;
       
    });
});