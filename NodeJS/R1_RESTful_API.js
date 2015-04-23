
//=======================================================================
//=  Node.js REST Client to R1ImportsAPI
//=
//=  Notes:
//=  Using node-rest-client available using  NPM
//=  npm install node-rest-client
//=
//=  The usr variable should be in the form of "domain/username"
//=======================================================================
var Client = require('node-rest-client').Client;
var mongo = require('mongodb').MongoClient, format = require('util').format;

var usr = "<domain>/<username>";
var pwd = "<password>";
var options_auth={user: usr, password: pwd};

client = new Client(options_auth);


//============================
// = REGIONS GET
//============================
/*client.get("https://www.resilienceone.com/r1importsapi/api/regions/getall/false", function(data, response)
    {
        // console.log("================= START =====================")
        // console.log(data);
        // console.log("=================   END   =====================")

        var obj = JSON.parse(data);

        mongo.connect("mongodb://127.0.0.1:27017/local", function(err, db)
        {
            if(err){
                return console.log(err);}
            else{

                var regionCollection = db.collection('regions');
                regionCollection.remove(function(err, result){}); //cleanup

                regionCollection.insert(obj, {w: 1}, function(err, docs){}); //add items to collection
            }
            db.close();

        });

});*/

//============================
// = REGIONS POST
//============================
/*var args = {
  data: [{"UniqueClientId":"Region1_v6_Upgrade","Name":"Region 1","Description":"Base Region installed as part of v6.0 upgrade","IsActive":true,"CreateDate":"2012-05-07T13:55:30","LastUpdatedBy":"V7/SBCPAdmin","LastUpdatedDate":"2014-09-05T14:43:30.047"}
  ,{"UniqueClientId":"Region2","Name":"Canada","Description":"USA North","IsActive":true,"CreateDate":"2012-08-03T18:41:18","LastUpdatedBy":"V7/SBCPAdmin","LastUpdatedDate":"2014-09-05T14:43:30.263"}
  ,{"UniqueClientId":"1234","Name":"region1234","Description":"Update test","IsActive":true,"CreateDate":"2013-08-09T12:49:31.94","LastUpdatedBy":"V7/SBCPAdmin","LastUpdatedDate":"2014-09-05T14:43:30.263"}
  ,{"UniqueClientId":"Region_ABC","Name":"ABC Region","Description":"Test Region","IsActive":true,"CreateDate":"2014-05-06T13:52:01.717","LastUpdatedBy":"V7/SBCPAdmin","LastUpdatedDate":"2014-09-05T14:43:30.28"}
  ,{"UniqueClientId":"region_1234","Name":"sample region 2","Description":"sample region 2","IsActive":true,"CreateDate":"2014-07-10T14:13:00.963","LastUpdatedBy":"v7/sbcpadmin","LastUpdatedDate":"2014-09-10T17:46:52.92"}
  ,{"UniqueClientId":"Americs_SW","Name":"Americs SW","Description":"for facilities in SouthWest US","IsActive":true,"CreateDate":"2014-08-28T15:23:03.18","LastUpdatedBy":"V7/SBCPAdmin","LastUpdatedDate":"2014-09-05T14:43:30.28"}
  ,{"UniqueClientId":"Americas_SW","Name":"Americas - SouthWest","Description":"facilities in SW US","IsActive":true,"CreateDate":"2014-09-02T14:41:22.373","LastUpdatedBy":"V7/SBCPAdmin","LastUpdatedDate":"2014-09-05T14:43:30.293"}
  ,{"UniqueClientId":"Americas_WesternRegion","Name":"Americas - Western","Description":"Americas_WesternRegion_IncludingHawaii_and_PuertoRico","IsActive":true,"CreateDate":"2014-09-02T17:24:11.117","LastUpdatedBy":"V7/SBCPAdmin","LastUpdatedDate":"2014-09-05T14:43:30.293"}
  ,{"UniqueClientId":"Americas_Eastern","Name":"Americas - Eastern","Description":"facilities in the East","IsActive":true,"CreateDate":"2014-09-05T14:43:30.293","LastUpdatedBy":null,"LastUpdatedDate":"2014-09-05T14:43:30.293"}
  ,{"UniqueClientId":"Americas_ZZZZZ","Name":"Americas - ZZZZZ","Description":"facilities in the ZZZZZ","IsActive":true,"CreateDate":"2014-09-05T14:43:30.293","LastUpdatedBy":null,"LastUpdatedDate":"2014-09-05T14:43:30.293"}],
  headers:{"Content-Type": "application/json"}
};

client.post("https://www.resilienceone.com/r1importsapi/api/regions/PostList", args, function(data,response) {
            console.log("================= START =====================")
            console.log(data);
            console.log("=================   END   =====================")
});*/

