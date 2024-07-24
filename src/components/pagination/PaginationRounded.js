import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PaginationRounded = ({ count, page, onChange }) => {
    return (
        <Stack spacing={2} direction="row" justifyContent="flex-end"> {/* Изменяем выравнивание на правую сторону */}
            <Pagination
                count={count}
                page={page}
                onChange={onChange}
                shape="rounded"
                variant="outlined"
                color="primary"
            />
        </Stack>
    );
};

export default PaginationRounded;
