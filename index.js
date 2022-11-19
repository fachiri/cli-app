const { program } = require('commander')

program
    .name('todo')
    .usage('[options] || [commands]')
    .description('Simple CLI based todo list app')
    .version('version [1.0.0]', '-v, --version', 'output the current version')

program
    .option('-p, --print <string>', 'print some string')

program
    .command('create')
    .usage('<string>')
    .description('Buat tugas baru')
    .argument('<string>', 'Tugas yang akan anda lakukan')
    .action((str) => {
        console.log(str)
    })

program.parse()