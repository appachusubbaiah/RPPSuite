$(document).ready(function(){
	var currPage=0;
	var startItem=0;
	var endItem=4;
	$("#tbl").hide();
	$("#tbl1").hide();
	$("#tbl2").hide();
	$("#selContainer").hide();
	$("#divBrokSelect").hide();
	$("#logo").hide();
	$('html,body').css('cursor','wait');
	
	$.get("http://awswauto01d:8080/RppSuiteApi/api/rpp/brokreasons", function(data, status){
		$("#selectBrok").append('<option value="All" selected> All </option>');
		for (var i = 0, len = data.length; i < len; i++) {
			console.log("brok reasons = " + data[i]['BrokenReason']);
			$("#selectBrok").append('<option value="' + data[i]['BrokenReason'] + '">' + data[i]['BrokenReason'] + '</option>');
		}
	});
	
	$.get("http://awswauto01d:8080/RppSuiteApi/api/rpp/", function(data, status){
		var item = '<s:property value="investors" escapeJavaScript="true"/>';
		//var partsArray = item.split(',');
		console.log(item);
		$("#tbl").show();
		$("#tbl1").show();
		$("#tbl2").show();
		$("#selContainer").show();
		$("#divBrokSelect").show();
		$("#logo").show();
		  
		
		for (var i = 0, len = data.length; i < len; i++) {
	        console.log(data[i]['Period']);
	        var perArpp= (data[i]['T And I LoanCount']==0)?0:data[i]['Total Active Repayment Plans']/data[i]['T And I LoanCount'] *100;
	        var perRppOrig=(data[i]['Total Active Repayment Plans']==0)?0:data[i]['RppOriginated']/data[i]['Total Active Repayment Plans'] *100 ;
	        var perRppComp=(data[i]['Total Active Repayment Plans']==0)?0:data[i]['RppSatisfied']/data[i]['Total Active Repayment Plans'] *100 ;
	        var perRppBrok=(data[i]['Total Active Repayment Plans']==0)?0:data[i]['RppBroken']/data[i]['Total Active Repayment Plans'] *100 ;
	        var perLnsWthPymts= (data[i]['Total Active Repayment Plans']==0)?0:data[i]['LoansWithPayments']/data[i]['Total Active Repayment Plans'] *100 ;
	        var perTax = (data[i]['Total Active Repayment Plans']==0)?0:data[i]['Tax']/data[i]['Total Active Repayment Plans'] *100 ;
	        var perIns = (data[i]['Total Active Repayment Plans']==0)?0:data[i]['Ins']/data[i]['Total Active Repayment Plans'] *100 ;
	        var perTaxIns = (data[i]['Total Active Repayment Plans']==0)?0:data[i]['TaxAndIns']/data[i]['Total Active Repayment Plans'] *100 ;
	        
	        var BrokTotal=data[i]['NewDisbursementTandI']+data[i]['NewDisbursementTax']+data[i]['NewDisbursementIns']
	        	+data[i]['61Daysdelq']+data[i]['FailedSignedAgreement']+data[i]['Death']
        		+data[i]['Vacancy']+data[i]['Bankruptcy']+data[i]['HOA'];
    		
	        var perNDTI=(BrokTotal==0)?0:data[i]['NewDisbursementTandI']/BrokTotal *100;
	        var perNDT=(BrokTotal==0)?0:data[i]['NewDisbursementTax']/BrokTotal *100 ;
	        var perNDI=(BrokTotal==0)?0:data[i]['NewDisbursementIns']/BrokTotal *100 ;
	        var perdelq=(BrokTotal==0)?0:data[i]['61Daysdelq']/BrokTotal *100 ;
	        var perFailSA=(BrokTotal==0)?0:data[i]['FailedSignedAgreement']/BrokTotal *100 ;
	        var perDeath=(BrokTotal==0)?0:data[i]['Death']/BrokTotal *100 ;
	        var perVac=(BrokTotal==0)?0:data[i]['Vacancy']/BrokTotal *100 ;
	        var perBkrptcy=(BrokTotal==0)?0:data[i]['Bankruptcy']/BrokTotal *100 ;
	        var perHOA=(BrokTotal==0)?0:data[i]['HOA']/BrokTotal *100 ;

	        
	        var ActUBrokTot = data[i]['1Month']+data[i]['2Month']+data[i]['3Month']+data[i]['4Month']+data[i]['5Month']
	        +data[i]['6Month']+data[i]['7Month']+data[i]['8Month']+data[i]['9Month']+data[i]['10Month']+data[i]['11Month']
	        +data[i]['12Month']+data[i]['13-18Month']+data[i]['19-24Month']+data[i]['>24Month'];
	        
	        var per1M=(ActUBrokTot==0)?0:data[i]['1Month']/ActUBrokTot *100;
	        var per2M=(ActUBrokTot==0)?0:data[i]['2Month']/ActUBrokTot *100;
	        var per3M=(ActUBrokTot==0)?0:data[i]['3Month']/ActUBrokTot *100;
	        var per4M=(ActUBrokTot==0)?0:data[i]['4Month']/ActUBrokTot *100;
	        var per5M=(ActUBrokTot==0)?0:data[i]['5Month']/ActUBrokTot *100;
	        var per6M=(ActUBrokTot==0)?0:data[i]['6Month']/ActUBrokTot *100;
	        var per7M=(ActUBrokTot==0)?0:data[i]['7Month']/ActUBrokTot *100;
	        var per8M=(ActUBrokTot==0)?0:data[i]['8Month']/ActUBrokTot *100;
	        var per9M=(ActUBrokTot==0)?0:data[i]['9Month']/ActUBrokTot *100;
	        var per10M=(ActUBrokTot==0)?0:data[i]['10Month']/ActUBrokTot *100;
	        var per11M=(ActUBrokTot==0)?0:data[i]['11Month']/ActUBrokTot *100;
	        var per12M=(ActUBrokTot==0)?0:data[i]['12Month']/ActUBrokTot *100;
	        var per13M=(ActUBrokTot==0)?0:data[i]['13-18Month']/ActUBrokTot *100;
	        var per14M=(ActUBrokTot==0)?0:data[i]['19-24Month']/ActUBrokTot *100;
	        var per15M=(ActUBrokTot==0)?0:data[i]['>24Month']/ActUBrokTot *100;

	        var brokDlqSa = data[i]['61Daysdelq'] + data[i]['FailedSignedAgreement'];
	        var perBrokDlqSa= (ActUBrokTot==0)?0:brokDlqSa/ActUBrokTot*100;
	        var brokLessThreeM=data[i]['1Month']+data[i]['2Month']+data[i]['3Month'];
	        var perbrokLess = (ActUBrokTot==0)?0:brokLessThreeM/ActUBrokTot*100;         
		        
	        var row = "<tr>";
	        row += "<td>" + data[i]['Period'] + "</td>";
	        row += "<td>" + data[i]['T And I LoanCount'] + "</td>";
	        row += "<td>" + data[i]['RppOriginated'] + "</td>"
        	+  "<td>" + perRppOrig.toFixed(2)  + "%" + "</td>";
	        row += "<td>" + data[i]['Total Active Repayment Plans'] + "</td>"
        	+ "<td>" + perArpp.toFixed(2) + "%"+ "</td>";
	        row += "<td>" + data[i]['PotentialNewPlans'] + "</td>";
	        
	        row += "<td>" + data[i]['RppSatisfied'] + "</td>"+  "<td>" + perRppComp.toFixed(2) + "%" + "</td>";
	        row += "<td>" + data[i]['RppBroken'] + "</td>" + "<td>" + perRppBrok.toFixed(2) + "%" + "</td>";
	        row += "<td>" + brokDlqSa + "</td>" + "<td>" + perBrokDlqSa.toFixed(2) + "%" + "</td>";
	        row += "<td>" + brokLessThreeM + "</td>" + "<td>" + perbrokLess.toFixed(2) + "%" + "</td>";
	        row += "<td>" + data[i]['TotalPayments'] + "</td>";
	        row += "<td>" + data[i]['LoansWithPayments'] + "</td>";
	        row += "<td>" + perLnsWthPymts.toFixed(2) + "%" + "</td>";
	        row += "<td>" + data[i]['Tax'] + "</td>";
	        row += "<td>" + perTax.toFixed(2) + "%" + "</td>";
	        row += "<td>" + data[i]['Ins'] + "</td>";
	        row += "<td>" + perIns.toFixed(2) + "%" + "</td>";
	        row += "<td>" + data[i]['TaxAndIns'] + "</td>";
	        row += "<td>" + perTaxIns.toFixed(2) + "%" + "</td>";

	        row += "</tr>";
	        $('#data').append(row);
	        
	        var row1 = "<tr>";
	        row1 += "<td>" + data[i]['Period'] + "</td>";
	        row1 += "<td>" + data[i]['NewDisbursementTandI'] + "</td>"
        	+ "<td>" + perNDTI.toFixed(2) + "%"+ "</td>";
        	row1 += "<td>" + data[i]['NewDisbursementIns'] + "</td>"
        	+  "<td>" + perNDI.toFixed(2)  + "%" + "</td>";
        	row1 += "<td>" + data[i]['NewDisbursementTax'] + "</td>"+  "<td>" + perNDT.toFixed(2) + "%" + "</td>";
        	row1 += "<td>" + data[i]['61Daysdelq'] + "</td>" + "<td>" + perdelq.toFixed(2) + "%" + "</td>";
        	row1 += "<td>" + data[i]['FailedSignedAgreement'] + "</td>" + "<td>" + perFailSA.toFixed(2) + "%" + "</td>";
        	row1 += "<td>" + data[i]['Death'] + "</td>" + "<td>" + perDeath.toFixed(2) + "%" + "</td>";
        	row1 += "<td>" + data[i]['Vacancy'] + "</td>" + "<td>" + perVac.toFixed(2) + "%" + "</td>";
        	row1 += "<td>" + data[i]['Bankruptcy'] + "</td>" + "<td>" + perBkrptcy.toFixed(2) + "%" + "</td>";
        	row1 += "<td>" + data[i]['HOA'] + "</td>" + "<td>" + perHOA.toFixed(2) + "%" + "</td>";
        	row1 += "<td>" + BrokTotal + "</td>";
        	row1 += "</tr>";
        	$('#data1').append(row1);

        	var row2 = "<tr>";
	        row2 += "<td>" + data[i]['Period'] + "</td>";
	        row2 += "<td>" + data[i]['1Month'] + "</td>"
        	+ "<td>" + per1M.toFixed(2) + "%"+ "</td>";
        	row2 += "<td>" + data[i]['2Month'] + "</td>"
        	+  "<td>" + per2M.toFixed(2)  + "%" + "</td>";
        	row2 += "<td>" + data[i]['3Month'] + "</td>"+  "<td>" + per3M.toFixed(2) + "%" + "</td>";
        	row2 += "<td>" + data[i]['4Month'] + "</td>" + "<td>" + per4M.toFixed(2) + "%" + "</td>";
        	row2 += "<td>" + data[i]['5Month'] + "</td>" + "<td>" + per5M.toFixed(2) + "%" + "</td>";
        	row2 += "<td>" + data[i]['6Month'] + "</td>" + "<td>" + per6M.toFixed(2) + "%" + "</td>";
        	row2 += "<td>" + data[i]['7Month'] + "</td>" + "<td>" + per7M.toFixed(2) + "%" + "</td>";
        	row2 += "<td>" + data[i]['8Month'] + "</td>" + "<td>" + per8M.toFixed(2) + "%" + "</td>";
        	row2 += "<td>" + data[i]['9Month'] + "</td>" + "<td>" + per9M.toFixed(2) + "%" + "</td>";
        	row2 += "<td>" + data[i]['10Month'] + "</td>" + "<td>" + per10M.toFixed(2) + "%" + "</td>";
        	row2 += "<td>" + data[i]['11Month'] + "</td>" + "<td>" + per11M.toFixed(2) + "%" + "</td>";
        	row2 += "<td>" + data[i]['12Month'] + "</td>" + "<td>" + per12M.toFixed(2) + "%" + "</td>";
        	row2 += "<td>" + data[i]['13-18Month'] + "</td>" + "<td>" + per13M.toFixed(2) + "%" + "</td>";
        	row2 += "<td>" + data[i]['19-24Month'] + "</td>" + "<td>" + per14M.toFixed(2) + "%" + "</td>";
        	row2 += "<td>" + data[i]['>24Month'] + "</td>" + "<td>" + per15M.toFixed(2) + "%" + "</td>";
        	row2 += "<td>" + ActUBrokTot + "</td>";
        	row2 += "</tr>";
        	$('#data2').append(row2);	
	    }
		
		
		/*
		 New Code
		 */
		
		$.fn.paginate(endItem);
		/*
		 
		 */
		$('html,body').css('cursor','default');
	});

	$('#investors').on('change', function() {
		var inv =$('#investors').val();
		var dta = {"InvestorName": inv};
		console.log("OnChange "+inv);
		if(inv==-1 || inv=="All"){
			$('html,body').css('cursor','wait');
			startItem=0;
			endItem=$('#selRows').val();
			var str = "'";    
			$("#investors option").each(function () {    
			    str =str + "''" +  $(this).text() + "'',";    
			}); 
			str = str.slice(0, -1);
			str=str + "'"
			//console.log("Str = " +str);   
			dta = {"InvestorName": str};
			$.ajax({
			    type: "POST",
			    url: "http://awswauto01d:8080/RppSuiteApi/api/rpp/",
			    // The key needs to match your method's input parameter (case-sensitive).
			    data: JSON.stringify(dta),
			    contentType: "application/json; charset=utf-8",
			    dataType: "json",
			    success: function(data)
			    {
			    	$("#data").empty();
			    	$("#data1").empty();
			    	$("#data2").empty();
			    	
			    	for (var i = 0, len = data.length; i < len; i++) {
				        console.log(data[i]['Period']);
				        var perArpp= (data[i]['T And I LoanCount']==0)?0:data[i]['Total Active Repayment Plans']/data[i]['T And I LoanCount'] *100;
				        var perRppOrig=(data[i]['Total Active Repayment Plans']==0)?0:data[i]['RppOriginated']/data[i]['Total Active Repayment Plans'] *100 ;
				        var perRppComp=(data[i]['Total Active Repayment Plans']==0)?0:data[i]['RppSatisfied']/data[i]['Total Active Repayment Plans'] *100 ;
				        var perRppBrok=(data[i]['Total Active Repayment Plans']==0)?0:data[i]['RppBroken']/data[i]['Total Active Repayment Plans'] *100 ;
				        var perLnsWthPymts= (data[i]['Total Active Repayment Plans']==0)?0:data[i]['LoansWithPayments']/data[i]['Total Active Repayment Plans'] *100 ;
				        var perTax = (data[i]['Total Active Repayment Plans']==0)?0:data[i]['Tax']/data[i]['Total Active Repayment Plans'] *100 ;
				        var perIns = (data[i]['Total Active Repayment Plans']==0)?0:data[i]['Ins']/data[i]['Total Active Repayment Plans'] *100 ;
				        var perTaxIns = (data[i]['Total Active Repayment Plans']==0)?0:data[i]['TaxAndIns']/data[i]['Total Active Repayment Plans'] *100 ;
				        
				        var BrokTotal=data[i]['NewDisbursementTandI']+data[i]['NewDisbursementTax']+data[i]['NewDisbursementIns']
				        	+data[i]['61Daysdelq']+data[i]['FailedSignedAgreement']+data[i]['Death']
			        		+data[i]['Vacancy']+data[i]['Bankruptcy']+data[i]['HOA'];
			    		
				        var perNDTI=(BrokTotal==0)?0:data[i]['NewDisbursementTandI']/BrokTotal *100;
				        var perNDT=(BrokTotal==0)?0:data[i]['NewDisbursementTax']/BrokTotal *100 ;
				        var perNDI=(BrokTotal==0)?0:data[i]['NewDisbursementIns']/BrokTotal *100 ;
				        var perdelq=(BrokTotal==0)?0:data[i]['61Daysdelq']/BrokTotal *100 ;
				        var perFailSA=(BrokTotal==0)?0:data[i]['FailedSignedAgreement']/BrokTotal *100 ;
				        var perDeath=(BrokTotal==0)?0:data[i]['Death']/BrokTotal *100 ;
				        var perVac=(BrokTotal==0)?0:data[i]['Vacancy']/BrokTotal *100 ;
				        var perBkrptcy=(BrokTotal==0)?0:data[i]['Bankruptcy']/BrokTotal *100 ;
				        var perHOA=(BrokTotal==0)?0:data[i]['HOA']/BrokTotal *100 ;

				        
				        var ActUBrokTot = data[i]['1Month']+data[i]['2Month']+data[i]['3Month']+data[i]['4Month']+data[i]['5Month']
				        +data[i]['6Month']+data[i]['7Month']+data[i]['8Month']+data[i]['9Month']+data[i]['10Month']+data[i]['11Month']
				        +data[i]['12Month']+data[i]['13-18Month']+data[i]['19-24Month']+data[i]['>24Month'];
				        
				        var per1M=(ActUBrokTot==0)?0:data[i]['1Month']/ActUBrokTot *100;
				        var per2M=(ActUBrokTot==0)?0:data[i]['2Month']/ActUBrokTot *100;
				        var per3M=(ActUBrokTot==0)?0:data[i]['3Month']/ActUBrokTot *100;
				        var per4M=(ActUBrokTot==0)?0:data[i]['4Month']/ActUBrokTot *100;
				        var per5M=(ActUBrokTot==0)?0:data[i]['5Month']/ActUBrokTot *100;
				        var per6M=(ActUBrokTot==0)?0:data[i]['6Month']/ActUBrokTot *100;
				        var per7M=(ActUBrokTot==0)?0:data[i]['7Month']/ActUBrokTot *100;
				        var per8M=(ActUBrokTot==0)?0:data[i]['8Month']/ActUBrokTot *100;
				        var per9M=(ActUBrokTot==0)?0:data[i]['9Month']/ActUBrokTot *100;
				        var per10M=(ActUBrokTot==0)?0:data[i]['10Month']/ActUBrokTot *100;
				        var per11M=(ActUBrokTot==0)?0:data[i]['11Month']/ActUBrokTot *100;
				        var per12M=(ActUBrokTot==0)?0:data[i]['12Month']/ActUBrokTot *100;
				        var per13M=(ActUBrokTot==0)?0:data[i]['13-18Month']/ActUBrokTot *100;
				        var per14M=(ActUBrokTot==0)?0:data[i]['19-24Month']/ActUBrokTot *100;
				        var per15M=(ActUBrokTot==0)?0:data[i]['>24Month']/ActUBrokTot *100;

				        var brokDlqSa = data[i]['61Daysdelq'] + data[i]['FailedSignedAgreement'];
				        var perBrokDlqSa= (ActUBrokTot==0)?0:brokDlqSa/ActUBrokTot*100;
				        var brokLessThreeM=data[i]['1Month']+data[i]['2Month']+data[i]['3Month'];
				        var perbrokLess = (ActUBrokTot==0)?0:brokLessThreeM/ActUBrokTot*100;         
					        
				        var row = "<tr>";
				        row += "<td>" + data[i]['Period'] + "</td>";
				        row += "<td>" + data[i]['T And I LoanCount'] + "</td>";
				        row += "<td>" + data[i]['RppOriginated'] + "</td>"
			        	+  "<td>" + perRppOrig.toFixed(2)  + "%" + "</td>";
				        row += "<td>" + data[i]['Total Active Repayment Plans'] + "</td>"
			        	+ "<td>" + perArpp.toFixed(2) + "%"+ "</td>";
				        row += "<td>" + data[i]['PotentialNewPlans'] + "</td>";
				        
				        row += "<td>" + data[i]['RppSatisfied'] + "</td>"+  "<td>" + perRppComp.toFixed(2) + "%" + "</td>";
				        row += "<td>" + data[i]['RppBroken'] + "</td>" + "<td>" + perRppBrok.toFixed(2) + "%" + "</td>";
				        row += "<td>" + brokDlqSa + "</td>" + "<td>" + perBrokDlqSa.toFixed(2) + "%" + "</td>";
				        row += "<td>" + brokLessThreeM + "</td>" + "<td>" + perbrokLess.toFixed(2) + "%" + "</td>";
				        row += "<td>" + data[i]['TotalPayments'] + "</td>";
				        row += "<td>" + data[i]['LoansWithPayments'] + "</td>";
				        row += "<td>" + perLnsWthPymts.toFixed(2) + "%" + "</td>";
				        row += "<td>" + data[i]['Tax'] + "</td>";
				        row += "<td>" + perTax.toFixed(2) + "%" + "</td>";
				        row += "<td>" + data[i]['Ins'] + "</td>";
				        row += "<td>" + perIns.toFixed(2) + "%" + "</td>";
				        row += "<td>" + data[i]['TaxAndIns'] + "</td>";
				        row += "<td>" + perTaxIns.toFixed(2) + "%" + "</td>";

				        row += "</tr>";
				        $('#data').append(row);
				        
				        var row1 = "<tr>";
				        row1 += "<td>" + data[i]['Period'] + "</td>";
				        row1 += "<td>" + data[i]['NewDisbursementTandI'] + "</td>"
			        	+ "<td>" + perNDTI.toFixed(2) + "%"+ "</td>";
			        	row1 += "<td>" + data[i]['NewDisbursementIns'] + "</td>"
			        	+  "<td>" + perNDI.toFixed(2)  + "%" + "</td>";
			        	row1 += "<td>" + data[i]['NewDisbursementTax'] + "</td>"+  "<td>" + perNDT.toFixed(2) + "%" + "</td>";
			        	row1 += "<td>" + data[i]['61Daysdelq'] + "</td>" + "<td>" + perdelq.toFixed(2) + "%" + "</td>";
			        	row1 += "<td>" + data[i]['FailedSignedAgreement'] + "</td>" + "<td>" + perFailSA.toFixed(2) + "%" + "</td>";
			        	row1 += "<td>" + data[i]['Death'] + "</td>" + "<td>" + perDeath.toFixed(2) + "%" + "</td>";
			        	row1 += "<td>" + data[i]['Vacancy'] + "</td>" + "<td>" + perVac.toFixed(2) + "%" + "</td>";
			        	row1 += "<td>" + data[i]['Bankruptcy'] + "</td>" + "<td>" + perBkrptcy.toFixed(2) + "%" + "</td>";
			        	row1 += "<td>" + data[i]['HOA'] + "</td>" + "<td>" + perHOA.toFixed(2) + "%" + "</td>";
			        	row1 += "<td>" + BrokTotal + "</td>";
			        	row1 += "</tr>";
			        	$('#data1').append(row1);

			        	var row2 = "<tr>";
				        row2 += "<td>" + data[i]['Period'] + "</td>";
				        row2 += "<td>" + data[i]['1Month'] + "</td>"
			        	+ "<td>" + per1M.toFixed(2) + "%"+ "</td>";
			        	row2 += "<td>" + data[i]['2Month'] + "</td>"
			        	+  "<td>" + per2M.toFixed(2)  + "%" + "</td>";
			        	row2 += "<td>" + data[i]['3Month'] + "</td>"+  "<td>" + per3M.toFixed(2) + "%" + "</td>";
			        	row2 += "<td>" + data[i]['4Month'] + "</td>" + "<td>" + per4M.toFixed(2) + "%" + "</td>";
			        	row2 += "<td>" + data[i]['5Month'] + "</td>" + "<td>" + per5M.toFixed(2) + "%" + "</td>";
			        	row2 += "<td>" + data[i]['6Month'] + "</td>" + "<td>" + per6M.toFixed(2) + "%" + "</td>";
			        	row2 += "<td>" + data[i]['7Month'] + "</td>" + "<td>" + per7M.toFixed(2) + "%" + "</td>";
			        	row2 += "<td>" + data[i]['8Month'] + "</td>" + "<td>" + per8M.toFixed(2) + "%" + "</td>";
			        	row2 += "<td>" + data[i]['9Month'] + "</td>" + "<td>" + per9M.toFixed(2) + "%" + "</td>";
			        	row2 += "<td>" + data[i]['10Month'] + "</td>" + "<td>" + per10M.toFixed(2) + "%" + "</td>";
			        	row2 += "<td>" + data[i]['11Month'] + "</td>" + "<td>" + per11M.toFixed(2) + "%" + "</td>";
			        	row2 += "<td>" + data[i]['12Month'] + "</td>" + "<td>" + per12M.toFixed(2) + "%" + "</td>";
			        	row2 += "<td>" + data[i]['13-18Month'] + "</td>" + "<td>" + per13M.toFixed(2) + "%" + "</td>";
			        	row2 += "<td>" + data[i]['19-24Month'] + "</td>" + "<td>" + per14M.toFixed(2) + "%" + "</td>";
			        	row2 += "<td>" + data[i]['>24Month'] + "</td>" + "<td>" + per15M.toFixed(2) + "%" + "</td>";
			        	row2 += "<td>" + ActUBrokTot + "</td>";
			        	row2 += "</tr>";
			        	$('#data2').append(row2);
			        	$('html,body').css('cursor','default');
				    }
			    	console.log("About to call paginate " + endItem);
			    	$.fn.paginate(endItem);
				},
			    error: function(errMsg) {
			        alert(errMsg);
			        $('html,body').css('cursor','default');
			    }
			});
	}
		else{
			$('html,body').css('cursor','wait');
		$.ajax({
		    type: "POST",
		    url: "http://awswauto01d:8080/RppSuiteApi/api/rpp/",
		    // The key needs to match your method's input parameter (case-sensitive).
		    data: JSON.stringify(dta),
		    contentType: "application/json; charset=utf-8",
		    dataType: "json",
		    success: function(data)
		    {
		    	$("#data").empty();
		    	$("#data1").empty();
		    	$("#data2").empty();
		    	
		    	for (var i = 0, len = data.length; i < len; i++) {
			        console.log(data[i]['Period']);
			        var perArpp= (data[i]['T And I LoanCount']==0)?0:data[i]['Total Active Repayment Plans']/data[i]['T And I LoanCount'] *100;
			        var perRppOrig=(data[i]['Total Active Repayment Plans']==0)?0:data[i]['RppOriginated']/data[i]['Total Active Repayment Plans'] *100 ;
			        var perRppComp=(data[i]['Total Active Repayment Plans']==0)?0:data[i]['RppSatisfied']/data[i]['Total Active Repayment Plans'] *100 ;
			        var perRppBrok=(data[i]['Total Active Repayment Plans']==0)?0:data[i]['RppBroken']/data[i]['Total Active Repayment Plans'] *100 ;
			        var perLnsWthPymts= (data[i]['Total Active Repayment Plans']==0)?0:data[i]['LoansWithPayments']/data[i]['Total Active Repayment Plans'] *100 ;
			        var perTax = (data[i]['Total Active Repayment Plans']==0)?0:data[i]['Tax']/data[i]['Total Active Repayment Plans'] *100 ;
			        var perIns = (data[i]['Total Active Repayment Plans']==0)?0:data[i]['Ins']/data[i]['Total Active Repayment Plans'] *100 ;
			        var perTaxIns = (data[i]['Total Active Repayment Plans']==0)?0:data[i]['TaxAndIns']/data[i]['Total Active Repayment Plans'] *100 ;
			        
			        var BrokTotal=data[i]['NewDisbursementTandI']+data[i]['NewDisbursementTax']+data[i]['NewDisbursementIns']
			        	+data[i]['61Daysdelq']+data[i]['FailedSignedAgreement']+data[i]['Death']
		        		+data[i]['Vacancy']+data[i]['Bankruptcy']+data[i]['HOA'];
		    		
			        var perNDTI=(BrokTotal==0)?0:data[i]['NewDisbursementTandI']/BrokTotal *100;
			        var perNDT=(BrokTotal==0)?0:data[i]['NewDisbursementTax']/BrokTotal *100 ;
			        var perNDI=(BrokTotal==0)?0:data[i]['NewDisbursementIns']/BrokTotal *100 ;
			        var perdelq=(BrokTotal==0)?0:data[i]['61Daysdelq']/BrokTotal *100 ;
			        var perFailSA=(BrokTotal==0)?0:data[i]['FailedSignedAgreement']/BrokTotal *100 ;
			        var perDeath=(BrokTotal==0)?0:data[i]['Death']/BrokTotal *100 ;
			        var perVac=(BrokTotal==0)?0:data[i]['Vacancy']/BrokTotal *100 ;
			        var perBkrptcy=(BrokTotal==0)?0:data[i]['Bankruptcy']/BrokTotal *100 ;
			        var perHOA=(BrokTotal==0)?0:data[i]['HOA']/BrokTotal *100 ;

			        
			        var ActUBrokTot = data[i]['1Month']+data[i]['2Month']+data[i]['3Month']+data[i]['4Month']+data[i]['5Month']
			        +data[i]['6Month']+data[i]['7Month']+data[i]['8Month']+data[i]['9Month']+data[i]['10Month']+data[i]['11Month']
			        +data[i]['12Month']+data[i]['13-18Month']+data[i]['19-24Month']+data[i]['>24Month'];
			        
			        var per1M=(ActUBrokTot==0)?0:data[i]['1Month']/ActUBrokTot *100;
			        var per2M=(ActUBrokTot==0)?0:data[i]['2Month']/ActUBrokTot *100;
			        var per3M=(ActUBrokTot==0)?0:data[i]['3Month']/ActUBrokTot *100;
			        var per4M=(ActUBrokTot==0)?0:data[i]['4Month']/ActUBrokTot *100;
			        var per5M=(ActUBrokTot==0)?0:data[i]['5Month']/ActUBrokTot *100;
			        var per6M=(ActUBrokTot==0)?0:data[i]['6Month']/ActUBrokTot *100;
			        var per7M=(ActUBrokTot==0)?0:data[i]['7Month']/ActUBrokTot *100;
			        var per8M=(ActUBrokTot==0)?0:data[i]['8Month']/ActUBrokTot *100;
			        var per9M=(ActUBrokTot==0)?0:data[i]['9Month']/ActUBrokTot *100;
			        var per10M=(ActUBrokTot==0)?0:data[i]['10Month']/ActUBrokTot *100;
			        var per11M=(ActUBrokTot==0)?0:data[i]['11Month']/ActUBrokTot *100;
			        var per12M=(ActUBrokTot==0)?0:data[i]['12Month']/ActUBrokTot *100;
			        var per13M=(ActUBrokTot==0)?0:data[i]['13-18Month']/ActUBrokTot *100;
			        var per14M=(ActUBrokTot==0)?0:data[i]['19-24Month']/ActUBrokTot *100;
			        var per15M=(ActUBrokTot==0)?0:data[i]['>24Month']/ActUBrokTot *100;

			        var brokDlqSa = data[i]['61Daysdelq'] + data[i]['FailedSignedAgreement'];
			        var perBrokDlqSa= (ActUBrokTot==0)?0:brokDlqSa/ActUBrokTot*100;
			        var brokLessThreeM=data[i]['1Month']+data[i]['2Month']+data[i]['3Month'];
			        var perbrokLess = (ActUBrokTot==0)?0:brokLessThreeM/ActUBrokTot*100;         
				        
			        var row = "<tr>";
			        row += "<td>" + data[i]['Period'] + "</td>";
			        row += "<td>" + data[i]['T And I LoanCount'] + "</td>";
			        row += "<td>" + data[i]['RppOriginated'] + "</td>"
		        	+  "<td>" + perRppOrig.toFixed(2)  + "%" + "</td>";
			        row += "<td>" + data[i]['Total Active Repayment Plans'] + "</td>"
		        	+ "<td>" + perArpp.toFixed(2) + "%"+ "</td>";
			        row += "<td>" + data[i]['PotentialNewPlans'] + "</td>";
			        
			        row += "<td>" + data[i]['RppSatisfied'] + "</td>"+  "<td>" + perRppComp.toFixed(2) + "%" + "</td>";
			        row += "<td>" + data[i]['RppBroken'] + "</td>" + "<td>" + perRppBrok.toFixed(2) + "%" + "</td>";
			        row += "<td>" + brokDlqSa + "</td>" + "<td>" + perBrokDlqSa.toFixed(2) + "%" + "</td>";
			        row += "<td>" + brokLessThreeM + "</td>" + "<td>" + perbrokLess.toFixed(2) + "%" + "</td>";
			        row += "<td>" + data[i]['TotalPayments'] + "</td>";
			        row += "<td>" + data[i]['LoansWithPayments'] + "</td>";
			        row += "<td>" + perLnsWthPymts.toFixed(2) + "%" + "</td>";
			        row += "<td>" + data[i]['Tax'] + "</td>";
			        row += "<td>" + perTax.toFixed(2) + "%" + "</td>";
			        row += "<td>" + data[i]['Ins'] + "</td>";
			        row += "<td>" + perIns.toFixed(2) + "%" + "</td>";
			        row += "<td>" + data[i]['TaxAndIns'] + "</td>";
			        row += "<td>" + perTaxIns.toFixed(2) + "%" + "</td>";

			        row += "</tr>";
			        $('#data').append(row);
			        
			        var row1 = "<tr>";
			        row1 += "<td>" + data[i]['Period'] + "</td>";
			        row1 += "<td>" + data[i]['NewDisbursementTandI'] + "</td>"
		        	+ "<td>" + perNDTI.toFixed(2) + "%"+ "</td>";
		        	row1 += "<td>" + data[i]['NewDisbursementIns'] + "</td>"
		        	+  "<td>" + perNDI.toFixed(2)  + "%" + "</td>";
		        	row1 += "<td>" + data[i]['NewDisbursementTax'] + "</td>"+  "<td>" + perNDT.toFixed(2) + "%" + "</td>";
		        	row1 += "<td>" + data[i]['61Daysdelq'] + "</td>" + "<td>" + perdelq.toFixed(2) + "%" + "</td>";
		        	row1 += "<td>" + data[i]['FailedSignedAgreement'] + "</td>" + "<td>" + perFailSA.toFixed(2) + "%" + "</td>";
		        	row1 += "<td>" + data[i]['Death'] + "</td>" + "<td>" + perDeath.toFixed(2) + "%" + "</td>";
		        	row1 += "<td>" + data[i]['Vacancy'] + "</td>" + "<td>" + perVac.toFixed(2) + "%" + "</td>";
		        	row1 += "<td>" + data[i]['Bankruptcy'] + "</td>" + "<td>" + perBkrptcy.toFixed(2) + "%" + "</td>";
		        	row1 += "<td>" + data[i]['HOA'] + "</td>" + "<td>" + perHOA.toFixed(2) + "%" + "</td>";
		        	row1 += "<td>" + BrokTotal + "</td>";
		        	row1 += "</tr>";
		        	$('#data1').append(row1);

		        	var row2 = "<tr>";
			        row2 += "<td>" + data[i]['Period'] + "</td>";
			        row2 += "<td>" + data[i]['1Month'] + "</td>"
		        	+ "<td>" + per1M.toFixed(2) + "%"+ "</td>";
		        	row2 += "<td>" + data[i]['2Month'] + "</td>"
		        	+  "<td>" + per2M.toFixed(2)  + "%" + "</td>";
		        	row2 += "<td>" + data[i]['3Month'] + "</td>"+  "<td>" + per3M.toFixed(2) + "%" + "</td>";
		        	row2 += "<td>" + data[i]['4Month'] + "</td>" + "<td>" + per4M.toFixed(2) + "%" + "</td>";
		        	row2 += "<td>" + data[i]['5Month'] + "</td>" + "<td>" + per5M.toFixed(2) + "%" + "</td>";
		        	row2 += "<td>" + data[i]['6Month'] + "</td>" + "<td>" + per6M.toFixed(2) + "%" + "</td>";
		        	row2 += "<td>" + data[i]['7Month'] + "</td>" + "<td>" + per7M.toFixed(2) + "%" + "</td>";
		        	row2 += "<td>" + data[i]['8Month'] + "</td>" + "<td>" + per8M.toFixed(2) + "%" + "</td>";
		        	row2 += "<td>" + data[i]['9Month'] + "</td>" + "<td>" + per9M.toFixed(2) + "%" + "</td>";
		        	row2 += "<td>" + data[i]['10Month'] + "</td>" + "<td>" + per10M.toFixed(2) + "%" + "</td>";
		        	row2 += "<td>" + data[i]['11Month'] + "</td>" + "<td>" + per11M.toFixed(2) + "%" + "</td>";
		        	row2 += "<td>" + data[i]['12Month'] + "</td>" + "<td>" + per12M.toFixed(2) + "%" + "</td>";
		        	row2 += "<td>" + data[i]['13-18Month'] + "</td>" + "<td>" + per13M.toFixed(2) + "%" + "</td>";
		        	row2 += "<td>" + data[i]['19-24Month'] + "</td>" + "<td>" + per14M.toFixed(2) + "%" + "</td>";
		        	row2 += "<td>" + data[i]['>24Month'] + "</td>" + "<td>" + per15M.toFixed(2) + "%" + "</td>";
		        	row2 += "<td>" + ActUBrokTot + "</td>";
		        	row2 += "</tr>";
		        	$('#data2').append(row2);
		        	
		        	$('html,body').css('cursor','default');
			    }
		    	$.fn.paginate(endItem);
			},
		    error: function(errMsg) {
		        alert(errMsg);
		        $('html,body').css('cursor','default');
		    }
		});
		}
	});

	$('#investorFilters').on('change', function() 
	 {
		var inv =$('#investorFilters').val();
		
		$.ajax({
			type : "GET",
			url : "rppupdate",
			data:"selectedClient="+inv,
			success :function(itr) {
				$("#investors").get(0).options.length = 0;
				$("#investors").get(0).options[0] = new Option("All", "-1");
				$.each(itr.investors, function(index, item) {
					console.log(item);
					$("#investors").get(0).options[$("#investors").get(0).options.length] = new Option(item);
                });
				
				$("#investors").trigger("change");
					},
			error : function(itr) {
				alert("No values found..!!");
			}	
		});
	 });
	
	$.fn.paginate = function(rows){ 
		console.log("Paginate called " + rows);
		$("#nav").remove();
		$('#tbl2').after ('<div id="nav" style="text-align:center"></div>');  
	    var rowsShown = rows;  
	    var rowsTotal = $('#tbl2 tbody tr').length;  
	    var numPages = rowsTotal/rowsShown;  
	    console.log("rowsTotal = " + rowsTotal);
	    console.log("numPages = " + numPages);
	    $('#nav').append('<label for="selRows">Rows per page:</label> <select name="selRows" id="selRows"> <option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option> </select> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
	    
	    for (i = 0;i < numPages;i++) {  
	        var pageNum = i + 1;  
	        $('#nav').append ('<a href="#" rel="'+i+'">'+pageNum+'</a> ');  
	    }  
	    
	    $('#tbl2 tbody tr').hide();  
	    $('#tbl1 tbody tr').hide();
	    $('#tbl tbody tr').hide();
	    /*
	    $('#tbl2 tbody tr').slice (0, rowsShown).show();
	    $('#tbl1 tbody tr').slice (0, rowsShown).show();
	    $('#tbl tbody tr').slice (0, rowsShown).show();
	    */
	    $('#tbl2 tbody tr').css('opacity','0.0').hide().slice(startItem, endItem).  
        css('display','table-row').animate({opacity:1}, 300);
        $('#tbl1 tbody tr').css('opacity','0.0').hide().slice(startItem, endItem).  
        css('display','table-row').animate({opacity:1}, 300);
        $('#tbl tbody tr').css('opacity','0.0').hide().slice(startItem, endItem).  
        css('display','table-row').animate({opacity:1}, 300);
        
	    $('#nav a:first').addClass('active');  
	    $('#nav a').bind('click', function() {  
	    $('#nav a').removeClass('active');  
	   $(this).addClass('active');  
	        currPage = $(this).attr('rel');  
	        console.log('currPage = ' + currPage);
	        startItem = currPage * rowsShown; 
	        console.log('startItem = ' + startItem);
	        endItem = startItem + rowsShown;  
	        console.log('endItem = ' + endItem);
	        $('#tbl2 tbody tr').css('opacity','0.0').hide().slice(startItem, endItem).  
	        css('display','table-row').animate({opacity:1}, 300);
	        $('#tbl1 tbody tr').css('opacity','0.0').hide().slice(startItem, endItem).  
	        css('display','table-row').animate({opacity:1}, 300);
	        $('#tbl tbody tr').css('opacity','0.0').hide().slice(startItem, endItem).  
	        css('display','table-row').animate({opacity:1}, 300);
	    });  
    }
		
	$(document).on('change','#selRows',function(){
		var rows=$('#selRows').val();
		console.log("Rows="+rows);
		startItem =0;
		endItem=rows;
		$.fn.paginate(endItem);
		$('#selRows').val(endItem);
	});
	
	
	$('#selectBrok').on('change', function() {
		var strInv = $('#investors').val();
		var brok = $('#selectBrok').val();
		var str;
		if(strInv==-1 || strInv=="All"){
			startItem=0;
			endItem=$('#selRows').val();
			strInv = "'";    
			$("#investors option").each(function () {    
			    strInv =strInv + "''" +  $(this).text() + "'',";    
			}); 
			strInv = strInv.slice(0, -1);
			strInv=strInv + "'"
			console.log("StrInv = " +strInv);
		}
		else
			strInv =$('#investors').val();
		
		if(brok==-1 || brok=="All"){
			$('html,body').css('cursor','wait');
			str = "'";    
			$("#selectBrok option").each(function () {    
			    str =str + "''" +  $(this).text() + "'',";    
			}); 
			str = str.slice(0, -1);
			str=str + "'"
			console.log("Str = " +str);   
		}
		else
			str=$('#selectBrok').val();
			$('html,body').css('cursor','wait');
			dta = {"InvestorName": strInv,"BrokenReason": str};
			console.log(dta);
			$.ajax({
			    type: "POST",
			    url: "http://awswauto01d:8080/RppSuiteApi/api/rpp/",
			    // The key needs to match your method's input parameter (case-sensitive).
			    data: JSON.stringify(dta),
			    contentType: "application/json; charset=utf-8",
			    dataType: "json",
			    success: function(data)
			    {
			    	$("#data").empty();
			    	$("#data1").empty();
			    	$("#data2").empty();
			    	
			    	for (var i = 0, len = data.length; i < len; i++) {
				        console.log(data[i]['Period']);
				        var perArpp= (data[i]['T And I LoanCount']==0)?0:data[i]['Total Active Repayment Plans']/data[i]['T And I LoanCount'] *100;
				        var perRppOrig=(data[i]['Total Active Repayment Plans']==0)?0:data[i]['RppOriginated']/data[i]['Total Active Repayment Plans'] *100 ;
				        var perRppComp=(data[i]['Total Active Repayment Plans']==0)?0:data[i]['RppSatisfied']/data[i]['Total Active Repayment Plans'] *100 ;
				        var perRppBrok=(data[i]['Total Active Repayment Plans']==0)?0:data[i]['RppBroken']/data[i]['Total Active Repayment Plans'] *100 ;
				        var perLnsWthPymts= (data[i]['Total Active Repayment Plans']==0)?0:data[i]['LoansWithPayments']/data[i]['Total Active Repayment Plans'] *100 ;
				        var perTax = (data[i]['Total Active Repayment Plans']==0)?0:data[i]['Tax']/data[i]['Total Active Repayment Plans'] *100 ;
				        var perIns = (data[i]['Total Active Repayment Plans']==0)?0:data[i]['Ins']/data[i]['Total Active Repayment Plans'] *100 ;
				        var perTaxIns = (data[i]['Total Active Repayment Plans']==0)?0:data[i]['TaxAndIns']/data[i]['Total Active Repayment Plans'] *100 ;
				        	
				        var BrokTotal=data[i]['NewDisbursementTandI']+data[i]['NewDisbursementTax']+data[i]['NewDisbursementIns']
				        	+data[i]['61Daysdelq']+data[i]['FailedSignedAgreement']+data[i]['Death']
			        		+data[i]['Vacancy']+data[i]['Bankruptcy']+data[i]['HOA'];
			    		
				        var perNDTI=(BrokTotal==0)?0:data[i]['NewDisbursementTandI']/BrokTotal *100;
				        var perNDT=(BrokTotal==0)?0:data[i]['NewDisbursementTax']/BrokTotal *100 ;
				        var perNDI=(BrokTotal==0)?0:data[i]['NewDisbursementIns']/BrokTotal *100 ;
				        var perdelq=(BrokTotal==0)?0:data[i]['61Daysdelq']/BrokTotal *100 ;
				        var perFailSA=(BrokTotal==0)?0:data[i]['FailedSignedAgreement']/BrokTotal *100 ;
				        var perDeath=(BrokTotal==0)?0:data[i]['Death']/BrokTotal *100 ;
				        var perVac=(BrokTotal==0)?0:data[i]['Vacancy']/BrokTotal *100 ;
				        var perBkrptcy=(BrokTotal==0)?0:data[i]['Bankruptcy']/BrokTotal *100 ;
				        var perHOA=(BrokTotal==0)?0:data[i]['HOA']/BrokTotal *100 ;

				        
				        var ActUBrokTot = data[i]['1Month']+data[i]['2Month']+data[i]['3Month']+data[i]['4Month']+data[i]['5Month']
				        +data[i]['6Month']+data[i]['7Month']+data[i]['8Month']+data[i]['9Month']+data[i]['10Month']+data[i]['11Month']
				        +data[i]['12Month']+data[i]['13-18Month']+data[i]['19-24Month']+data[i]['>24Month'];
				        
				        var per1M=(ActUBrokTot==0)?0:data[i]['1Month']/ActUBrokTot *100;
				        var per2M=(ActUBrokTot==0)?0:data[i]['2Month']/ActUBrokTot *100;
				        var per3M=(ActUBrokTot==0)?0:data[i]['3Month']/ActUBrokTot *100;
				        var per4M=(ActUBrokTot==0)?0:data[i]['4Month']/ActUBrokTot *100;
				        var per5M=(ActUBrokTot==0)?0:data[i]['5Month']/ActUBrokTot *100;
				        var per6M=(ActUBrokTot==0)?0:data[i]['6Month']/ActUBrokTot *100;
				        var per7M=(ActUBrokTot==0)?0:data[i]['7Month']/ActUBrokTot *100;
				        var per8M=(ActUBrokTot==0)?0:data[i]['8Month']/ActUBrokTot *100;
				        var per9M=(ActUBrokTot==0)?0:data[i]['9Month']/ActUBrokTot *100;
				        var per10M=(ActUBrokTot==0)?0:data[i]['10Month']/ActUBrokTot *100;
				        var per11M=(ActUBrokTot==0)?0:data[i]['11Month']/ActUBrokTot *100;
				        var per12M=(ActUBrokTot==0)?0:data[i]['12Month']/ActUBrokTot *100;
				        var per13M=(ActUBrokTot==0)?0:data[i]['13-18Month']/ActUBrokTot *100;
				        var per14M=(ActUBrokTot==0)?0:data[i]['19-24Month']/ActUBrokTot *100;
				        var per15M=(ActUBrokTot==0)?0:data[i]['>24Month']/ActUBrokTot *100;

				        var brokDlqSa = data[i]['61Daysdelq'] + data[i]['FailedSignedAgreement'];
				        var perBrokDlqSa= (ActUBrokTot==0)?0:brokDlqSa/ActUBrokTot*100;
				        var brokLessThreeM=data[i]['1Month']+data[i]['2Month']+data[i]['3Month'];
				        var perbrokLess = (ActUBrokTot==0)?0:brokLessThreeM/ActUBrokTot*100;         
					        
				        var row = "<tr>";
				        row += "<td>" + data[i]['Period'] + "</td>";
				        row += "<td>" + data[i]['T And I LoanCount'] + "</td>";
				        row += "<td>" + data[i]['RppOriginated'] + "</td>"
			        	+  "<td>" + perRppOrig.toFixed(2)  + "%" + "</td>";
				        row += "<td>" + data[i]['Total Active Repayment Plans'] + "</td>"
			        	+ "<td>" + perArpp.toFixed(2) + "%"+ "</td>";
				        row += "<td>" + data[i]['PotentialNewPlans'] + "</td>";
				        
				        row += "<td>" + data[i]['RppSatisfied'] + "</td>"+  "<td>" + perRppComp.toFixed(2) + "%" + "</td>";
				        row += "<td>" + data[i]['RppBroken'] + "</td>" + "<td>" + perRppBrok.toFixed(2) + "%" + "</td>";
				        row += "<td>" + brokDlqSa + "</td>" + "<td>" + perBrokDlqSa.toFixed(2) + "%" + "</td>";
				        row += "<td>" + brokLessThreeM + "</td>" + "<td>" + perbrokLess.toFixed(2) + "%" + "</td>";
				        row += "<td>" + data[i]['TotalPayments'] + "</td>";
				        row += "<td>" + data[i]['LoansWithPayments'] + "</td>";
				        row += "<td>" + perLnsWthPymts.toFixed(2) + "%" + "</td>";
				        row += "<td>" + data[i]['Tax'] + "</td>";
				        row += "<td>" + perTax.toFixed(2) + "%" + "</td>";
				        row += "<td>" + data[i]['Ins'] + "</td>";
				        row += "<td>" + perIns.toFixed(2) + "%" + "</td>";
				        row += "<td>" + data[i]['TaxAndIns'] + "</td>";
				        row += "<td>" + perTaxIns.toFixed(2) + "%" + "</td>";

				        row += "</tr>";
				        $('#data').append(row);
				        
				        var row1 = "<tr>";
				        row1 += "<td>" + data[i]['Period'] + "</td>";
				        row1 += "<td>" + data[i]['NewDisbursementTandI'] + "</td>"
			        	+ "<td>" + perNDTI.toFixed(2) + "%"+ "</td>";
			        	row1 += "<td>" + data[i]['NewDisbursementIns'] + "</td>"
			        	+  "<td>" + perNDI.toFixed(2)  + "%" + "</td>";
			        	row1 += "<td>" + data[i]['NewDisbursementTax'] + "</td>"+  "<td>" + perNDT.toFixed(2) + "%" + "</td>";
			        	row1 += "<td>" + data[i]['61Daysdelq'] + "</td>" + "<td>" + perdelq.toFixed(2) + "%" + "</td>";
			        	row1 += "<td>" + data[i]['FailedSignedAgreement'] + "</td>" + "<td>" + perFailSA.toFixed(2) + "%" + "</td>";
			        	row1 += "<td>" + data[i]['Death'] + "</td>" + "<td>" + perDeath.toFixed(2) + "%" + "</td>";
			        	row1 += "<td>" + data[i]['Vacancy'] + "</td>" + "<td>" + perVac.toFixed(2) + "%" + "</td>";
			        	row1 += "<td>" + data[i]['Bankruptcy'] + "</td>" + "<td>" + perBkrptcy.toFixed(2) + "%" + "</td>";
			        	row1 += "<td>" + data[i]['HOA'] + "</td>" + "<td>" + perHOA.toFixed(2) + "%" + "</td>";
			        	row1 += "<td>" + BrokTotal + "</td>";
			        	row1 += "</tr>";
			        	$('#data1').append(row1);

			        	var row2 = "<tr>";
				        row2 += "<td>" + data[i]['Period'] + "</td>";
				        row2 += "<td>" + data[i]['1Month'] + "</td>"
			        	+ "<td>" + per1M.toFixed(2) + "%"+ "</td>";
			        	row2 += "<td>" + data[i]['2Month'] + "</td>"
			        	+  "<td>" + per2M.toFixed(2)  + "%" + "</td>";
			        	row2 += "<td>" + data[i]['3Month'] + "</td>"+  "<td>" + per3M.toFixed(2) + "%" + "</td>";
			        	row2 += "<td>" + data[i]['4Month'] + "</td>" + "<td>" + per4M.toFixed(2) + "%" + "</td>";
			        	row2 += "<td>" + data[i]['5Month'] + "</td>" + "<td>" + per5M.toFixed(2) + "%" + "</td>";
			        	row2 += "<td>" + data[i]['6Month'] + "</td>" + "<td>" + per6M.toFixed(2) + "%" + "</td>";
			        	row2 += "<td>" + data[i]['7Month'] + "</td>" + "<td>" + per7M.toFixed(2) + "%" + "</td>";
			        	row2 += "<td>" + data[i]['8Month'] + "</td>" + "<td>" + per8M.toFixed(2) + "%" + "</td>";
			        	row2 += "<td>" + data[i]['9Month'] + "</td>" + "<td>" + per9M.toFixed(2) + "%" + "</td>";
			        	row2 += "<td>" + data[i]['10Month'] + "</td>" + "<td>" + per10M.toFixed(2) + "%" + "</td>";
			        	row2 += "<td>" + data[i]['11Month'] + "</td>" + "<td>" + per11M.toFixed(2) + "%" + "</td>";
			        	row2 += "<td>" + data[i]['12Month'] + "</td>" + "<td>" + per12M.toFixed(2) + "%" + "</td>";
			        	row2 += "<td>" + data[i]['13-18Month'] + "</td>" + "<td>" + per13M.toFixed(2) + "%" + "</td>";
			        	row2 += "<td>" + data[i]['19-24Month'] + "</td>" + "<td>" + per14M.toFixed(2) + "%" + "</td>";
			        	row2 += "<td>" + data[i]['>24Month'] + "</td>" + "<td>" + per15M.toFixed(2) + "%" + "</td>";
			        	row2 += "<td>" + ActUBrokTot + "</td>";
			        	row2 += "</tr>";
			        	$('#data2').append(row2);
			        		
			        	$('html,body').css('cursor','default');
				    }
			    	$.fn.paginate(endItem);
				},
			    error: function(errMsg) {
			        alert(errMsg);
			        $('html,body').css('cursor','default');
			    }
			});
		});
});
