var summ=0;
var j=0;
var ar=Array();
var br=Array();
var cr=Array();
var tenge = 186;
 function calculateSumm(i) {
 var inputs='#slider'+i;
 var winCount = $(inputs).val();
 
 var c='#resultspan'+i;
 a='#select'+i+ ' li';
 b='#select'+i+' .active';
	if($(a).hasClass('active')) {
		var currentPack = parseInt($(b).attr('data-price'));
		var result = (tenge*winCount* currentPack)
		$(c).text(result.toString().replace(/(\d{1,3}(?=(\d{3})+(?:\.\d|\b)))/g,"\$1 ")+" тенге");
	}
 
	if($(a).hasClass('active')&& !$(inputs).hasClass('closedtab')) {
		var currentPack1 = parseInt($(b).attr('data-price'));
		var result1 = tenge*winCount*currentPack1;
		summ+=result1;
  
  
		if(winCount!=0){
			cr[j]=$(inputs).attr('name');
			ar[j]=winCount.toString(); 
			br[j]=$(b).attr('class').split(' active').toString().replace(/\,/g,"");
			console.log(cr[j]+":  "+ "Количество виртуальных серверов: " + ar[j].toString()+ ', Пакет: ' +br[j].toString());
			j++;  
		}
	$('.summ-result').text(summ.toString().replace(/(\d{1,3}(?=(\d{3})+(?:\.\d|\b)))/g,"\$1 ")+' тенге'); 
  
	}
 
if(i==14&winCount>=0){
	if(winCount<3){
		var result =0;
		summ+=0;
	}else{
		var result=tenge*winCount*0.1;
		summ+=result;
	}
	cr[j]=$(inputs).attr('name');
	ar[j]=winCount.toString(); 
	br[j]="";
	console.log(cr[j]+":  "+  ar[j].toString()+' Gb,' +br[j].toString());
	$('#resultspan14').text(result.toFixed(2).toString().replace(/(\d{1,3}(?=(\d{3})+(?:\.\d{2}|\b)))/g,"\$1 ")+" тенге");
	j++; 
}
if(i==15){
	cr[j]=$(inputs).attr('name');
	br[j]="";
	if(winCount==0) result=0;
	if(winCount==1){
		for(var i =0;i<4;i++){
			slct="#support" + i;
			if(i!=winCount)
				$(slct).css("display","none");
			else
				$(slct).css("display","block");
		}

		ar[j]="Developer";
		result=29*tenge;
		summ+=result;
	}else if(winCount==2){
		for(var i =0;i<4;i++){
			slct="#support" + i;
			if(i!=winCount)
				$(slct).css("display","none");
			else
				$(slct).css("display","block");
		}
		ar[j]="Standart";
		result=300*tenge;
		summ+=result;
	}else if(winCount==3){
		for(var i =0;i<4;i++){
			slct="#support" + i;
			if(i!=winCount)
				$(slct).css("display","none");
			else
				$(slct).css("display","block");
	}
		ar[j]="Professional Direct";
		result=1000*tenge;
		summ+=result;
	}else{
		for(var i =0;i<4;i++){
			slct="#support" + i;
			if(i!=winCount)
				$(slct).css("display","none");
			else
				$(slct).css("display","block");
		}
		ar[j]="Included";
	}
	console.log(cr[j]+":  "+  ar[j].toString()+ br[j].toString());
	$('#resultspan15').text(result.toString().replace(/(\d{1,3}(?=(\d{3})+(?:\.\d|\b)))/g,"\$1 ")+" тенге"); 
	j++; 
}
	
}


function changePack(i) {


var a='#select'+i.toString()+ ' li';
 $(a).click(function () {
  $(a).removeClass( "active" );
  $(this).addClass( "active" );
  var elClass = $(this).attr("class").split(' ');
 b= '#select'+i.toString();
 
  $('#selector'+i+' li').removeClass( "active" );
  $('#selector'+i+' .'+elClass).addClass( "active" ); 
  
  calculateSumm();
    });
 

}
///////////////////////////////////////////////////
////          Adding classess for identify     ///
/////////////////////////////////////////////////
$("#winbasiclink").click(function(){
 //for identify active slider
 $("#slider1").addClass("closedtab");
 $("#slider0").removeClass("closedtab");
 //for identify active pack
 $("#select0").addClass("selected");
 $("#select1").removeClass("selected");
 
});
$("#winstandartlink").click(function(){
 //for identify active slider
 $("#slider0").addClass("closedtab");
 $("#slider1").removeClass("closedtab");
 //for identify active pack
 $("#select1").addClass("selected");
 $("#select0").removeClass("selected");
});


$("#linbasiclink").click(function(){

 //for identify active slider
 $("#slider3").addClass("closedtab");
 $("#slider2").removeClass("closedtab");
 
 //for identify active pack
 $("#select2").addClass("selected");
 $("#select3").removeClass("selected");
});
$("#linstandartlink").click(function(){
 //for identify active slider
 $("#slider2").addClass("closedtab");
 $("#slider3").removeClass("closedtab");
 //for identify active pack
 $("#select3").addClass("selected");
 $("#select2").removeClass("selected");
});

//////////////// END OF IDENTIFY /////////////

for(var i=0;i<17;i++)
changePack(i); 
$( document ).ready(function(){
 
 $('#vmwareWindows, #vmwareLinux, #sqlServers,#biztalkServers, #oracleServers, #bandwidthSection, #supportSection, #linuxSupportSection').change(function(){ 
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
  for(var i=0;i<17;i++){ 
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
   for(var i=0;i<17;i++)
    calculateSumm(i);
   console.log(summ);
   
   j=0;
   
  });
  $('.ui-tabs ul li').click(function(){
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
   for(var i=0;i<17;i++)
    calculateSumm(i);
   console.log(summ);
   
   j=0;
   
  });
 
 })
 
});


 /* Create array and send to php */
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
	if(br[i]!=""){
		items[cr[i]]={'Пакет':br[i], 'количество':ar[i]};
		items[cr[ar.length+1]]={'ФИО': fio, 'Организация': organization, 'E-mail': email, 'Телефон': tel, 'Итого':summ+' долларов'};
		
	}else{
		items[cr[i]]={'Пакет':ar[i]};
	}
	
	
	
 } 
  $button=$(this).find("button[type='submit']");
  $button.addClass('ui-disabled');
 
  
	//var arr = JSON.stringify(items);
	//var arr1=JSON.parse(arr);
  //console.log(arr1);
    $.ajax({
        url: "virtualization-order.php",
        type: "POST",
        data: 'arr1='+$.toJSON(items),
        success: function(data){
            $button.removeClass('ui-disabled');
			alert(data);
			
        }
  });
   
   return false;
    
    });
});
