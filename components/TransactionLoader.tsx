import { css } from '@emotion/react';
import styled from '@emotion/styled'; // Import styled from Emotion

import { MoonLoader } from 'react-spinners'; // Assuming correct import

const style = {
    wrapper: `text-white h-96 w-72 flex flex-col justify-center items-center`,
    title: `font-semibold text-xl mb-12`,
};

const cssOverride = css`
  display: block;
  margin: 0 auto;
  border-color: white;
`;

const StyledWrapper = styled.div`
  ${() => cssOverride} /* Wrap cssOverride in a function to apply as styles */
`;

const TransactionLoader = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.title}>Transaction in progress...</div>
            <StyledWrapper>
                <MoonLoader color={'#fff'} loading={true} size={50} />
            </StyledWrapper>
        </div>
    );
};

export default TransactionLoader;