const CryptoJS = require('crypto-js');
const env = require('../env');

const KEY = env.PASSWORD_HASH_SECRET;

module.exports = {
  encode: function(message) {
    const keyHex = CryptoJS.enc.Utf8.parse(KEY);
            
    const encrypted = CryptoJS.DES.encrypt(message, keyHex, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    });
        
    return encrypted.toString();
  },

  decode: function(ciphertext) {
    const keyHex = CryptoJS.enc.Utf8.parse(KEY);
    
    const decrypted = CryptoJS.DES.decrypt({
      ciphertext: CryptoJS.enc.Base64.parse(ciphertext)
    }, keyHex, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    });
    
    return decrypted.toString(CryptoJS.enc.Utf8);  
  }
};