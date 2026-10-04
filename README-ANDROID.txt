BAHAYMARKET PH — ANDROID UPLOAD PACKAGE

This package is designed so you can work from an Android phone.

FASTEST WAY TO PUT IT ON GITHUB:
1. Open GitHub in Chrome.
2. Open your repository:
   https://github.com/nielbejo3-pixel/bahaymarket-ph..git
3. On GitHub, use Add file -> Upload files.
4. Upload the files/folders from this ZIP.
5. Commit the changes.

IMPORTANT:
- The repository name contains a period: bahaymarket-ph.
- The current package is an MVP starter.
- The website frontend works without a database using demo listings.
- The Node/Express backend is included for later deployment.
- For production, property photos should use durable cloud storage.

FILES:
client/index.html       Main mobile-friendly website
client/style.css        Mobile styling
client/app.js           Search, filters, favorites, posting demo
server/src/server.js    Express API starter
server/src/db.js        PostgreSQL connection
server/src/auth.js      JWT authentication helpers
server/schema.sql       Database schema
server/package.json     Backend dependencies
package.json            Project start scripts

LOCAL/DEPLOYMENT:
The backend needs Node.js and PostgreSQL. A cloud deployment can be connected later.
