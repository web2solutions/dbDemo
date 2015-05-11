/*jslint browser: true, devel: true, eqeq: true, newcap: true, nomen: true, white: true */
/*global $dhx, dhtmlx, dhtmlXLayoutObject, dbDemo */

dbDemo.view = {
	
	layout : null
	,ribbon : null
	,grid: null
	
	
	,_layout : function(){
		var that = dbDemo, self = dbDemo.view;
		self.layout = new dhtmlXLayoutObject( that.settings.layout );
		self.layout.cells('a').hideHeader();
	}
	
	,_ribbon : function(){
		var that = dbDemo, self = dbDemo.view;
		self.ribbon = self.layout.attachRibbon( that.settings.ribbon );
		self.ribbon.disable('delete');
		self.ribbon.attachEvent("onClick", function (id) {
			if (id == 'add1') {
				that.model.db.schema.persons.add({
					person_id : new Date().getTime(),
					username: "3334" + new Date().getTime(),
					name: "xsBillss22" + new Date().getTime(),
					age: 35,
					birth_date: '1984-08-28',
					email: "xsbill2s822s@company.com" + new Date().getTime()
				});	
			}
			else if (id == 'add1000') {
				var records = [];
				
				var start = new Date().getTime();
				for(i = start; i < (start + 1000); i++)
				{
					records.push({
						person_id : i,
						username: "username_" + i + new Date().getTime(),
						name: "name " + i + new Date().getTime(),
						age: 35,
						birth_date: '1984-08-28',
						email: "email_" + i + new Date().getTime() + "@company.com"
					});
				}
				
				that.model.db.schema.persons.add(records);
			}
			else if (id == 'create_table') {
				//that.model.that.model.db.table( 'contact' ).create();	
			}
			else if (id == 'select') {
				self.grid.clearAll();
				
				
				that.model.db.schema.persons.select(  function( tx, event, records, rows_affected ){
					var data={
						rows:[]
					};
					var schema = $dhx.dataDriver.getTableSchema({db:'juris',table:'persons'});
					var primary_key = schema.primary_key.keyPath;
					var columns = schema.str_columns.split(',');
					records.forEach(function(recordset, index, array) {
						var record = [];
						columns.forEach(function(column, index_, array_) {
							record[index_] = recordset.record[column];
						});
						data.rows.push({ id:recordset.record[primary_key], data: record})
					});
					
					self.grid.parse(data, "json"); //takes the name and format of the data source
				}, function( tx, event, records, rows_affected ){
					console.log(event);
				} );	
			}
			else if (id == 'adderror') {
				that.model.db.schema.persons.add([{
						person_id :4353434543,
						username: "3334" + new Date().getTime()
						, name: "xsBillss22" + new Date().getTime()
						, age: 35 + new Date().getTime()
						, email: "xsbill2s822s@company.com" + new Date().getTime()
					}, '' // error here
					, {
						person_id :345345345,
						username: "5" + new Date().getTime()
						, name: "xsBil3lss22" + new Date().getTime()
						, //age: 35 + new Date().getTime(),
						email: "xsbi3ll2s422s@company.com" + new Date().getTime()
					}, {
						person_id :34534534545,
						username: "5" + new Date().getTime()
						, name: "xsBi3llss22" + new Date().getTime()
						, //age: 35 + new Date().getTime(),
						email: "xsb3illt2s22s@company.com" + new Date().getTime()
					}, {
						person_id :34534345453,
						username: "xss444-484s-4422" + new Date().getTime()
						, name: "xsB3illss22" + new Date().getTime()
						, //age: 35 + new Date().getTime(),
						email: "xs3bill2as22s@company.com" + new Date().getTime()
					}, {
						person_id :345345345345,
						username: "xs3444-449s-4422" + new Date().getTime()
						, name: "xs3Billss22" + new Date().getTime()
						, //age: 35 + new Date().getTime(),
						email: "xs3bill2s2g2s@company.com" + new Date().getTime()
					}
				]);
			}
			else if (id == 'gettotal') {
				that.model.db.schema.persons.count(  function( tx, event, total ){
					//console.log( total );
					document.getElementById('show_total_records').innerHTML = total;
				}, function( tx, event, records, total ){
					
				});	
			}
			else if (id == 'gettablesize') {
				that.model.db.schema.persons.getTableSizeInBytes( function( tx, event, size ){
					//console.log( size );
					document.getElementById('show_table_size').innerHTML = ( size / 1024 ).toFixed(2) + " KB";
				}, function( tx, event, records, size ){
					
				} );	
			}
			else if (id == 'cleartable') {
				that.model.db.schema.persons.clearAll(function (tx, event) {
					//console.log( total );
				}, function (tx, event) {
					//console.log( total );
				});
			}
			else if (id == 'insert') {
				self.CRUDwindow.render();	
			}
			else if (id == 'update') {
				if( self.grid.getSelectedRowId() )
					self.CRUDwindow.render({ record_id : self.grid.getSelectedRowId()});
					/*that.model.db.schema.persons.update(self.grid.getSelectedRowId(), {
						username: '101.098.617-10',
						name: "José",
						email: "eu@eu.com"
					});	*/
				
			}
			else if (id == 'getCursor') {
				that.model.db.schema.persons.getCursor(function (cursor, tx, event) {
					$dhx.notify('getCursor', cursor, 'icons/db.png');
				}, function (cursor, tx, event) {});
			}
			else if (id == 'delete') {
				if (self.grid.getSelectedRowId()) that.model.db.schema.persons.del(self.grid.getSelectedRowId(), function (tx, event) {
					self.grid.deleteSelectedRows();
					self.ribbon.disable('delete');
				}, function (tx, event) {});
			}
			else if (id == 'dropdb') {
				that.model.db.drop();
			}
		});
	}
	
	,_grid : function(){
		var that = dbDemo, self = dbDemo.view;
		self.grid = self.layout.cells('a').attachGrid();
		self.grid.setImagePath( that.settings.dhtmlx_codebase_path + "/imgs/"); //the path to images required by grid 
		self.grid.setHeader(that.model.schema.persons.str_columns); //the headers of columns 
		self.grid.setColumnIds(that.model.schema.persons.str_columns);
		self.grid.setInitWidths("*"); //the widths of columns  
		self.grid.setColAlign("right,left,left,left,left,left"); //the alignment of columns   
		self.grid.setColTypes("ro,ed,ed,ed,ed,dhxCalendar"); //the types of columns  
		self.grid.setColSorting("int,str,str,str,int,date"); //the sorting types   
		//self.grid.enableDistributedParsing(true);
		self.grid.enableSmartRendering(true);
		self.grid.setDateFormat("%Y-%m-%d");
		self.grid.init(); //finishes initialization and renders the grid on the page 
		self.grid.attachEvent("onRowSelect", function (new_row, ind) {
			//self.grid.clearSelection();
			that.model.db.schema.persons.setCursor( new_row, function(){
					self.ribbon.enable('delete');
					//alert();
					//self.grid.selectRowById(new_row,false,true,false);
				}, function(){
				self.grid.clearSelection();
			} );
		});
		
		self.grid.attachEvent("onBeforeSelect", function(new_row,old_row,new_col_index){
			
			return true;
		});
		
		// enable live edit via $dhx.dataDriver
		self.grid.saveOnEdit = true;
		// it will fill out grid and selects the record on grid by passing the current cursor id
		that.model.db.schema.persons.sync.grid({
			component: self.grid
			, component_id: 'main_grid_' + that.suffix
			, onSuccess: function () {}
			, onFail: function () {}
		});
	}

	,render : function( configuration ){
		var that = dbDemo, self = dbDemo.view;
		$dhx.showDirections("starting view ... ");
		
		self._layout();
		self._grid();
		self._ribbon();
		
		if( configuration.fnCallBack ) configuration.fnCallBack();
				
				//dbDemo.view.Builder.render();
				
		$dhx.hideDirections();
		
	}
};
