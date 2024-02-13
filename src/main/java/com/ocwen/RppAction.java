package com.ocwen;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.json.JSONArray;
import org.json.JSONObject;

import com.opensymphony.xwork2.ActionSupport;

public class RppAction extends ActionSupport {
	/**
	 * 
	 */
	Logger logger = LogManager.getLogger(RppAction.class);
	private static final long serialVersionUID = 1L;
	
	URL url;
	JSONArray array;
	JSONObject object;
	Map<String,Object> result;
	List<String> investors;
	List<String> investorFilters;
	String selectedClient;
	String investorFilter;
	String selectedValue;
	
		
	public String getSelectedValue() {
		return selectedValue;
	}

	public void setSelectedValue(String selectedValue) {
		this.selectedValue = selectedValue;
	}

	public String getInvestorFilter() {
		return investorFilter;
	}

	public void setInvestorFilter(String investorFilter) {
		this.investorFilter = investorFilter;
	}

	public String getSelectedClient() {
		return selectedClient;
	}

	public void setSelectedClient(String selectedClient) {
		this.selectedClient = selectedClient;
	}

	public List<String> getInvestorFilters() {
		return investorFilters;
	}

	public void setInvestorFilters(List<String> investorFilters) {
		this.investorFilters = investorFilters;
	}

	public List<String> getInvestors() {
		return investors;
	}

	public void setInvestors(List<String> investors) {
		this.investors = investors;
	}

	public String getDefaultInvestor() {
		return "All";
	}
	
	public String getDefaultInvestorFilters() {
		return "All";
	}

	private String jsonOutputString;
	
	public Map<String, Object> getResult() {
		return result;
	}


	public void setResult(Map<String, Object> result) {
		this.result = result;
	}


	public String getJsonOutputString() {
		return jsonOutputString;
	}


	public void setJsonOutputString(String jsonOutputString) {
		this.jsonOutputString = jsonOutputString;
	}
	
	public JSONArray getArray() {
		return array;
	}


	public void setArray(JSONArray array) {
		this.array = array;
	}


	public JSONObject getObject() {
		return object;
	}


	public void setObject(JSONObject object) {
		this.object = object;
	}

