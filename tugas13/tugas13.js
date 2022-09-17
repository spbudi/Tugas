const fs = require('fs')
const arg = process.argv;
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'))
let idx = parseInt(arg[3]) - 1

const text = `
>>>>>> JS TODO <<<<<
$ node test13.js <command>
$ node test13.js list
$ node test13.js task <task_id>
$ node test13.js add <task_content>
$ node test13.js delete <task_id>
$ node test13.js complete <task_id>
$ node test13.js uncomplete <task_id>
$ node test13.js list: complete asc|descs
$ node test13.js list: outstanding asc|desc
$ node test13.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N>
$ node test13.js filter: <tag_name>
`

if (arg[2] === undefined) {
    console.log(text)
    process.exit(0)
}

switch (process.argv[2]) {
    case 'help':
        console.log(text)
        process.exit(0)

    case 'add':
        let output = '';
        for (let i = 3; i < arg.length; i++) {
            output += arg[i] + ' '
        };
        data.push({
            'tag': [],
            'content': output,
            'status': '[x]'
        })
        fs.writeFileSync('data.json', JSON.stringify(data, null, 3))
        console.log(`"${output.trim()}" telah ditambahkan`)
        process.exit(0)

    case 'list':
        console.log('Daftar Kerjaan')
        for (let i = 0; i < data.length; i++) {
            console.log(`${i + 1}. ${data[i].status ? '[x]' : '[ ]'} ${data[i].content.trim()}.`)
        }
        break;

    case 'task':
        console.log('Daftar Pekerjaan')
        console.log(`
id: ${idx + 1} 
title: ${data[idx].content}
Status: ${data[idx].status ? true : false} `)
        process.exit(0);

    case 'delete':
        console.log(`"${data[idx]['content']}" telah dihapus`)
        data.splice(idx, 1)
        fs.writeFileSync('data.json', JSON.stringify(data, null, 3))
        process.exit(0);

    case 'complete':
        data[idx].status = '[x]'
        console.log(`"${data[idx]['content']}" telah selesai`)
        fs.writeFileSync('data.json', JSON.stringify(data, null, 3))
        process.exit(0)

    case 'uncomplete':
        data[idx].status = false
        console.log(`"${data[idx]['content']}" tidak jadi selesai`)
        fs.writeFileSync('data.json', JSON.stringify(data, null, 3))
        process.exit(0)

    case 'list:outstanding':
        console.log('Daftar Pekerjaan')
        if (arg[3] == 'asc')
            for (let i = 0; i < data.length; i++) {
                if (data[i].status == false) {
                    console.log(`${i + 1}. [ ] ${data[i].content}`);
                }
            };

        if (arg[3] == 'desc') //dari sebentar ke lama
            for (let i = data.length - 1; i >= 0; i--) {
                if (data[i].status == false) {
                    console.log(`${i + 1}. [ ] ${data[i].content}`);
                }
            };
        process.exit(0);

    case 'list:completed':
        console.log('Daftar Pekerjaan')
        if (arg[3] == 'asc')
            for (let i = 0; i < data.length; i++) {
                if (data[i].status == '[x]') {
                    console.log(`${i + 1}. ${data[i].status} ${data[i].content}`);
                }
            };

        if (arg[3] == 'desc')
            for (let i = data.length - 1; i >= 0; i--) {
                if (data[i].status == '[x]') {
                    console.log(`${i + 1}. ${data[i].status} ${data[i].content}`);
                }
            };
        process.exit(0);


    case 'tag':
        for (let i = 4; i < arg.length; i++) {
            if (!data[idx].tag.includes(arg[i])) {
                data[idx].tag.push(arg[i])
            }
        }
        data[idx].tag.length - 1;
        console.log(`tag "${data[idx].tag}" telah ditambahkan ke daftar ${data[idx].content}`)
        fs.writeFileSync('data.json', JSON.stringify(data, null, 3))
        process.exit(0);
};

filtering(process.argv[2])

function filtering() {
    let kata = process.argv[2]
    let kata2 = kata.slice(0, 7)
    if (kata2 == 'filter:') {
        data.map((item, idx) => {
            if (item.tag.includes(kata.slice(7))) {
                console.log(`${idx + 1}. ${item.status ? '[x]' : '[ ]'} ${item.content}`);
            }
        })
    };
};