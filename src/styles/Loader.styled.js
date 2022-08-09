import styled from "styled-components";

export const LoadingPage = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .image {
    width: 75px;
    height: 75px;
    animation: blink 5s infinite;
  }

  @keyframes blink {
    0% {
      background: url("/icons/day/113.png") center/contain no-repeat;
    }
    5% {
      background: url("/icons/night/116.png") center/contain no-repeat;
    }
    10% {
      background: url("/icons/day/119.png") center/contain no-repeat;
    }
    15% {
      background: url("/icons/night/122.png") center/contain no-repeat;
    }
    20% {
      background: url("/icons/day/143.png") center/contain no-repeat;
    }
    25% {
      background: url("/icons/night/176.png") center/contain no-repeat;
    }
    30% {
      background: url("/icons/day/179.png") center/contain no-repeat;
    }
    35% {
      background: url("/icons/night/182.png") center/contain no-repeat;
    }
    40% {
      background: url("/icons/day/185.png") center/contain no-repeat;
    }
    45% {
      background: url("/icons/night/200.png") center/contain no-repeat;
    }
    50% {
      background: url("/icons/day/227.png") center/contain no-repeat;
    }
    55% {
      background: url("/icons/night/230.png") center/contain no-repeat;
    }
    60% {
      background: url("/icons/day/248.png") center/contain no-repeat;
    }
    65% {
      background: url("/icons/night/260.png") center/contain no-repeat;
    }
    70% {
      background: url("/icons/day/263.png") center/contain no-repeat;
    }
    75% {
      background: url("/icons/night/266.png") center/contain no-repeat;
    }
    80% {
      background: url("/icons/day/281.png") center/contain no-repeat;
    }
    85% {
      background: url("/icons/night/284.png") center/contain no-repeat;
    }
    90% {
      background: url("/icons/day/293.png") center/contain no-repeat;
    }
    95% {
      background: url("/icons/night/296.png") center/contain no-repeat;
    }
    100% {
      background: url("/icons/day/299.png") center/contain no-repeat;
    }
  }
`;
