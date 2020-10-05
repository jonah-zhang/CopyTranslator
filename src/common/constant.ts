export const constants = {
  appName: "CopyTranslator",
  nickName: "破晓",
  version: "10.0.0",
  stage: "pre-alpha",
  wiki: "https://copytranslator.gitee.io/guide",
  homepage: "https://copytranslator.gitee.io",
  downloadPage:
    "https://copytranslator.gitee.io/guide/download.html#%E4%B8%8B%E8%BD%BD",
};
export const versionString = [
  "v" + constants.version,
  constants.nickName,
  constants.stage,
].join(" ");

export const version = constants.version;

export function compatible(configVersion: string): boolean {
  try {
    const configInfos = configVersion.substring(1).split(".");
    const currentInfos = version.substring(1).split(".");
    for (const i of [0, 1]) {
      if (currentInfos[i] !== configInfos[i]) {
        return false;
      }
    }
    return true;
  } catch (e) {
    return false;
  }
}