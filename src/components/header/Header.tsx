/** @jsxImportSource @emotion/react */
import { Typography } from '@material-tailwind/react';
import 'twin.macro';
import usePageTitle from '../../hooks/usePageTitle';

const Header = () => {
    const currentPage = usePageTitle();
    return (
        <Typography variant="h2" tw="text-blue-title font-condensed font-normal">
            {currentPage}
        </Typography>
    );
};

export default Header;
