import UploadIcon from 'components/upload-icon';
import color from 'styles/color';

type Props = {
    children: JSX.Element;
    opacity?: number;
    forwardedRef?: React.RefObject<HTMLDivElement>;
};

const Overlay: React.FunctionComponent<Props> = props => (
    <div className="overlay" ref={props.forwardedRef}>
        {props.children}
        <style jsx>{`
            .overlay {
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
                opacity: ${props.opacity};
            }
        `}</style>
    </div>
);

Overlay.defaultProps = {
    opacity: 1,
} as Partial<Props>;

export default Overlay;