	public String updateList() throws UnsupportedEncodingException, IOException
	{
		System.out.println("Update List " + selectedClient);
		investors=new ArrayList<>();
		switch (selectedClient) {
			case "Advantis Federal Credit Union":
				investors.add("Advantis CU");
				break;
			case "American National Bank":
				  investors.add("American National Bank");
				  break;
			case "Bank of America":
				investors.add("BAML");
				investors.add("BoA Merrill Lynch");
				  break;
			case "Blue Plains Trust":
				investors.add("Blue Plains Trust");
				  break;
			case "Chetco Federal Credit Union":
				investors.add("Chetco FCU");
				  break;
			case "Citizens First Wholesale Mortgage Co.":
				investors.add("Fannie Mae");
				  break;
			case "Ent Credit Union":
				investors.add("Ent CU");
				  break;
			case "FDIC":
				investors.add("FDIC");
				  break;
			case "First National Bank of Pennsylvania":
				investors.add("First National Bank of Pennsylvania");
				  break;
			case "FNMA":
				investors.add("F.N.M.A.");
				investors.add("FNMA");
				investors.add("Fannie Mae");
				investors.add("MECA 2011");
				  break;
			case "GTE Federal Credit Union":
				investors.add("GTE FCU");
				  break;
			case "Home Preservation Partnership, LLC":
				investors.add("Home Preservation Partnership, LLC");
				investors.add("HPP Property, LLC");
				break;
			case "Howard Bank":
				investors.add("Howard Bank");
				break;
			case "Low Valley Trust":
				investors.add("Low Valley Trust");
				break;
			case "Mid-Hudson Valley Federal Credit Union":
				investors.add("Mid Hudson Valley FCU");
				break;
			case "Midland National Life":
				investors.add("Midland National Life");
				break;
			case "Mortgage Assets Management, LLC":
				investors.add("Bank of America");
				investors.add("Black Reef Trust");
				investors.add("Cascade Funding Alternative Holdings, LLC");
				investors.add("Cascade Funding Mortgage Trust - AB1");
				investors.add("Cascade Funding Mortgage Trust - AB2");
				investors.add("Cascade Funding Mortgage Trust - HB1");
				investors.add("Cascade Funding Mortgage Trust - HB1 Alt Holdings");
				investors.add("Cascade Funding Mortgage Trust - HB10");
				investors.add("Cascade Funding Mortgage Trust - HB11");
				investors.add("Cascade Funding Mortgage Trust - HB2");
				investors.add("Cascade Funding Mortgage Trust - HB3");
				investors.add("Cascade Funding Mortgage Trust - HB4");
				investors.add("Cascade Funding Mortgage Trust - HB5");
				investors.add("Cascade Funding Mortgage Trust - HB7");
				investors.add("Cascade Funding Mortgage Trust - HB8");
				investors.add("Cascade Funding Mortgage Trust - HB9");
				investors.add("Cascade Funding Mortgage Trust - NRM1");
				investors.add("Cascade Funding Mortgage Trust 2018-RM2");
				investors.add("Cascade Funding Mortgage Trust 2019 - RM3");
				investors.add("Cascade Funding RM1 Acquisitions Grantor Tr");
				investors.add("Cascade Funding RM1 Alternative Holdings, LLC");
				investors.add("Cascade Funding RM4 Acquisitions Grantor Tr");
				investors.add("Cascade Funding RM5 Acquisitions Grantor Trust");
				investors.add("Cascade Funding RM5 Alternative Holdings, LLC");
				investors.add("CFS1 RMN (TCB)");
				investors.add("Everbank 2008 AKA TIAA");
				investors.add("Everbank 2015 AKA TIAA");
				investors.add("F.N.M.A.");
				investors.add("Guggenheim Life and Annuity Company (GLAC)");
				investors.add("HB0 Alternative Holdings, LLC");
				investors.add("HB1 Alternative Holdings, LLC");
				investors.add("HB2 Alternative Holdings, LLC");
				investors.add("HB3 Alternative Holdings, LLC");
				investors.add("Ivory Cove Trust");
				investors.add("MAM Holdings");
				investors.add("MECA 2007-FF1");
				investors.add("MECA 2007-FF2");
				investors.add("MECA 2007-FF3");
				investors.add("MECA 2011");
				investors.add("MECA Trust 2010-1");
				investors.add("Mortgage Equity Conversion Asset Trust 2010-1");
				investors.add("Mr Cooper HUD Reconveyance");
				investors.add("NARRE Titling Trust");
				investors.add("RBS Financial Products fka Greenwich");
				investors.add("Reverse Mortgage Loan Trust Series REV 2007-2");
				investors.add("Reverse Mortgage Solutions, Inc.");
				investors.add("Reverse Mortgage Solutions, Inc. 2018-09");
				investors.add("Riverview HECM Trust 2007-1");
				investors.add("SASCO 1999-RM1");
				investors.add("SASCO 2007-RM1");
				investors.add("SHAP Acquisition Trust HB0");
				investors.add("SHAP Acquisitions Trust HB1");
				investors.add("SHAP Acquisitions Trust HB1 Barclays");
				investors.add("SHAP Acquisitions Trust HB2");
				investors.add("SHAP Acquisitions Trust HB2 Nomura");
				investors.add("SHAP Acquisitions Trust HB3");
				investors.add("SHAP Acquisitions Trust HB3 CS");
				investors.add("VF1-NA Trust");
				investors.add("Waterfall Victoria III-NB Alternative Holdings LLC");
				investors.add("Waterfall Victoria III-NB Grantor Trust");
				investors.add("Wells Fargo NA");
				investors.add("WF BOA Repurchase");
				investors.add("WF Reverse REO HECM 2015-1 LLC");
				investors.add("Wilmington Savings Fund Society FSB");
				investors.add("WV POG RM Grantor Trust");
				investors.add("WVMF Funding LLC");
				break;
			case "NexBank SSB":
				investors.add("NexBank SSB");
				break;
			case "PHH Mortgage Corporation":
				investors.add("Ocwen Loan Acquisition Trust 2023-HB1");
				investors.add("OLIT 2023-HB1 Alternative Holdings LLC");
				investors.add("PHH Mortgage Services");
				investors.add("PIF Loans - Celink");
				break;
			case "Property Disposition, Inc.":
				investors.add("Property Disposition, Inc.");
				break;
			case "Reverse Mortgage Loan Trust 2008-1":
				investors.add("Reverse Mortgage Loan Trust 2008-1");
				break;
			case "RML Trust":
				investors.add("RML Trust 2013-1");
				investors.add("RML Trust 2013-2");
				break;
			case "Rocktop Asset Management, LLC":
				investors.add("Rocktop Asset Management, LLC");
				break;
			case "Seattle Bank":
				investors.add("Seattle Bank Texas Insured");
				investors.add("Seattle Bank Uninsured");
				investors.add("Seattle Mortgage Company");
				break;
			case "SMS Financial NCU, LLC":
				investors.add("SMS Financial NCU");
				break;
			case "Suncoast Credit Union":
				investors.add("Suncoast Credit Union");
				break;
			case "Teacher's Federal Credit Union":
				investors.add("Teachers FCU");
				break;
			case "The Money House, Inc.":
				investors.add("Moneyhouse");
				break;
			case "TRM, LLC":
				investors.add("TRM, LLC");
				break;
			case "Visions Federal Credit Union":
				investors.add("Visions FCU");
				break;
			default:
				this.doBegin();
    		    break;
		}
		
		
		
		return SUCCESS;
	}
	public String execute() throws IOException
	{
		investorFilters=new  ArrayList<String>(){/**
			 * 
			 */
			private static final long serialVersionUID = 1L;

		{
			selectedClient="Temp";
			add("Advantis Federal Credit Union");
			add("American National Bank");
			add("Bank of America");
			add("Blue Plains Trust");
			add("Chetco Federal Credit Union");
			add("Ent Credit Union");
			add("Citizens First Wholesale Mortgage Co.");
			add("FDIC");
			add("First National Bank of Pennsylvania");
			add("FNMA");
			add("PHH Mortgage Corporation");
			add("GTE Federal Credit Union");
			add("Home Preservation Partnership, LLC");
			add("Howard Bank");
			add("Low Valley Trust");
			add("Mortgage Assets Management, LLC");
			add("Mid-Hudson Valley Federal Credit Union");
			add("Midland National Life");
			add("The Money House, Inc.");
			add("NexBank SSB");
			add("Property Disposition, Inc.");
			add("Reverse Mortgage Loan Trust 2008-1");
			add("RML Trust");
			add("Rocktop Asset Management, LLC");
			add("Seattle Bank");
			add("SMS Financial NCU, LLC");
			add("Suncoast Credit Union");
			add("Teacher's Federal Credit Union");
			add("TRM, LLC");
			add("Visions Federal Credit Union");

		}};
		doBegin();
				return SUCCESS;
	}

