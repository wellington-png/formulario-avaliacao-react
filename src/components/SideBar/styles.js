import styled from "styled-components";

const SideBarContainer = styled.aside`
    grid-area: sidebar;
    background-color: #297a15;
    padding: 1.25rem;
    border-radius: 0 1rem 0 0;


    .logo {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 1.25rem;
    
    }

    .logo img {
        width: 100%;
        max-width: 175px;
    }

    nav {
        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .title_pesq {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 1.25rem;
            background-color: #fff;
            border-radius: 0.5rem;
            padding: 0.2rem;
        }

        .title_pesq span {
            font-size: 1.4rem;
            font-weight: 700;
            color: #297a15;
        }

        .tipos {
            display: flex;
            flex-direction: column;
            align-items: center;

            li {
                margin-bottom: 0.8rem;
            
                a {
                    font-size: 0.8rem;
                    font-weight: 700;
                    color: #fff;
                    text-decoration: none;
                    transition: all 0.2s ease-in-out;
                    padding: 0.5rem 1rem;
                    border-radius: 0.5rem;
                    background-color: #297a15;

                    &:hover {
                        background-color: #fff;
                        color: #297a15;
                    }
                }
            }

    }


    @media (max-width: 768px) {
        display: none;
    }
`
export default SideBarContainer;