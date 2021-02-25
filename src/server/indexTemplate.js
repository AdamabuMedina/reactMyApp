export const indexTemplate = (content, token) => {
    return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <script src="/static/client.js" type="application/javascript"></script>
  </head>
  <body>
      <script>
          window.__token__ = "${token}"
      </script>
      <div id="root">${content}</div>
  </body>
  </html>
  `;
}