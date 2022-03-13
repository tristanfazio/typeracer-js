import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import styles from './StatisticCard.module.css';

export interface StatisticCardProps {
    title: string;
    value: number;
    circle: boolean;
    percentage: boolean;
    subText?: string;
}
export const StatisticCard = (props: StatisticCardProps) => {
    const { title, value, circle, percentage, subText } = props;

    const renderStat = () => {
        const valueLabel = percentage ? `${value} %` : `${value}`;
        return circle ? (
            <CountdownCircleTimer
                isPlaying={false}
                duration={100}
                colors={['#4AE08C','#F1A9A0']}
                colorsTime={[100,74]}
                size={90}
                strokeWidth={4}
                trailStrokeWidth={4}
                initialRemainingTime={value}
            >
                {() => <h3 className={styles.valueContainer}>{valueLabel}</h3>}
            </CountdownCircleTimer>
        ) : (
            <h3 className={styles.valueContainer}>{valueLabel}</h3>
        );
    };
    return (
        <div className={styles.statisticCard}>
            <h2 className={styles.title}>{title}</h2>
            {renderStat()}
            {subText && <div className={styles.subText}>{subText}</div>}
        </div>
    );
};

export default StatisticCard;
