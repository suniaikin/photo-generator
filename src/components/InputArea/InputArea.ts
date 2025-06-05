import styled from "styled-components";

export const InputArea = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin: 30px 0;
    @media (max-width: 970px) {
        flex-direction: column;
        width: 100%;
    }


    input {
        padding: 10px;
        border-radius: 6px;
        border: 1px solid #ccc;
        font-size: 12px;
        min-width: 200px;
        @media (max-width: 970px) {
            flex-direction: column;
            width: 100%;
    }

`