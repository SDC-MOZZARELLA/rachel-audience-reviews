import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

export const ARGlobalStyle = createGlobalStyle`
main {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  background-color: white;
  margin-left: auto;
  margin-rgith: auto;
}
div #areviews {
  line-height: 1.5;
  color: #212529;
  text-align: left;
  font-family: Arial, Helvetica, sans-serif;
  box-sizing: border-box;
  width: 800px;
  margin: 10px auto;
  ::focus {
    outline: 0px;
  }
}

`;

export const AppWrapper = styled.div`
  display: block;
  flex-wrap: wrap;
  justify-content: flex-end;
  max-width: 800px;
  padding: 0px;
`;

export const TitleBackground = styled.h1`
  display:inline-flex;
  background: #FA320A;
  width: 100%;
  height: 20px;
  align-items: center;
  margin-bottom: 0px;
`;

export const Title = styled.div`
  display: flex;
  white-space: nowrap;
  font-size: 24px;
  font-family: Helvetica, sans-serif;
  font-weight: bold;
  width: 100%;
  margin-bottom: 0px;
  margin-top: 0px;
  margin-left: 25px;
  margin-right: 60%;
  padding-left: 10px;
  padding-right: 20px;
  background-color: white;
  color: #2A2C32;
`;

export const ReviewWrapper = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: column;
  margin-top: 0px;
  padding: 0px;
`;

export const ReviewList = styled.div`
  display: inline;
  column-count: 2;
  column-fill: balance;
  column-gap: 50px;
  position: relative;
  width: 100%;
  margin-top: 20px;
`;

export const MainButtonContainer = styled.span`
  display: block;
  margin: 15px;
  text-align: right;
  width: 100%;
  text-decoration: none;
  outline: none;
`;

export const MainButton = styled.button`
  display: inline;
  border: none;
  color: dodgerblue;
  text-decoration: none;
  font-family: Arial,sans-serif;
  font-size: 14px;

  ::hover {
    text-decoration: none;
    cursor: pointer;
  }
  ::focus {
    outline: 0px;
  }
`;


export const SReviewContainer = styled.li`
  display: inline-block;
  break-inside: avoid-column;
  page-break-inside: avoid;
  white-space: nowrap;
  max-width: 100%;
  min-width: 100%;
  position: relative;
  margin-bottom: 20px;
  border-radius: 3px;
  height: 100%;
  box-sizing: border-box;
`;

export const SingleReview = styled.div`
  white-space: normal;
  display:inline-flex;
  max-width: 100%;
  min-width: 100%;
  flex-flow: column nowrap;
  margin-top: 1em;
  padding: 12px;
  padding-bottom: 2px;
  padding-top: 0px;
  border-radius: 1px;
  border-style: solid;
  border-width: 2px;
  position: relative;
  box-sizing:border-box;
  &::after {
    border-color: transparent black transparent transparent;
    border-width: 0 31px 31px 0;
    top: 33px;
    left: 39px;
    z-index: 0;
    border-style: solid;
    content: '';
    display: block;
    position: relative;
    width: 0;
  }
`;

export const RateAndDate = styled.span`

`;

export const SRStars = styled.div`
  display: inline;
  flex-flow: wrap;
  margin: 0.5rem;
  flex: 1 1 auto;
  float: left;
  padding-top: 1.0rem;
`;

export const Filled = styled.div`
  display: inline;
  color: orange;
`;

export const Unfilled = styled.div`
  display: inline;
  color: black;
`;

export const SRDate = styled.div`
  display: inline-flex;
  flex-flow: wrap;
  margin: 0.5rem;
  font-family: Helvetica, sans-serif;
  flex: 1 1 auto;
  float: right;
  padding-top: 1.0rem;
  color: #757a84;
  font-size: 12px;
`;

export const TextAndButtonContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  margin: 5px;
  text-decoration: none;
  ::focus {
    outline: 0px;
  }
`;

export const SRText = styled.div`
  display: flex;
  flex-flow: column wrap;
  font-family: Roboto, sans-serif;
  font-size: 12px;
  color: #2A2C32;
  padding-top: 10px;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 1px;
`;

export const ReviewQuote = styled.div`
  display: inline-block;
  margin-bottom: 5px;
  white-space: nowrap;
  page-break-inside: avoid;
  break-inside: avoid-column;
  position: relative;
  z-index: -1;
  top: -15px;
`;

export const IconAndName = styled.div`
  display: grid;
  justify-items: right;
  background-color: white;
  grid-template-columns: 1fr auto;
  color: #000000;
  font-size: 16;
  z-index: -1;
  position: absolute;
  left: 95px;
  bottom: -40px;
`;

export const Img = styled.img`
  display: block;
  opacity: 0.7;
  margin-right: 15px;
  display: block
  width:50px;
  height: 50px;
  border-radius: 25px;
`;

export const SRUser = styled.div`
  display: grid;
  font-size: 22px;
  width: 250x;
  font-family: 'Neusa Next Pro Compact',sans-serif;
  font-weight: normal;
`;

export const Badge = styled.div`
  display: block;
  font-family: 'Franklin Gothic FS Book','Helvetica Neue',Helvetica,Arial,sans-serif;
  font-size: 12px;
  width: 110px;
  padding: 2px;
  margin: 1px;
  border-style: solid;
  border-width: 1px;
  border-radius: 3px;
  color: orange;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  outline: none;
`
export const Button = styled.button`
  display: flex;
  border: none;
  color: black;
  font-weight: 600;
  text-decoration: none;
  font-family: sans-serif;
  font-size: 14px;
  margin-top: 2px;
  outline: none;
  &:hover {
    text-decoration: none;
    cursor: pointer;
  }
  ::focus {
    outline: 0px;
  }
`;

export const Speech = styled.div`
  &::before {
    border-color: transparent white transparent transparent;
    border-width: 0 27px 27px 0;
    top: -3px;
    left: 55px;
    z-index: 0;
    border-style: solid;
    content: '';
    display: block;
    position: relative;
    width: 0;
`;