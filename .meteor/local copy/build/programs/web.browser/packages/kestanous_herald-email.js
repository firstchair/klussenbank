//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
//                                                                      //
// If you are using Chrome, open the Developer Tools and click the gear //
// icon in its lower right corner. In the General Settings panel, turn  //
// on 'Enable source maps'.                                             //
//                                                                      //
// If you are using Firefox 23, go to `about:config` and set the        //
// `devtools.debugger.source-maps-enabled` preference to true.          //
// (The preference should be on by default in Firefox 24; versions      //
// older than 23 do not support source maps.)                           //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var Herald = Package['kestanous:herald'].Herald;
var _ = Package.underscore._;

(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// packages/kestanous:herald-email/lib/notifications-email.js                                          //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
var runner = {                                                                                         // 1
  name: 'email',                                                                                       // 2
  where: ['server']                                                                                    // 3
}                                                                                                      // 4
                                                                                                       // 5
runner.run = function (notification, user) {                                                           // 6
  this.emailRunner.call(notification, user);                                                           // 7
};                                                                                                     // 8
                                                                                                       // 9
runner.check = function () {                                                                           // 10
  if (!_.isFunction(this.emailRunner)) throw new Error('Herald-Email: emailRunner must be a function') // 11
};                                                                                                     // 12
                                                                                                       // 13
                                                                                                       // 14
Herald.addRunner(runner);                                                                              // 15
                                                                                                       // 16
// == TODO: emailSummery ==                                                                            // 17
// Herald.addRunner('emailSummery', function (notification, user) { /* noop */ });                     // 18
//                                                                                                     // 19
// Fire email summery based on some timer/date-time.                                                   // 20
// Will get all applicable notifications from user and summarize them.                                 // 21
                                                                                                       // 22
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['kestanous:herald-email'] = {};

})();
