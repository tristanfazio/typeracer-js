import styles from './StatisticCard.module.css';
import target from './images/target.svg';
import speed from './images/speed.svg';
import tape from './images/tape.svg';

export enum CardIcon {
    'TAPE' = 'TAPE',
    'SPEED' = 'SPEED',
    'TARGET' = 'TARGET'
}

export interface StatisticCardProps {
    title: string;
    value: number;
    circle: boolean;
    percentage: boolean;
    subText?: string;
    icon: CardIcon;
}

export const StatisticCard = (props: StatisticCardProps) => {
    const {title, value, percentage, subText, icon} = props;
    const valueLabel = percentage ? `${value}%` : `${value}`;
    const renderIcon = getIcon(icon)
    return (
        <div className={styles.statisticCard}>
            <div className={styles.iconContainer}>
                <img src={renderIcon} alt={'Icon'}/>
            </div>
            <div className={styles.valueContainer}>
                {valueLabel}
                {subText && <div className={styles.subText}>{subText}</div>}
            </div>
            <div className={styles.cardHeader}>
                <h2 className={styles.title}>{title}</h2>
            </div>
        </div>
    );
};

function getIcon(iconType: CardIcon) {
    switch (iconType) {
        case CardIcon.SPEED:
            return speed;
        case CardIcon.TAPE:
            return tape;
        case CardIcon.TARGET:
            return target;
    }
}

export default StatisticCard;
