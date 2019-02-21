import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function SearchBar({
  searchVal,
  searchHandler,
  logOut,
  resetSearch,
}) {
  const userHandler = (event) => {
    event.preventDefault();
    logOut();
  };

  return (

    <StyledWrapperNav>
      <StyledWrapperDiv>

        <StyledA>
          <StyledInstaIcon className="fab fa-instagram" />
          <StyledLineDiv />
          <StyleInsta>Instagram</StyleInsta>
        </StyledA>

        <StyledSearch>
          <StyledInput
            type="text"
            placeholder=" Search"
            value={searchVal}
            onChange={searchHandler}
          />
          <StyledIcon onClick={resetSearch} className="far fa-times-circle" />
        </StyledSearch>

        <div>
          <StyledIcon className="far fa-compass" />
          <StyledIcon className="far fa-heart" />
          <StyledIcon className="far fa-user" />
          <Styledbtn onClick={userHandler} type="submit">Log out</Styledbtn>
        </div>

      </StyledWrapperDiv>
    </StyledWrapperNav>
  );
}

SearchBar.defaultProps = {
  searchVal: '',
};

SearchBar.propTypes = {
  searchVal: PropTypes.string,
  searchHandler: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
  resetSearch: PropTypes.func.isRequired,
};


const StyledWrapperNav = styled.nav`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
  width: 100%;
  transition: height 0.2s ease-in-out;
  height: 77px;
  display: flex;
`;

const StyledWrapperDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1010px;
  padding: 0 20px;
  width: 100%;
  transition: height 0.2s ease-in-out;
  margin: 0 auto;
`;

const StyledA = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

const StyledInstaIcon = styled.i`
  font-size: 30px;
  padding-left: 10px;
`;

const StyleInsta = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

const StyledLineDiv = styled.div`
  background-color: #262626;
  margin: 0 16px;
  width: 1px;
`;

const StyledInput = styled.input`
  color: #999;
  font-size: 14px;
  font-weight: 300;
  opacity: 1;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  padding: 0.3rem 0.5rem;
  text-align: center;
`;

const StyledSearch = styled.div`
  display: inline-flex;
  min-width: 125px;
`;

const StyledIcon = styled.i`
  font-size: 20px;
  padding-left: 20px;
  font-weight: 300;
  margin: auto 0;
  cursor: pointer;
`;

const Styledbtn = styled.button`
  padding: 0.3rem 0.5rem;
  margin-left: 0.5rem;
  background-color: #3897f0;
  border: 1px solid #3897f0;
  border-radius: 4px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
`;
