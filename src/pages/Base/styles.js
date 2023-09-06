import styled from "styled-components";


const ContentWrapper = styled.div`
        display: grid;
        grid-template-columns: 300px 1fr;
        grid-template-rows: 100px 1fr 100px;
        grid-template-areas: 
            "sidebar navbar"
            "sidebar content"
            "sidebar footer";
        height: 100vh;
`;

export default ContentWrapper;