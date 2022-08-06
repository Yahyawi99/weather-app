import styled from "styled-components";

export const Board = styled.div`
  width: 80%;
  height: 85vh;
  position: absolute;
  display: flex;

  /* ************************************************** */
  /* image */
  .image {
    flex: 0.6;
    height: 100%;
    background: url("/images/cloudy/cloudy-weather-medium.jpg") center/cover
      no-repeat;
    color: #fff;
    display: flex;
    align-items: flex-end;
    gap: 25px;

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

  /* ************************************************** */
  *::-webkit-scrollbar {
    width: 2px;
    background-color: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background: #e2560d;
    border-radius: 10px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  /* ************************************************** */
  /* details */
  .details {
    flex: 0.4;
    background-color: transparent;
    color: #fff;
    backdrop-filter: blur(75px);
    filter: brightness(175%);
    overflow-x: hidden;
    overflow-y: scroll;
    padding: 0px 0px 0px 25px;

    /* search */
    .search {
      height: 80px;
      display: flex;
      justify-content: space-between;

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

        ::placeholder {
          color: #fff;
          font-weight: 300;
          opacity: 0.5;
        }
      }

      button {
        width: 90px;
        background-color: #e2560d;
        border: none;
        cursor: pointer;
        transition: 0.25s;

        img {
          max-width: 30px;
        }
        :hover {
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

      p {
        font-weight: 300;
        opacity: 0.5;
      }
    }

    /* weather details */
    .weather-details {
      border-top: 1px solid rgba(255, 255, 255, 0.5);
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);
      margin: 0px 50px 0px 0px;
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

/* 
cloudy : 

dark :#070607
brown : #5C1F0C
grey : #62483B
light-grey:#E7CFBF
ligh-brown : #9E2805
dark-orange : #C83803
orange : #E2560D

*/

/*
sunny:

blue: #1A5BA9
dark-blue : #152C44
light-blue: #4F8BB9
sky-blue: #669DC4
dark-brown : #4B3929
light-brown :#C6AC93

*/

/* 
rainy : 
black :#090F0E
dark-green : #28413E
light-green :#718583
grey: #4F6764
light-grey: #9EA7A6
wheat : #E0E3E3
*/
