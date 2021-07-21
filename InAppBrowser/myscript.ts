
export const ScriptStore222: any = '\
    var btnSendData = document.getElementById("btnSendData");\
    alert("asdalsda");\
    btnSendData.addEventListener(\'click\', function(){\
    var messageObj = {my_message1: message1, my_message2: message2};\
    var stringifiedMessageObj = JSON.stringify(messageObj);\
    webkit.messageHandlers.cordova_iab.postMessage(stringifiedMessageObj);\
    });';