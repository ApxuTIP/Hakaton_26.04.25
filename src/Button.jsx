import { NativeSelect } from '@mantine/core';


import { useState } from "react";

function Button() {
    return (
        <div className="main_button">
            <div>
            <NativeSelect label="Уровень" description="" data={['Low', 'Middle', 'High']} />
            </div>
            <div>
            <NativeSelect label="Язык/Навык" description="" data={['Low', 'Middle', 'High']} />
            </div>
        </div>
    );
}

export default Button