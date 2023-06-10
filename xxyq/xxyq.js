var body = $response.body; 
var url = $request.url; 
var obj = JSON.parse(body); 
const vip = '/ucapp/getUser';
const vip1 = '/uch5/getUser';
if (url.indexOf(vip) != -1 || url.indexOf(vip2) != -1) {
    obj.data.vip = 1;
    obj.data.vipReal = 1;
    obj.data.svip = 1;
    obj.data.vipEnd = "2029-09-02";
    obj.data.vipEndReal = "2029-09-02";
    obj.data.svipEnd = "2029-09-02";
    obj.data.type = 2;
    obj.data.typeReal = 2;
    obj.data.vipTotal = 987654321;
    obj.data.svipTotal = 987654321;    
    obj.data.vipEffect = 987654321;     
    obj.data.svipEffect = 987654321;
    body = JSON.stringify(obj);
}
$done({body});