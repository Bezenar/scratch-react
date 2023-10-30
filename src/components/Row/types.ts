export interface I_Row {
    children: React.ReactNode;
    dir?: 'row' | 'rowrev' | 'colrev' | 'col';
    jc?: 'start' | 'end' | 'center' | 'sb' | 'se' | 'sa';
    ai?: 'start' | 'end' | 'center' | 'stretch';
    nowrap?: boolean;
    className?: string;
}
