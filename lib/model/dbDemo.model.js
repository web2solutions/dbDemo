dbDemo.model = {
	db : null
	,schema : {
		persons: {
			//collection : 'persons'
			//,item : 'person'
			//,
			primary_key: {
				autoIncrement: false
				, keyPath: "person_id"
			}
			, str_columns: 'person_id,name,email,username,age,birth_date'
			, fields: [
				{ "name": "person_id", "value": "", "mask_to_use": "", "label": "person_id", "validate": "", "type": "hidden", "tooltip": "", "maxLength": null,  "required": false}, 
				{ "maxLength": "255", "required": false,  "value": "", "mask_to_use": "", "label": "name", "name": "name", "tooltip": "", "type": "input", "validate": "NotEmpty"},
				{ "type": "input", "tooltip": "", "validate": "NotEmpty,ValidEmail", "mask_to_use": "", "label": "email", "value": "", "name": "email", "required": false,  "maxLength": "255"},
				{ "required": false,  "maxLength": "300", "tooltip": "", "type": "input", "validate": "NotEmpty", "value": "", "label": "username", "mask_to_use": "", "name": "username"}, 
				{ "name": "birth_date", "value": "", "mask_to_use": "date", "label": "birth_date", "validate": "NotEmpty", "tooltip": "", "type": "calendar", "maxLength": null,  "required": false,  dateformat:"%Y-%m-%d",  enableTime : false,  readonly : true},
				{ "name": "age", "value": "", "mask_to_use": "integer", "label": "age", "validate": "NotEmpty", "tooltip": "", "type": "input", "maxLength": null,  "required": false}
			] // end fields
				
			, columns: {
				"name": {
					"format": ""
					, "foreign_column_name": ""
					, "has_fk": false
					, "dhtmlx_grid_footer": ""
					, "dhtmlx_grid_width": "*"
					, "ordinal_position": 0
					, "validation": ""
					, "unique": false
					, "type": "character varying"
					, "maxlength": "255"
					, "dhtmlx_form_type": "input"
					, "required": true
					, "dhtmlx_grid_header": "name"
					, "default": ""
					, "dhtmlx_grid_sorting": "str"
					, "dhtmlx_grid_type": "ed"
					, "foreign_table_name": ""
					, "index": true
					, "dhtmlx_grid_align": "left"
				}
				, "email": {
					"dhtmlx_grid_align": "left"
					, "index": true
					, "dhtmlx_grid_type": "ed"
					, "foreign_table_name": ""
					, "dhtmlx_grid_sorting": "str"
					, "default": ""
					, "dhtmlx_grid_header": "email"
					, "required": true
					, "dhtmlx_form_type": "input"
					, "maxlength": "255"
					, "type": "character varying"
					, "unique": true
					, "validation": "ValidEmail"
					, "ordinal_position": 1
					, "dhtmlx_grid_footer": ""
					, "dhtmlx_grid_width": "*"
					, "has_fk": false
					, "foreign_column_name": ""
					, "format": ""
				}
				, "username": {
					"dhtmlx_grid_width": "*"
					, "dhtmlx_grid_footer": ""
					, "ordinal_position": 2
					, "format": ""
					, "has_fk": false
					, "foreign_column_name": ""
					, "maxlength": "300"
					, "unique": false
					, "validation": ""
					, "type": "character varying"
					, "default": ""
					, "dhtmlx_grid_header": "username"
					, "required": false
					, "dhtmlx_form_type": "input"
					, "dhtmlx_grid_align": "left"
					, "index": true
					, "dhtmlx_grid_type": "ed"
					, "foreign_table_name": ""
					, "dhtmlx_grid_sorting": "str"
				}
				, "age": {
					"format": "integer"
					, "foreign_column_name": ""
					, "has_fk": false
					, "dhtmlx_grid_footer": ""
					, "dhtmlx_grid_width": "*"
					, "ordinal_position": 3
					, "validation": "ValidInteger"
					, "unique": false
					, "type": "integer"
					, "maxlength": "255"
					, "dhtmlx_form_type": "input"
					, "required": true
					, "dhtmlx_grid_header": "age"
					, "default": 0
					, "dhtmlx_grid_sorting": "int"
					, "dhtmlx_grid_type": "ed"
					, "foreign_table_name": ""
					, "index": true
					, "dhtmlx_grid_align": "left"
				}
				, "birth_date": {
					"dhtmlx_grid_width": "*"
					, "dhtmlx_grid_footer": ""
					, "ordinal_position": 4
					, "format": "date"
					, "has_fk": false
					, "foreign_column_name": ""
					, "maxlength": null
					, "validation": ""
					, "unique": false
					, "type": "date"
					, "default": ""
					, "dhtmlx_grid_header": "birth_date"
					, "required": false
					, "dhtmlx_form_type": "calendar"
					, "index": true
					, "dhtmlx_grid_align": "left"
					, "foreign_table_name": ""
					, "dhtmlx_grid_type": "dhxCalendar"
					, "dhtmlx_grid_sorting": "date"
				}
			} // end columns
		}
	}
	
	
	,start : function( onSuccess, onFail ){
		var that = dbDemo, self = dbDemo.model;
		try
		{
			//$dhx.shodbDemoirections("starting model ... ");
			
			self.db = new $dhx.dataDriver.database({
				db: 'juris'
				, version: 1
				, schema: self.schema
				
				// call all the times you connect into a database	
				, onConnect: function (response) {
						//console.log( response.message );
				}
				
				// called only one time when you create the database	
				, onCreate: function (response) {
						//console.log( response.message );
						//console.log( response.connection );
						//console.log( response.event );						
				}
					
				// call when database is ready for working	
				, onReady: function (response) {
					//console.log( response.connection );
					//console.log( response.event );
					//console.log( response.message );
					if(onSuccess) onSuccess();
				}
				
				,onSetCursor: function ( record_id ) {
					alert();
					//console.log( response.event );
					//console.log( response.message );
					that.settings.status_bar._setStatusDataTransfer('cursor set to: ' + record_id, true);
					if(onSuccess) onSuccess();
				}
				,onAfterAdd: function (response) {
					//console.log( response.connection );
					//console.log( response.event );
					//console.log( response.message );
					if(onSuccess) onSuccess();
				}
				
				,onAfterCursorChange: function (response) {
					//console.log( response.connection );
					//console.log( response.event );
					//console.log( response.message );
					if(onSuccess) onSuccess();
				}
				,onAfterDelete: function (response) {
					//console.log( response.connection );
					//console.log( response.event );
					//console.log( response.message );
					if(onSuccess) onSuccess();
				}
				,onBeforeAdd: function (response) {
					//console.log( response.connection );
					//console.log( response.event );
					//console.log( response.message );
					if(onSuccess) onSuccess();
				}
				,onBeforeCursorChange: function (response) {
					//console.log( response.connection );
					//console.log( response.event );
					//console.log( response.message );
					if(onSuccess) onSuccess();
				}
				,onBeforeDelete: function (response) {
					//console.log( response.connection );
					//console.log( response.event );
					//console.log( response.message );
					if(onSuccess) onSuccess();
				}
				,onDataRequest: function (response) {
					//console.log( response.connection );
					//console.log( response.event );
					//console.log( response.message );
					if(onSuccess) onSuccess();
				}
				,onLoadError: function (response) {
					//console.log( response.connection );
					//console.log( response.event );
					//console.log( response.message );
					if(onSuccess) onSuccess();
				}
				,onStoreUpdated: function (response) {
					//console.log( response.connection );
					//console.log( response.event );
					//console.log( response.message );
					if(onSuccess) onSuccess();
				}
				,onStartLoading: function (response) {
					//console.log( response.connection );
					//console.log( response.event );
					//console.log( response.message );
					if(onSuccess) onSuccess();
				}
				,onLoaded: function (response) {
					//console.log( response.connection );
					//console.log( response.event );
					//console.log( response.message );
					if(onSuccess) onSuccess();
				}
				
				
				
				
				
				
				// called when there is error on connection
				, onFail: function (response) {
					console.log(response.connection);
					console.log(response.event);
					console.log(response.message);
				}
			});
			
			
			
		}
		catch(e)
		{
			console.log("	>>> error when stating the model");
			console.log(e.stack);
			console.log(e.message);
			console.log(" >>>>>>>>>");
		}
	}
};