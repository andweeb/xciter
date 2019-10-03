import UploadIcon from 'components/upload-icon';
import DropzoneOverlay from 'components/dropzone-overlay';
import color from 'styles/color';

const DefaultWorkspace: React.FunctionComponent = () => (
    <div className="default-workspace">
        <UploadIcon light />
        <p className="instructions">
            (Drag & drop your keyset and/or XCI files here)
        </p>
        <style jsx>{`
            .default-workspace {
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

type Props = {
    files: Array<any>;
    dragActive: boolean;
};

const Workspace: React.FunctionComponent<Props> = props => (
    <div className="workspace">
        {props.dragActive && <DropzoneOverlay />}
        {props.files.length ? <></> : <DefaultWorkspace />}
        <style jsx>{`
            .workspace {
                height: 500px;
                display: flex;
                position: relative;
                overflow: hidden;
            }
        `}</style>
    </div>
);

Workspace.defaultProps = {
    files: [],
} as Partial<Props>;

export default Workspace;
