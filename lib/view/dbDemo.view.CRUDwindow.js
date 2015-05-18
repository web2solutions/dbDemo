/*jslint browser: true, devel: true, eqeq: true, newcap: true, nomen: true, white: true */
/*global $dhx, dhtmlx, dhtmlXLayoutObject, dbDemo */

dbDemo.view.CRUDwindow = {
	
	window : []
	,strWindowID : "dbDemo.view.CRUDwindow.window"
	,layout : []
	,form: []
	
	,_window : function( uid ){
		var that = dbDemo, self = dbDemo.view.CRUDwindow;
		
		self.window[ uid ] = that.window_manager.createWindow({
			id: self.strWindowID + uid,
			left: that.settings.CRUDwindow.window.left,
			top: that.settings.CRUDwindow.window.top,
			width: that.settings.CRUDwindow.window.width,
			height: that.settings.CRUDwindow.window.height,
		});
		self.window[ uid ].button('park').hide();
		self.window[ uid ].button('minmax').hide();
		self.window[ uid ].button('stick').hide();
		
		self.window[ uid ].attachEvent("onClose", function(win){
			that.model.db.schema.persons.unbind.form({
				component: self.form[ uid ]
				, component_id: "dbDemo.view.CRUDwindow.form_" + uid +"_"+ that.suffix
				, onSuccess: function () {}
				, onFail: function () {
					that.settings.status_bar._setStatusError('could not unbind from');		
				}
			});
			return true;
		});
		if( uid == 'new' )
		{
			
		}
		else
		{
			
		}
		self.window[ uid ].setText("Fill out the fields");
		self.status_bar = self.window[ uid ].attachStatusBar();
	}
	
	,_layout : function( uid ){
		var that = dbDemo, self = dbDemo.view.CRUDwindow;
		self.layout[ uid ] = self.window[ uid ].attachLayout(that.settings.CRUDwindow.layout);
		self.layout[ uid ].cells('a').hideHeader();
		if( uid == 'new' )
		{
			
		}
		else
		{
			
		}
	}
	
	
	,_form : function( uid ){
		var that = dbDemo, self = dbDemo.view.CRUDwindow;
		
		that.settings.CRUDwindow.form.template[1].list = dbDemo.model.schema.persons.fields;
		self.form[ uid ] = self.layout[ uid ].cells('a').attachForm(that.settings.CRUDwindow.form.template);
		//$dhx.dhtmlx.prepareForm("dbDemo.view.CRUDwindow.form" + uid, that.settings.CRUDwindow.form, self.form[ uid ]);
	
		if( uid == 'new' )
			self.form[ uid ].isEditing = false;
		else
			self.form[ uid ].isEditing = true;
			
		that.model.db.schema.persons.bind.form({
			component: self.form[ uid ]
			,component_id: "dbDemo.view.CRUDwindow.form_" + uid +"_"+ that.suffix
			// not mandatory, default undefined
			,prepare : {
				settings : that.settings.CRUDwindow.form
			}
			//,component_settings : 
			,onSuccess: function () {}
			,onFail: function () {
				that.settings.status_bar._setStatusError('could not bind form');		
			}
		});
	}
	
	

	,render : function( configuration ){
		var that = dbDemo, self = dbDemo.view.CRUDwindow;
		
		configuration = configuration || {};
		var uid = typeof configuration.record_id === 'undefined' ? 'new' : configuration.record_id;
		
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
		
		if( configuration.fnCallBack ) configuration.fnCallBack();
				
				//dbDemo.view.CRUDwindow.Builder.render();
				
		$dhx.hideDirections();
		
	}
};
