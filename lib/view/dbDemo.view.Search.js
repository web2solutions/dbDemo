/*jslint browser: true, devel: true, eqeq: true, newcap: true, nomen: true, white: true */
/*global $dhx, dhtmlx, dhtmlXLayoutObject, dbDemo */

dbDemo.view.Search = {
	
	window : []
	,strWindowID : "dbDemo.view.Search.window"
	,layout : []
	,form: []
	
	,_window : function( uid ){
		var that = dbDemo, self = dbDemo.view.Search;
		
		self.window[ uid ] = that.window_manager.createWindow({
			id: self.strWindowID + uid,
			left: that.settings.Search.window.left,
			top: that.settings.Search.window.top,
			width: that.settings.Search.window.width,
			height: that.settings.Search.window.height,
		});
		self.window[ uid ].button('park').hide();
		self.window[ uid ].button('minmax').hide();
		self.window[ uid ].button('stick').hide();
		
		self.window[ uid ].attachEvent("onClose", function(win){
			
			return true;
		});
		self.window[ uid ].setText("Provide some values to search.");
		self.status_bar = self.window[ uid ].attachStatusBar();
		self.status_bar.setText('search is case and special chars insentive');
	}
	
	,_layout : function( uid ){
		var that = dbDemo, self = dbDemo.view.Search;
		self.layout[ uid ] = self.window[ uid ].attachLayout(that.settings.Search.layout);
		self.layout[ uid ].cells('a').hideHeader();
	
	}
	
	
	,_form : function( uid ){
		var that = dbDemo, self = dbDemo.view.Search;
		
		that.settings.Search.form.template[1].list = dbDemo.model.schema.persons.fields;
		self.form[ uid ] = self.layout[ uid ].cells('a').attachForm(that.settings.Search.form.template);
		self.form[ uid ].attachEvent("onButtonClick", function(name)
		{
         	if (name == "search")
			{
				that.view.grid.clearAll();
				that.view.layout.progressOn();
				self.form[ uid ].lock();
				//console.log( query );
				
				// that.model.db.schema.persons.search().where({ and :{ name : 'Jose', email : 'eduardo'} });
				that.model.db.schema.persons.search.where({
					query : {
						and : self.form[ uid ].getFormData(),	
					},
					onFound : function(record_id, record, tx, event){
						//$dhx.notify('found: ', record, 'icons/db.png');
						var c = { db: 'juris', table : 'persons'}
						var schema = $dhx.dataDriver.getTableSchema(c);
						var primary_key = schema.primary_key.keyPath
						var columns = schema.str_columns.split(',');
						
						var data = [];
						columns.forEach(function (column, index_, array_) {
							data[index_] = record[column];
						});
						//that.view.grid.addRow(record_id, data);
					}
					,onReady : function(records, tx, event){
						var data={
							rows:[]
						};
						var c = { db: 'juris', table : 'persons'}
						var schema = $dhx.dataDriver.getTableSchema(c);
						var primary_key = schema.primary_key.keyPath;
						var columns = schema.str_columns.split(',');
						records.forEach(function(recordset, index, array) {
							var record = [];
							columns.forEach(function(column, index_, array_) {
								record[index_] = recordset[column];
							});
							data.rows.push({ id:recordset[primary_key], data: record})
						});
						
						that.view.grid.parse(data, "json"); //takes the name and format of the data source
						
						that.view.layout.progressOff();
						self.form[ uid ].unlock();
					}
					,onerror : function(){
						that.view.layout.progressOff();
						self.form[ uid ].unlock();
					}	
				});
				
				
			}
        });
	}
	
	

	,render : function( configuration ){
		var that = dbDemo, self = dbDemo.view.Search;
		
		configuration = configuration || {};
		var uid = 'search';
		
		if (that.window_manager.isWindow(self.strWindowID + uid))
		{
			self.window[ uid ].show();
			self.window[ uid ].bringToTop();
			return;
		}
		
		
		$dhx.showDirections("starting view ... ");
		
		self._window( uid );
		self._layout( uid );
		self._form( uid );
		
		self.form[ uid ].setFocusOnFirstActive();
		
		if( configuration.fnCallBack ) configuration.fnCallBack();			
		$dhx.hideDirections();
	}
};