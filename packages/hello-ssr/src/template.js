/**
 * Html template file for rendering on client side
 */
module.exports = title => {
    return `<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="utf-8">
                <title> ${title} </title>
              </head>
              <body style="margin: 0px; padding: 0px;">
                <div id="app"></div>
                <script src="dist/bundle.js"> </script>
              </body>
              </html>
              `
}
