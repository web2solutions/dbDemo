/*jslint browser: true, devel: true, eqeq: true, newcap: true, nomen: true, white: true */
/*global $dhx, dhtmlx, dhtmlXLayoutObject, dbDemo */
var dbDemo = {
	appName: "dbDemo"
	, version: 0.1
	, appId: "dbDemo"
	
	,configuration: {}

	,
	settings: {}

	,
	model: {}

	,
	view: {}
	
	,window_manager : null
	
	,savedSettings:[]
	
	
	,base_path : $dhx.CDN
	
	,suffix : null

	,
	/**
	 * Description
	 * @method _window_manager
	 * @return
	 */
	_window_manager: function () {
		'use strict';
		var self = this;
		self.window_manager = new dhtmlXWindows({
			//image_path:"codebase/imgs/",
			skin:"dhx_terrace"
		});
		self.window_manager.setSkin('dhx_terrace');
		//self.window_manager.setImagePath(self.model.window.image_path);
	}

	,
	_loadDependencies: function (c, callBack) {
		'use strict';
		var dependencies = [
			c.base_path + "codebase4.2_std/dhtmlx.css"
			,c.base_path + "codebase4.2_std/skins/terrace/dhtmlx.css"
			,c.base_path + "codebase4.2_std/dhtmlx.js"
			,c.base_path + "dbDemo/css/dbDemo.css"
			,c.base_path + "dbDemo/lib/settings/dbDemo.settings.js"
			,c.base_path + "dbDemo/lib/model/dbDemo.model.js"
			,c.base_path + "dbDemo/lib/view/dbDemo.view.js"
			,c.base_path + "dbDemo/lib/view/dbDemo.view.CRUDwindow.js"
			,c.base_path + "dbDemo/lib/view/dbDemo.view.Search.js"
			,c.base_path + "dbDemo/lib/view/dbDemo.view.Record.js"
			//
		];
		
		if( typeof jQuery === 'undefined' )
		{
			dependencies.push( c.base_path + "dbDemo/js/jquery-1.11.1.min.js" );
		}
		// Currency mask - shall to be loaded after JQUERY only
		dependencies.push( c.base_path + "dbDemo/js/jquery.price_format.1.7.min.js" );
		
		typeof window.JSON === 'undefined' ? dependencies.unshift(c.base_path + "dbDemo/js/json3.min.js") : "";
		

		$dhx.onDemand.load(dependencies, function () {
			if (callBack) {
				callBack();
			}
		});
	}

	,
	start: function (configuration) {
		'use strict';
		var self = this;
		try
		{
			//console.log( 'start' );
			
			console.log( 'start dbDemo' );
			
			if(configuration.base_path) 
				self.base_path = configuration.base_path;
			else
				configuration.base_path = 'http://cdn.dhtmlx.com.br/';
			
			
			self.configuration = configuration;
			self.configuration.container = self.configuration.container || document.body;
			
			
	
			self._loadDependencies(configuration, function () {
	
				window.dhx4.dateFormat = {
					en: "%Y-%m-%d"
					,pt: "%Y-%m-%d"
				};
				
				$dhx.init();
				
				
				
				
				dbDemo.model.start( function(){
						
						self.suffix = self.settings.appName + "_" + self.settings.version;
						self.settings.base_path = configuration.base_path;
						self.settings.application_path = self.settings.base_path + "dbDemo/";
						self.settings.icons_path = self.settings.application_path + "icons/";
						
						self.settings.menu.icons_path = self.settings.application_path + "icons_terrace/";
						self.settings.ribbon.icons_path = self.settings.application_path + "icons_terrace/";
						
						
						
						self.settings.dhtmlx_codebase_path = self.settings.application_path + '/codebase4.0/';
						
						self._window_manager();
			
						//	dbDemo.view.render(  );
						dbDemo.view.render( { onLogin : function(){
							//history.pushState('start_screen', 'start_screen' , '#start_screen');
						}} );
						
						
					}, function(){
					 alert('could not start model');
				});
				
				
				
	
				
			});
		}
		catch(e)
		{
			if ($dhx._enable_log) console.log(">>> error when stating the component:");
				console.log(e.stack);
			if ($dhx._enable_log) console.log(">>>>>>>>>");
		}
	}
};