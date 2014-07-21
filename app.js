var express = require('express');
var app = express();


// ROUTE FUNCTIONS

//////////////////////////// FORMS ////////////////////////////
//See all of your a user's forms
getForms = function(request, response) {
   var Wufoo = require("wufoo");
   var wufoo = new Wufoo(request.query.username, request.query.apikey);

   wufoo.getForms(function(err, forms){
      response.send(forms);
   });
}

//View the fields of a user's form
getForm = function(request, response) {
   var Wufoo = require("wufoo");
   var wufoo = new Wufoo(request.query.username, request.query.apikey);

   wufoo.getForm(request.query.formhash, function(err, form){
      response.send(form);
   });
}


//////////////////////////// ENTRIES ////////////////////////////
// View entries from a user's form (values of the fields)
getFormEntries = function(request, response) {
   var Wufoo = require("wufoo");
   var wufoo = new Wufoo(request.query.username, request.query.apikey);

   wufoo.getFormEntries(request.query.formhash, function(err, entries){
      response.send(entries);
   });
}

// View entries from a user's report (values of the fields)
getReportEntries = function(request, response) {
   var Wufoo = require("wufoo");
   var wufoo = new Wufoo(request.query.username, request.query.apikey);

   wufoo.getReportEntries(request.query.formhash, function(err, report){
      response.send(report);
   });
}


//////////////////////////// REPORTS ////////////////////////////
// View all of the reports on a account
getReports = function(request, response) {
   var Wufoo = require("wufoo");
   var wufoo = new Wufoo(request.query.username, request.query.apikey);

   wufoo.getReports(function(err, reports){
      response.send(reports);
   });
}

// View a specific report
getReport = function(request, response) {
   var Wufoo = require("wufoo");
   var wufoo = new Wufoo(request.query.username, request.query.apikey);

   wufoo.getReport(request.query.reporthash, function(err, report){
      response.send(report);
   });
}


//////////////////////////// FIELDS ////////////////////////////
// View all the reports for a form
getFields = function(request, response) {
   var Wufoo = require("wufoo");
   var wufoo = new Wufoo(request.query.username, request.query.apikey);

   wufoo.getFields(request.query.formhash, function(err, fields){
      response.send(fields);
   });
}


//////////////////////////// WIDGETS ////////////////////////////
//See all the widgets a user uses in a report
getWidgets = function(request, response) {
   var Wufoo = require("wufoo");
   var wufoo = new Wufoo(request.query.username, request.query.apikey);

   wufoo.getWidgets(function(err, widgets){
      response.send(widgets);
    });
}


//////////////////////////// COMMENTS ////////////////////////////
//Get all the comments for a form
getComments = function(request, response) {
   var Wufoo = require("wufoo");
   var wufoo = new Wufoo(request.query.username, request.query.apikey);

   wufoo.getComments(request.query.formhash, function(err, comments){
      response.send(comments);
   });
}

//Get the comment count for a form
getCommentCount = function(request, response) {
   var Wufoo = require("wufoo");
   var wufoo = new Wufoo(request.query.username, request.query.apikey);

   wufoo.getCommentCount(request.query.formhash, function(err, count){
      response.send(count);
   });
}


//////////////////////////// WEBHOOKS ////////////////////////////
// Add a Webhook for a form

//    wufoo.webhook().add("formid", "http://localhost:3000", function(err, hashid) {
//      // store the webhook hashid somewhere in case we want to delete them later.
//    })

//    // pass in optional options
//    var options = {url: "http://abc.com/webhook", handshakeKey: "hand-shaking", metadata: true}
//    wufoo.webhook().add("formid", options, function(err, hashid) {
//      // store the webhook hashid somewhere in case we want to delete them later.
//      db.put("WebHooks", {formid:form.hash, key:hashid});
//    })

// Delete the WebHook. More info:
//    wufoo.webhook().delete("formid", "webhookHashId", function(err, success) {
//      if (!success) {
//        // do something.
//      }
//    })




// ROUTES
// for forms...
app.get('/api/v1/getForms', getForms);
app.get('/api/v1/getForm', getForm);
app.get('/api/v1/getFormEntries', getFormEntries);
app.get('/api/v1/getFields', getFields);
app.get('/api/v1/getComments', getComments);
app.get('/api/v1/getCommentCount', getCommentCount);

// for reports
app.get('/api/v1/getReports', getReports);
app.get('/api/v1/getReport', getReport);
app.get('/api/v1/getReportEntries', getReportEntries);
app.get('/api/v1/getWidgets', getWidgets);

// work in progress
// app.get('/api/v1/getEntriesCount', getEntriesCount);
// app.get('/api/v1/getFields', getFields);



// SERVER
var server = app.listen(process.env.PORT || 3000, function() {
    console.log('Listening on port %d', server.address().port);
});

// http://localhost:3000/api/v1/getForm?username=answart&apikey=2BJ3-IKC6-LSJU-227P&formhash=q2260j51chrkf6

// username: answart
// apikey: 2BJ3-IKC6-LSJU-227P
// formhash: q2260j51chrkf6
// reporthash: z1bsn3ar155c37e

// wufoo forms url: utilities.bislr.net:3333