sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel",
        "sap/ui/core/Fragment",
    ],
    function (BaseController, JSONModel,Fragment) {
        "use strict";

        return BaseController.extend("com.sap.project1.controller.View3", {
            onInit: function () {
                let data = [{

                    "question": "Please confirm the interest and capabilities to supply [STATE SERVICE] in accordance with technical characteristics and requirements specified in the Attachment 1 – Scope of Work having completed the Attachment",
                    "category": "Acknowledgement of Interest"
                },
                {

                    "question": "Please confirm your ability to handle the information in English including acceptance of the information on goods description.",
                    "category": "Acknowledgement of Interest"
                },
                {

                    "question": "Please specify the name of the company on behalf of which the Tender Proposal will be provided in case of tender by providing Registration Certificate",
                    "category": "Acknowledgement of Interest"
                },
                {

                    "question": "If you are company with 100% international ownership, please notify about your plans on creating a joint venture with a technically competent (qualified) Kazakhstan company or about the existing joint venture with a Kazakhstan company for performance of this scope of work, on behalf of which the Tender Proposal will be provided in case of tender.",
                    "category": "Acknowledgement of Interest"
                },
                {

                    "question": "If selected for the next stage of the Procurement process please select how your company intends to bid for this requirement from the following options",
                    "category": "Acknowledgement of Interest"
                },
                {

                    "question": "If your answer to above question option (b) or (c) was yes then please indicate (by attaching as an annex), the composition, indicating which member will be responsible for each element of the requirement.",
                    "category": "Acknowledgement of Interest"
                },
                {

                    "question": "Please, confirm your experience in importation of foreign GOODS on the territory of RK, including certification and customs clearance.",
                    "category": "Acknowledgement of Interest"
                },
                {

                    "question": "Please provide a copy of written HSE Policy approved (signed) by an Executive Officer of the Company. If such a Policy does not exist, please update and adopt the attached example of HSE Policy statement (Attachment 5), thereby demonstrating their commitment to managing HSE aspects and maintaining effective safety culture",
                    "category": "Acknowledgement of Interest"
                }];

                let model = new JSONModel(data);
                this.getView().setModel(model, "myModel")


                let questions = [ {
                    "QuestionId": "271674955",
                    "Questiontitle": "Has your company already provided subcontract/ outsourcing activities to the KPO? ",

                    "QuestionCatogrie": "Business relationship with KPO ",
                    "Active": "True",
                    "ResponseType": "Text",
                    "AttachmentNeeded": true,

                }]

                let Model = new JSONModel(questions);
                this.getView().setModel(Model, "uModel")
            },
            AddQuestion:function(){
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
            onCancelCreateQuestionFrag:function(){
                this.questionDialog.close()
            }
        });
    }
);