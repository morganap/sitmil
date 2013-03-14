sap.ui.jsview("sitmil.retrieveFlight", {

      getControllerName : function() {
         return "sitmil.retrieveFlight";
      },

      createContent : function(oController) {

    	  var layout = new sap.ui.commons.layout.MatrixLayout('layout');    
    	  //layout.setWidth('80%');    
    	    
    	  var rPannel = new sap.ui.commons.Panel('rPannel');              
    	    
    	  var rTitle = new sap.ui.commons.Title('rTitle');     
    	  rTitle.setText('All - Flights');     
    	  rPannel.setTitle(rTitle);     
    	    
    	  var oTable = new sap.ui.table.DataTable();  
    	    
    	  oTable.addColumn(  
    	       new sap.ui.table.Column({  
    	            label: new sap.ui.commons.Label({text: "AirLine"}),  
    	            template: new sap.ui.commons.TextField().bindProperty("value", "AirLineID"),  
    	            sortProperty: "AirLineID"  
    	  }));  
    	    
    	  oTable.addColumn(  
    	       new sap.ui.table.Column({  
    	            label: new sap.ui.commons.Label({text: "Flight Number"}),  
    	            template: new sap.ui.commons.TextField().bindProperty("value", "FlightConnectionID"),  
    	            sortProperty: "FlightConnectionID"  
    	  }));  
    	    
    	  oTable.addColumn(  
    	       new sap.ui.table.Column({  
    	            label: new sap.ui.commons.Label({text: "Date"}),  
    	            template: new sap.ui.commons.TextField().bindProperty("value", "FlightDate"),  
    	            sortProperty: "FlightDate"  
    	  }));  
    	    
    	  oTable.addColumn(  
    	       new sap.ui.table.Column({  
    	            label: new sap.ui.commons.Label({text: "Airfare"}),  
    	            template: new sap.ui.commons.TextField().bindProperty("value", "AirFare"),  
    	            sortProperty: "AirFare"  
    	  }));  
    	    
    	  oTable.addColumn(  
    	       new sap.ui.table.Column({  
    	            label: new sap.ui.commons.Label({text: "Airline Currency"}),  
    	            template: new sap.ui.commons.TextField().bindProperty("value", "LocalCurrencyCode"),  
    	            sortProperty: "LocalCurrencyCode"  
    	  }));  
    	    
    	  oTable.addColumn(  
    	       new sap.ui.table.Column({  
    	            label: new sap.ui.commons.Label({text: "Type of the plane"}),  
    	            template: new sap.ui.commons.TextField().bindProperty("value", "AirCraftType"),  
    	            sortProperty: "AirCraftType"  
    	  }));   
    	  
    	  var oModel = new sap.ui.model.odata.ODataModel( 
                  "http://gw.esworkplace.sap.com/sap/opu/odata/IWBEP/RMTSAMPLEFLIGHT_2",  
    	                                                    false,  
    	                                                    "GW@ESW",  
    	                                                    "ESW4GW");  
    	  
    	  
    	  oTable.setModel(oModel);  
    	  
    	  oTable.bindRows("/FlightCollection"); 
    	    
    	  rPannel.addContent(oTable);    
    	  layout.createRow(rPannel);  
    	    
    	  this.addContent(layout);  
    	    
    	  
    	  
    	  
      }

      
      
      
});

