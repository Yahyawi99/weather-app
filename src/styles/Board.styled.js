import styled from "styled-components";

export const Board = styled.div`
  width: 75%;
  height: 80vh;
  color: #fff;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  /* ************************************************** */
  /* image text */
  .image-txt {
    width: 65%;
    height: 100%;
    background: url("/images/cloudy/cloudy-weather-large.jpg") top center/ cover
      no-repeat;
    display: flex;
    align-items: flex-end;

    .degree {
      font-size: 8rem;
      line-height: 75px;
      padding: 0px 0px 50px 50px;
    }
    .info {
      padding: 0px 0px 50px 0px;
      .location {
        font-size: 3rem;
      }
      .time {
        font-weight: 300;
      }
    }
    .icon {
      padding: 0px 0px 50px 0px;
      img {
        max-width: 50px;
      }
      .img-description {
        font-weight: 300;
      }
    }
  }
  .details-back {
    width: 35%;
    height: 100%;
    position: absolute;
    right: 0;
    background: linear-gradient(rgb(40, 65, 62), rgb(40, 65, 62, 0.25));
  }

  /* ************************************************** */
  *::-webkit-scrollbar {
    width: 2px;
    background-color: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background: #ff7300;
    border-radius: 10px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  /* ************************************************** */
  /* details */
  .details {
    width: 35%;
    height: 100%;
    color: #fff;
    background: transparent;
    backdrop-filter: blur(25px);
    overflow-x: hidden;
    overflow-y: scroll;
    z-index: 10;

    /* search */
    .search {
      height: 70px;
      display: flex;
      justify-content: space-between;
      padding: 0px 0px 0px 35px;

      input {
        width: 65%;
        background-color: transparent;
        color: #fff;
        align-self: flex-end;
        border: none;
        border-bottom: 1px solid rgba(255, 255, 255, 0.5);
        font-size: 1rem;
        outline: none;
        padding: 0px 0px 15px 0px;

        &::placeholder {
          color: #fff;
          font-weight: 300;
          opacity: 0.5;
        }
      }

      button {
        width: 80px;
        background-color: #e2560d;
        border: none;
        cursor: pointer;
        transition: 0.25s;

        img {
          max-width: 30px;
        }
        &:hover {
          opacity: 0.75;
        }
      }
    }

    /* History */
    .history {
      max-height: 200px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      overflow-y: scroll;
      margin: 50px 0px 50px 0px;
      padding: 0px 0px 0px 35px;

      p {
        font-weight: 300;
        opacity: 0.5;
      }
    }

    /* weather details */
    .weather-details {
      border-top: 1px solid rgba(255, 255, 255, 0.5);
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);
      margin: 0px 50px 0px 35px;
      padding: 50px 0px 50px 0px;

      .title {
        font-size: 1.25rem;
        margin-bottom: 25px;
      }

      span {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 300;
        opacity: 0.5;
        margin-bottom: 15px;
      }
    }

    .next-day {
      border-bottom: none;
    }
  }
`;
