/*jslint browser: true, devel: true, eqeq: true, newcap: true, nomen: true, white: true */
/*global $dhx, dhtmlx, dhtmlXLayoutObject, dbDemo */

dbDemo.view.Record = {
	
	wrapper : []
	,strTabID : "dbDemo.view.Record.tab."
	,form: []
	,layout: []
	
	,formTemplates : []
	
	,_layout : function( uid ){
		var that = dbDemo, self = dbDemo.view.Record;
		self.layout[ uid ] = self.wrapper[ uid ].attachLayout(that.settings.Search.layout);
		self.layout[ uid ].cells('a').hideHeader();
	
	}
	
	,_form : function( uid ){
		var that = dbDemo, self = dbDemo.view.Record;
		
		
		self.form[ uid ] = self.layout[ uid ].cells('a').attachForm(self.formTemplates[ uid ].template);
		self.form[ uid ].attachEvent("onButtonClick", function(name)
		{
         	
        });
	}
	
	

	,render : function( configuration ){
		var that = dbDemo, self = dbDemo.view.Record;
		//console.log( configuration )
		configuration = configuration || {};
		var uid = configuration.record_id;
		var tabId = self.strTabID + uid;
		
		
		if ( typeof self.wrapper[ uid ] !== 'undefined' )
		{
			if ( self.wrapper[ uid ].tabbar != null )
			{
				console.log(self.wrapper[ uid ]);
				configuration.wrapper.cells( uid ).setActive();
				return;
			}
		}
		
		
		that.model.db.schema.persons.getRecord( uid, function(record, recordRequest, event)
		{
				configuration.wrapper.addTab(uid, uid, null, null, true, true);
				self.wrapper[ uid ] = configuration.wrapper.cells( uid );
				self.formTemplates[ uid ] = {
					"template": [{
						type: "settings"
						, position: "label-left"
						, labelWidth: 160
						, inputWidth: 700
						, inputHeight: 30
						, labelHeight: 30
					}, {
						type: 'block'
						, inputWidth: 'auto'
						, inputHeight: 30
						, labelHeight: 30
						, list: []
					}]
				}
				
				dbDemo.model.schema.persons.fields.forEach(function (field, index_, array_) {
					var ffield = {}
					ffield.type = 'template';
		
					ffield.name= field.name;
					ffield.label= field.label;
					ffield.value= record[field.name];
			
					ffield.format = function(name, value) {
						// to access form instance from format function
						// you cann use the following method:
						// var form = this.getForm();
						return "<div class='record_text'>"+value+"</div>";
					};
					self.formTemplates[ uid ].template[1].list.push(ffield);
				});
				$dhx.showDirections("starting view ... ");
				self._layout( uid );
				self._form( uid );
				if( configuration.fnCallBack ) configuration.fnCallBack();			
				$dhx.hideDirections();
			}, function(recordRequest, event, error_message){
			
		} );
		
		
		
		
	}
};