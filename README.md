# iXML Live Editor

Live editor to reduce the onboarding cost to the [Invisible XML (ixml) Tutorial](https://homepages.cwi.nl/~steven/ixml/tutorial/)

## Running

Since the server is not allowing [CORS requests](https://developer.mozilla.org/fr/docs/Web/HTTP/CORS), it is necessary to wrap the calls to the server into an http proxy.

[npm](https://www.npmjs.com/) and [http-server](https://www.npmjs.com/package/http-server) can be used to achieve this :

````sh
# npm needs to be installed
npm install -g http-server
````

And then launch the server :

Don't forget the final "." to serve files from this repository.

Any request that cannot be resolved in current directory (e.g. `/cgi-bin/post-files.sh`) will be forwarded to the server (this behavior in bring by the `--proxy` argument)


````sh
http-server --proxy http://<SERVER IP> .
````

Go to http://localhost:8080/ in your favorite browser.