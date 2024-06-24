export function Button_16_OnTapped(item, x, y, modifiers, trigger) {


    let index;
    let startdatevalue;
    let enddatevalue;
    let outputtestnamevalue;
    let tag1 = Tags("listboxselected");
    let tagValue1 = tag1.Read();
    HMIRuntime.Trace("value of listboxselected: " + tagValue1);
    
    HMIRuntime.Trace (Math.log2(tagValue1));
    index = Math.log2(tagValue1);
    let tag2 = Tags("outputstartdateresult");
    HMIRuntime.Trace(Tags("outputstartdate["+index+"]").Read());
    startdatevalue = Tags("outputstartdate["+index+"]").Read();
    tag2.Write(startdatevalue); //write value "1234" to tag "MyTag1"tag2.Write(startdatevalue); //write value "1234" to tag "MyTag1"
    let tag3 = Tags("outputenddateresult");
    HMIRuntime.Trace(Tags("outputenddate["+index+"]").Read());
    enddatevalue = Tags("outputenddate["+index+"]").Read();
    tag3.Write(enddatevalue); //write value "1234" to tag "MyTag1"tag2.Write(startdatevalue); //write value "1234" to tag "MyTag1"
    let tag4 = Tags("outputtestnameresult");
    HMIRuntime.Trace(Tags("outputtestname["+index+"]").Read());
    outputtestnamevalue = Tags("outputtestname["+index+"]").Read();
    tag4.Write(outputtestnamevalue); //write value "1234" to tag "MyTag1"tag2.Write(startdatevalue); //write value "1234" to tag "MyTag1"
    
    
    }