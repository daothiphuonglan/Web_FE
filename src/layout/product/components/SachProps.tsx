import React from 'react';
import SachModel from '../../../model/SachModel';
import {useState, useEffect} from 'react';
import HinHAnhModel from '../../../model/HinhAnhModel';
import { layToanBoAnhCuaMotSach } from "../../../api/HinhAnhApi";
import {Link} from 'react-router-dom'
import dinhDangSo from '../../utils/DinhDanhSo';
interface SachPropsInterface {
    sach:SachModel;
} 
const SachProps: React.FC<SachPropsInterface> = (props) => {

    const maSach: number = props.sach.maSach;

    const [danhSachAnh, setDanhSachAnh] = useState<HinHAnhModel[]>([]);
    const [dangTaiDuLieu, setDangTaiDuLieu] = useState(true);
    const [baoLoi, setBaoLoi] = useState(null);

    useEffect(() => {
        layToanBoAnhCuaMotSach(maSach).then(
            hinhAnhData =>{
                setDanhSachAnh(hinhAnhData);
                setDangTaiDuLieu(false);
            }
        ).catch(
            error => {
                setDangTaiDuLieu(false);
                setBaoLoi(error.message);
            }
        );
    }, [] // Chi goi mot lan
    )

  

    let duLieuAnh:string="";
    if(danhSachAnh[0] && danhSachAnh[0].duLieuAnh){
        duLieuAnh=danhSachAnh[0].duLieuAnh;
    }
    return (
        <div className="col-md-3 mt-2">
            <div className="card">
                <Link to={`/sach/${props.sach.maSach}`}>
                
                <img
                    src={""}
                    className="card-img-top"
                    
                    style={{ height: '200px' }}
                />
                
                </Link>
                
                <div className="card-body">

                    <Link style={{textDecoration:'none'}} to={`/sach/${props.sach.maSach}`}><h5 className="card-title">{props.sach.tenSach}</h5></Link>
                    
                    <p className="card-text">{props.sach.moTa}</p>
                    <div className="price">
                        <span className="original-price">

                            <del>{dinhDangSo(props.sach.giaNiemYet)} d</del>
                        </span>
                        <span className="discounted-price m-4">
                            <strong>{dinhDangSo(props.sach.giaBan)} d</strong>
                        </span>
                    </div>
                    <div className="row mt-2" role="group">
                        <div className="col-6">
                            <a href="#" className="btn btn-secondary btn-block">
                                <i className="fas fa-heart"></i>
                            </a>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-danger btn-block">
                                <i className="fas fa-shopping-cart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SachProps;