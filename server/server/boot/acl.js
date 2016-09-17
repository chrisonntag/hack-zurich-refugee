var app = require('../../server/server');
var Account = app.models.Account;

var acls = [ { "principalType": "ROLE", "principalId": "$everyone", "permission": "DENY" },
 { "principalType": "ROLE", "principalId": "$everyone", "permission": "ALLOW", "property": "create" },
 
 { "principalType": "ROLE", "principalId": "$everyone", "permission": "ALLOW", "property": "resetPassword" },
 { "principalType": "ROLE", "principalId": "admin", "permission": "ALLOW", "property": "deleteById" },
 { "principalType": "ROLE", "principalId": "$everyone", "permission": "ALLOW", "property": "login" },
 { "principalType": "ROLE", "principalId": "admin", "permission": "ALLOW", "property": "exists" },
 { "principalType": "ROLE", "principalId": "$everyone", "permission": "ALLOW", "property": "logout" },
 { "principalType": "ROLE", "principalId": "admin", "permission": "ALLOW", "property": "find" },
 { "principalType": "ROLE", "principalId": "admmin", "permission": "ALLOW", "property": "findById" },
 { "principalType": "ROLE", "principalId": "$owner", "permission": "ALLOW", "property": "findById" },
 { "principalType": "ROLE", "principalId": "$owner", "permission": "ALLOW", "property": "updateAttributes" },

 { "principalType": "ROLE", "principalId": "$owner", "permission": "ALLOW", "property": "__create__groups" },
 { "principalType": "ROLE", "principalId": "$owner", "permission": "ALLOW", "property": "__get__groups" },
 { "principalType": "ROLE", "principalId": "$owner", "permission": "ALLOW", "property": "__update__groups" },
 ];

app.models.Account.settings.acls = acls;