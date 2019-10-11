// 1.5 GB -> 1,610,612,736 bytes
export const MAX_CHUNK_THRESHOLD = 1610612736;

export function abbreviateFileSize(
    bytes: number,
    precision: number = 2,
): string {
    if (bytes === 0) {
        return '0 bytes';
    }

    const kb = 1024;
    const sizes = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(kb));
    const size = parseFloat((bytes / Math.pow(kb, i)).toFixed(precision));

    return `${size} ${sizes[i]}`;
}
