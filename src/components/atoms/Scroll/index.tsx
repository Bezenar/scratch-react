import s from './Scroll.module.scss';

export interface I_Scroll {
    height: number | string;
    children: React.ReactNode;
}

const Scroll: React.FC<I_Scroll> = ({height, children}) => {
    return (
        <section className={s.outer} style={{height}}>
            <div className={s.inner}>
                {children}
            </div>
        </section>
    );
}

export default Scroll;