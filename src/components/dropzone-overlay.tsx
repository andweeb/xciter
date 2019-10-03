import UploadIcon from 'components/upload-icon';
import color from 'styles/color';

const DropzoneOverlay = () => (
    <div className="dropzone-overlay">
        <UploadIcon animated />
        <p>Drop it here!</p>
        <style jsx>{`
            .dropzone-overlay {
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                display: flex;
                position: absolute;
                align-items: center;
                flex-direction: column;
                justify-content: center;
                background-color: white;
                color: ${color.chetwodeBlue};
            }
        `}</style>
    </div>
);

export default DropzoneOverlay;
