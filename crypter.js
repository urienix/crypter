const cryptoJS = require('crypto-js');
const { prompt } = require('inquirer');
const colors = require('colors');

async function encrypt(){
    try{
        let fields = await insertFields('textword', 'Insert text to encrypt: ');
        let text = fields.textword;
        let secret = fields.keyword;
        let result = cryptoJS.AES.encrypt(text, secret);
        result = result.toString();
        console.log('Result:'.cyan, result.green);
    }catch(err){
        console.log(err);
    }
}

async function decrypt(){
    try{
        let fields = await insertFields('cryptedWord', 'Insert text to decrypt')
        let text = fields.cryptedWord;
        let secret = fields.keyword;
        let result = cryptoJS.AES.decrypt(text, secret);
        result = result.toString(cryptoJS.enc.Utf8);
        if(!result){
            console.log('Invalid secret key'.red);
        }else{
            console.log('Result:'.cyan, result.green);
        }
    }catch(err){
        console.log('Invalid secret key');
    }
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

async function main(){
    let command = process.argv[2];
    switch(command){
        case 'encrypt':
            encrypt();
            break;
        case 'decrypt':
            decrypt();
            break;
        case 'help':
            console.log('SIMPLE WORD ENCRYPTER AND DECRIPTER');
            console.log('\n\nCommand: >node encrypt [encrypt/decrypt]');
            break;
        default:
            console.log('Command not exist');
    }
}

main();
