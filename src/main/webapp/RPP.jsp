<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ taglib prefix = "s" uri = "/struts-tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<style>
</style>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<link href = "https://code.jquery.com/ui/1.10.4/themes/ui-lightness/jquery-ui.css"
         rel = "stylesheet">
      <script src = "https://code.jquery.com/jquery-1.10.2.js"></script>
      <script src = "https://code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
<script type="text/JavaScript">
</script> 
<title>RPP Suite</title>
<link rel="stylesheet" href=css/RppSuite.css>
<script src="js/RppSuite.js"></script>
</head>
<body id="pgeBody" style="background-color:powderblue;">
	
	<table style= "margin-top: 0px;box-shadow:none;border: none;">
		<tr>
	  	<th style= "padding: 0px;border:none;background-color:powderblue;text-align: center" colspan="2" rowspan ="2"><img id="logo" src="OcwenLogo.jpg"  width="90" height="80" ></th>
	  </tr>
	</table>
	
	
		<div id ='selContainer'>
				<s:select label="Investor" cssClass="fidSelect"
				   headerKey="-1" headerValue="All"
				   list="investors" name="investors" 
				   value="defaultInvestor" />
				  
	  	 <s:select label="MSR Holder" cssClass="fidSelect"
				   headerKey="-1" headerValue="All"
				   list="investorFilters" name="investorFilter"  id ="investorFilters"
				   value="selectedValue" />
				</div>
	
		<table id = 'tbl' class="styled-table" style = "border:1px solid black">
		<caption class = 'capClass' >RPP Activity Month Wise</caption>
		<thead>
				<tr>
					<th>Month&nbsp;</th>
					<th>T & I Default Count</th>
					<th>New Plans Originated</th>
					<th>%</th>
					<th>Total Active Plans </th>
					<th>%</th>
					<th>New Plan Opportunity</th>
					<th>Plans Completed</th>
					<th>%</th>
					<th>Plans Broken</th>
					<th>%</th>
					<th>Plans broken for DLQ and/or Signed Agreement</th>
					<th>%</th>
					<th>plans broken <= 3 months</th>
					<th>%</th>
					<th>Total Payments Received</th>
					<th>Loans With Payments</th>
					<th>%</th>
					<th>Tax</th>
					<th>%</th>
					<th>Ins</th>
					<th>%</th>
					<th>Tax & Ins</th>
					<th>%</th>
				</tr>
		</thead>
		<tbody  id = 'data'>
			
		</tbody >
	</table>
	
	<div id = "divBrokSelect">
		<label for="selectBrok">Broken plan reason:</label>

	<select name="brokReason" id="selectBrok">
	<!-- 
		<option value="all" selected>All</option>
  		<option value="disbTandI">Disb(T&I)</option>
  		<option value="disbI">Disb(Ins)</option>
  		<option value="disbT">Disb(Tax)</option>
  		<option value="sixtyOneDays">61 Days delq</option>
  		<option value="signdAgrmt">Signed Agreement Failure</option>
  	 -->
	</select>
	</div>
	<table id = 'tbl1' class="styled-table" style = "border:1px solid black">
	<caption class = 'capClass' >Broken Plan Reason</caption>
		<thead>
			<tr>
				
				<th>Month&nbsp;</th>
				<th>Disbursement(Tax And Ins)</th>
				<th>%</th>
				<th>Disbursement(Ins)</th>
				<th>%</th>
				<th>Disbursement(Tax)</th>
				<th>%</th>
				<th>61 Days Delq</th>
				<th>%</th>
				<th>Signed agreement failure</th>
				<th>%</th>
				<th>Death</th>
				<th>%</th>
				<th>Vancancy</th>
				<th>%</th>
				<th>Bankruptcy</th>
				<th>%</th>
				<th>Disbursement(HOA)</th>
				<th>%</th>
				<th>Total</th>
			</tr>
		</thead>
		<tbody  id = 'data1'>
			
		</tbody >
	</table>
	
	<table id = 'tbl2' class="styled-table" style = "border:1px solid black">
	<caption class = 'capClass' >Days active until broken</caption>
		<thead>
			<tr>
				
				<th>Month&nbsp;</th>
				<th>1 Month</th>
				<th>%</th>
				<th>2 Months</th>
				<th>%</th>
				<th>3 Months</th>
				<th>%</th>
				<th>4 Months</th>
				<th>%</th>
				<th>5 Months</th>
				<th>%</th>
				<th>6 Months</th>
				<th>%</th>
				<th>7 Months</th>
				<th>%</th>
				<th>8 Months</th>
				<th>%</th>
				<th>9 Months</th>
				<th>%</th>
				<th>10 Months</th>
				<th>%</th>
				<th>11 Months</th>
				<th>%</th>
				<th>12 Months</th>
				<th>%</th>
				<th>13-18 Months</th>
				<th>%</th>
				<th>19-24 Months</th>
				<th>%</th>
				<th>> 24 Months</th>
				<th>%</th>
				<th>Total</th>
			</tr>
		</thead>
		<tbody  id = 'data2'>
			
		</tbody >
	</table>
</body>
</html>