import { useDropzone } from 'react-dropzone';
import { useCallback, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import Footer from 'components/footer';
import Header from 'components/header';
import Workspace from 'components/workspace';
import color from 'styles/color';
import { KeysetActions, KeysetActionTypes } from 'store/types';

const App = (props: any) => {
    const dispatch = useDispatch();
    const onDrop = useCallback(files => {
        // Accept file extensions defined in 4NXCI
        const keysetExtensions = ['.dat', '.txt', '.ini', '.keys'];
        const keyset = files.find((file: File) =>
            keysetExtensions.some(extension => file.name.includes(extension)),
        );

        if (keyset) {
            dispatch({
                type: KeysetActionTypes.SET_KEYSET_FILE,
                file: keyset,
            });
        }
    }, []);

    const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
        noClick: true,
        noKeyboard: true,
        onDrop,
    });

    return (
        <div className="app" {...getRootProps()}>
            <input {...getInputProps()} />

            <Header openFileDialog={open} />
            <Workspace dragActive={isDragActive} files={[]} />
            <Footer openFileDialog={open} />

            <style jsx>{`
                .app {
                    width: 800px;
                    height: 600px;
                    border-radius: 15px;
                    background-color: white;
                    box-shadow: 0 0 35px -7px rgba(0, 0, 0, 0.1);
                }
            `}</style>
        </div>
    );
};

export default App;
