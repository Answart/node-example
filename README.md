Wufoo's Node API wrapper
---
https://github.com/jusx/node-wufoo


##Routes
-------

EXAMPLE

To View all forms:
http://localhost:3000/api/v1/getForms?username=answart&apikey=2BJ3-IKC6-LSJU-227P
To View a form:
http://localhost:3000/api/v1/getFormEntries?username=answart&apikey=2BJ3-IKC6-LSJU-227P&formhash=q2260j51chrkf6
To View entries in a form:
http://localhost:3000/api/v1/getFormEntries?username=answart&apikey=2BJ3-IKC6-LSJU-227P&formhash=q2260j51chrkf6

Routes which require just a username and apikey:

- app.get('/api/v1/getForms', getForms);
- app.get('/api/v1/getReports', getReports);

Routes which require a username, apikey, and formhash:

- app.get('/api/v1/getForm', getForm);
- app.get('/api/v1/getFormEntries', getFormEntries);
- app.get('/api/v1/getFields', getFields);
- app.get('/api/v1/getComments', getComments);
- app.get('/api/v1/getCommentCount', getCommentCount);

Routes which require a username, apikey, and reporthash:

- app.get('/api/v1/getReport', getReport);
- app.get('/api/v1/getReportEntries', getReportEntries);
- app.get('/api/v1/getWidgets', getWidgets);


##NOTES
-------

Wufoo Integration
http://help.wufoo.com/articles/en_US/SurveyMonkeyArticleType/Webhooks
http://knowledgebase.wbpsystems.com/content/Save_data_from_WuFoo_Forms_into_Heap_CRM
------------------------
Create a form
Go to Form Manager (Form Tab)
Click Notifications on the desired form.
Under Notifications Settings you will want to Add Integration to a Webhook
Add in your WebHook URL (URL to show form information) and your WebHook Handshake Key (create a handshake key to use later)


    console.log(form.hash);
    console.log(form.name);
    console.log(form.description);
    console.log("+++++++++++++")

