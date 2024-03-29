## Ports:
Number used to uniquely identify a transaction over a network. Default for TCP port HTTP is 80, and 25 for SMTP. Can be used to provide firewall security i.e. block outsiders from accessing intranet server at port 80. Within host, port refers to the address of the service within the system i.e. IP address + port defines the address of service on that system i.e. 192.0.0.0:8000.
```
0-1023          Special companies like Apple, SQL services have
1024-49151      Registered ports to specific protocols by software corporations
49152-655536    Dynamic or private ports
```

## IP Address:
```
127.0.0.1:<host port>         localhost
```

## Secure Socket Shell (SSH):
Network protocol that gives users a secure way to access a computer over an unsecured network. Provides strong password authentication and public key authentication, including encrypted data communications between computers connecting over an open network. Standard for strong authentication.


## Curl:
Command line tool that allows transfer of data across network. Supports many protocols including HTTP, HTTPS, FTP, FTPS, POP3, etc. Supports on universal OS. 

``` 
curl --verbose https://example.com        Inspect all details of request and response

curl https://example.com                  GET request (default), returns body of response
curl -X POST http://URL/example.php       POST request
curl https://{one,two,three}.com          Send multiple requests
curl -i https://example.com               Show response headers

curl -d "option=value" -X POST https://example.com    Sending URL-encoded data
curl -d '{"option": "value"}' -H "Content-Type: application/json" -X POST https://example.com
curl -d "@my-file.json" -X POST https://example.com

curl -L https://example.com       Follow automatically to redirect response specified in Location response header

curl -o file.html https://example.com             Save response to a file

curl -u user:pass https://example.com             Provide basic auth

curl -b "oraclelicense=a" https://example.com     Sending cookies

curl -x 192.168.1:8888 https://example.com        Using proxies
``` 

## Proxy Server:
Intermediary between networks and user-clients i.e. acts as a gateway. Mostly used to monitor and log all web requests. Provides additional features such as enhanced security (firewall and privacy) and network performance. User sends web request to proxy server's Internet Protocol (IP) Address; proxy server makes request on user's behalf (with changes to request data if needed such as IP address, provding encryption, etc.) and forwards back the response. Can also be used to block certain web pages based on IP address.

```
HTTPS_PROXY
HTTP_PROXY
NO_PROXY          Network addresses and domains to exclude when using proxy when initializing connection
```
