import color from 'styles/color';

type Props = {
    openFileDialog: () => void;
};

const Header: React.FunctionComponent<Props> = (props: Props) => (
    <div className="header">
        <div
            className="title-section"
            onClick={() => window.open('https://github.com/andweeb/xciter')}
        >
            <i className="title-icon bx bx-bot bx-sm"></i>
            <h1 className="title">xciter</h1>
        </div>
        <i
            className="folder-icon bx bx-sm bxs-folder-open"
            onClick={props.openFileDialog}
        />
        <style jsx>{`
            .header {
                height: 30px;
                display: flex;
                padding: 15px 17px;
                align-items: center;
                justify-content: space-between;
                background-color: ${color.lilacWhite};
                border-top-left-radius: 15px;
                border-top-right-radius: 15px;
            }
            .title-section {
                display: flex;
                align-items: center;
                user-select: none;
                color: ${color.chetwodeBlue};
                cursor: pointer;
            }
            .title {
                margin: 0 5px;
                font-size: 24px;
                font-variant: small-caps;
            }
            .title-icon {
                margin-top: 5px;
            }
            .folder-icon {
                cursor: pointer;
            }
            .folder-icon:hover {
                color: ${color.chetwodeBlue};
            }
        `}</style>
    </div>
);

export default Header;
