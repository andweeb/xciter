import { MAX_CHUNK_THRESHOLD } from 'lib/bytes';
import { FileStatus } from 'store/types';

// Limit of the max number of bytes that will be processed at a given time.
const MAX_TOTAL_BYTES = MAX_CHUNK_THRESHOLD * 2;

// Devise file conversion strategy depending on file count and individual statuses and sizes.
// Return tuple of lists containing files to convert and the remaining files to be pending.
export default function strategize(
    files: Array<File>,
): [Array<File>, Array<File>] {
    const consideredFiles = [];
    const convertFiles = [];
    const pendingFiles = [];
    let smallestFileSize = Infinity;

    // Get total size of files currently being processed
    let processingBytes = 0;

    // Collect current file state details based on file statuses
    for (const file of files) {
        switch (+file.status) {
            case FileStatus.Preparing:
            case FileStatus.Converting:
            case FileStatus.Downloading:
                processingBytes += file.size;
                break;
            case FileStatus.Ready:
            case FileStatus.Pending:
                if (file.size < smallestFileSize) {
                    smallestFileSize = file.size;
                }

                consideredFiles.push(file);
                break;
        }
    }

    let capacity = MAX_TOTAL_BYTES - processingBytes;

    // No files can be processed if the smallest file is over capacity
    if (smallestFileSize > capacity) {
        return [[], consideredFiles];
    }

    // Use a reverse greedy approximation to solve the 0-1 knapsack problem to prioritize
    // the parallelization of processing larger files one at a time with smaller files
    consideredFiles.sort((a, b) => b.size - a.size);

    for (const file of consideredFiles) {
        if (capacity - file.size > 0) {
            convertFiles.push(file);
            capacity -= file.size;
        } else {
            pendingFiles.push(file);
        }
    }

    return [convertFiles, pendingFiles];
}
