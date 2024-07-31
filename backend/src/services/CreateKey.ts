import { webcrypto } from 'crypto';

//Generating a AES GCM encryption/decryption key for data securiity.
class CreateKey {
    async generateKey(): Promise<{  exportedKey: JsonWebKey }> {
        try {
            const newkey = await webcrypto.subtle.generateKey(
                {
                    name: 'AES-GCM',
                    length: 256,
                },
                true,
                ['encrypt', 'decrypt']
            );

            const exportedKey = await webcrypto.subtle.exportKey('jwk', newkey);
            return { exportedKey }
        } catch (err) {
          console.error(err);
          throw err;
    }

  }
  
}

export { CreateKey };
//Once the key is generated, it is exported as a Json Web Key
//Here we're making it true for export and available for both encrypt and decrypt
//Subtle and window gives access to web cryptography functions