import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 5px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 72px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 117px;
      height: 117px;
      border-radius: 50%;
    }

    div {
      margin-left: 17px;

      strong {
        font-size: 34px;
        color: #3d3d4d;
      }

      p {
        font-size: 17px;
        color: #737380;
        margin-top: 5px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 42px;

    li {
      & + li {
        margin-left: 72px;
      }

      strong {
        display: block;
        font-size: 34px;
        color: #3d3d4d;
      }

      span {
        display: block;
        margin-top: 5px;
        color: #6c6c80;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: flex;
    text-decoration: none;
    align-items: center;
    transition: transform 0.2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    div {
      margin: 0 17px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
