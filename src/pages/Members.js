import * as React from 'react';
import StickyHeadTable from '../components/tables/MembersTable';  // Убедитесь, что путь правильный
import Sidebar from '../components/layout/Sidebar';  // Если у вас есть компонент Sidebar

const MembersPage = () => {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <main style={{ flexGrow: 1, padding: '20px' }}>
                <StickyHeadTable />
            </main>
        </div>
    );
};

export default MembersPage;
