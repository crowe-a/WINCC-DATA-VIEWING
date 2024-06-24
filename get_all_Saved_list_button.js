export function Button_2_OnDown(item, x, y, modifiers, trigger) {
    for (let i = 0; i < 100 ; i++) {
     let tag1 = Tags("outputtestname[" + i + "]");
     tag1.Write(""); //write value "1234" to tag "MyTag1"
     let tag2 = Tags("outputstartdate[" + i + "]");
     tag2.Write(0); //write value "1234" to tag "MyTag1"
     let tag3 = Tags("outputstartdate[" + i + "]");
     tag3.Write(0); //write value "1234" to tag "MyTag1"
    }
    let querystartdate;
    let queryenddate;
    let querytest;
    let tag4 = Tags("querystartdate");
    querystartdate = tag4.Read().toString();
    let tag5 = Tags("queryenddate");
    queryenddate = tag5.Read().toString();
    let tag6 = Tags("querytest");
    querytest = tag6.Read();
    
    (async function() {
     try{
     // let connectionstring = "Driver=ODBC Driver 13 for SQL Server; Server=winccunified\\winccunified; Database=template;trusted_connection=yes;";
      let connectionstring = "Driver=SQLite3 ODBC Driver;Database=C:\\tmp\\template.db;trusted_connection=yes;";
      let conn = await HMIRuntime.Database.CreateConnection(connectionstring);
     // let query = "Select * from [test];";
    let query = "Select * from [test] where startdate between '" +querystartdate+"'AND '"+queryenddate+"' AND testname LIKE '%"+querytest+"%';";
    //let query = "Select * from [test] where startdate between '" +querystartdate+"'AND '"+queryenddate+"';";
    HMIRuntime.Trace(query);
      let results = await conn.Execute(query);
       if(results !== undefined && results !== null)
      {
        let statements = results.Results;
        for(let statement in statements)
        {
          let rows = statements[statement].Rows;
          for (let i in rows)
          {
            let row = rows[i];
            for(let key in row)
            {
    
                if(key=="testname"){
                HMIRuntime.Trace(key + ":" + row[key]);
                let tag1 = Tags("outputtestname[" + i + "]");
                tag1.Write(row[key]); //write value "1234" to tag "MyTag1"
                
                }
              else if (key=="startdate"){
                HMIRuntime.Trace(key + ":" + row[key]);
                let tag2 = Tags("outputstartdate[" + i + "]");
                tag2.Write(row[key]); //write value "1234" to tag "MyTag1"
                }
              else if (key=="enddate") {
                HMIRuntime.Trace(key + ":" + row[key]);
                let tag3 = Tags("outputenddate[" + i + "]");
                tag3.Write(row[key]); //write value "1234" to tag "MyTag1"
                }
               
            
            }
          }
        }
      }
      conn.Close();
    }
    catch(e)
    {
      let res = e.Results;
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