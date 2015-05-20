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
			, str_columns: 'person_id,name,email,username,age,birth_date,group'
			, fields: [
				{ "name": "person_id", "value": "", "mask_to_use": "", "label": "person_id", "validate": "", "type": "hidden", "tooltip": "", "maxLength": null,  "required": false}, 
				{ "maxLength": "255", "required": false,  "value": "", "mask_to_use": "", "label": "name", "name": "name", "tooltip": "", "type": "input", "validate": "NotEmpty"},
				{ "type": "input", "tooltip": "", "validate": "NotEmpty,ValidEmail", "mask_to_use": "", "label": "email", "value": "", "name": "email", "required": false,  "maxLength": "255"},
				{ "required": false,  "maxLength": "300", "tooltip": "", "type": "input", "validate": "NotEmpty", "value": "", "label": "username", "mask_to_use": "", "name": "username"}, 
				{ "name": "birth_date", "value": "", "mask_to_use": "date", "label": "birth_date", "validate": "NotEmpty", "tooltip": "", "type": "calendar", "maxLength": null,  "required": false,  dateformat:"%Y-%m-%d",  enableTime : false,  readonly : true},
				{ "name": "age", "value": "", "mask_to_use": "integer", "label": "age", "validate": "NotEmpty", "tooltip": "", "type": "input", "maxLength": null,  "required": false},
				{ "name": "group", "value": "", "mask_to_use": "", "label": "group", "validate": "NotEmpty", "tooltip": "", "type": "combo", "maxLength": null,  "required": false}
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
				, "group": {
					"default": "usuario"
					
					
					
					, "dhtmlx_grid_footer": ""
					, "unique": false
					, "validation": ""
					, "dhtmlx_grid_width": "*"
					, "required": true
					, "dhtmlx_form_type": "input"
					, "index": true
					, "dhtmlx_grid_type": "coro"
					, "dhtmlx_grid_align": "left"
					, "format": ""
					, "maxlength": "255"
					, "ordinal_position": 5
					, "dhtmlx_grid_sorting": "str"
					, "dhtmlx_grid_header": "group"
					
					, "type": "character varying"
					
					, "numeric_precision": null
					, "numeric_scale": null
					, "is_nullable": "NO"
					
					, "has_fk": true
					, "foreign_column_name": "group"
					, "foreign_table_name": "groups"
					
					
					
					
				}
			} // end columns
			,records : [
				{
					person_id : 1,
					username: "eduardo",
					name: "José Eduardo Almeida",
					age: 30,
					birth_date: '1984-08-28',
					email: "eduardo@web2solutions.com.br"
					,group : 'usuario'
				}
				,{
					person_id : 2,
					username: "alvaro",
					name: "Alvaro Luiz",
					age: 33,
					birth_date: '1984-03-25',
					email: "alvaro@web2solutions.com.br"
					,group : 'usuario'
				}
				,{
					person_id : 3,
					username: "joao",
					name: "João Vicente",
					age: 35,
					birth_date: '1984-03-03',
					email: "joao@web2solutions.com.br"
					,group : 'usuario'
				}
			]
		}
		,groups: {
			primary_key: {
				keyPath: "group_id"
				, autoIncrement: false
			}
			,str_columns: "group_id,group"
			,fields : [{
				"name": "group_id"
				, "maxLength": null
				, "type": "hidden"
				, "label": "group_id"
				, "validate": ""
				, "required": false
				, "mask_to_use": ""
				, "tooltip": ""
				, "value": ""
			}, {
				"tooltip": ""
				, "value": ""
				, "type": "input"
				, "label": "group"
				, "name": "group"
				, "maxLength": "255"
				, "required": false
				, "mask_to_use": ""
				, "validate": ""
			}]
			,columns: {
				"group": {
					"dhtmlx_grid_width": "*"
					, "foreign_table_name": ""
					, "dhtmlx_grid_footer": ""
					, "unique": false
					, "validation": ""
					, "foreign_column_name": ""
					, "default": ""
					, "dhtmlx_grid_align": "left"
					, "dhtmlx_grid_type": "ed"
					, "index": true
					, "dhtmlx_form_type": "input"
					, "required": false
					, "ordinal_position": 2
					, "maxlength": "255"
					, "format": ""
					, "type": "character varying"
					, "has_fk": false
					, "dhtmlx_grid_header": "group"
					, "dhtmlx_grid_sorting": "str"
				}
			}
			,records : [
				{ group_id:1, group:'usuario' }
			]
		}
	}
	
	
	,start : function( onSuccess, onFail ){
		var that = dbDemo, self = dbDemo.model;
		try
		{
			//$dhx.shodbDemoirections("starting model ... ");
			
			self.db = new $dhx.dataDriver.database({
				db: 'juris'
				, version: 2
				, schema: self.schema
				
				// call all the times you connect into a database	
				, onConnect: function (response) {
						//console.log( response.message );
				}
				
				// called all the times you create a table	
				, onCreate: function (response) {
						//console.log( response.message );
						//console.log( response.connection );
						//console.log( response.event );						
				}
					
				// call when database is ready for working	
				, onReady: function (response) {
					
					// ====== lets use the table events
					self.db.schema.persons.attachEvent('onAfterCursorChange', function( cursor_id ){
						that.view.helpers.enableButtonActions();
						that.settings.status_bar._setStatusDataTransfer('selected: ' + cursor_id, false);
					});
					self.db.schema.persons.attachEvent('onBeforeCursorChange', function( cursor_id ){
						//console.log('before set cursor');
					});
					self.db.schema.persons.attachEvent('onAfterAdd', function( records, rows_affected ){
						that.view.helpers.enableButtonActions();
						that.settings.status_bar._setStatusDataTransfer('added: ' + rows_affected + ' records', false);
					});
					self.db.schema.persons.attachEvent('onBeforeAdd', function(){
						//console.log('before add record');
					});
					// ====== lets use the table events
					
					
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