import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    font-family: 'Lexend', sans-serif;
    box-sizing: border-box;
}

button {
    cursor: pointer;
}

:root {
    --color-brand-1: #4529E6;
    --color-brand-2: #5126EA;
    --color-brand-3: #B0A6F0;
    --color-brand-4: #EDEAFD;

    --color-grey-0: #0B0D0D;
    --color-grey-1: #212529;
    --color-grey-2: #495057;
    --color-grey-3: #868E96;
    --color-grey-4: #ADB5BD;
    --color-grey-5: #CED4DA;
    --color-grey-6: #DEE2E6;
    --color-grey-7: #E9ECEF;
    --color-grey-8: #F1F3F5;
    --color-grey-9: #F8F9FA;
    --color-grey-10: #FDFDFD;

    --color-white-fixed: #FFFFFF;

    --color-feedback-alert-1: #CD2B31;
    --color-feedback-alert-2: #FDD8D8;
    --color-feedback-alert-3: #FFE5E5;

    --color-feedback-success-1: #18794E;
    --color-feedback-success-2: #CCEBD7;
    --color-feedback-success-3: #DDF3E4;

    --color-random-1: #E34D8C;
    --color-random-2: #C04277;
    --color-random-3: #7D2A4D;
    --color-random-4: #7000FF;
    --color-random-5: #6200E3;
    --color-random-6: #36007D;
    --color-random-7: #349974;
    --color-random-8: #2A7D5F;
    --color-random-9: #153D2E;
    --color-random-10: #6100FF;
    --color-random-11: #5700E3;
    --color-random-12: #9747FF;
}
`;