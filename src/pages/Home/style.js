import styled from 'styled-components';

const HomeContainer = styled.main`
    padding: 1.25rem;

    .row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 0.8rem;
    }

    .card {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: 300px;
        height: 300px;
        border-radius: 0.5rem;
        background-color: #fff;
        padding: 1.25rem;
        box-shadow: 0 0 0.5rem #ccc;

        .card-header {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100px;
            border-radius: 0.5rem;
            background-color: #297a15;
            margin-bottom: 1.25rem;

            h1 {
                font-size: 1rem;
                font-weight: 700;
                color: #fff;
                text-align: center;
            }
        }

        .card-body {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100px;
            margin-bottom: 1.25rem;

            img {
                width: 100%;
                max-width: 100px;
                margin-bottom: 1.25rem;
            }

            h2 {
                font-size: 0.8rem;
                font-weight: 700;
                color: #297a15;
                margin-bottom: 0.5rem;
            }

            p {
                font-size: 0.6rem;
                font-weight: 700;
                color: #297a15;
                text-align: center;
            }

        }

        .card-footer {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100px;

            p {
                font-size: 0.6rem;
                font-weight: 700;
                color: #297a15;
                text-align: center;

                margin-bottom: 0.5rem;
            }

            button {
                width: 100%;
                height: 50%;
                border: none;
                outline: none;
                border-radius: 0.5rem;
                background-color: #297a15;
                color: #fff;
                font-size: 0.8rem;
                font-weight: 700;
                cursor: pointer;
            }
        }
    }

`
export default HomeContainer;

