import { NativeSelect } from '@mantine/core';


import { useState } from "react";

function Button() {
    return (
        <div className="main_button">
            <div>
            <NativeSelect label="Уровень" description="" data={['Low', 'Medium', 'High']} />
            </div>
            <div>
            <NativeSelect label="Язык/Навык" description="" data={["Analytical thinking","Algorithms","Backend","Business Modeling","C","C++","Change Management","Code review","Cryptography","DB & Data","DevOps","Functional programming","Graphics","Information Security","Java","Leadership","Linux","ML & AI","Math","Network & system administration","OOP","Parallel computing","Python","Requirements Analysis","SQL","Shell/Bash","Software architecture","Structured programming","Systems Integration","Team work","Types and data structures","Web"]} />
            </div>
        </div>
    );
}

export default Button