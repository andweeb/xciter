import crypto from 'crypto';
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { connect, useDispatch } from 'react-redux';
import color from 'styles/color';
import Footer from 'components/footer';
import Header from 'components/header';
import Workspace from 'components/workspace';
import { addFiles, initWorker, prepareFile } from 'actions/files';
import { addKeyset } from 'actions/keyset';
import { FileStatus, KeysetActions } from 'store/types';

// Accept keyset file extensions defined in 4NXCI
const keysetExtensions = ['.dat', '.txt', '.ini', '.keys'];

const App = () => {
    const dispatch = useDispatch();

    const handleFileDrop = (files: Array<File>) => {
        let keyset = null;
        const xciFiles = [];
        const invalidFiles = [];

        // Categorize each of the dropped files
        for (const file of files) {
            const isXciFile = file.name.includes('.xci');
            const isKeyset = keysetExtensions.some(extension =>
                file.name.includes(extension),
            );

            if (isKeyset) {
                keyset = file;
            } else if (isXciFile) {
                const fileId = crypto
                    .createHash('md5')
                    .update(`${file.name}:${file.size}`)
                    .digest('hex');

                // Initialize default file values
                file.id = fileId;
                file.status = FileStatus.Waiting;
                file.log = [];

                xciFiles.push(file);
            } else {
                invalidFiles.push(file);
            }
        }

        // Dispatch actions based on file type
        if (keyset) {
            dispatch(addKeyset(keyset));
        }
        if (xciFiles.length) {
            dispatch(addFiles(xciFiles));
            xciFiles.forEach(file => dispatch(initWorker(file.id)));
        }
    };

    // Set memoized file drop event handler
    const fileDropCallback = useCallback(handleFileDrop, []);

    // Initialize dropzone and file drop event handler
    const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
        noClick: true,
        noKeyboard: true,
        onDrop: fileDropCallback,
    });

    return (
        <div className="app" {...getRootProps()}>
            <input {...getInputProps()} />

            <Header openFileDialog={open} />
            <Workspace dragActive={isDragActive} />
            <Footer openFileDialog={open} />

            <style jsx>{`
                .app {
                    width: 800px;
                    height: 600px;
                    border-radius: 15px;
                    background-color: white;
                    box-shadow: 0 10px 35px -7px rgba(0, 0, 0, 0.15);
                }
            `}</style>
        </div>
    );
};

export default App;
