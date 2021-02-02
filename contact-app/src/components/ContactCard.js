import React from 'react'

const Card = () => (
    <div className="card">
        <div className="avatar">
        </div>
        <div className="infos">
            <div>Elli Yaffa </div>
            <div>+213 000-000-000</div>
        </div>

        <style jsx>{`
    .card {
        height: 15vh;
        width: 50vw;
        background: #FFFFFF;
        margin:auto;
        top: 50vh;
        position:absolute;
        margin-left: 25vw;
        border-radius: 20px;
        box-shadow : 10px 10px 5px 1px #e4ccf6;
        display: flex;
    }

    .avatar {
        height: 70px;
        width: 80px;
        border-radius: 50%;
        margin: 12px;
        background: #e4ccf6;
        background: url('https://memegenerator.net/img/images/72657110.jpg') no-repeat;
        background-position: center;
        background-size: cover;
        box-shadow: 0 0 2px 2px  #120202;
    }
    .infos {
        text-align: center; 
        display: flex;
        justify-content: space-around;
        align-items: center; 
        width: 100%;
        font-size: 26px;
        color: var(--text);
    }
    `}</style>
    </div>
)

export default Card
