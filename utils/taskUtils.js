const fs = require('fs')

function writeDataToFile(filename, content) {
    // 2nd and 3rd parameter ensures ideal JSON format is preserved
    fs.writeFileSync(filename, JSON.stringify(content, null, '\t'), 'utf-8', (err) => {
        if (err) {
            console.log(err)
        }
    })
}

function getData(req) {
    return new Promise((resolve, reject) =>{
        try {
            let body = ''

            req.on('data', (chunk) => {
                body += chunk.toString()
            })
            req.on('end', () => {
                resolve(body)
            })

        } catch (error) {
            reject(error)
        }
    })
}

module.exports={
    writeDataToFile,
    getData
}