//============================
//= FACILITIES GET
//============================
client.get("https://www.resilienceone.com/r1importsapi/api/facilities/getall/false", function(data, response){
            console.log("================= START =====================");
            console.log(data);
            console.log("=================   END   =====================");

            // var obj = JSON.parse(data);

            // mongo.connect("mongodb://127.0.0.1:27017/local", function(err, db)
            // {
            //     if(err){
            //         return console.log(err);}
            //     else{

            //         var facilityCollection = db.collection('facilities');
            //         facilityCollection.remove(function(err, result){}); //cleanup

            //         facilityCollection.insert(obj, {w: 1}, function(err, docs){}); //add items to collection
            //     }
            //     db.close();

            //});

        });

//============================
//= FACILITIES POST
//============================

//============================
//= DEPARTMENTS GET
//============================
/*client.get("https://www.resilienceone.com/r1importsapi/api/departments/getall/false", function(data, response){
            console.log("================= START =====================")
            console.log(data);
            console.log("=================   END   =====================")

            var obj = JSON.parse(data);

            mongo.connect("mongodb://127.0.0.1:27017/local", function(err, db)
            {
                if(err){
                    return console.log(err);}
                else{

                    var departmentCollection = db.collection('departments');
                    departmentCollection.remove(function(err, result){}); //cleanup

                    departmentCollection.insert(obj, {w: 1}, function(err, docs){}); //add items to collection
                }
                db.close();

            });

        });*/

//============================
//= DEPARTMENTS POST
//============================

//============================
//= USERS GET
//============================
// client.get("https://www.resilienceone.com/r1importsapi/api/users/getall/false", function(data, response){
//             console.log("================= START =====================");
//             console.log(data);
//             console.log("=================   END   =====================");

// //             var obj = JSON.parse(data);

// //             mongo.connect("mongodb://127.0.0.1:27017/local", function(err, db)
// //             {
// //                 if(err){
// //                     return console.log(err);}
// //                 else{

// //                     var userCollection = db.collection('users');
// //                     userCollection.remove(function(err, result){}); //cleanup

// //                     userCollection.insert(obj, {w: 1}, function(err, docs){}); //add items to collection
// //                 }
// //                 db.close();

// //             });

//          });

//============================
//= USERS POST
//============================
// var args = {data: [{"UniqueClientId":"9898789","LastName":" ","FirstName":"SBCP Administrator","MiddleInitial":" ","LoginId":"SBCPAdmin","Suffix":" ","Email":"sbcpadmin989789@strategicbcp.com","AltEmail":"","AltEmail2":"","WorkPhone":"","Extension":"","MobilePhone":"","HomePhone":"","Pager":"","PrimaryPhone":"","Address1":null,"Address2":null,"City":null,"StateCode":null,"PostalCode":null,"CountryCode":null,"TitleOfPersonWhoPerformsId":null,"Notes":"","EmergencyContactName":"","EmergencyContactNumber":"","EmergencyContactExtension":"","FacilityId":"1","FloorNumber":"","OfficeNumber":"","DepartmentId":null,"IsUser":true,"IsActive":true,"IsPrivate":false,"IsExecutive":false,"CanDeclareEvents":false,"IsExternalContact":false,"IsLocked":false,"IsCMTeamMember":false,"IsSiteAdmin":false,"CreateDate":"2007-12-21T00:00:00","LastUpdatedBy":"V7/SBCPAdmin","LastUpdatedDate":"2014-08-27T17:17:43.927"}],
//   headers:{"Content-Type": "application/json"}
// };

// client.post("https://www.resilienceone.com/r1importsapi/api/users/PostList", args, function(data,response) {
//             console.log("================= START =====================")
//             console.log(data);
//             console.log("=================   END   =====================")
// });

//============================
//= TEAMS GET
//============================
/*client.get("https://www.resilienceone.com/r1importsapi/api/teams/getall/false", function(data, response){
            console.log("================= START =====================")
            console.log(data);
            console.log("=================   END   =====================")

            var obj = JSON.parse(data);

            mongo.connect("mongodb://127.0.0.1:27017/local", function(err, db)
            {
                if(err){
                    return console.log(err);}
                else{

                    var teamCollection = db.collection('teams');
                    teamCollection.remove(function(err, result){}); //cleanup

                    teamCollection.insert(obj, {w: 1}, function(err, docs){}); //add items to collection
                }
                db.close();

            });

        });*/

//============================
//= TEAMS POST
//============================

//============================
//= CALL TREES GET
//============================
/*client.get("https://www.resilienceone.com/r1importsapi/api/calltrees/getall/false", function(data, response){
            console.log("================= START =====================")
            console.log(data);
            console.log("=================   END   =====================")

            var obj = JSON.parse(data);

            mongo.connect("mongodb://127.0.0.1:27017/local", function(err, db)
            {
                if(err){
                    return console.log(err);}
                else{

                    var ctCollection = db.collection('calltrees');
                    ctCollection.remove(function(err, result){}); //cleanup

                    ctCollection.insert(obj, {w: 1}, function(err, docs){}); //add items to collection
                }
                db.close();

            });

        });*/

