import color from 'styles/color';

type Props = {
    light?: boolean;
    animated?: boolean;
};

const defaultClasses = 'upload-icon bx bx-down-arrow-circle';
const UploadIcon: React.FunctionComponent<Props> = props => (
    <>
        <i
            className={`${defaultClasses} ${
                props.animated ? 'animated bounce' : ''
            }`}
        ></i>
        <style jsx>{`
            .upload-icon {
                font-size: 90px;
                color: ${props.light ? color.spindleBlue : color.chetwodeBlue};
            }
            .animated {
                -webkit-animation-duration: 0.5s;
                animation-duration: 0.5s;
                -webkit-animation-fill-mode: both;
                animation-fill-mode: both;
                -webkit-animation-timing-function: linear;
                animation-timing-function: linear;
                animation-iteration-count: infinite;
                -webkit-animation-iteration-count: infinite;
            }
            @-webkit-keyframes bounce {
                0%,
                100% {
                    -webkit-transform: translateY(0);
                }
                50% {
                    -webkit-transform: translateY(-5px);
                }
            }
            @keyframes bounce {
                0%,
                100% {
                    transform: translateY(0);
                }
                50% {
                    transform: translateY(-5px);
                }
            }
            .bounce {
                -webkit-animation-name: bounce;
                animation-name: bounce;
            }
        `}</style>
    </>
);

UploadIcon.defaultProps = {
    light: false,
    animated: false,
} as Partial<Props>;

export default UploadIcon;
