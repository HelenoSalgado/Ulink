import { rmdirSync } from "node:fs";
import config from "src/config";


export default async function clearPreviews(){

  const distPath = config.dirPublic+'pages';
  try {
    rmdirSync(distPath, { recursive: true });
    return { message: "Previews deletas com sucesso"};
  } catch (error) {
    return { error: error.message };
  }
  

}