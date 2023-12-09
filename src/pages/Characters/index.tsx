import { useEffect } from 'react';
import { useGetCharactersQuery } from '../../store/slices/RickAndMortyApi';
import Grid from '@atoms/Grid';
import Scroll from '@atoms/Scroll';
import Card from '@atoms/Card';
import Radio from '@atoms/Radio';
import Text from '@atoms/Text';
import TextField from '@atoms/TextField';
import Select from '@atoms/Select';
import CharacterCard from '@organisms/CharacterCard';
import usePagination from '@hooks/usePagination';
import useFilters from '@hooks/useFilters';
import { CHARACTERS_INITIAL_FILTERS, SELECT_GENDER_OPTIONS, SELECT_STATUS_OPTIONS } from '../../constants';
import type { I_CharactersFilters, T_CharactersRadioFilters } from '@t/index';
import { N_Response } from '@t/responses';

const Characters: React.FC = () => {
    const [filters, setFilters] = useFilters<I_CharactersFilters>(CHARACTERS_INITIAL_FILTERS);
    const [{ active }, { setTotal }] = usePagination();
    const { data, isLoading } = useGetCharactersQuery({
        page: active,
        name: filters.name ? filters.value : '',
        species: filters.species ? filters.value : '',
        type: filters.type ? filters.value : '',
        status: filters.status?.value ?? null,
        gender: filters.gender?.value ?? null,
    });

    useEffect(() => {
        if (data?.info.pages) {
            setTotal(data.info.pages);
        }
    }, [data?.info.pages]);

    const handleSelect = (
        key: 'status' | 'gender',
        opt: { id: number; value: N_Response.T_Gender | N_Response.T_CharacterStatus | 'all' }
    ) => {
        setFilters({[key]: opt.value === 'all' ? null : opt});
    };

    const handleRadio = (name: keyof T_CharactersRadioFilters, checked: boolean) => {
        setFilters({
            species: false,
            name: false,
            type: false,
            [name]: checked,
        });
    }

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
                        id="species"
                        onChange={(checked) => handleRadio('species', checked)}
                        checked={filters.species}
                    >
                        <Text size="sm" value="Species" />
                    </Radio>

                    <Radio id="type" onChange={(checked) => handleRadio('type', checked)} checked={filters.type}>
                        <Text size="sm" value="Type" />
                    </Radio>
                </div>

                <div className="grow--1">
                    <TextField value={filters.value} placeholder="Search" onChange={(value) => setFilters({ value })} />
                </div>

                <Select
                    placeholder="Status"
                    selected={filters.status?.value ?? null}
                    options={SELECT_STATUS_OPTIONS}
                    onSelect={(opt) => handleSelect('status', opt as { id: number; value: N_Response.T_CharacterStatus })}
                />

                <Select
                    placeholder="Gender"
                    selected={filters.gender?.value ?? null}
                    options={SELECT_GENDER_OPTIONS}
                    onSelect={(opt) => handleSelect('gender', opt as { id: number; value: N_Response.T_Gender })}
                />
            </Card>

            <Scroll height={'calc(100% - 5rem'}>
                <Grid colCount={3} gap={4}>
                    {data?.results.map((character) => (
                        <CharacterCard
                            key={character.id}
                            id={character.id}
                            image={character.image}
                            name={character.name}
                        />
                    ))}
                </Grid>
            </Scroll>
        </>
    );
};

export default Characters;
