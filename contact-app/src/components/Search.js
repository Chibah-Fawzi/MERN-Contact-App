import React from 'react';

const Search = () => {
    return (
        <div className="search">
            <div className="input">
                <input type='search' placeholder='Search contacts' />
            </div>
            <style jsx>{`

            .search{
                    display: flex;
                    place-items:center;
                    margin-left: 19vw;
                    margin-top: 10px; 
                    background: var(--secondary);
                    width: 75vw;
                    height: 30vh;
            }
                .input{
                    top: 10%
                    position:absolute;  
                    margin:auto;
                }
                input {
                    width: 60vw;
                    height: 10vh;
                    border-radius: 20px;
                    padding:30px;
                }


                `}
            </style>
        </div>
    );
}

export default Search;
