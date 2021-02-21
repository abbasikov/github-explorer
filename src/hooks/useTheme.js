import { useState } from 'react';
import * as themes from '../theme/schema.json';

export const useTheme = () => {
    const [selectedTheme, setTheme] = useState(themes.data.light);

    const setMode = mode => {
        setTheme(themes.data[mode]);
    };

    return { selectedTheme, setMode };
};