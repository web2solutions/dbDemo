/*jslint browser: true, devel: true, eqeq: true, newcap: true, nomen: true, white: true */
/*global $dhx, dhtmlx, dhtmlXLayoutObject, dbDemo */

dbDemo.view = {
	
	layout : null
	,menu : null
	,ribbon : null
	,tab: null
	,grid: null
	,status_bar : null
	,task_bar : null
	
	
	,_layout : function(){
		var that = dbDemo, self = dbDemo.view;
		self.layout = new dhtmlXLayoutObject( that.settings.layout );		
		self.layout.attachEvent("onExpand", function(name){
			if( name == 'b' )
			{
				//self.layout.cells('b').setText('Item detail');
			}
		});
		self.layout.attachEvent("onCollapse", function(name){
			if( name == 'b' )
			{
				//self.layout.cells('b').setText('');
			}
		});
		self.layout.cells('a').hideHeader();
		//self.layout.cells('b').setHeight(200);
		//self.layout.cells('b').setMinHeight(200)
		//self.layout.cells('b').collapse();
		
		
		
		
		
		self.task_bar = self.layout.attachStatusBar();
	}
	
	
	,_menu : function(){
		var that = dbDemo, self = dbDemo.view;
		self.menu = self.layout.cells('a').attachMenu( that.settings.menu );
		self.menu.attachEvent("onClick", function (id) {
			if (id == 'print') {
				that.model.db.schema.persons.toPDF();	
			}
			
		});
		
	}
	
	,_ribbon : function(){
		var that = dbDemo, self = dbDemo.view;
		self.ribbon = self.layout.cells('a').attachRibbon( that.settings.ribbon );
		self.helpers.disableButtonActions();
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
				$dhx.showDirections('hold on while I do some work .... ');
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
				
				that.model.db.schema.persons.add(records, function(){
					$dhx.hideDirections();
					}, function( tx, event, error_message ){
					that.settings.status_bar._setStatusError(error_message);
				});
			}
			else if (id == 'create_table') {
				//that.model.that.model.db.table( 'contact' ).create();	
			}
			else if (id == 'select') {
				that.model.db.schema.persons.load(  function( records, rows_affected, tx, event ){
					self.helpers.disableButtonActions();
				}, function( tx, event, error_message ){
					console.log(error_message);
				} );	
			}
			else if (id == 'adderror') {
				that.model.db.schema.persons.add([{
						person_id :4353434543 + new Date().getTime(),
						username: "3334" + new Date().getTime()
						, names: "xsBillss22" + new Date().getTime()
						, age: 35 + new Date().getTime()
						, email: "xsbill2s822s@company.com" + new Date().getTime()
					}
					, '' // error here
					, {
						person_id :345345345 + new Date().getTime(),
						username: "5" + new Date().getTime()
						, name: "xsBil3lss22" + new Date().getTime()
						, //age: 35 + new Date().getTime(),
						email: "xsbi3ll2s422s@company.com" + new Date().getTime()
					}, {
						person_id :34534534545 + new Date().getTime(),
						username: "5" + new Date().getTime()
						, name: "xsBi3llss22" + new Date().getTime()
						, //age: 35 + new Date().getTime(),
						email: "xsb3illt2s22s@company.com" + new Date().getTime()
					}, {
						person_id :34534345453 + new Date().getTime(),
						username: "xss444-484s-4422" + new Date().getTime()
						, name: "xsB3illss22" + new Date().getTime()
						, //age: 35 + new Date().getTime(),
						email: "xs3bill2as22s@company.com" + new Date().getTime()
					}, {
						person_id :345345345345 + new Date().getTime(),
						username: "xs3444-449s-4422" + new Date().getTime()
						, name: "xs3Billss22" + new Date().getTime()
						, //age: 35 + new Date().getTime(),
						email: "xs3bill2s2g2s@company.com" + new Date().getTime()
					}
				], function(){}, function( tx, event, error_message ){
					that.settings.status_bar._setStatusError(error_message);	
				});
			}
			else if (id == 'gettotal') {
				that.settings.status_bar._setStatusDataTransfer('counting records', true);
				that.model.db.schema.persons.count(  function( tx, event, total ){
					that.settings.status_bar._setStatusDataTransfer('total records: '+ total, false);
				}, function( tx, event, error_message ){
					that.settings.status_bar._setStatusError(error_message);	
				});	
			}
			else if (id == 'getquota') {
				
				that.settings.status_bar._setStatusDataTransfer('getting quota information', true);
				that.model.db._getQuota(  function(  used, remaining ){
					used = ( used / 1024  / 1024  / 1024 );
					remaining = ( remaining / 1024  / 1024  / 1024 );
					var message = 'used: ' + used.toFixed(5) + 'GB. remaining: '+remaining.toFixed(2) + 'GB';
					$dhx.notify('Quota information', message, 'icons/db.png');
					that.settings.status_bar._setStatusDataTransfer('used: ' + used.toFixed(5) + 'GB. remaining: '+remaining.toFixed(2) + 'GB', false);
				}, function( error ){
					that.settings.status_bar._setStatusDataTransfer(error, false);
				});	
			}
			
			//
			else if (id == 'first') {
				that.settings.status_bar._setStatusDataTransfer('requesting first record', true);
				that.model.db.schema.persons.first(  function( record_id, record, tx, event ){
						that.settings.status_bar._setStatusDataTransfer('id: ' +record_id, false);
				}, function( tx, event, error_message ){
					that.settings.status_bar._setStatusError(error_message);
					
				});	
			}
			else if (id == 'next') {
				that.settings.status_bar._setStatusDataTransfer('requesting next record', true);
				that.model.db.schema.persons.next(  function( record_id, record, tx, event ){
						that.settings.status_bar._setStatusDataTransfer('id: ' +record_id, false);
						
				}, function( tx, event, error_message ){
					that.settings.status_bar._setStatusError(error_message);
					$dhx.notify('navigation', error_message, 'icons/db.png');	
				});	
			}
			else if (id == 'previous') {
				that.settings.status_bar._setStatusDataTransfer('requesting previous record', true);
				that.model.db.schema.persons.previous(  function( record_id, record, tx, event ){
						that.settings.status_bar._setStatusDataTransfer('id: ' +record_id, false);
						
				}, function( tx, event, error_message ){
					that.settings.status_bar._setStatusError(error_message);
					$dhx.notify('navigation', error_message, 'icons/db.png');		
				});	
			}
			else if (id == 'last') {
				that.settings.status_bar._setStatusDataTransfer('requesting last record', true);
				that.model.db.schema.persons.last(  function( record_id, record, tx, event ){
						that.settings.status_bar._setStatusDataTransfer('id: ' +record_id, false);
						
				}, function( tx, event, error_message ){
					that.settings.status_bar._setStatusError(error_message);	
				});	
			}
			else if (id == 'gettablesize') {
				that.settings.status_bar._setStatusDataTransfer('requesting table size', true);
				that.model.db.schema.persons.getTableSizeInBytes( function( tx, event, size ){
					//console.log( size );
					var size = ( size / 1024 ).toFixed(2) + " KB";
					that.settings.status_bar._setStatusDataTransfer('table size :'+ size, false);
					//$dhx.notify('total table size', size, 'icons/db.png');
				}, function( tx, event, error_message ){
					that.settings.status_bar._setStatusError(error_message);	
				} );	
			}
			else if (id == 'cleartable') {
				that.settings.status_bar._setStatusDataTransfer('deleting all records', true);
				that.model.db.schema.persons.clearAll(function (tx, event) {
					that.settings.status_bar._setStatusDataTransfer('all records deleted', false);
				}, function( tx, event, error_message ){
					that.settings.status_bar._setStatusError(error_message);	
				});
			}
			else if (id == 'insert') {
				self.CRUDwindow.render();	
			}
			else if (id == 'update') {
				if( self.grid.getSelectedRowId() )
					self.CRUDwindow.render({ record_id : self.grid.getSelectedRowId()});
			}
			else if (id == 'open') {
				if( self.grid.getSelectedRowId() )
					self.helpers.viewRecord(self.grid.getSelectedRowId());
			}
			else if (id == 'find') {
				self.Search.render();
			}
			else if (id == 'getCursor') {
				that.settings.status_bar._setStatusDataTransfer('getting cursor', true);
				that.model.db.schema.persons.getCursor(function (cursor, tx, event) {
					that.settings.status_bar._setStatusDataTransfer('cursor got ' + cursor, false);
				}, function( tx, event, error_message ){
					that.settings.status_bar._setStatusError(error_message);	
				});
			}
			else if (id == 'delete') {
				if (self.grid.getSelectedRowId()) 
				{
					that.settings.status_bar._setStatusDataTransfer('deleting record', true);
					that.model.db.schema.persons.del(self.grid.getSelectedRowId(), function (tx, event, record_id) {
						that.settings.status_bar._setStatusDataTransfer('record deleted: ' + record_id, false);
						//self.grid.deleteSelectedRows();
						self.helpers.disableButtonActions();
					}, function( tx, event, error_message ){
						that.settings.status_bar._setStatusError(error_message);	
					});
				}
			}
			else if (id == 'dropdb') {
				that.settings.status_bar._setStatusDataTransfer('deleting database', true);
				that.model.db.drop( function(message, tx, event){
					that.settings.status_bar._setStatusDataTransfer(message, false);
					}, function( tx, event, error_message ){
						that.settings.status_bar._setStatusError(error_message);	
				});
			}
		});
	}
	
	,_tab : function(){
		var that = dbDemo, self = dbDemo.view;
		self.tab = self.layout.cells('a').attachTabbar( that.settings.tab );
		self.status_bar = self.tab.cells('records').attachStatusBar();
		self.status_bar.setText( that.settings.status_bar.template );
		self.tab.attachEvent("onTabClose", function(id){
			
			try
			{
				self.Record.wrapper.clean( parseInt( id ) );
			}
			catch(e)
			{
				console.log(e.stack)	
			}
			
			return true;
		});
	}


	,_grid : function(){
		var that = dbDemo, self = dbDemo.view;
		self.grid = self.tab.cells('records').attachGrid();
		self.grid.setImagePath( that.settings.dhtmlx_codebase_path + "/imgs/"); //the path to images required by grid 
		self.grid.setHeader(that.model.schema.persons.str_columns); //the headers of columns 
		self.grid.setInitWidths("*"); //the widths of columns  
		self.grid.setColAlign("right,left,left,left,left,left"); //the alignment of columns   
		self.grid.setColTypes("ro,ed,ed,ed,ed,dhxCalendar"); //the types of columns  
		self.grid.setColSorting("int,str,str,str,int,date"); //the sorting types   
		//self.grid.enableDistributedParsing(true);
		
		self.grid.init(); //finishes initialization and renders the grid on the page 
		
		that.model.db.schema.persons.attachEvent('onAfterCursorChange', function( cursor_id ){
			self.helpers.enableButtonActions();
			that.settings.status_bar._setStatusDataTransfer('selected: ' + cursor_id, false);
		});
		that.model.db.schema.persons.attachEvent('onBeforeCursorChange', function( cursor_id ){
			//console.log('before set cursor');
		});
		that.model.db.schema.persons.attachEvent('onAfterAdd', function( records, rows_affected ){
			self.helpers.enableButtonActions();
			that.settings.status_bar._setStatusDataTransfer('added: ' + rows_affected + ' records', false);
		});
		that.model.db.schema.persons.attachEvent('onBeforeAdd', function(){
			//console.log('before add record');
		});
		
		
		
		
				
		self.grid.attachEvent("onRowSelect", function (new_row, ind)
		{								
			
		});
		
		// enable live edit via $dhx.dataDriver
		self.grid.saveOnEdit = true;
		// it will fill out grid and selects the record on grid by passing the current cursor id
		that.model.db.schema.persons.sync.grid({
			component: self.grid
			, component_id: 'main_grid_' + that.suffix
			, onSuccess: function () {}
			, onFail: function () {
				that.settings.status_bar._setStatusError('could not syn grid');	
			}
		});
	}
	
	,helpers : {
	
		disableButtonActions : function(){
			var that = dbDemo, self = dbDemo.view;
			self.ribbon.disable('delete');
			self.ribbon.disable('update');	
			self.ribbon.disable('previous');
			self.ribbon.disable('next');
			self.ribbon.disable('open');	
			
		}	
		,enableButtonActions : function(){
			var that = dbDemo, self = dbDemo.view;
			self.ribbon.enable('delete');
			self.ribbon.enable('update');	
			self.ribbon.enable('previous');
			self.ribbon.enable('next');
			self.ribbon.enable('open');	
		}	
		,viewRecord : function( record_id ){
			var that = dbDemo, self = dbDemo.view;
			dbDemo.view.Record.render({
				wrapper : self.tab
				,record_id : record_id
			});
		}
	}

	,render : function( configuration ){
		var that = dbDemo, self = dbDemo.view;
		$dhx.showDirections("starting view ... ");
		
		self._layout();
		self._tab();
		self._grid();
		self._menu();
		self._ribbon();
		
		that.settings.status_bar._setStatusDataTransfer('counting records', true);
		that.model.db.schema.persons.count(  function( tx, event, total ){
			that.settings.status_bar._setStatusDataTransfer('got total records', false);
			that.settings.status_bar._setStatus('total records: ' + total);
		}, function( tx, event, error_message ){
			//self.status_bar.setText('error when counting records: ' + error_message);
		});	
		
		window.addEventListener('popstate', function(event) {
			console.log('popstate fired!');			
			console.log(event);
			console.log(event.state);
		});
		
		history.pushState('start', 'start', '#start');
		
		if( configuration.fnCallBack ) configuration.fnCallBack();
				
				//dbDemo.view.Builder.render();
				
		$dhx.hideDirections();
		
	}
};
