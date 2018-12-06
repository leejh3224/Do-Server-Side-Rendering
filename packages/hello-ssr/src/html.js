/**
 * Html template file for rendering on client side
 */
export default (title, script) => {
    return `<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="utf-8">
                <title> ${title} </title>
              </head>
              <body style="margin: 0px; padding: 0px;">
                <div id="app"></div>
                ${script}
              </body>
              </html>
              `
}