//============================
//= CALL TREES POST
//============================

//============================
//= BUSIINESS FUNCTIONS GET
//============================
/*client.get("https://www.resilienceone.com/r1importsapi/api/businessfunctions/getall/false", function(data, response){
            console.log("================= START =====================")
            console.log(data);
            console.log("=================   END   =====================")

            var obj = JSON.parse(data);

            mongo.connect("mongodb://127.0.0.1:27017/local", function(err, db)
            {
                if(err){
                    return console.log(err);}
                else{

                    var bfCollection = db.collection('businessfunctions');
                    bfCollection.remove(function(err, result){}); //cleanup

                    bfCollection.insert(obj, {w: 1}, function(err, docs){}); //add items to collection
                }
                db.close();

            });

        });*/

//============================
//= BUSIINESS FUNCTIONS POST
//============================

//============================
//= BUSINESS PROCESSES GET
//============================
/*client.get("https://www.resilienceone.com/r1importsapi/api/businessprocesses/getall/false", function(data, response){
            console.log("================= START =====================")
            console.log(data);
            console.log("=================   END   =====================")

            var obj = JSON.parse(data);

            mongo.connect("mongodb://127.0.0.1:27017/local", function(err, db)
            {
                if(err){
                    return console.log(err);}
                else{

                    var bpCollection = db.collection('businessprocesses');
                    bpCollection.remove(function(err, result){}); //cleanup

                    bpCollection.insert(obj, {w: 1}, function(err, docs){}); //add items to collection
                }
                db.close();

            });

        });*/

//============================
//= BUSINESS PROCESSES POST
//============================

//============================
//= SUPPORT COMPONENTS GET
//============================
/*client.get("https://www.resilienceone.com/r1importsapi/api/supportcomponents/getall/false", function(data, response){
            console.log("================= START =====================")
            console.log(data);
            console.log("=================   END   =====================")

            var obj = JSON.parse(data);

            mongo.connect("mongodb://127.0.0.1:27017/local", function(err, db)
            {
                if(err){
                    return console.log(err);}
                else{

                    var scCollection = db.collection('supportcomponents');
                    scCollection.remove(function(err, result){}); //cleanup

                    scCollection.insert(obj, {w: 1}, function(err, docs){}); //add items to collection
                }
                db.close();

            });

        });*/

//============================
//= SUPPORT COMPONENTS POST
//============================

//============================
//= SERVERS GET
//============================
/*client.get("https://www.resilienceone.com/r1importsapi/api/servers/getall/false", function(data, response){
            console.log("================= START =====================")
            console.log(data);
            console.log("=================   END   =====================")

            var obj = JSON.parse(data);

            mongo.connect("mongodb://127.0.0.1:27017/local", function(err, db)
            {
                if(err){
                    return console.log(err);}
                else{

                    var serverCollection = db.collection('servers');
                    serverCollection.remove(function(err, result){}); //cleanup

                    serverCollection.insert(obj, {w: 1}, function(err, docs){}); //add items to collection
                }
                db.close();

            });

        });*/

//============================
//= SERVERS POST
//============================

//============================
//= VENDORS GET
//============================
/*client.get("https://www.resilienceone.com/r1importsapi/api/vendors/getall/false", function(data, response){
            console.log("================= START =====================")
            console.log(data);
            console.log("=================   END   =====================")

            var obj = JSON.parse(data);

            mongo.connect("mongodb://127.0.0.1:27017/local", function(err, db)
            {
                if(err){
                    return console.log(err);}
                else{

                    var vendorCollection = db.collection('vendors');
                    vendorCollection.remove(function(err, result){}); //cleanup

                    vendorCollection.insert(obj, {w: 1}, function(err, docs){}); //add items to collection
                }
                db.close();

            });

        });*/

//============================
//= VENDORS POST
//============================

//============================
//= CRISIS MANAGEMENT GET
//============================
/*client.get("https://www.resilienceone.com/r1importsapi/api/crisismanagement/getall/false", function(data, response){
            console.log("================= START =====================")
            console.log(data);
            console.log("=================   END   =====================")

            var obj = JSON.parse(data);

            mongo.connect("mongodb://127.0.0.1:27017/local", function(err, db)
            {
                if(err){
                    return console.log(err);}
                else{

                    var cmCollection = db.collection('crisismanagement');
                    cmCollection.remove(function(err, result){}); //cleanup

                    cmCollection.insert(obj, {w: 1}, function(err, docs){}); //add items to collection
                }
                db.close();

            });

        });*/
