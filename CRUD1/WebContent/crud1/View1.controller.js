sap.ui.controller("crud1.View1", {

	/**
	 * Called when a controller is instantiated and its View controls (if
	 * available) are already created. Can be used to modify the View before it
	 * is displayed, to bind event handlers and do other one-time
	 * initialization.
	 * 
	 * @memberOf crud1.View1
	 */

	onInit : function() {
		var oTable = this.getView().byId("idTable1");

		oTable.bindColumns('meta>/columns', function(sId, oContext) {
			var sColumnId = oContext.getObject().columnId; //name;
			return new sap.ui.table.Column({
				id : sColumnId,
				label : sColumnId,
				template : new sap.ui.commons.TextField({
					"value" : {
						path : "data>" + sColumnId
					}
				}), // TextView({"text" : {path: "data2>" + sColumnId}}),
				sortProperty : sColumnId,
				filterProperty : sColumnId
			});
		});

		oTable.bindRows('data>/rows');

		/*
		 * oTable.bindColumns('meta>/columns', function(sId, oContext) { var
		 * sColumnId = oContext.getObject().columnId; //name; return new
		 * sap.ui.table.Column({ id: sColumnId, label: sColumnId, template: new
		 * sap.ui.commons.TextView({"text" : {path: "data2>" + sColumnId}}),
		 * sortProperty: sColumnId, filterProperty: sColumnId }); });
		 * oTable.bindRows('data2>/rows');
		 */

	},

	addRecord : function(oEvent) {
		var Model = this.getView().byId("idTable1").getModel("data");
		
		var newRow = new Model.zObj;
		
		Model.getData().rows.push(newRow);
		Model.refresh();
		
	}
/**
 * Similar to onAfterRendering, but this hook is invoked before the controller's
 * View is re-rendered (NOT before the first rendering! onInit() is used for
 * that one!).
 * 
 * @memberOf crud1.View1
 */
// onBeforeRendering: function() {
//
// },
/**
 * Called when the View has been rendered (so its HTML is part of the document).
 * Post-rendering manipulations of the HTML could be done here. This hook is the
 * same one that SAPUI5 controls get after being rendered.
 * 
 * @memberOf crud1.View1
 */
// onAfterRendering: function() {
//
// },
/**
 * Called when the Controller is destroyed. Use this one to free resources and
 * finalize activities.
 * 
 * @memberOf crud1.View1
 */
// onExit: function() {
//
// }
});