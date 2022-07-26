interface BuildInfo {
    version: string;
    commitId?: string;
    imageTag?: string;
}
const buildInfo = {
    version: import.meta.env.APP_VERSION,
    imageTag: import.meta.env.APP_IMAGE_TAG,
    commitId: import.meta.env.APP_COMMIT_ID
} as BuildInfo;
export default function About(){
    return (
        <dl>
            <dd>Version: {buildInfo.version}</dd>
            <dd>Image Tag: {buildInfo.imageTag}</dd>
            <dd>Commit Id: {buildInfo.commitId}</dd>
        </dl>
    )
}

export {buildInfo};
export type {BuildInfo};