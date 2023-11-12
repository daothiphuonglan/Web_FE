import React from 'react';
import Banner from './components/Banner';
import CarouSel from './components/CarouSel';
import DanhSachSanPham from '../product/DanhSachSanPham';



const HomePage = () => {
    return (
        <>
            <Banner/>
            <CarouSel/>
            <DanhSachSanPham/>
        </>
    );
};

export default HomePage;