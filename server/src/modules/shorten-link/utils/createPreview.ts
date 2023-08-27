import { mkdirSync, writeFileSync } from "node:fs";
import config from "src/config";
import { CreateLinkDto } from "../dto/create-link-dto";
import baseURL from '../../../config/index';

/**
 * 
 * tags para analytics
 * <meta property="fb:app_id" content="3694052390628380" />
 * <meta name="twitter:site" content="@website-username">
 */
  

export default async function createPreview(head: CreateLinkDto){

  const distPath = config.dirPublic+'pages/'+head.idUrl;
  mkdirSync(distPath, { recursive: true });

  const preview = `<!DOCTYPE html>
  <html lang="pt-br">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <script>
      (async () => {
        const ipUser = await fetch('https://jsonip.com/');
        const { ip } = await ipUser.json();
        await fetch('${baseURL.localhost}/analytics', {
          headers: {
            "Content-Type": "application/json",
            "ip": ip,
            "Id_analytic": "${head.id}",
            "referrer": document.referrer
          },
        });
      })()
      </script>
      <meta http-equiv="refresh" content="0;url=${head.originUrl}" />
      <title>
          ${head.title}
      </title>
      <meta name="description" content=" ${head.description}" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="${head.title}" />
      <meta property="og:description" content="${head.description}" />
      <meta property="og:image" content="${head.urlImg}" />
      <meta property="og:url" content="${head.shortUrl}" />
      <meta property="fb:app_id" content="3694052390628380" />
      <meta name="twitter:card" content="summary_large_image">
      <meta name="theme-color" content="#157878">
  </head>
  <body>
      
  </body>
  </html>`
  const previewHtml = writeFileSync(distPath+'/index.html', preview)
}