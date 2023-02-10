import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const BackBtn = () => {
  const navigate = useNavigate();

  return (
    <BackBtnWrap className="no-style-btn" onClick={() => navigate(-1)}>
      <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6 9L2 5l4-4"
          stroke="#4661E6"
          strokeWidth="2"
          fill="none"
          fillRule="evenodd"
        />
      </svg>
      Go Back
    </BackBtnWrap>
  );
};

export default BackBtn;

const BackBtnWrap = styled.button`
  svg {
    margin-right: 1rem;
  }
`;
