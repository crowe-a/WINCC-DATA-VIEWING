export function Button_9_OnTapped(item, x, y, modifiers, trigger) {

let timestamp = new Date();
timestamp.setMilliseconds(0);
let tag1 = Tags("enddate");
tag1.Write(timestamp); //write value "1234" to tag "MyTag1"

let logactive = Tags("logactive");
logactive.Write(0);

(async function() {
 try{
 // let connectionstring = "Driver=ODBC Driver 13 for SQL Server; Server=winccunified\\winccunified; Database=template;trusted_connection=yes;";
  let connectionstring = "Driver=SQLite3 ODBC Driver;Database=C:\\tmp\\template.db;trusted_connection=yes;";
  let conn = await HMIRuntime.Database.CreateConnection(connectionstring);
  HMIRuntime.Trace("Connection Succsessfull");
  let startdate = Tags("startdate");
  let startdatevalue = startdate.Read().toString();
  let enddate = Tags("enddate");
  let enddatevalue = enddate.Read().toString();
  let testname = Tags("testname");
  let testnamevalue = testname.Read();
    
  if((testnamevalue && enddatevalue && startdatevalue)!= null){
  //let query = "USE template;INSERT INTO test (testname,startdate, enddate) VALUES('"+testnamevalue+"','"+startdatevalue+"','"+enddatevalue+"')";  //MS SQL komutu
  let query = "INSERT INTO test (testname,startdate, enddate) VALUES('"+testnamevalue+"','"+startdatevalue+"','"+enddatevalue+"')"; 
  HMIRuntime.Trace("Nach query");
  let results = await conn.Execute(query);
   HMIRuntime.Trace("nach ausführen: " + results);
}
  conn.Close();
}
catch(e)
{
  let res = e.Results;
 HMIRuntime.Trace("Errors  : "+ e);
  for(let statement in res)
  {
    let errors = res[statement].Errors;
    for (let i in errors)
      {
        let detailed = errors[i];
        HMIRuntime.Trace("Errors state : "+detailed.State);
        HMIRuntime.Trace("Errors Message : "+detailed.Message);
      }
    }
  }
})();


}