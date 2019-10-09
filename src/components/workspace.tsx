import { useCallback, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Icon, { Size } from 'components/icon';
import File from 'components/file';
import Overlay from 'components/overlay';
import UploadIcon from 'components/upload-icon';
import { usePrevious } from 'lib/hooks';
import color from 'styles/color';
import { Store } from 'store/types';

type EmptyWorkspaceProps = {
    loadedKeyset: boolean;
};

const EmptyWorkspace: React.FunctionComponent<EmptyWorkspaceProps> = props => (
    <div className="empty-workspace">
        <UploadIcon light />
        <p className="instructions">
            (Drag & drop your {props.loadedKeyset ? '' : 'keyset and/or'} XCI
            files here)
        </p>
        <style jsx>{`
            .empty-workspace {
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                flex-direction: column;
                justify-content: center;
                color: ${color.spindleBlue};
            }
            .instructions {
                user-select: none;
            }
        `}</style>
    </div>
);

type FileListProps = {
    files: Array<File>;
    showLogs: Function;
};

const FileList: React.FunctionComponent<FileListProps> = props => (
    <div className="file-list">
        {props.files.map(file => (
            <File key={file.size} file={file} showLogs={props.showLogs} />
        ))}
        <style jsx>{`
            .file-list {
                width: 100%;
                padding: 20px;
            }
        `}</style>
    </div>
);

type WorkspaceProps = {
    dragActive: boolean;
};

const Workspace: React.FunctionComponent<WorkspaceProps> = props => {
    const store = useSelector((state: Store) => ({
        keyset: state.keyset.file,
        files: state.files.files,
    }));
    const fileCount = store.files.length;

    // File Logs
    const [logsFileId, setLogsFileId] = useState(null);
    const { log: fileLogs } =
        store.files.find(file => file.id === logsFileId) || {};
    const previousFileLogs = usePrevious(fileLogs);

    // Refs
    const workspaceRef = useRef<HTMLDivElement>(null);
    const logOverlayEndRef = useRef<HTMLDivElement>(null);
    const dropzoneOverlayRef = useRef<HTMLDivElement>(null);

    // Add functionality to scroll to bottom of updated logs in the logs overlay
    const scrollToBottomEffect = () => {
        if (logOverlayEndRef && logOverlayEndRef.current) {
            const logOverlay: HTMLElement = logOverlayEndRef.current;

            // Scroll newest log into view when new logs are appended to the overlay in view
            if (previousFileLogs) {
                logOverlay.scrollIntoView();
            }

            // Offset the top of the log overlay on a scrollable workspace
            if (
                workspaceRef &&
                workspaceRef.current &&
                logOverlay.parentElement &&
                logOverlay.parentElement.parentElement
            ) {
                logOverlay.parentElement.parentElement.style.top = `${workspaceRef.current.scrollTop}px`;
            }
        }
    };
    useEffect(scrollToBottomEffect, [fileLogs]);

    // Offset the top of the dropzone overlay on a scrollable workspace
    if (
        props.dragActive &&
        workspaceRef &&
        workspaceRef.current &&
        dropzoneOverlayRef &&
        dropzoneOverlayRef.current
    ) {
        dropzoneOverlayRef.current.style.top = `${workspaceRef.current.scrollTop}px`;
    }

    // Add functionality to press <Esc> to hide logs overlay
    const handleUserKeyPress = (event: KeyboardEvent) => {
        // Nullify logs file id to close logs overlay
        if (event.key === 'Escape') {
            setLogsFileId(null);
        }
    };
    const userKeyPressCallback = useCallback(handleUserKeyPress, []);
    const userKeyPressEffect = () => {
        window.addEventListener('keydown', userKeyPressCallback);
        return () => window.addEventListener('keydown', userKeyPressCallback);
    };
    useEffect(userKeyPressEffect, [userKeyPressCallback]);

    return (
        <div className="workspace" ref={workspaceRef}>
            {fileCount ? (
                <FileList files={store.files} showLogs={setLogsFileId} />
            ) : (
                <EmptyWorkspace loadedKeyset={!!store.keyset} />
            )}

            {fileLogs && (
                <Overlay opacity={0.95}>
                    <div className="log-overlay">
                        <div className="close-button">
                            <Icon
                                name="x"
                                size={Size.Small}
                                color={color.alabaster}
                                onClick={() => setLogsFileId(null)}
                            />
                        </div>
                        {fileLogs.map((log, i) => (
                            <p key={i}>{log}</p>
                        ))}
                        <div ref={logOverlayEndRef} />
                    </div>
                </Overlay>
            )}

            {props.dragActive && (
                <Overlay
                    opacity={fileCount ? 0.85 : 1}
                    forwardedRef={dropzoneOverlayRef}
                >
                    <>
                        <UploadIcon animated />
                        <p>Drop it here!</p>
                    </>
                </Overlay>
            )}

            <style jsx>{`
                .workspace {
                    height: 500px;
                    display: flex;
                    position: relative;
                    box-sizing: border-box;
                    overflow: ${fileLogs ? 'hidden' : 'scroll'};
                }
                .log-overlay {
                    width: 100%;
                    height: 100%;
                    padding: 25px;
                    font-size: 13px;
                    overflow-y: scroll;
                    box-sizing: border-box;
                    color: ${color.alabaster};
                    background-color: ${color.mineShaft};
                    font-family: Consolas, Menlo, monospace;
                }
                .close-button {
                    top: 15px;
                    right: 15px;
                    position: absolute;
                }
            `}</style>
        </div>
    );
};

export default Workspace;
