### Sample project to protect express js APIs using HMAC signature


### Local development
* npm install
* npm run build
* npm run watch

### To generate a test hash
* node generateHash.js //refer the source file for shared secret

### To Test (using [httpie](https://github.com/jakubroztocil/httpie))
* replace the x-signature below with yours
* Success case
    
    http http://localhost:8080/v1/city?code=MAS x-signature:de8a61378d83c250b35086c04f3af98039a49ed0eda19308c01a8ad863a0678e x-key:MAS

* Failure case
    
    http http://localhost:8080/v1/city?code=ORD x-signature:de8a61378d83c250b35086c04f3af98039a49ed0eda19308c01a8ad863a0678e x-key:ORD