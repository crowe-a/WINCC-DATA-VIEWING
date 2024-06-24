//when diplay tag change, general/process value-> tag/change-> script

export async function IO_field_6_ProcessValue_OnPropertyChanged(item, value) {

    let tag1 = Tags("querystartdatedisplay");   // I/O field shows date in GMT, so querystartdatedisplay tag is GMT added to show local time in Scada screens
    let theDate = tag1.Read().toString(); //toString() writes with GMT Time, so parsing an assigning to querystartdate tag GMT is subtracted be inserted to SQL 
    let dt1 = new Date(Date.parse(theDate));
    let tag2 =  Tags("querystartdate");
    tag2.Write(dt1);

    
    HMIRuntime.Trace("querystartdate " + tag2.Read().toString());
    
    
    }