class ArrayHelpers {
    public isEmptyArray(value: Array<unknown>): boolean {
        return value.length === 0;
    }
}

export default new ArrayHelpers();
