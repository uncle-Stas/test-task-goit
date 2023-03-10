import styled from 'styled-components';

import bgImage from 'images/bg-picture.png';
import logo from 'images/logo.png';
import line from 'images/line.png';
import ellipse from 'images/ellipse.png';

interface IProp {
  followStatus: boolean;
}

export const Card = styled.li`
  width: 380px;
  height: 460px;
  padding-top: 184px;
  text-align: center;
  background-image: url(${ellipse}), url(${line}), url(${logo}), url(${bgImage}),
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  background-position: top 176px center, top 214px left 0, top 20px left 20px, top 28px center,
    center;
  background-repeat: no-repeat;
  border-radius: 20px;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
`;

export const Avatar = styled.img`
  width: 64px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  border-radius: 50%;
  background-color: #5736a3;
`;

export const Text = styled.p`
  margin-bottom: 16px;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
`;

export const BtnFollow = styled.button<IProp>`
  width: 196px;
  margin-top: 10px;
  padding: 14px 0;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: none;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  cursor: pointer;
  transition: background-color linear 250ms;

  &:hover,
  &:focus {
    background-color: ${props => (props.followStatus ? '#40af87' : '#cdb3e9')};
  }

  background-color: ${props => (props.followStatus ? '#5CD3A8' : '#EBD8FF')};
`;
