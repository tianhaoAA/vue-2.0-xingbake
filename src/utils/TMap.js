// 创建 地图使用的key
export function Tmap() {
  
    return new Promise(function (resolve, reject) {
        window.init = function () {
            resolve(qq)
        }
        const key = 'JAQBZ-UX463-H5W3U-YZMOJ-XR6FV-TBBRO'
        const script = document.createElement("script")
        script.type = "text/javascript";
        script.src = "http://map.qq.com/api/js?v=2.exp&callback=init&key="+key;
        script.onerror = reject;
        document.head.appendChild(script) //获取头部headr元素 并插入
    })
}