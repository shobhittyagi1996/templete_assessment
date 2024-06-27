sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("com.sap.project1.controller.View1", {
            onInit: function () {
                let aDropdown = [
                    {
                        "templeteid": "TEM1101",
                        "templetetitle": "Standard Prequalification High HSSE Template",
                        "assessmenttype": "Standard Prequalification High HSSE",
                        "active": "true",
                        "createdon": "22-03-2024",
                        "createdby": "abc@kpo.kz"

                    },
                    {
                        "templeteid": "TEM1102",
                        "templetetitle": "Standard Prequalification Low HSSE Template",
                        "assessmenttype": "Standard Prequalification Low HSSE Template",
                        "active": "true",
                        "createdon": "25-03-2024",
                        "createdby": "abc@kpo.kz"

                    },
                    {
                        "templeteid": "TEM1103",
                        "templetetitle": "Simple Prequalification Template",
                        "assessmenttype": "Simple Prequalification",
                        "active": "true",
                        "createdon": "25-03-2024",
                        "createdby": "abc@kpo.kz"

                    },
                    {
                        "templeteid": "TEM1104",
                        "templetetitle": "Enhanced Due Diligence Template",
                        "assessmenttype": "Enhanced Due Diligence",
                        "active": "true",
                        "createdon": "25-03-2024",
                        "createdby": "abc@kpo.kz"

                    }
                ];

                let amodel = new JSONModel(aDropdown);
                this.getView().setModel(amodel, "myModel");

            },
            onCreateVendor: function () {
                this.getOwnerComponent().getRouter().navTo("RouteView2");
            },
            onModify:function(){
                this.getOwnerComponent().getRouter().navTo("DisplayTemplate");
            }
        });
    });
