import color from 'styles/color';

export enum Size {
    ExtraSmall = 'xs',
    Small = 'sm',
    Medium = 'md',
    Large = 'lg',
}

export type Props = {
    name: string;
    size?: Size;
    color?: string;
    solid?: boolean;
    animation?: string;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

const Icon: React.FunctionComponent<Props> = props => {
    const className = props.className;
    const classes = [
        props.className,
        `bx${props.solid ? 's' : ''}-${props.name}`,
        'bx',
    ];

    if (props.size) {
        classes.push(`bx-${props.size}`);
    }
    if (props.animation) {
        classes.push(`bx-${props.animation}`);
    }

    return (
        <>
            <i className={classes.join(' ')} onClick={props.onClick}></i>
            <style jsx>{`
                .${className} {
                    margin-top: 2px;
                    color: ${props.color};
                    cursor: ${props.onClick ? 'pointer' : 'normal'};
                }
                .${className}:hover {
                    color: ${props.onClick ? color.chetwodeBlue : props.color};
                }
            `}</style>
        </>
    );
};

const defaultProps: Partial<Props> = {
    solid: false,
    className: 'icon',
    color: 'black',
};

Icon.defaultProps = defaultProps;

export default Icon;
