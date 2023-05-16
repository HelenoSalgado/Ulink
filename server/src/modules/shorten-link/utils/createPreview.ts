import { mkdirSync, writeFileSync } from "node:fs";
import config from "src/config";
import { CreateLinkDto } from "../dto/create-link-dto";

/**
 * 
 * tags para analytics
 * <meta property="fb:app_id" content="3694052390628380" />
 * <meta name="twitter:site" content="@website-username">
 */
  

export default async function createPreview(head: CreateLinkDto){

  const distPath = config.dirPublic+head.idUrl;
  mkdirSync(distPath, { recursive: true });

  const preview = `<!DOCTYPE html>
  <html lang="pt-br">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <script>
      (async () => {
        const geo = await fetch('http://ip-api.com/json/');
        const geoLoc = await geo.json()
        await fetch('https://api-analytics.onrender.com/analytics', {
          headers: {
            "Content-Type": "application/json",
            "Id_analytic": "${head.id}",
            "City": geoLoc.city,
            "Region_code": geoLoc.region,
            "Country": geoLoc.country,
            "code_postal": geoLoc.zip,
            "lat": geoLoc.lat,
            "lon": geoLoc.lon,
            "timezone": geoLoc.timezone,
            "ip": geoLoc.query,
            "referrer": document.referrer
          },
        });
      })()
      </script>
      <meta http-equiv="refresh" content="10;url=${head.originUrl}" />
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