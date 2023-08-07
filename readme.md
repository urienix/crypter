# Crypter-text

Crypter-text is a simple js encrypter that use CryptJS library to pass text to encrypt or decrypt text with a keyword, using the AES algorithm.

![](crypter.gif)


## Why
I made a simple encrypter to encrypt text with a keyword, and I use it to encrypt my passwords and save it in a file, so I can decrypt it when I need it. (maybe I should use a password manager, but I like to do it this way)

## How to install

You can install it with npm
```bash
npm install crypter-text -g
```
or with yarn
```bash
yarn global add crypter-text
```

## How to use

Have simple commands

### Encrypt
You can encrypt text with the next command
```bash
crypter-text encrypt
```

And the program will request `text to encrypt` and the `keyword` 

### Decrypt
You can decrypt text with the next command
```bash
crypter-text decrypt
```

And the program will request `text to decrypt` and the `keyword`

the `keyword` is like a password to decrypt the text, the keyword to decrypt is the same that you use to encrypt the text, the keyword is case sensitive.

> **Remember** your encrypted data is only as secure as your 'keyword'. Please handle it with the utmost care.


### help

You can see the help with the next command
```bash
crypter-text help
```

Made with ❤️ by [urienix](https://urienix.moe)