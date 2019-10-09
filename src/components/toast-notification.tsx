import { useEffect } from 'react';
import Icon, { Size } from 'components/icon';
import color from 'styles/color';

type Props = {
    title: string;
    details: string;
    status: Status;
    withCloseButton: boolean;
    dismiss: (event: React.MouseEvent<HTMLElement>) => void;
};

export const StatusMap = {
    error: {
        icon: 'error-circle',
        color: color.salmon,
        bgColor: color.pippin,
    },
    warning: {
        icon: 'error',
        color: color.texasRose,
        bgColor: color.peachCream,
    },
    notice: {
        icon: 'info-circle',
        color: color.cornflowerBlue,
        bgColor: color.hawkesBlue,
    },
    success: {
        icon: 'check-circle',
        color: color.deYorkGreen,
        bgColor: color.panache,
    },
};

export type Status = keyof typeof StatusMap;

const DISMISS_COUNTDOWN = 3000;

const ToastNotification: React.FunctionComponent<Props> = props => {
    const { icon, color, bgColor } = StatusMap[props.status];
    let dismissTimer = null;

    useEffect(() => {
        if (!props.withCloseButton) {
            dismissTimer = setTimeout(() => props.dismiss(), DISMISS_COUNTDOWN);
        }
    }, []);

    return (
        <div className="toast-notification">
            <Icon solid size={Size.Medium} name={icon} color={color} />
            <div className="content">
                <div className="title">{props.title}</div>
                <div className="details">{props.details}</div>
            </div>
            {props.onClickDismiss && (
                <Icon
                    name="x"
                    color={color}
                    size={Size.Small}
                    onClick={props.onClickDismiss}
                />
            )}
            <style jsx>{`
                .toast-notification {
                    left: 50px;
                    bottom: 50px;
                    padding: 10px;
                    height: 80px;
                    width: 350px;
                    display: flex;
                    position: absolute;
                    background-color: ${bgColor};
                    border-radius: 10px;
                    border-left: 5px solid ${color};
                    border-top-left-radius: 5px;
                    border-bottom-left-radius: 5px;
                    box-shadow: 0 0 35px -7px rgba(0, 0, 0, 0.15);
                }
                .content {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;
                    padding: 0px 10px;
                }
                .title {
                    padding: 2px 0;
                    font-size: 16px;
                }
                .details {
                    font-size: 13px;
                    width: 100%;
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
            `}</style>
        </div>
    );
};

export default ToastNotification;
