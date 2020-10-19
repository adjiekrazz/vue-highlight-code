import { saveAs } from 'file-saver'

export async function sendData(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(_ => _.ok ? _.json(): null)

    return response
}

export function urlBuilder(url, params) {
    var i = 1; var resultParams = ''; 

    if (url.substr(-1) == '/') {
        url = url.substr(0, url.length-1)
    }

    if (typeof params === 'object') {
        Object.keys(params).forEach(key => {
            if (i == 1) {
                resultParams += '?'
            }

            resultParams += key + '=' + params[key]
            
            if (i < Object.keys(params).length) {
                resultParams += '&'
            }
            i++
        })
    }

    return url + resultParams;
}