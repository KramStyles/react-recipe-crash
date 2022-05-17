import styled from "styled-components";

const DetailWrapper = styled.div`
        display: flex;
        margin: 10rem auto;
        
        .active {
            background: linear-gradient(35deg, #505050, #303030);
            color: white;
        }
        li {
            font-size: 1.2rem;
            line-height: 2.5rem;
        }
        ul, h3 {
            margin: 2rem auto;
        }
    `

    const Button = styled.button`
        padding: 1rem 2rem;
        color: #313131;
        background-color: white;
        font-weight: 600;
        margin-right: 2rem;
        border: 2px solid black;
    `

    const Info = styled.div`
        margin: 5rem;
    `

export default function Recipe() {
    let details = JSON.parse(localStorage.getItem('current_info'));
    console.log(details, 'This is detail');



    return (
        <DetailWrapper>
            <div>
                <h3>{details.title}</h3>
                <img src={details.image} alt={details.title}/>
            </div>
            <Info>
                <Button>Instructions</Button>
                <Button>Ingredients</Button>
            </Info>
        </DetailWrapper>
    )
}