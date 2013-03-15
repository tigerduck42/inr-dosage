InrDB = function() {
	this.dbName = "INRDB";
	this.dbLongName = "INR Database";
	this.dbVersion = '1.0';
	this.dbSize = 1024; //  bytes
	this.dbHandle = null;
	this.result - null;

	this.init = function() {
		try {
			if (!window.openDatabase) {
		   	alert('Databases are not supported in this browser.');
		   } else {
		   	this.dbHandle = openDatabase(this.dbName, this.dbVersion, this.dbLongName, this.dbSize);
				this.createTables();
			}
		} catch(e) {
	 
		    if (e == 2) {
		        // Version number mismatch.
		        console.log("Invalid database version.");
		    } else {
		        console.log("Unknown error "+e+".");
		    }
		    return;
		}
	}
	
	this.createTables = function() {
		this.dbHandle.transaction(
      	function (transaction) {
      		var sql = '';
      		//sql = 'DROP TABLE IF EXISTS inrSettings;'
        		//transaction.executeSql(sql);
      		sql = 'CREATE TABLE IF NOT EXISTS inrSettings(key  TEXT NOT NULL PRIMARY KEY , value TEXT NULL);'
        		transaction.executeSql(sql);
        }
      );
	}
		
	this.set = function(key, value) {
		this.dbHandle.transaction(
      	function (transaction) {
      		// Store a key - value pair  
      		var sql = "REPLACE INTO inrSettings (key, value) values ('" + key +"', '" + value + "');";
        		transaction.executeSql(sql);
        }
      );
   }
   
   this.get = function(key, selector) {
   	var result = null;
   	var keep = this;
   	this.dbHandle.transaction(
      	function (transaction) {
      		// Store a key - value pair  
      		var sql = "SELECT value FROM inrSettings WHERE key = '" + key + "';"
      		transaction.executeSql(sql,[],function(transaction, results) {
      			
	      		if(results.rows.length > 0) {
		      		var row = results.rows.item(0);
		      		$(selector).val(row['value']); 
		      	}
      		});
        });      
   }
   
   this.setResult = function(result) {
	   this.result = result;
	   console.log('ll');
   }
	
	
	this.init();
}


