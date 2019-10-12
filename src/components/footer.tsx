import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon, { Size } from 'components/icon';
import { createFile, createMultiPartFile } from 'actions/files';
import { MAX_CHUNK_THRESHOLD } from 'lib/bytes';
import color from 'styles/color';
import { FileStatus, Store } from 'store/types';

type Props = {
    openFileDialog: () => void;
};

const Footer: React.FunctionComponent<Props> = (props: Props) => {
    const dispatch = useDispatch();
    const [keyset, files] = useSelector((state: Store) => [
        state.keyset.file,
        state.files.files,
    ]);
    const readyFiles = files.filter(file => file.status === FileStatus.Ready);

    const convert = useCallback(() => {
        // TODO: Strategize and dispatch conversion process action for specific files
        readyFiles.forEach(file =>
            dispatch(
                file.size > MAX_CHUNK_THRESHOLD
                    ? createMultiPartFile(file.id, file)
                    : createFile(file.id, file),
            ),
        );
    }, [readyFiles]);

    const isButtonDisabled = !keyset || !readyFiles.length;
    const keysetStatusColor =
        keyset && keyset.name ? color.deYorkGreen : color.oldGold;

    return (
        <div className="footer">
            <div className="keyset-section" onClick={props.openFileDialog}>
                <Icon
                    solid
                    name="key"
                    className="keyset-icon"
                    color={keysetStatusColor}
                />
                <p className="keyset-status">
                    Keyset{' '}
                    {keyset ? (
                        <>
                            loaded:
                            <code className="keyset-name">{keyset.name}</code>
                        </>
                    ) : (
                        'not loaded'
                    )}
                </p>
            </div>
            <button
                onClick={convert}
                disabled={isButtonDisabled}
                className="convert-button"
            >
                convert
            </button>
            <style jsx>{`
                .footer {
                    height: 30px;
                    display: flex;
                    padding: 10px 17px;
                    align-items: center;
                    justify-content: space-between;
                    background-color: ${color.alabaster};
                    border-top: 1px solid ${color.catskillWhite};
                    border-bottom-left-radius: 15px;
                    border-bottom-right-radius: 15px;
                }
                .keyset-section {
                    display: flex;
                    align-items: center;
                    user-select: none;
                    cursor: pointer;
                    color: ${keysetStatusColor};
                    font-weight: ${keyset ? 'normal' : 'bold'};
                }
                .keyset-section:hover {
                    opacity: 0.8;
                }
                .keyset-name {
                    padding: 0 4px;
                    font-size: 14px;
                    font-variant: normal;
                }
                .keyset-status {
                    margin: 0;
                    padding: 0 4px;
                    font-size: 17px;
                    font-variant: all-small-caps;
                }
                .convert-button {
                    border: none;
                    display: flex;
                    font-size: 20px;
                    border-radius: 4px;
                    align-items: center;
                    font-variant: small-caps;
                    padding: 4px 25px 7px 25px;
                    opacity: ${isButtonDisabled ? 0.5 : 1};
                    color: ${color.alabaster};
                    background-color: ${color.chetwodeBlue};
                }
                .convert-button:hover {
                    opacity: ${isButtonDisabled ? `'inherit'` : 0.9};
                }
            `}</style>
        </div>
    );
};

export default Footer;
