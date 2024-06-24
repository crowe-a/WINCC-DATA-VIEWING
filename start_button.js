export function Button_15_OnTapped(item, x, y, modifiers, trigger) {

    HMIRuntime.Tags.SysFct.SetTagValue("Log_Data_Kayıt Start", 1);
    
    
    
    //let timestamp = new Date(); // güncel tarih saat alınması için gerekli script
    let timestamp = new Date() ;
    let localTime;
    localTime = timestamp.toLocaleTimeString(); //burda sadece saat verisini alıyor
    
    
    timestamp.setMilliseconds(0);
    let tag1 = Tags("startdate");
    tag1.Write(timestamp); //write value "1234" to tag "MyTag1"
    let logactive = Tags("logactive");
    logactive.Write(1);
    let testnamevalue;
    let testno;
    let testname = Tags("testname");
    testnamevalue = testname.Read();
    if (testnamevalue === undefined || testnamevalue == null || testnamevalue.length <= 0) {
    testnamevalue="test0";
    }
    testno = parseInt(testnamevalue.substring(4))+1;
    testname.Write(localTime);
    
    }