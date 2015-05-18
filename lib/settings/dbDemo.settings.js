dbDemo.settings = {
	appName: "dbDemo"
	, version: 0.1
	, appId: "dbDemo"
	, base_path: ""
	, application_path: ""
	, icons_path: ""
	, dhtmlx_codebase_path: ""
	, layout: {
		parent: typeof dbDemo.configuration.wrapper === 'undefined' ? document.body : dbDemo.configuration.wrapper, // id/object, parent container where the layout will be located
		pattern: "1C", // string, layout's pattern
		skin: "dhx_terrace", // string, optional, "dhx_skyblue", "dhx_web", "dhx_terrace"
	}
	,status_bar : {
		template : "<div id='status_info'>Initializing "+dbDemo.appName+"</div><div id='expiration_info' title='time remaining for token expiration' class='expiration_info'></div><div id='user_info'><img id='user_info_status' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABvUlEQVR4XpWRy0tbQRjFz9yH3hgtruzGRqRx47aoaxvBdboo7qTtrst2WRAfDcZo/wAR/BPiRroouHHZFqmCT9DEV0uiYmjD9OZO5k5nRiPk0Rvyg8vhG74535nvEtSQTC6mXdeNozlwHGetzmB6es6fmvpAJAhCCIHZ2QQs1KMvPx5+jSByX1e1klYi/2E2ds5K2D7IaoOZmY93kSWiGapH9oqB0beiZ+iVkOjaajUyZVW7qd7BYLQXBiEwTAMED406cgU71AlWoo0N/roeTNOEadnwhY9C4Tc8z6uaSAv5/yfwfFNOd+QlIs0YyrwNjLGGT5E7UW8XVQa3lKM9bMF2OuG0AcwtAoTgHbaQjfVhEpC6ggqxnqdZqyae/mp50XWJJ2vbIB1hnI1HEVnfQzn3E3gz1q/+pc85F0FknkcEZ54u2HVOK6dFfU5SqU9pSmkcAUxu6tg6hfmoG+WbPC5eDkEzv5B4f3xyxL9sfBaHR/tC6daPb/f6XamapCcqWP6XVl5y9blFCJZOMscIOSGcnmdgWTaub65gGIbUPGxZKwRj8M0SLiZGHnagIMlUQqAJz3Y3ET3fRwOW/wEKrjnBHaxMrAAAAABJRU5ErkJggg==' /> <span>Not authorized yet</span></div><div id='data_transfer_info'> no data transferred</div><div id='socket_info' class='data_transfer_info'>socket: disconnected</div><div id='errors_info'>no errors</div>"
		,_setStatus: function (m) {
			var self = dbDemo.settings;
			document.getElementById("status_info").innerHTML = m;
		}
		,
		_setStatusError: function (m) {
			var self = dbDemo.settings;
			document.getElementById("errors_info").innerHTML = m;
		}
		
		,_setStatusDataTransfer: function (m, isActive) {
			var self = dbDemo.settings;
			/*dhtmlx.message({
				text: m
			});*/
			if (isActive) {
				document.getElementById("data_transfer_info").innerHTML = m;
				document.getElementById("data_transfer_info").style.backgroundImage = "url(" + self.icons_path + "network.gif)";
			}
			else {
				document.getElementById("data_transfer_info").innerHTML = m;
				document.getElementById("data_transfer_info").style.backgroundImage = "url(" + self.icons_path + "network-accept.png)";
			}
		}
		
		,_setStatusSocket: function (m, isOffline) {
			var self = dbDemo.settings;
			dhtmlx.message({
				text: m
			});
			document.getElementById("socket_info").innerHTML = "socket: " + m;
			document.getElementById("socket_info").style.backgroundImage = "url(" + self.icons_path + "socket.gif)";
			if (isOffline)
				document.getElementById("socket_info").style.backgroundImage = "url(" + self.icons_path + "socket_disconnected.png)";
		}
		
		,_setStatusUser: function (m, ok) {
			var self = dbDemo.settings;
			if (typeof ok === 'undefined') {
				ok = true;
			}
			document.getElementById("user_info").getElementsByTagName("span")[0].innerHTML = m;
			if (ok) {
				document.getElementById("user_info_status").src = "" + self.icons_path + "online.png";
				//dhtmlx.message({
				//	text: m
				//});
			}
			else {
				document.getElementById("user_info_status").src = "" + self.icons_path + "offline.png";
				dhtmlx.message({
					type: "error"
					, text: m
				});
			}
		}
	}
	, menu: {
		icons_path: dbDemo.settings.icons_path
		, onload: function () {
			// console.log("menu loaded");
		}
		, onclick: function (id) {
			// console.log("menu clicked, id="+id);
		}
		, items: [{
			id: "file"
			, text: "File"
			, items: [{
				id: "new"
				, text: "New"
				, img: "new.gif"
			}, {
				id: "sep0"
				, type: "separator"
			}, {
				id: "open"
				, text: "Open"
				, img: "open.gif"
			}, {
				id: "save"
				, text: "Save"
				, img: "save.gif"
			}, {
				id: "saveAs"
				, text: "Save As..."
				, enabled: false
				, img_disabled: "save_as_dis.gif"
			}, {
				id: "sep1"
				, type: "separator"
			}, {
				id: "print"
				, text: "Print"
				, img: "print.gif"
			}, {
				id: "pageSetup"
				, text: "Page Setup"
				, enabled: false
				, img_disabled: "settings.gif"
			}, {
				id: "sep2"
				, type: "separator"
			}, {
				id: "close"
				, text: "Close"
				, img: "close.png"
			}]
		}, {
			id: "edit"
			, text: "Edit"
			, items: [{
				id: "edit_undo"
				, text: "Undo"
				, img: "undo.gif"
			}, {
				id: "edit_redo"
				, text: "Redo"
				, img: "redo.gif"
			}, {
				id: "sep3"
				, type: "separator"
			}, {
				id: "edit_select_all"
				, text: "Select All"
				, img: "selection.gif"
			}, {
				id: "sep4"
				, type: "separator"
			}, {
				id: "edit_cut"
				, text: "Cut"
				, img: "cut.gif"
			}, {
				id: "edit_copy"
				, text: "Copy"
				, img: "copy.gif"
			}, {
				id: "edit_paste"
				, text: "Paste"
				, img: "paste.gif"
			}]
		}, {
			id: "help"
			, text: "Help"
			, items: []
		}]
	}
	, ribbon: {
		icons_path: ""
		, items: [
		{
			id: "block_1"
			, type: 'block'
			, text: 'records management'
			, mode: 'cols'
			, list: [
				//{type: "separator", id: "sep5"},
				{
					type: "button"
					, id: "insert"
					, text: 'New <br> record'
					,isbig : true
					,img : '32px/add.png'
				},{
					type: "button"
					, id: "open"
					, text: 'Open <br> record'
					,isbig : true
					,img : '48px/open.gif'
				},
				{
					type: "button"
					, id: "find"
					, text: 'Find <br> records'
					,isbig : true
					,img : '48px/page_find.png'
				},
				
				 {
					type: "button"
					, id: "update"
					, text: 'update selected'
					, disabled: true
					,img : 'edit.png'
					,img_dis : 'edit_dis.png'
				}, {
					type: "button"
					, id: "delete"
					, text: 'delete selected'
					, disabled: true
					,img : 'delete.png'
					,img_dis : 'delete_dis.png'
				}, {
					type: "separator"
					, id: "sep5"
				}, {
					type: "button"
					, id: "select"
					, text: 'clear and fill out grid'
					,img : 'reload.png'
				}
			]
		},{
			id: "block_1"
			, type: 'block'
			, text: 'navigation'
			, mode: 'cols'
			, list: [
				{
					type: "button"
					, id: "first"
					, text: 'go to <br>first record'
					,isbig : true
					,img: '48px/first.png'
				},
				 {
					type: "button"
					, id: "last"
					, text: 'go to last'
					, img : 'entries.png'
				},
				{
					type: "button"
					, id: "previous"
					, text: 'go to previous'
					,img: 'previous.png'
				}, {
					type: "button"
					, id: "next"
					, text: 'go to next'
					,img: 'next.png'
				}
			, ]
		},{
			id: "block_1"
			, type: 'block'
			, text: 'settings and tools'
			, mode: 'cols'
			, list: [
				//{type:'button', id : 'create_table', text:'Create table', isbig: true},
				
				{id: "menu", type:"buttonSelect", text: "Tools", img: "32px/tools.png", isbig : true, items: [
					{
						id: "dropdb"
						, text: 'drop local database'
						,img:'drop_db.png'
					},{
						id: "getquota"
						, text: 'Get quota usage information'
						,img : 'text_document.gif'
					}
					,{id: "sep0", type: "separator"}
					, {
						id: "cleartable"
						, text: 'delete all table data'
						,img:'clear_table.png'
					}
					,{id: "sep00", type: "separator"}
					, {
						id: "gettablesize"
						, text: 'Get table size in Kbytes'
						,img : 'about_dis.gif'
					} 
					,{
						id: "gettotal"
						, text: 'Get total records'
						,img : '32px/entries_dis.png'
					}
					
					,{id: "sep1", type: "separator"}
					, {
						id: "getCursor"
						, text: 'get currently cursor position'
						,img:'get_cursor.png'
					}
				]}
			]
		},{
			id: "block_hot_search"
			, type: 'block'
			, text: 'hot search'
			, mode: 'cols'
			, list: [
				
			 ]
		},{
			id: "block_1_debug tools"
			, type: 'block'
			, text: 'debug tools'
			, mode: 'cols'
			, list: [
				{
					type: "button"
					, id: "add1"
					, text: 'Add 1 record'
				}, {
					type: "button"
					, id: "add1000"
					, text: 'Add 1000 records'
				}, {
					type: "button"
					, id: "adderror"
					, text: 'Add with error'
				}
			 ]
		}]
	}
	, toolbar: {
		icon_path: ""
		, items: [{
			"type": "button"
			, "id": "new_form"
			, "text": "create new form"
			, "img": "add_form.png"
			, "img_disabled": "add_form_dis.png"
				//,disabled : false
		}, {
			id: "new_s1"
			, type: "separator"
		}]
	}
	
	,tab : {
		//skin:               "dhx_skyblue",  // string, tabbar skin, optional
		mode:               "bottom",          // string, top or bottom tabs mode, optional
		align:              "left",         // string, left or right tabs align, optional
		close_button:       true,           // boolean, render closing button on tabs, optional
		content_zone:       true,           // boolean, enable/disable content zone, optional
		onload:             function(){},   // function, callback for xml/json, optional
		arrows_mode:        "auto" ,         // mode of showing tabs arrows (auto, always)
	 
		tabs: [ // tabs config
	 
			{
				id:      "records",      // tab id
				text:    "Records",    // tab text
				width:   170,      // numeric for tab width or null for auto, optional
				//index:   null,      // numeric for tab index or null for last position, optional
				active:  true,      // boolean, make tab active after adding, optional
				//enabled: false,     // boolean, false to disable tab on init
				close:   false       // boolean, render close button on tab, optional
			},
			
	 
		]
	 
	}
	
	
	, CRUDwindow: {
		window: {
			"left": $dhx.getPagePosition("x", 490, 330)
			, "top": $dhx.getPagePosition("y", 490, 330)
			, "width": 490
			, "height": 330
			, "icon": "form.png"
			, "icon_dis": "form.png"
			, skin: "dhx_terrace"
		}
		, layout: {
			parent: document.body, // id/object, parent container where the layout will be located
			pattern: "1C", // string, layout's pattern
			skin: "dhx_terrace", // string, optional, "dhx_skyblue", "dhx_web", "dhx_terrace"
		}
		, form: {
			"template": [{
				type: "settings"
				, position: "label-left"
				, labelWidth: 160
				, inputWidth: 230
			}, {
				type: 'block'
				, inputWidth: 'auto'
				, inputHeight: 'auto'
				, list: []
			}, {
				type: 'block'
				, inputWidth: 'auto'
				, inputHeight: 'auto'
				, list: [{
					type: "button"
					, value: "save existing record"
					, name: "x_special_button_update" // x_special_button_update id automatically recognized when binding a form to a dataset
				}, {
					type: 'newcolumn'
				}, {
					type: "button"
					, value: "save as new"
					, name: "x_special_button_save" // x_special_button_save id automatically recognized when binding a form to a dataset
				}]
			}]
		}
	}
	, Search: {
		window: {
			"left": $dhx.getPagePosition("x", 490, 330)
			, "top": $dhx.getPagePosition("y", 490, 330)
			, "width": 490
			, "height": 330
			, "icon": "form.png"
			, "icon_dis": "form.png"
			, skin: "dhx_terrace"
		}
		, layout: {
			parent: document.body, // id/object, parent container where the layout will be located
			pattern: "1C", // string, layout's pattern
			skin: "dhx_terrace", // string, optional, "dhx_skyblue", "dhx_web", "dhx_terrace"
		}
		, form: {
			"template": [{
				type: "settings"
				, position: "label-left"
				, labelWidth: 160
				, inputWidth: 230
			}, {
				type: 'block'
				, inputWidth: 'auto'
				, inputHeight: 'auto'
				, list: []
			}, {
				type: 'block'
				, inputWidth: 'auto'
				, inputHeight: 'auto'
				, list: [{
					type: "button"
					, value: "search"
					, name: "search" // x_special_button_update id automatically recognized when binding a form to a dataset
				},{
					type: "newcolumn"
				},{
					type: "button"
					, value: "clear results"
					, name: "clear_results" // x_special_button_update id automatically recognized when binding a form to a dataset
				}]
			}]
		}
	}
};