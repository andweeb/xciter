import { useSelector } from 'react-redux';
import color from 'styles/color';
import { Store } from 'store/types';

type Props = {
    openFileDialog: () => void;
};

const Footer: React.FunctionComponent<Props> = (props: Props) => {
    const file = useSelector((state: Store) => state.keyset.file);

    return (
        <div className="footer">
            <div className="keyset-section" onClick={props.openFileDialog}>
                <i className="keyset-icon bx bxs-key"></i>
                <p className="keyset-status">
                    Keyset{' '}
                    {file ? (
                        <>
                            loaded:
                            <code className="keyset-name">{file.name}</code>
                        </>
                    ) : (
                        'not loaded'
                    )}
                </p>
            </div>
            <i className="settings-icon bx bx-sm bx-cog" />
            <style jsx>{`
                .footer {
                    height: 20px;
                    display: flex;
                    padding: 10px 17px;
                    align-items: center;
                    justify-content: space-between;
                    background-color: ${color.lilacWhite};
                    border-bottom-left-radius: 15px;
                    border-bottom-right-radius: 15px;
                }
                .keyset-section {
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    color: ${file && file.name
                        ? color.deYorkGreen
                        : color.oldGold};
                    font-weight: ${file ? 'normal' : 'bold'};
                }
                .keyset-icon {
                    margin-top: 5px;
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
                .settings-icon {
                    color: gray;
                    cursor: pointer;
                }
                .settings-icon:hover {
                    color: ${color.chetwodeBlue};
                }
            `}</style>
        </div>
    );
};

export default Footer;
