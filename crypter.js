const cryptoJS = require('crypto-js');
const { prompt } = require('inquirer');
const colors = require('colors');
const { version } = require('./package.json');

// Constants
const COMMANDS = {
    ENCRYPT: 'encrypt',
    DECRYPT: 'decrypt',
    HELP: 'help'
};

const HEADER = ''+
'______________\n' +
'< CRYPTER-TEXT >\n' +
' -------------- \n' +
'        \\   ^__^\n' +
'         \\  (oo)\\________\n' +
'            (__)\\       )\\/\\\n' +
'                ||----w |\n' +
'                ||     ||\n\n'+
'This is a simple text encrypter/decrypter made with Node.js\n';

const USAGE = ''+
'Usage:' +
'\n    '+'crypter-text'.green+' <command>'+
'\n\nCommands:'+
'\n    '+'encrypt'.green+'    Encrypts a text'+
'\n    '+'decrypt'.green+'    Decrypts a text'+
'\n    '+'help'.green+'       Shows this help'+
'\n';

const MADE_WITH = 'Made with '+'♥'.red+' by '+'urienix'.cyan+'\n';

const VERSION = '' +
'Version:' +
'\n    '+version.green+
'\n';


// Functions
async function encrypt() {
    try {
        let fields = await insertFields('textword', 'Insert text to encrypt: ');
        const { textword: text, keyword: secret } = fields;
        let result = cryptoJS.AES.encrypt(text.trim(), secret.trim());
        result = result.toString();
        console.log('Encrypted result:'.cyan, result.green);
    } catch (error) {
        console.log(error.red);
    }
}

async function decrypt() {
    try {
        let fields = await insertFields('cryptedWord', 'Insert text to decrypt: ');
        const { cryptedWord: text, keyword: secret } = fields;
        let result = cryptoJS.AES.decrypt(text.trim(), secret.trim());
        result = result.toString(cryptoJS.enc.Utf8);
        if (!result) {
            throw new Error('Invalid secret key');
        }
        console.log('Decrypted result:'.cyan, result.green); 
    } catch (error) {
        console.log(error.message.red);
    }
}

function showHelp() {
    console.log(HEADER.cyan);
    console.log(USAGE);
    console.log(VERSION);
    console.log(MADE_WITH);
}

async function insertFields(fieldName, inputMessage){
    try{
        let answers = await prompt([
            {
                type: 'text',
                message: inputMessage,
                name: fieldName
            },
            {
                type: 'password',
                message: 'Insert the keyword: ',
                name: 'keyword'
            }
        ]);
        return answers;
    }catch(err){
        console.log(err);
        return null;
    }
}

async function main() {
    try {
        const command = process.argv[2];
        if (!command) {
            throw new Error('Command not supplied');
        }
        switch (command) {
            case COMMANDS.ENCRYPT:
                encrypt();
                break;
            case COMMANDS.DECRYPT:
                decrypt();
                break;
            case COMMANDS.HELP:
                showHelp();
                break;
            default:
                console.log('Command '.red + command.yellow + ' not found'.red);
                console.log('Maybe you want to try: '.cyan + 'crypter-text help'.green);
                break;
        }
    } catch (err) {
        console.error('An error occurred:'.red, err.message);
    }
}

main();
