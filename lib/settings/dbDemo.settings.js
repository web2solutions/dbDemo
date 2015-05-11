dbDemo.settings = {
	
	appName : "dbDemo"
	,version : 0.1
	,appId: "dbDemo"
	
	,base_path : ""
	,application_path : ""	
	,icons_path : ""
	,dhtmlx_codebase_path : ""
	
	,layout : {
		parent:     document.body,    // id/object, parent container where the layout will be located
		pattern:    "1C",           // string, layout's pattern
		skin:       "dhx_terrace",  // string, optional, "dhx_skyblue", "dhx_web", "dhx_terrace"
	}
	
	,ribbon : {
			icons_path: "codebase4.2_std/imgs/"
			, items: [
				{
					id: "block_1"
					, type: 'block'
					, text: 'Table operations'
					, mode: 'cols'
					, list: [
										//{type:'button', id : 'create_table', text:'Create table', isbig: true},
		
						{
							type: "button"
							, id: "dropdb"
							, text: 'drop DB'
						}
						, {
							type: "button"
							, id: "cleartable"
							, text: 'clear table'
						}
						, {
							type: "button"
							, id: "getCursor"
							, text: 'get cursor'
						}
									, ]
								},
		
				{
					id: "block_1"
					, type: 'block'
					, text: 'Record operations'
					, mode: 'cols'
					, list: [
						{
							type: "button"
							, id: "add1"
							, text: 'Add 1 record'
						}
						, {
							type: "button"
							, id: "add1000"
							, text: 'Add 1000 records'
						},
		
						{
							type: "button"
							, id: "adderror"
							, text: 'Add with error'
						},
		
		
										//{type: "separator", id: "sep5"},
						{
							type: "button"
							, id: "insert"
							, text: 'insert'
						}
						, {
							type: "button"
							, id: "update"
							, text: 'update'
						}
						, {
							type: "button"
							, id: "delete"
							, text: 'delete'
							, disabled: true
						},
		
						{
							type: "separator"
							, id: "sep5"
						}
						, {
							type: "button"
							, id: "select"
							, text: 'select all data'
						}
									, ]
								}
				, {
					id: "block_1"
					, type: 'block'
					, text: 'Stats'
					, mode: 'cols'
					, list: [
		
						{
							type: "button"
							, id: "gettotal"
							, text: 'Get total records'
							, isbig: true
						}
						, {
							type: "button"
							, id: "gettablesize"
							, text: 'Get table size in Kbytes'
						},
		
									]
								}
		
								, {
					id: "block_1"
					, type: 'block'
					, text: 'Info'
					, mode: 'cols'
					, list: [
						{
							type: "text"
							, id: "info"
							, text: "table: persons"
						}
										, {
							type: "text"
							, id: "total_count"
							, text: "# records: <div id='show_total_records' style='float:right;'>0</div>"
						}
										, {
							type: "text"
							, id: "tsize"
							, text: "# table size: <div id='show_table_size' style='float:right;'>0</div>"
						}
									]
								}
							]
		}
	
	,toolbar : {
		icon_path: "",
		items: [
			{
                "type": "button",
                "id": "new_form",
                "text": "create new form",
                "img": "add_form.png",
                "img_disabled": "add_form_dis.png"
				//,disabled : false
            },{
                id: "new_s1",
                type: "separator"
            }
		]	
	}
	
	
	,CRUDwindow : {
		window: {
			"left": $dhx.getPagePosition( "x", 490, 400 ),
			"top": $dhx.getPagePosition( "y", 490, 400 ),
			"width": 490,
			"height": 400,
			"icon": "form.png",
			"icon_dis": "form.png"
			,skin : "dhx_terrace"
		}	
		,layout : {
			parent:     document.body,    // id/object, parent container where the layout will be located
			pattern:    "1C",           // string, layout's pattern
			skin:       "dhx_terrace",  // string, optional, "dhx_skyblue", "dhx_web", "dhx_terrace"
		}
		
		,form: {
			"template": [{
				type: "settings",
				position: "label-left",
				labelWidth: 160,
				inputWidth: 230
			}, {
				type: 'block',
				inputWidth: 'auto',
				inputHeight: 'auto',
				list: [
					
				]
			}, {
				type: 'block',
				inputWidth: 'auto',
				inputHeight: 'auto',
				list: [
					{
						type: "button",
						value: "save existing record",
						name: "x_special_button_update" // x_special_button_update id automatically recognized when binding a form to a dataset
					}
					,{ type : 'newcolumn'}
					,{
						type: "button",
						value: "save as new",
						name: "x_special_button_save" // x_special_button_save id automatically recognized when binding a form to a dataset
					}
					,{ type : 'newcolumn'}
					, {
						type: "button",
						value: "delete current record",
						name: "x_special_button_delete" // x_special_button_delete id automatically recognized when binding a form to a dataset
					}
				]
			}]
		}	
		
	}
};