let urlInsert = "https://laravel-zwhc.frb.io/api/trakin" ;
let urlDelete = "https://laravel-zwhc.frb.io/api/deleteTrackinByTravel/012014"; 
let points = [];
let index = 0;
let size = 0;

$(document).ready(function () {
    console.log("Start Tracker");
    initialize();
});

function initialize(){
    points = [
        {point: {lat:-17.413566517137888, lng:-66.15695750084879}},
        {point: {lat:-17.41092531902619, lng:-66.16508995862065}},
        {point: {lat:-17.41000396186776, lng:-66.17313658578156}},
        {point: {lat:-17.40154773358734, lng:-66.18264233386937}},
        {point: {lat:-17.39350666023118, lng:-66.18031844809076}},
        {point: {lat:-17.392400925716927, lng:-66.2055526686201}},
        {point: {lat:-17.39289236403354, lng:-66.26992568583454}},
        {point: {lat:-17.394694293453025, lng:-66.29121169431562}},
        {point: {lat:-17.39862571442335, lng:-66.32562980300224}},
        {point: {lat:-17.413695377605062, lng:-66.33326873482368}},
        {point: {lat:-17.437771498405947, lng:-66.334985348265}},
        {point: {lat:-17.45267417161026, lng:-66.33927688261589}},
        {point: {lat:-17.572669870094494, lng:-66.3476024700471}},
        {point: {lat:-17.623394488034904, lng:-66.36099205941875}},
        {point: {lat:-17.651859477785308, lng:-66.39704094474963}},
        {point: {lat:-17.67966575459434, lng:-66.42450676214459}},
        {point: {lat:-17.65153231954421, lng:-66.47909507421704}},
        {point: {lat:-17.670833639166435, lng:-66.48390159773156}},
        {point: {lat:-17.697001610326094, lng:-66.49008140664542}},
        {point: {lat:-17.68915161911196, lng:-66.50965080153934}},
        {point: {lat:-17.716952127610014, lng:-66.60749778986715}},
        {point: {lat:-17.666253853243184, lng:-66.75684318774343}},
        {point: {lat:-17.695693302964433, lng:-66.76920280557115}},
        {point: {lat:-17.66952514056244, lng:-66.81486473957222}},
        {point: {lat:-17.58739784034854, lng:-66.95047721445502}},
        {point: {lat:-17.63484646147052, lng:-66.961463541413}},
        {point: {lat:-17.63942704704952, lng:-66.98515280891615}},
        {point: {lat:-17.66429105134044, lng:-67.0181118056907}},
        {point: {lat:-17.663963916203766, lng:-67.06446037925501}},
        {point: {lat:-17.643025997469348, lng:-67.20968590244328}},
        {point: {lat:-17.91502818332388, lng:-67.11767541417021}},
        {point: {lat:-17.94965249283276, lng:-67.095359434473}}
        
    ];
    size = points.length;
}
    function sendPoint(){
        var sendData = {
            mac_address: "coraldemo",
            register_point_date: getFormattedDate(),
            message_type: "Automatic",
            message: "REGISTER CORAL CBBA-ORURO",
            latitude: points[index].point.lat,
            longitude: points[index].point.lng
        }

        $.ajax({
            url: urlInsert,
            type: 'POST',
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(sendData),
            success: (data) => {
                console.log(data)
            }
          })

        index += 1;
        setTimeout(sendPoint,3000);
    }

    function deleteTracking(){
        $.ajax({
            url: urlDelete,
            type: 'DELETE',
            contentType: "application/json; charset=utf-8",
            success: (data) => {
                console.log(data)
            }
          })
    }

    function getFormattedDate() {
        var date = new Date();
        var str = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +  date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        return str;
    }