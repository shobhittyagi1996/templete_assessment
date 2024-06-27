sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment",

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Fragment) {
        "use strict";

        return Controller.extend("com.sap.project1.controller.View2", {
            onInit: function () {

                let vDropdown = [
                    {
                        "text": "Standard Prequalification Low HSSE"
                    }, {
                        "text": "Standard Prequalification High HSSE"
                    },
                    {
                        "text": "Simple Prequalification"
                    }, {
                        "text": "Enhanced Due Diligence"
                    }];
                let data = [
                    {
                        "QuestionId": "	275174952",
                        "Questiontitle": "Please attach company registration license (or other similar certificate in accordance with your national law)",
                        "QuestionCatogrie": " Instructions for Completion ",
                        "Active": "True",
                        "ResponseType": "File",
                        "AttachmentNeeded": true,

                    },
                    {
                        "QuestionId": "727174954",
                        "Questiontitle": "Full legal name of the company",

                        "QuestionCatogrie": "Company General Information ",
                        "Active": "True",
                        "ResponseType": "Text",
                        "AttachmentNeeded": true,

                    },
                    {
                        "QuestionId": "257174955",
                        "Questiontitle": "Legal status",

                        "QuestionCatogrie": "Company General Information ",
                        "Active": "True",
                        "ResponseType": "Text",
                        "AttachmentNeeded": true,

                    },
                    {
                        "QuestionId": "277174955",
                        "Questiontitle": "Year of establishment",

                        "QuestionCatogrie": "Company General Information ",
                        "Active": "True",
                        "ResponseType": "Date",
                        "AttachmentNeeded": true,

                    },
                    {
                        "QuestionId": "327174955",
                        "Questiontitle": "Legal address of company ",
                        "QuestionCatogrie": "Company General Information ",
                        "Active": "True",
                        "ResponseType": "Text",
                        "AttachmentNeeded": true,

                    }, {
                        "QuestionId": "227174955",
                        "Questiontitle": "VAT number",

                        "QuestionCatogrie": "Company General Information ",
                        "Active": "True",
                        "ResponseType": "Text",
                        "AttachmentNeeded": true,

                    },
                    {
                        "QuestionId": "271794955",
                        "Questiontitle": "Total No. of Employees",

                        "QuestionCatogrie": "Human resources  ",
                        "Active": "True",
                        "ResponseType": "Text",
                        "AttachmentNeeded": true,

                    },
                    {
                        "QuestionId": "271374955",
                        "Questiontitle": "Local Employees",

                        "QuestionCatogrie": "Human resources  ",
                        "Active": "True",
                        "ResponseType": "Text",
                        "AttachmentNeeded": true,

                    },
                    {
                        "QuestionId": "271674955",
                        "Questiontitle": "Has your company already provided subcontract/ outsourcing activities to the KPO? ",

                        "QuestionCatogrie": "Business relationship with KPO ",
                        "Active": "True",
                        "ResponseType": "Text",
                        "AttachmentNeeded": true,

                    },
                    {
                        "QuestionId": "271734955",
                        "Questiontitle": "Is your company already a supplier of KPO?",

                        "QuestionCatogrie": "Business relationship with KPO ",
                        "Active": "True",
                        "ResponseType": "Text",
                        "AttachmentNeeded": true,
                    },
                    {
                        "QuestionId": "271274955",
                        "Questiontitle": "For which activities?",

                        "QuestionCatogrie": "Business relationship with KPO ",
                        "Active": "True",
                        "ResponseType": "Text",
                        "AttachmentNeeded": true,

                    },
                    {
                        "QuestionId": "271774955",
                        "Questiontitle": "Name",

                        "QuestionCatogrie": "Compiler who completed the questionnaire for prequalification process  ",
                        "Active": "True",
                        "ResponseType": "Text",
                        "AttachmentNeeded": true,

                    },
                    {
                        "QuestionId": "271274955",
                        "Questiontitle": "Surname",

                        "QuestionCatogrie": "Compiler who completed the questionnaire for prequalification process  ",
                        "Active": "True",
                        "ResponseType": "Text",
                        "AttachmentNeeded": true,

                    },
                    {
                        "QuestionId": "271734955",
                        "Questiontitle": "Organizational Role",

                        "QuestionCatogrie": "Compiler who completed the questionnaire for prequalification process  ",
                        "Active": "True",
                        "ResponseType": "Text",
                        "AttachmentNeeded": true,

                    }, {
                        "QuestionId": "271744955",
                        "Questiontitle": "Name and surname of the person or the company in charge of the process ",

                        "QuestionCatogrie": "To be filled in case of use of a consultant to complete the ",
                        "Active": "True",
                        "ResponseType": "Text",
                        "AttachmentNeeded": true,

                    },
                    {
                        "QuestionId": "271749655",
                        "Questiontitle": "Type of relationship ",

                        "QuestionCatogrie": "To be filled in case of use of a consultant to complete the ",

                        "Active": "True",
                        "ResponseType": "Text",
                        "AttachmentNeeded": true,

                    },
                    {
                        "QuestionId": "271749559",
                        "Questiontitle": "BIN/IIN of the consultant ",

                        "QuestionCatogrie": "To be filled in case of use of a consultant to complete the ",

                        "Active": "True",
                        "ResponseType": "Text",
                        "AttachmentNeeded": true,

                    },
                    {
                        "QuestionId": "271749559",
                        "Questiontitle": "Does your company have the certificates of  ISO 45001 Health and Safety MS, ISO 14001 Environmental MS, ISO 39001 Road traffic safety MS?  ",

                        "QuestionCatogrie": "MED._HIGH_ HSE questionnaire",

                        "Active": "True",
                        "ResponseType": "Text",
                        "AttachmentNeeded": true,

                    },
                    {
                        "QuestionId": "271749559",
                        "Questiontitle": "Please provide copies of certificates",

                        "QuestionCatogrie": "MED._HIGH_ HSE questionnaire",

                        "Active": "True",
                        "ResponseType": "File",
                        "AttachmentNeeded": true,

                    },
                    {
                        "QuestionId": "271749559",
                        "Questiontitle": "Provide a valid (not older than 5 years) and approved (signed) by Senior management written Health, Safety and Environmental (HSE) policy.",

                        "QuestionCatogrie": "MED._HIGH_ HSE questionnaire",

                        "Active": "True",
                        "ResponseType": "File",
                        "AttachmentNeeded": true,

                    },
                    {
                        "QuestionId": "271749559",
                        "Questiontitle": "Do you have HSE management system certifications (e.g. ISO 45001 Health and Safety MS, ISO 14001 Environmental MS, ISO 39001 Road traffic safety MS etc.). .",

                        "QuestionCatogrie": "LOW_HSE questionnaire",

                        "Active": "True",
                        "ResponseType": "File",
                        "AttachmentNeeded": true,

                    },
                    {
                        "QuestionId": "271749559",
                        "Questiontitle": "HSE Policy ",

                        "QuestionCatogrie": "HSE Management System",

                        "Active": "True",
                        "ResponseType": "File",
                        "AttachmentNeeded": true,

                    },

                ];
                let sDropdown = [
                    { "responsetype": "Yes/No" },
                    { "responsetype": "Text Box" },
                    { "responsetype": "Date Field" },
                    { "responsetype": "Attachment Type" }];

                let usModel = new JSONModel(sDropdown);
                this.getView().setModel(usModel, "fModel")

                let Model = new JSONModel(data);
                this.getView().setModel(Model, "uModel")
                let oModel = new JSONModel(vDropdown);
                this.getView().setModel(oModel, "sModel");

                let oSelectedQuestionModel = new JSONModel([]);
                this.getView().setModel(oSelectedQuestionModel, "oSelectedQuestionModel");
            },

            AddQuestion: function () {
                if (!this.questionDialog) {
                    Fragment.load({
                        id: this.getView().getId(),
                        name: "com.sap.project1.view.QuestionsPool",
                        controller: this
                    }).then(oDialog => {
                        this.questionDialog = oDialog
                        this.getView().addDependent(oDialog)
                        oDialog.open()
                    })
                } else {
                    this.questionDialog.open()
                }
            },
            onCancelCreateQuestionFrag: function () {
                this.questionDialog.close()
            },
            onAddQuestions: function () {
                let aSelectedQuestion = [];
                let oPoolOfQuestionsTable = this.getView().byId("ListofQuestionsTable").getSelectedItems();
                // aSelectedQuestion.push(oPoolOfQuestionsTable.getBindingContext().getObject())

                aSelectedQuestion = oPoolOfQuestionsTable.map(function (item) {
                    return item.getBindingContext().getObject()
                });
                let oSelectedQuestionModel = this.getView().getModel("oSelectedQuestionModel");
                oSelectedQuestionModel.setData(aSelectedQuestion);
                debugger
                oSelectedQuestionModel.refresh(true);
                this.questionDialog.close()

            },
            onSaveTemplate: function () {
                function generateUniqueId() {
                    const prefix = "TEM";
                    const date = new Date();
                    const dateString = date.toISOString().replace(/[-:.TZ]/g, "");
                    return `${prefix}${dateString}`;
                }
                let oModel = this.getOwnerComponent().getModel();
                let title = this.getView().byId("inp1").getValue();
                let assesmentType = this.getView().byId("Select1112").getSelectedItem().getText();
                let active = "true";
                let templetId = generateUniqueId();

                let aTableData = [];
                let oTable = this.getView().byId("idSelectedQuestionsTable");
                let aItems = oTable.getItems();

                aItems.forEach(function (oItem) {
                    let question = oItem.getCells()[0].getText();
                    let category = oItem.getCells()[1].getText();


                    aTableData.push({
                        // Id: 'aafdf',
                        questionId_templetId: templetId, // Reference to the parent key
                        questions: question,
                        category: category,


                    });
                });

                let headerData = {
                    templetId: templetId,
                    templetTitle: title,
                    assesmentType: assesmentType,
                    active: active,

                    lineItems: aTableData // Nested line items
                };
                oModel.create("/Manage_assesment_templetT", headerData, {
                    success: function (data) {
                        sap.m.MessageBox.success("Data saved");
                    },
                    error: function () {
                        sap.m.MessageBox.error("Error saving data");
                    }

                });

            }

        });
    }
);