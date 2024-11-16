import { useGetLocationsQuery } from '@store/slices/RickAndMortyApi';
import Card from '@atoms/Card';
import Radio from '@atoms/Radio';
import Text from '@atoms/Text';
import TextField from '@atoms/TextField';
import Scroll from '@atoms/Scroll';
import Grid from '@atoms/Grid';
import useFilters from '@hooks/useFilters';
import { LOCATIONS_INITIAL_FILTERS } from '../../constants';
import type { I_LocationsFilters, T_LocationsRadioFilters } from '@t/index';
import PrintString from '@molecules/PrintString';
import cn from '@utils/cn';

const Locations: React.FC = () => {
    const [filters, setFilters] = useFilters<I_LocationsFilters>(LOCATIONS_INITIAL_FILTERS);
    const { data, isLoading } = useGetLocationsQuery({
        page: 1,
        name: filters.name ? filters.value : '',
        dimension: filters.dimension ? filters.value : '',
        type: filters.type ? filters.value : '',
    });

    const handleRadio = (name: keyof T_LocationsRadioFilters, checked: boolean) => {
        setFilters({
            name: false,
            dimension: false,
            type: false,
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
                        id="dimension"
                        onChange={(checked) => handleRadio('dimension', checked)}
                        checked={filters.dimension}
                    >
                        <Text size="sm" value="Dimension" />
                    </Radio>

                    <Radio
                        id="type"
                        onChange={(checked) => handleRadio('type', checked)}
                        checked={filters.type}
                    >
                        <Text size="sm" value="Type" />
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

export default Locations;
