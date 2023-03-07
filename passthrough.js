
/**
 * 将设备自定义topic数据转换为json格式数据, 设备上报数据到物联网平台时调用
 * 入参：topic   string 设备上报消息的topic
 * 入参：rawData byte[]数组 不能为空
 * 出参：jsonObj JSON对象 不能为空
 */
function transformPayload(topic, rawData) {
    var jsonObj = {};
    jsonObj['topic'] = topic;
    jsonObj['remain']=raw_to_int(rawData);
    return jsonObj;
}

/**
 * 将设备的自定义格式数据转换为Alink协议的数据，设备上报数据到物联网平台时调用
 * 入参：rawData byte[]数组 不能为空
 * 出参：jsonObj Alink JSON对象 不能为空
 */
function rawDataToProtocol(rawData) {
    var jsonObj = {};
    jsonObj['method']='thing.event.property.post';
    jsonObj['id']='1';
    var params = {};
    params['remain']=raw_to_int(rawData);
    jsonObj['params'] = params;
    return jsonObj;
}

/**
 *  将Alink协议的数据转换为设备能识别的格式数据，物联网平台给设备下发数据时调用
 *  入参：jsonObj Alink JSON对象  不能为空
 *  出参：rawData byte[]数组      不能为空
 *
 */
function protocolToRawData(jsonObj) {
    var rawdata = ['2'];
    return rawdata;
}

function raw_to_int(raw){
    return (raw[0]-48)*10+(raw[1]-48)
}