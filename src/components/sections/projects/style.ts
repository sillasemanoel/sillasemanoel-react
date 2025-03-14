import styled from "styled-components";

export const ProjectStyle = styled.section`
  display: flex;
  background-color: #f9f9f9;
  padding: 120px 0;

  .container {
    width: 1000px;
    margin: 0 auto;
    padding: 0 32px;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 699px) {
    .container {
      align-items: center;
      text-align: center;
      max-width: 510px;
    }
  }

  .title {
    font-size: 17px;
    font-weight: 700;
    color: #615cfb;
    margin-bottom: 11px;
    text-transform: uppercase;
  }

  .description {
    color: #2d2e32;
    font-size: 25px;
    line-height: 1.4;
    margin-bottom: 2rem;
  }

  .grid {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;
  }

  .load-more {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }

  .load-more button {
    border: 0;
    background-color: transparent;
    font-size: 17px;
    font-weight: 600;
    color: #333;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s, border-color 0.3s;
  }

  .load-more button:hover {
    color: #615cfb;
  }
`;
