import React from 'react';
import styled from 'styled-components';

export default function SearchBar(props) {
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
            value={props.searchVal}
            onChange={props.searchHandler}
          />
          {/* <StyledIcon className="fas fa-search" /> */}
        </StyledSearch>

        <div>
          <StyledIcon className="far fa-compass" />
          <StyledIcon className="far fa-heart" />
          <StyledIcon className="far fa-user" />
        </div>

      </StyledWrapperDiv>
    </StyledWrapperNav>
  );
}

const StyledWrapperNav = styled.nav`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
  // position: fixed;
  // top: 0;
  width: 100%;
  // z-index: 1;
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
  height: 77px;
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
  height: 28px;
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
  padding: 3px 10px 3px 26px;
  text-align: center;
`;

const StyledSearch = styled.div`
  display: infline-flex;
  position: relative;
  height: 28px;
  min-width: 125px;
  width: 215px;
`;

const StyledIcon = styled.i`
  font-size: 20px;
  padding-left: 20px;
  font-weight: 300;
`;
