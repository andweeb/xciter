import { useSelector } from 'react-redux';
import Icon, { Size, Props as IconProps } from 'components/icon';
import { abbreviateFileSize } from 'lib/bytes';
import { FileStatus } from 'store/types';
import color from 'styles/color';
import { Store } from 'store/types';

type Props = {
    file: File;
    showLogs: Function;
};

enum StatusType {
    Info,
    Success,
    Warning,
    Error,
}

const statusTypes = {
    [StatusType.Info]: [
        FileStatus.Waiting,
        FileStatus.Initializing,
        FileStatus.Ready,
        FileStatus.Preparing,
        FileStatus.Pending,
        FileStatus.Converting,
        FileStatus.Downloading,
    ],
    [StatusType.Success]: [FileStatus.Completed],
    [StatusType.Warning]: [
        /*TODO*/
    ],
    [StatusType.Error]: [
        /*TODO*/
    ],
};

const File: React.FunctionComponent<Props> = props => {
    const storeFile = useSelector((state: Store) =>
        state.files.files.find(file => file.id === props.file.id),
    );

    const fileStatus = FileStatus[props.file.status];
    const [statusType]: Array<any> =
        Object.entries(statusTypes).find(([type, statuses]) =>
            statuses.includes(props.file.status),
        ) || [];

    const statusProps: IconProps = {
        name: 'subdirectory-right',
        color: color.chetwodeBlue,
        size: Size.ExtraSmall,
    };
    switch (+statusType) {
        case StatusType.Success:
            statusProps.name = 'check-circle';
            statusProps.color = color.deYorkGreen;
            break;
        case StatusType.Warning:
            statusProps.name = 'error';
            statusProps.color = color.oldGold;
            break;
        case StatusType.Error:
            statusProps.solid = true;
            statusProps.name = 'error-circle';
            statusProps.color = color.salmon;
            break;
    }

    let animation = undefined;
    switch (props.file.status) {
        case FileStatus.Initializing:
        case FileStatus.Preparing:
        case FileStatus.Pending:
        case FileStatus.Converting:
        case FileStatus.Downloading:
            animation = 'flashing';
            break;
    }

    return (
        <div className="file">
            <div className="file-section">
                <div className="file-info">
                    <div className="file-icon">
                        <Icon
                            solid
                            name="file"
                            size={Size.Medium}
                            color={color.waikawaGray}
                            animation={animation}
                        />
                    </div>
                    <div className="details">
                        <div className="filename">{props.file.name}</div>
                        <div className="filesize">
                            {abbreviateFileSize(props.file.size)}
                        </div>
                    </div>
                </div>
                <div className="status-message">
                    <Icon {...statusProps} />
                    <div className="message">
                        <b>{fileStatus}</b>:{' '}
                        {props.file.log[props.file.log.length - 1]}
                    </div>
                </div>
            </div>
            <div className="control-section">
                <div className="button">
                    <Icon
                        solid
                        name="terminal"
                        size={Size.Small}
                        color={color.chetwodeBlue}
                        onClick={() =>
                            props.showLogs(storeFile ? storeFile.id : null)
                        }
                    />
                </div>
                <div className="button">
                    <Icon
                        name="trash"
                        size={Size.Small}
                        color={color.chetwodeBlue}
                        onClick={() => console.log('TODO')}
                    />
                </div>
            </div>
            <style jsx>{`
                .file {
                    display: flex;
                    align-items: center;
                    padding: 10px;
                    cursor: default;
                    margin-bottom: 10px;
                    border-radius: 5px;
                    box-sizing: border-box;
                    background-color: ${color.lilacWhite};
                }
                .file:last-of-type {
                    margin-bottom: 20px;
                }
                .file:hover {
                    background-color: ${color.catskillWhite};
                }
                .file-section {
                    flex: 7;
                    display: flex;
                    flex-direction: column;
                }
                .file-info {
                    display: flex;
                    align-items: center;
                    margin-bottom: 5px;
                }
                .file-icon {
                    flex: 1;
                }
                .details {
                    flex: 14;
                    display: flex;
                    flex-direction: column;
                }
                .filename {
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    color: ${color.mineShaft};
                }
                .filesize {
                    color: darkgray;
                    font-size: 13px;
                }
                .control-section {
                    flex: 1;
                    display: flex;
                    justify-content: space-around;
                }
                .button:hover {
                    opacity: 0.5;
                }
                .status-message {
                    display: flex;
                    align-items: flex-end;
                    font-size: 12px;
                    color: ${statusProps.color};
                    max-width: 630px;
                }
                .message {
                    padding-left: 5px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            `}</style>
        </div>
    );
};

export default File;