	public void doBegin() throws UnsupportedEncodingException, IOException
	{
		url = new URL(getText("baseurl")+"/investors");
		logger.info("Attempting to connect to " + url);
		HttpURLConnection conn = (HttpURLConnection) url.openConnection();
		logger.info("Connection opened.");
		logger.info("Attempting GET request.");
		conn.setRequestMethod("GET");
        try(BufferedReader br = new BufferedReader(
        		  new InputStreamReader(conn.getInputStream(), "utf-8"))) {
        		    StringBuilder response = new StringBuilder();
        		    String responseLine = null;
        		    while ((responseLine = br.readLine()) != null) {
        		        response.append(responseLine.trim());
        		    }
        		    //response.append(']');
        		    //response.insert(0, '[');
        		    this.jsonOutputString = response.toString();
        		    //System.out.println(response.toString());
        		    System.out.println("jsonOpString = " + this.jsonOutputString);
        		    logger.info("Received response " + response.toString());
        		    conn.disconnect();
        		    logger.info("Connection closed");
        		    String str=response.toString().replaceAll("\"","\\\"");
        		    array = new JSONArray(str);  
        		    investors=new ArrayList<>();
        		    for(int i=0; i < array.length(); i++)   
        		    {  
        		    	JSONObject object = array.getJSONObject(i);
        		    	investors.add(object.get("InvestorName").toString());
        		    } 
        		    System.out.println("Array = " + array);
        		    
             }

	}
	
}
