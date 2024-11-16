import { useEffect } from 'react';
import { useGetEpisodesQuery } from '@store/slices/RickAndMortyApi';
import Card from '@atoms/Card';
import Radio from '@atoms/Radio';
import Text from '@atoms/Text';
import TextField from '@atoms/TextField';
import Scroll from '@atoms/Scroll';
import Grid from '@atoms/Grid';
import useFilters from '@hooks/useFilters';
import usePagination from '@hooks/usePagination';
import { EPISODES_INITIAL_FILTERS } from '../../constants';
import type { I_EpisodesFilters, T_EpisodesRadioFilters } from '@t/index';
import PrintString from '@molecules/PrintString';
import cn from '@utils/cn';

const Episodes: React.FC = () => {
    const [filters, setFilters] = useFilters<I_EpisodesFilters>(EPISODES_INITIAL_FILTERS);
    const [{ active }, { setTotal }] = usePagination();
    const { data, isLoading } = useGetEpisodesQuery({
        page: active,
        name: filters.name ? filters.value : '',
        episode: filters.episode ? filters.value : '',
    });

    useEffect(() => {
        if (data?.info.pages) {
            setTotal(data.info.pages);
        }
    }, [data?.info.pages]);

    const handleRadio = (name: keyof T_EpisodesRadioFilters, checked: boolean) => {
        setFilters({
            name: false,
            episode: false,
            [name]: checked,
        });
    };

    if (isLoading) {
        return <h1 className="text--white">LOADING...</h1>;
    }

    return (
        <>
            <Card className="flex ai-center jc-se text--white gap-10">
                <div className="flex ai-center gap-2">
                    <Radio id="name" onChange={(checked) => handleRadio('name', checked)} checked={filters.name}>
                        <Text size="sm" value="Name" />
                    </Radio>

                    <Radio
                        id="episode"
                        onChange={(checked) => handleRadio('episode', checked)}
                        checked={filters.episode}
                    >
                        <Text size="sm" value="Episode" />
                    </Radio>
                </div>

                <div className="grow--1">
                    <TextField value={filters.value} placeholder="Search" onChange={(value) => setFilters({ value })} />
                </div>
            </Card>

            <Scroll height={'calc(100% - 5rem'}>
                <Grid colCount={3} gap={4}>
                    {data?.results.map((episode) => (
                        <Card key={episode.id} className={cn('flex ai-center jc-center text--center h-full')}>
                            <PrintString value={episode.name} printSpeed={150} />
                        </Card>
                    ))}
                </Grid>
            </Scroll>
        </>
    );
};

export default Episodes;
