const cryptoJS = require('crypto-js');

function encrypt(){
    try{
        let text = process.argv[3];
        let secret = process.argv[4];
        let result = cryptoJS.AES.encrypt(text, secret);
        result = result.toString();
        console.log('Result:', result);
    }catch(err){
        console.log(err);
    }
}

function decrypt(){
    try{
        let text = process.argv[3];
        let secret = process.argv[4];
        let result = cryptoJS.AES.decrypt(text, secret);
        result = result.toString(cryptoJS.enc.Utf8);
        if(!result){
            console.log('Invalid secret key');
        }else{
            console.log('Result:', result);
        }
    }catch(err){
        console.log('Invalid secret key');
    }
}

function main(){
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
            console.log('\n\nCommand: >node encrypt.js [encrypt/decrypt] word secret');
            break;
        default:
            console.log('Command not exist');
    }
}

main();
